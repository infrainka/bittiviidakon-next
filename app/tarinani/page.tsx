import Image from 'next/image';
import Link from 'next/link';

export default function Tarinani() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section (Vastaa vanhaa .story-hero tyyliä) */}
      <section className="bg-[rgb(224,242,190)] py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8">
            <span className="bg-gradient-to-r from-green-900 via-green-600 to-green-400 bg-clip-text text-transparent text-4xl md:text-6xl font-black tracking-tight">
              Matkani Bittiviidakkoon
            </span>
          </h1>
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform hover:-translate-y-2 duration-300">
            <Image 
              src="/mina.jpg" 
              alt="Inka Parviainen" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 256px"
              priority
            />
          </div>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto">
            Olen Inka Parviainen, BittiViidakon perustaja. Missioni on tehdä teknologiasta ymmärrettävää, kaunista ja kestävää. Tarinani alkoi oivalluksesta: tekninen osaaminen ja luova ongelmanratkaisu ovat erinomainen yhdistelmä. Halusin luoda palvelun, joka muuttaa teknisen kaaoksen toimivaksi ja tyylikkääksi kokonaisuudeksi, jotta sinä voit keskittyä olennaiseen.
          </p>
        </div>
      </section>

      {/* Tarina & Taidot */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Miten minusta tuli Bittiviidakon Jane?</h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mb-16">
          <p>
            Kaikki alkoi, kun innostuin koodaamisesta ja aloin kiinnittää huomiota arkipäivän teknisiin ongelmiin. Nimitys &quot;Bittiviidakon Jane&quot; syntyi koodaamisen ja käytännön vianmäärityksen lopputuloksena. Tämä matka vei minut koodaus-bootcampille ja hackathonille, jotka antoivat alkusysäyksen. Sijoitettuani kunnon laitteisiin aloin tehdä itsenäisiä projekteja, ja 7.8.2024 perustin Bittiviidakon IT-palvelut voidakseni tarjota osaamistani laajemmalle joukolle.
          </p>
          <p>
            Yhdistän palveluissani teknisen taidon ja visuaalisen silmän. En ainoastaan saa teknologiaa toimimaan, vaan pidän tärkeänä myös esteettistä ja käyttäjäystävällistä lopputulosta. Tämä on erityisen tärkeää asiakkailleni, joille brändin visuaalinen ilme on kaikki kaikessa.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
            <h3 className="text-xl font-bold text-green-800 mb-2">Verkkojen asiantuntija (Cisco CCNA)</h3>
            <p className="text-green-900 m-0">
              Ohjelmoinnin lisäksi olen syventänyt osaamistani tietoverkkoihin ja olen virallisesti <strong>Cisco CCNA -sertifioitu</strong>. Erikoistun parhaillaan vahvasti verkkopuolen ratkaisuihin ja IT-infrastruktuuriin. Tämä harvinainen yhdistelmä koodausosaamista ja verkkotopologioiden ymmärrystä antaa minulle ainutlaatuisen kyvyn ratkoa ongelmia kokonaisvaltaisesti – aina fyysisestä reitittimestä selaimeen asti.
            </p>
          </div>
          <p>
            Päätöslaukaisuuteni ja jatkuva oppimisen haluni ovat kantaneet hedelmää. Työkalupakkini on hioutunut vahvaksi ja monipuoliseksi:
          </p>
        </div>

        {/* Teknologiapino */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Frontend</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> JavaScript</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> TypeScript</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> HTML & CSS</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Backend & Tietokannat</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> PHP</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> PostgreSQL</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> MySQL</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Infra & Verkot</h3>
            <ul className="space-y-3 text-gray-700 font-medium">
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Cisco CCNA</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Verkkoratkaisut</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Linux (Ubuntu/Debian)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visio */}
      <section className="bg-[rgb(224,242,190)] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Visio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Visio 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-green-600 mb-6 flex justify-center">
                {/* Lehti-ikoni mukailtuna alkuperäisestä */}
                <svg height="48" width="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
              </div>
              <h3 className="font-bold text-lg mb-3 text-center text-gray-900">Helpottaa digitaalista elämää</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">Luodaan teknologiasta saavutettavaa ja ymmärrettävää, ratkaistaan ongelmia.</p>
            </div>

            {/* Visio 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-green-600 mb-6 flex justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v6h6"></path><path d="M21 12A9 9 0 0 0 6 5.3L3 8"></path><path d="M21 22v-6h-6"></path><path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"></path></svg>
              </div>
              <h3 className="font-bold text-lg mb-3 text-center text-gray-900">Toimittaa palvelut kestävästi</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">Pidetään palvelut mahdollisimman aineettomana. Jos laite tarvitaan, valitaan kunnostetut ja kestävät vaihtoehdot.</p>
            </div>

            {/* Visio 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-green-600 mb-6 flex justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>
              </div>
              <h3 className="font-bold text-lg mb-3 text-center text-gray-900">Luoda esteettistä ja toimivaa teknologiaa</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">Suunnitellaan kauniita ja ennen kaikkea käytännöllisiä ratkaisuja.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Ota yhteyttä */}
      <section className="py-20 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">Valmiina ratkaisemaan viidakon mysteerit?</h2>
        <Link href="/palvelut" className="animated-jungle-btn inline-block text-white font-bold py-4 px-8 rounded-xl text-lg shadow-[0_0_15px_rgba(57,255,20,0.4)]">
          Tutustu palveluihini
        </Link>
      </section>

    </main>
  );
}