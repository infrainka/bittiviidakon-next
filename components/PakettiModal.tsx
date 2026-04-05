"use client";

import { useState, useEffect } from "react";

type Package = "Pienet sivustot (150 €)" | "Laajat sivustot (200 €)" | "Vaativat työt (tarjous)";

const QUALIFIERS: Record<Package, string[]> = {
  "Pienet sivustot (150 €)": [
    "Vianetsintä & korjaus (max 3h)",
    "Sivuston siirto (alle 7 sivua)",
    "Tyyli/sisältöpäivitys (1-3 sivua)",
    "Käännökset ja lokalisointi",
    "IP / DNS / Varmuuskopiot",
    "Muu pieni työ",
  ],
  "Laajat sivustot (200 €)": [
    "Vianetsintä & korjaus (max 4h)",
    "Raskaampi siirto (8-15 sivua)",
    "Tyyli/sisältöpäivitys (4-10 sivua)",
    "Käännökset ja lokalisointi",
    "Automaattiset varmuuskopiot",
    "Muu työ",
  ],
  "Vaativat työt (tarjous)": [
    "Arkkitehtuuri (esim. alustan muutos Wix/Squarespace -> WordPress/Next.js)",
    "Suorituskyky (Core Web Vitals optimointi 'vihreälle')",
    "Räätälöity koodi (uusi toiminnallisuus ilman valmisosia)",
    "Muu vaativa työ",
  ],
};

interface PakettiModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackage: Package | null;
}

type Step = 1 | 2 | 3;

export default function PakettiModal({ isOpen, onClose, preselectedPackage }: PakettiModalProps) {
  const [step, setStep] = useState<Step>(preselectedPackage ? 2 : 1);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(preselectedPackage);
  const [selectedQualifier, setSelectedQualifier] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  // Sync preselected package when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedPackage(preselectedPackage);
      setStep(preselectedPackage ? 2 : 1);
      setSelectedQualifier(null);
      setName("");
      setEmail("");
      setMessage("");
      setStatus({ type: null, message: "" });
    }
  }, [isOpen, preselectedPackage]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const packages: Package[] = [
    "Pienet sivustot (150 €)",
    "Laajat sivustot (200 €)",
    "Vaativat työt (tarjous)",
  ];

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: "error", message: "Täytä kaikki pakolliset kentät." });
      return;
    }
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          package: selectedPackage,
          qualifier: selectedQualifier,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus({ type: "success", message: result.message });
      } else {
        setStatus({ type: "error", message: result.message });
      }
    } catch {
      setStatus({ type: "error", message: "Odottamaton virhe. Yritä myöhemmin uudelleen." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepLabel = ["Paketti", "Tyyppi", "Yhteystiedot"];

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[#f9f9f9] rounded-3xl shadow-[0_0_60px_rgba(57,255,20,0.15)] overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-[#1a4314] to-[#2e6d23] px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="text-white font-black text-xl tracking-tight">Valitse palvelu</h2>
            <p className="text-green-300 text-sm mt-0.5">Täsmäpalvelut kiinteällä hinnalla</p>
          </div>
          <button
            onClick={onClose}
            className="text-green-300 hover:text-white transition-colors p-1"
            aria-label="Sulje"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Step indicators */}
        <div className="flex items-center gap-2 px-8 py-4 bg-white border-b border-gray-100">
          {stepLabel.map((label, i) => {
            const stepNum = (i + 1) as Step;
            const active = step === stepNum;
            const done = step > stepNum;
            return (
              <div key={label} className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  done ? "bg-green-500 text-white" :
                  active ? "bg-[#39FF14] text-black shadow-[0_0_8px_rgba(57,255,20,0.6)]" :
                  "bg-gray-200 text-gray-400"
                }`}>
                  {done ? "✓" : stepNum}
                </div>
                <span className={`text-xs font-semibold ${active ? "text-gray-900" : "text-gray-400"}`}>{label}</span>
                {i < 2 && <div className="w-6 h-px bg-gray-200 mx-1" />}
              </div>
            );
          })}
        </div>

        <div className="px-8 py-6 min-h-[280px]">

          {step === 1 && (
            <div>
              <p className="text-gray-600 text-sm mb-4">Mikä paketti sopii tarpeisiisi?</p>
              <div className="flex flex-col gap-3">
                {packages.map((pkg) => (
                  <button
                    key={pkg}
                    onClick={() => { setSelectedPackage(pkg); setStep(2); }}
                    className="text-left px-5 py-4 rounded-xl border-2 border-gray-100 bg-white hover:border-green-400 hover:shadow-[0_0_12px_rgba(57,255,20,0.2)] transition-all font-semibold text-gray-800 hover:text-green-800"
                  >
                    {pkg}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="text-gray-500 text-xs mb-1 font-semibold uppercase tracking-wider">{selectedPackage}</p>
              <p className="text-gray-700 text-sm mb-4">Minkä tyyppistä palvelua tarvitset?</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedPackage && QUALIFIERS[selectedPackage].map((q) => (
                  <button
                    key={q}
                    onClick={() => setSelectedQualifier(selectedQualifier === q ? null : q)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${
                      selectedQualifier === q
                        ? "bg-green-500 border-green-500 text-white shadow-[0_0_10px_rgba(57,255,20,0.3)]"
                        : "bg-white border-gray-200 text-gray-700 hover:border-green-300"
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:border-gray-300 transition-all text-sm"
                >
                  ← Takaisin
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-2 px-6 py-3 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 transition-all text-sm shadow-[0_0_12px_rgba(76,175,80,0.3)]"
                >
                  Jatka →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              {status.type !== "success" ? (
                <>
                  <div className="text-xs text-gray-400 mb-4 flex gap-2">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">{selectedPackage}</span>
                    {selectedQualifier && <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{selectedQualifier}</span>}
                  </div>
                  <div className="flex flex-col gap-3">
                    <input
                      type="text"
                      placeholder="Nimi *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="p-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Sähköposti *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="p-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                    />
                    <textarea
                      rows={3}
                      placeholder="Kerro lyhyesti tilanteestasi *"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="p-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-400 text-sm resize-none"
                    />
                    {status.type === "error" && (
                      <p className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">{status.message}</p>
                    )}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:border-gray-300 transition-all text-sm"
                    >
                      ← Takaisin
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="animated-jungle-btn flex-2 px-6 py-3 rounded-xl text-white font-bold transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Lähetetään..." : "Lähetä pyyntö"}
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(57,255,20,0.3)]">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">Lähetetty!</h3>
                  <p className="text-gray-600 text-sm">{status.message}</p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-6 py-2 rounded-xl bg-green-500 text-white font-bold text-sm hover:bg-green-600 transition-all"
                  >
                    Sulje
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
