import Link from 'next/link';

export default function Palvelut() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Digitaalinen kumppanisi bittien viidakossa</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Keskitymme nopeisiin, luotettaviin ja laadukkaisiin verkkokehityksen täsmäpalveluihin. Kaikki työt tehdään selkeällä hinnastolla ilman yllätyksiä.
      </p>

      {/* Takuu-banneri (Staging / Turvallisuus) */}
      <div className="max-w-3xl mx-auto bg-green-50 border border-green-200 rounded-xl p-6 mb-16 text-center shadow-sm">
        <h3 className="text-xl font-bold text-green-800 mb-2">Turvalliset päivitykset ja laatutakuu</h3>
        <p className="text-green-700">
          Käytämme muutosten todentamiseen erillistä testiympäristöä (staging) ennen julkaisua. Vaikka laajemmat siirrot saattavat vaatia lyhyen huoltokatkon, <strong>kävijäsi eivät koskaan näe rikkinäistä tai keskeneräistä sivustoa.</strong>
        </p>
      </div>

      <section id="web" className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-green-100 text-green-700 rounded-lg">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          </div>
          <h2 className="text-3xl font-bold">Täsmäpalvelut Kiinteällä Hinnalla</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Kortti 1: Pienet sivustot */}
          <div className="border border-green-50 hover:border-green-400 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-2">Pienet sivustot</h3>
            <p className="text-sm text-green-600 font-semibold mb-4">Enintään 7 sivua</p>
            <div className="text-3xl font-black text-gray-900 mb-4">150 €<span className="text-sm font-normal text-gray-500"> + alv</span></div>
            <p className="text-gray-600 mb-4 flex-grow">Täydellinen paketti kevyiden sivustojen ylläpitoon ja korjauksiin.</p>
            <ul className="space-y-2 mb-8 text-sm text-gray-700">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Vianetsintä ja nopeat korjaukset</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Sivuston siirto (Migration)</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Käännökset ja lokalisointi</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> IP/DNS-asetukset ja varmuuskopiot</li>
            </ul>
            {/* Vihreä painike neon-varjolla */}
            <Link href="/#ota-yhteytta" className="mt-auto block text-center bg-green-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-green-600 transition-colors shadow-[0_0_15px_rgba(76,175,80,0.4)]">
              Valitse paketti
            </Link>
          </div>

          {/* Kortti 2: Laajemmat sivustot */}
          {/* Poistettu korostus (border-green-400 ja shadow-lg) -> palautettu vakioasu */}
          <div className="border border-green-50 hover:border-green-400 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col h-full">
            {/* "Suosituin" -nauha poistettu */}
            <h3 className="text-2xl font-bold mb-2">Laajat sivustot</h3>
            <p className="text-sm text-green-600 font-semibold mb-4">8-15 sivua</p>
            <div className="text-3xl font-black text-gray-900 mb-4">200 €<span className="text-sm font-normal text-gray-500"> + alv</span></div>
            <p className="text-gray-600 mb-4 flex-grow">Laajempien kokonaisuuksien turvallinen hallinta ja siirrot.</p>
            <ul className="space-y-2 mb-8 text-sm text-gray-700">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Raskaamman sivuston siirto</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Laajat käännöstyöt</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Automaattisten varmuuskopioiden asennus</li>
            </ul>
            {/* Vihreä painike neon-varjolla */}
            <Link href="/#ota-yhteytta" className="mt-auto block text-center bg-green-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-green-600 transition-colors shadow-[0_0_15px_rgba(76,175,80,0.4)]">
              Valitse paketti
            </Link>
          </div>

          {/* Kortti 3: Kompleksit työt */}
          <div className="border border-green-50 hover:border-green-400 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-2">Vaativat työt</h3>
            <p className="text-sm text-gray-500 font-semibold mb-4">Erikoisratkaisut</p>
            <div className="text-3xl font-black text-gray-900 mb-4">Tarjous<span className="text-sm font-normal text-gray-500"></span></div>
            <p className="text-gray-600 mb-4 flex-grow">Vaativat kooditason muutokset, räätälöidyt ratkaisut tai syvät vianetsinnät.</p>
            <ul className="space-y-2 mb-8 text-sm text-gray-700">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Haastavat arkkitehtuurimuutokset</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Syvällinen vianmääritys ja diagnostiikka</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Laajat suorituskykyongelmat</li>
            </ul>
            {/* Vihreä painike neon-varjolla */}
            <Link href="/#ota-yhteytta" className="mt-auto block text-center bg-green-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-green-600 transition-colors shadow-[0_0_15px_rgba(76,175,80,0.4)]">
              Pyydä arvio
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}