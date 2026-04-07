import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

// Tuodaan alkuperäinen fontti
const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

// Alkuperäiset meta-tiedot
export const metadata: Metadata = {
  title: "BittiViidakon - Kompassinne digitaalisessa maailmassa.",
  description: "Bittiviidakon IT-palvelut auttavat sinua, digitaalisen maailman rohkeaa seikkailijaa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body className={`${sourceSans.className} bg-white text-gray-900 flex flex-col min-h-screen`}>
        
        {/* Navigaatio, joka näkyy kaikilla sivuilla */}
        <Header />

        {/* Varsinainen sivun sisältö renderöidään tähän */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Footer, joka korvaa vanhan footer.php:n ja toistuu jokaisella sivulla */}
        <footer className="relative z-50 bg-gray-50 border-t border-gray-200 py-8 text-center mt-auto">
          <p className="text-gray-600">
            © 2026 BittiViidakon {/* */}
            <span className="mx-2">|</span>
            <a href="/tietosuoja" title="Lue tietosuojaseloste" className="hover:text-green-600 transition-colors">
              Tietosuojaseloste
            </a> {/* */}
          </p>
        </footer>

      </body>
    </html>
  );
}