import React from "react";
import Image from "next/image";

export default function Referenssit() {
  return (
    <section className="w-full max-w-7xl mx-auto my-24 px-4">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a4314] to-[#2e6d23] tracking-tight mb-4">
          Toteutettuja ratkaisuja
        </h2>
        <p className="text-gray-600 font-medium">
          Esimerkkejä siitä, miten taklaan tekniset esteet ja rakennan toimivaa.
        </p>
      </div>

      <div className="relative w-full bg-[#f9f9f9] rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-10 shadow-[0_0_60px_rgba(57,255,20,0.1)] border border-white">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">

          <div className="bg-white rounded-3xl p-8 flex flex-col h-full min-h-[450px] border-2 border-gray-100 hover:border-green-400 hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all duration-300 group">
            <div className="border-2 border-gray-50 rounded-[2rem] h-64 w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-8 overflow-hidden relative group-hover:border-green-200 transition-colors">
              <span className="text-gray-400 text-sm font-bold uppercase tracking-wider">Kuva tulossa</span>
              <Image src="/serenus-kuva.png" alt="Maarit Rönkkö" fill className="object-cover" />
            </div>
            <div className="flex-grow"></div>
            <div className="text-center mt-auto pb-2">
              <p className="font-black italic text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#1a4314] to-[#2e6d23] tracking-tight leading-tight">
                Serenus työelämäpalvelut,<br />Maarit Rönkkö
              </p>
              <p className="text-gray-400 text-sm font-medium mt-2">
                Verkkosivuston kehitys ja suunnittelu
              </p>
              <div className="mb-8 relative">
                <span className="text-[#39FF14] text-5xl font-black absolute -top-4 -left-2 opacity-30 group-hover:opacity-100 transition-opacity">"</span>
                <p className="italic font-semibold text-lg text-gray-700 relative z-10 pt-4">
                  Yhteistyössä tärkeintä on ollut tekijän vahva tekninen perusosaaminen ja Elementorin sujuva hallinta. Arvostan erityisesti sitä, että asiat toteutetaan juuri niin kuin toivon, mutta saan samalla aktiivisesti uusia ideoita siihen, miten asiat voisi tehdä vieläkin paremmin.
                </p>
              </div>
            </div>
          </div>


          <div className="bg-white rounded-3xl p-8 flex flex-col h-full min-h-[450px] border-2 border-gray-100 hover:border-green-400 hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all duration-300 group">
            <div className="border-2 border-gray-50 rounded-[2rem] h-64 w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-8 overflow-hidden relative group-hover:border-green-200 transition-colors">
              <span className="text-gray-400 text-sm font-bold uppercase tracking-wider">Referenssikuva</span>
              <Image src="/teijo.webp" alt="Teijo Haapakoski" fill className="object-cover" />
            </div>
            <div className="flex-grow"></div>
            <div className="text-center mt-auto pb-2">
              <p className="font-black italic text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#1a4314] to-[#2e6d23] tracking-tight leading-tight">
                Erä- ja luontopalvelut HyvänTähen,<br />Teijo Haapakoski
              </p>
              <p className="text-gray-400 text-sm font-medium mt-2">
                Verkkosivuston uudistus ja ylläpito
              </p>
                          <div className="mb-8 relative">
              <span className="text-[#39FF14] text-5xl font-black absolute -top-4 -left-2 opacity-30 group-hover:opacity-100 transition-opacity">"</span>
              <p className="italic font-semibold text-lg text-gray-700 relative z-10 pt-4">
                "Yhteistyössä Bittiviidakon kanssa arvostan erityisesti sujuvaa sivujen päivittämistä ja onnistunutta mobiilioptimointia. Inkan nopea apu hankalissa ongelmissa jopa normaalin työajan ulkopuolella on ollut minulle korvaamatonta. Hän on yritykselleni yhtä tärkeä tekijä kuin kirjanpitäjä." 
              </p>
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}