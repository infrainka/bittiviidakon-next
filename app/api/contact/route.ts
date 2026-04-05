import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiter (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 });
    return true;
  }

  if (limit.count >= 5) {
    return false;
  }

  limit.count++;
  return true;
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Liian monta yritystä. Yritä myöhemmin.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message, package: selectedPackage, qualifier } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Täytä kaikki pakolliset kentät.' },
        { status: 400 }
      );
    }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Virheellinen syöte.' },
        { status: 400 }
      );
    }

    const sanitizedName = name.trim().substring(0, 100);
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedMessage = message.trim().substring(0, 5000);
    const sanitizedPackage = selectedPackage ? String(selectedPackage).trim().substring(0, 100) : null;
    const sanitizedQualifier = qualifier ? String(qualifier).trim().substring(0, 100) : null;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { success: false, message: 'Virheellinen sähköpostiosoite.' },
        { status: 400 }
      );
    }

    if (sanitizedEmail.includes('\n') || sanitizedEmail.includes('\r')) {
      return NextResponse.json(
        { success: false, message: 'Virhe sähköpostiosoitteessa.' },
        { status: 400 }
      );
    }

    const isPackageRequest = !!sanitizedPackage;
    const subject = isPackageRequest
      ? `Pakettipyyntö (${escapeHtml(sanitizedPackage!)}): ${escapeHtml(sanitizedName)}`
      : `Yhteydenotto BittiViidakon.fi-sivustolta: ${escapeHtml(sanitizedName)}`;

    const packageDetails = isPackageRequest
      ? `
        <p><strong>Paketti:</strong> ${escapeHtml(sanitizedPackage!)}</p>
        ${sanitizedQualifier ? `<p><strong>Tyyppi:</strong> ${escapeHtml(sanitizedQualifier)}</p>` : ''}
      `
      : '';

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_RECIPIENT,
      subject,
      html: `
        <p>Sait uuden viestin Bittiviidakon sivustolta.</p>
        <p><strong>Nimi:</strong> ${escapeHtml(sanitizedName)}</p>
        <p><strong>Sähköposti:</strong> ${escapeHtml(sanitizedEmail)}</p>
        ${packageDetails}
        <p><strong>Viesti:</strong></p>
        <p>${escapeHtml(sanitizedMessage).replace(/\n/g, '<br>')}</p>
      `,
      replyTo: sanitizedEmail,
    });

    await transporter.sendMail({
      from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM}>`,
      to: sanitizedEmail,
      subject: 'Kiitos yhteydenotostasi!',
      html: `
        <p>Hei ${escapeHtml(sanitizedName)},</p>
        <p>Kiitos viestistäsi! Olen vastaanottanut sen ja palaan asiaan mahdollisimman pian.</p>
        <p>Ystävällisin terveisin,<br>BittiViidakon Inka</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Viestisi on lähetetty onnistuneesti!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, message: 'Viestin lähetyksessä tapahtui virhe. Yritä myöhemmin uudelleen.' },
      { status: 500 }
    );
  }
}