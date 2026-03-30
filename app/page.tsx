"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const startPos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({ type: 'success', message: result.message });
        e.currentTarget.reset();
      } else {
        setFormStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Odottamaton virhe. Yritä myöhemmin uudelleen.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      const deltaX = e.clientX - startPos.current.x;
      const deltaY = e.clientY - startPos.current.y;
      setOffsetX(Math.max(Math.min(deltaX * 0.05, 30), -30));
      setOffsetY(Math.max(Math.min(deltaY * 0.05, 30), -30));
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
      // Smooth return to center
      const interval = setInterval(() => {
        setOffsetX((prev) => {
          if (Math.abs(prev) < 0.5) return 0;
          return prev * 0.9;
        });
        setOffsetY((prev) => {
          if (Math.abs(prev) < 0.5) {
            clearInterval(interval);
            return 0;
          }
          return prev * 0.9;
        });
      }, 16);
    };

    if (isMouseDown) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMouseDown]);

  return (
    <main 
      className="relative min-h-screen w-full overflow-hidden bg-black cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
    >
      {/* KERROS 1: Kiinteä tausta ja sumu parallax-efektillä */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="portfolio-background"
          style={{
            transform: `translateX(${offsetX}px) translateY(${offsetY}px) rotateX(${offsetY * 0.05}deg) rotateY(${offsetX * -0.05}deg)`,
          }}
        >
          {/* OPTIMOITU TAUSTAKUVA */}
          <Image 
            src="/viidakko-tausta.webp" 
            alt="Viidakko tausta" 
            fill 
            priority 
            quality={75}
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="portfolio-fog" />
      </div>

      {/* KERROS 2: Rullaava sisältö */}
      <div className="relative z-10 w-full overflow-y-auto h-screen">
        
        {/* Hero-osio (Kelluu taustan päällä) */}
        <section className="w-full flex flex-col items-center justify-center min-h-[90vh] text-white text-center px-4 relative">
          <div className="mb-5 flex flex-col items-center drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <Image src="/bete.webp" alt="BittiViidakon logo" width={700} height={250} priority className="w-full max-w-[700px] h-auto" />
          </div>
          <p className="text-xl md:text-2xl font-bold max-w-[800px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Kompassinne digitaalisessa maailmassa.
          </p>
        </section>

        {/* Alaosa (Valkoinen tausta rullaa ylös) */}
        <div className="w-full bg-[#f9f9f9] text-[#333333] py-16 rounded-t-[40px] shadow-[0_-10px_30px_rgba(0,0,0,0.3)] relative">
          
          {/* Palvelut - Vain Täsmäpalvelut */}
          <section id="palvelut" className="max-w-[800px] mx-auto px-8 mb-20">
            <Link href="/palvelut#web" className="group block bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-green-100 transition-all hover:-translate-y-2 hover:shadow-neon hover:border-green-400 text-center">
              <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">Täsmäpalvelut Kiinteällä Hinnalla</h3>
              <p className="text-gray-600 text-lg">
                Selkeät ja nopeat täsmäpalvelut web-projekteihin. WordPress-optimoinnit, siirrot, korjaukset ja pienkehitys aina läpinäkyvään ja kiinteään hintaan. Ei yllätyksiä laskussa.
              </p>
            </Link>
          </section>

          {/* Ota yhteyttä */}
          <section id="ota-yhteytta" className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-[40px] px-8">
            <div className="flex-1 w-full flex flex-col items-center md:items-start">
              <Image src="/kontakti.webp" alt="Käyntikortti" width={500} height={300} className="rounded-[20px] shadow-lg mb-6" />
            </div>

            <div className="bg-[rgb(224,242,190)] p-8 shadow-xl flex-1 rounded-[20px] w-full">
              <h4 className="text-2xl font-bold mb-2">Lähetä viesti</h4>
              <p className="mb-6 text-gray-700">Kysy mitä vain tai jätä yhteydenottopyyntö!</p>
              <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Nimi*" 
                  required 
                  className="p-3 border border-white/50 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-400" 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Sähköposti*" 
                  required 
                  className="p-3 border border-white/50 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-400" 
                />
                <textarea 
                  rows={4} 
                  name="message"
                  placeholder="Viesti*" 
                  required 
                  className="p-3 border border-white/50 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-400">
                </textarea>
                
                {formStatus.message && (
                  <div className={`p-3 rounded-lg text-sm font-medium ${
                    formStatus.type === 'success' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {formStatus.message}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="animated-jungle-btn text-white font-bold py-3 px-6 rounded-xl mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Lähetetään...' : 'Lähetä viesti'}
                </button>
              </form>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}