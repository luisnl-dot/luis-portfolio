import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Datenschutz – Luis Nagel",
};

export default function Datenschutz() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 pt-36 pb-24">
        <h1 className="font-syne font-extrabold text-3xl text-white mb-10">Datenschutzerklärung</h1>

        <section className="space-y-6 font-inter text-white/60 text-sm leading-relaxed">
          <div>
            <h2 className="text-white font-semibold mb-1">1. Verantwortlicher</h2>
            <p>Luis Nagel, Am Pulverberg 1, 15738 Zeuthen<br />E-Mail: luisn.l@icloud.com</p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-1">2. Hosting</h2>
            <p>Diese Website wird gehostet bei Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA. Wenn du diese Website besuchst, werden automatisch Verbindungsdaten (IP-Adresse, Browsertyp, Zeitstempel) an Vercel übermittelt. Dies dient dem technischen Betrieb der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-1">3. Schriftarten</h2>
            <p>Diese Website verwendet die Schriftarten „Syne" und „Inter". Die Schriften werden lokal von unserem Server ausgeliefert und es findet keine Verbindung zu Google-Servern statt.</p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-1">4. Kontaktaufnahme</h2>
            <p>Wenn du mich per E-Mail oder WhatsApp kontaktierst, werden die von dir übermittelten Daten (Name, E-Mail, Nachricht) ausschließlich zur Bearbeitung deiner Anfrage gespeichert und verwendet. Eine Weitergabe an Dritte findet nicht statt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-1">5. Keine Cookies / kein Tracking</h2>
            <p>Diese Website setzt keine Cookies und verwendet kein Tracking oder Analytics-Tools.</p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-1">6. Deine Rechte</h2>
            <p>Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit. Wende dich dazu an: luisn.l@icloud.com</p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-1">7. Beschwerderecht</h2>
            <p>Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die zuständige Behörde für Brandenburg ist die Landesbeauftragte für den Datenschutz und für das Recht auf Akteneinsicht Brandenburg.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
