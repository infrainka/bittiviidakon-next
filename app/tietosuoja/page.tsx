import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tietosuojaseloste | BittiViidakon",
  description: "BittiViidakon tietosuojaseloste. Näin käsittelen ja suojaan henkilötietojasi.",
};

export default function TietosuojaPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
          Tietosuoja<span className="text-[#4CAF50]">seloste</span>
        </h1>
        <p className="text-lg text-gray-600">
          Päivitetty viimeksi: 5.4.2026
        </p>
      </div>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
        <section>
          <p className="leading-relaxed">
            Tämä tietosuojaseloste kertoo, miten kerään, käsittelen ja suojaan henkilötietojasi osoitteessa <strong>bittiviidakon.fi</strong>. Kunnioitan yksityisyyttäsi ja olen sitoutunut suojaamaan henkilötietojasi soveltuvan tietosuojalainsäädännön (GDPR) mukaisesti.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-100 pb-2 mb-4">1. Rekisterinpitäjä</h2>
          <ul className="list-none space-y-2">
            <li><strong>Yritys / Toiminimi:</strong> BittiViidakon</li>
            <li><strong>Y-tunnus:</strong> 3467155-8</li>
            <li><strong>Sähköpostiosoite:</strong> inka@bittiviidakon.fi</li>
            <li><strong>Kotipaikka:</strong> Äänekoski</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-100 pb-2 mb-4">2. Mitä henkilötietoja kerään ja miksi?</h2>
          <p className="mb-4">Kerään vain sellaisia tietoja, jotka ovat välttämättömiä palveluideni tarjoamiseksi ja yhteydenottoihin vastaamiseksi.</p>
          
          <div className="bg-gray-50 p-6 rounded-2xl mb-4 border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-2">Yhteydenottolomake (Tarjouspyynnöt ja varaukset):</h3>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>Mitä kerään:</strong> Nimi, sähköpostiosoite, valittu palvelu sekä vapaamuotoinen viesti.</li>
              <li><strong>Käyttötarkoitus:</strong> Yhteydenottoihin vastaaminen, asiakassuhteen hoitaminen ja tarjousten tekeminen.</li>
              <li><strong>Käsittelyn peruste:</strong> Suostumus (lähettäessäsi lomakkeen) ja sopimuksen täytäntöönpanoa edeltävät toimenpiteet.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-2">Tekniset tiedot (Lokitiedot ja evästeet):</h3>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>Mitä kerään:</strong> Työn suorittamisen kannalta välttämättömät tiedot, kuten käyttöoikeudet ja tunnukset (esim. WordPress, hosting-palvelut), IP- ja DNS-tiedot sekä muu projektin vaatima materiaali.</li>
              <li><strong>Käyttötarkoitus:</strong> Tilattujen palveluiden (esim. sivuston siirto, vianetsintä tai koodimuutokset) turvallinen ja onnistunut suorittaminen.</li>
              <li><strong>Käsittelyn peruste:</strong> Asiakkaan kanssa tehtävän sopimuksen täytäntöönpano.</li>
            </ul>
	    </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-100 pb-2 mb-4">3. Tietojen säilytys ja turvallisuus</h2>
          <p className="leading-relaxed mb-4">
            Sivustoni ja sen palvelimet sijaitsevat fyysisesti EU/ETA-alueella turvallisissa <strong>Hetznerin</strong> konesaleissa (Saksa/Suomi), mikä takaa tietojen käsittelyn tiukkojen eurooppalaisten tietosuojastandardien mukaisesti.
          </p>
          <p className="leading-relaxed">
            Yhteydenottolomakkeen kautta lähetetyt tiedot välitetään suoraan sähköpostiini suojattua yhteyttä (HTTPS) käyttäen. En säilytä lomaketietoja erillisessä verkkosivuston tietokannassa. Sähköpostipalveluni sijaitsee <strong>Hetznerin</strong> palvelimilla. Säilytän asiakastietoja vain niin kauan kuin se on tarpeellista yhteydenoton hoitamiseksi tai lainsäädännön (kuten kirjanpitolain) vaatimusten täyttämiseksi.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-100 pb-2 mb-4">4. Tietojen luovuttaminen kolmansille osapuolille</h2>
          <p className="leading-relaxed mb-4">
            En koskaan myy tai vuokraa tietojasi ulkopuolisille. Sivustollani on kuitenkin käytössä tiettyjä kolmannen osapuolen työkaluja, jotka voivat käsitellä teknisiä tietojasi (esim. IP-osoite) tarjotakseen ominaisuutensa:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
            <li><strong>Google Calendar:</strong> Kalenterivarausten hallinta sivuston kautta.</li>
            <li><strong>OpenWidget / Elfsight:</strong> Sivuston upotetut widgetit (kuten asiakaspalveluchat tai arvostelut).</li>
          </ul>
          <p className="leading-relaxed text-sm text-gray-500">
            Osa näistä palveluista saattaa siirtää teknistä dataa EU:n ulkopuolelle. Varmistan, että käyttämäni kumppanit noudattavat GDPR-vaatimuksia esimerkiksi vakiosopimuslausekkeiden (SCC) avulla.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-100 pb-2 mb-4">5. Evästeet (Cookies)</h2>
          <p className="leading-relaxed">
            Käytän sivustollani välttämättömiä evästeitä, jotka ovat pakollisia sivuston teknisen toiminnan ja turvallisuuden kannalta. Kolmannen osapuolen upotukset (kuten OpenWidget tai Elfsight) saattavat asettaa omia evästeitään palveluidensa mahdollistamiseksi. Voit hallita tai estää evästeiden käytön selaimesi asetuksista.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-100 pb-2 mb-4">6. Sinun oikeutesi</h2>
          <p className="leading-relaxed mb-4">EU:n tietosuoja-asetuksen (GDPR) mukaisesti sinulla on oikeus:</p>
          <ul className="list-disc list-inside space-y-2 ml-2 mb-6">
            <li>Tarkistaa, mitä tietoja olen sinusta tallentanut.</li>
            <li>Pyytää virheellisten tietojen oikaisua tai täydentämistä.</li>
            <li>Pyytää tietojesi poistamista ("oikeus tulla unohdetuksi").</li>
            <li>Peruuttaa antamasi suostumus tietojen käsittelyyn.</li>
          </ul>
          <p className="leading-relaxed">
            Jos haluat käyttää oikeuksiasi tai sinulla on kysyttävää tietosuojasta, ota rohkeasti yhteyttä: <a href="mailto:inka@bittiviidakon.fi" className="text-green-600 font-bold hover:underline"><strong>inka@bittiviidakon.fi</strong></a>.
          </p>
        </section>

        <div className="pt-8 mt-12 border-t border-gray-200">
          <Link href="/" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Palaa etusivulle
          </Link>
        </div>
      </div>
    </main>
  );
}
