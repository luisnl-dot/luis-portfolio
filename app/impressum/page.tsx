import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Impressum – Luis Nagel",
};

export default function Impressum() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 pt-36 pb-24">
        <h1 className="font-syne font-extrabold text-3xl text-white mb-10">Impressum</h1>

        <section className="space-y-6 font-inter text-white/60 text-sm leading-relaxed">
          <div>
            <h2 className="text-white font-semibold mb-1">Angaben gemäß § 5 TMG</h2>
            <p>
              cotralog consulting & investment gmbh<br />
              Puschkinallee 40<br />
              15745 Wildau<br /><br />
              Geschäftsführer: Juan Nagel<br />
              Handelsregister: Amtsgericht Cottbus, HRB 9941<br />
              Gerichtsstand: Königs Wusterhausen
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-1">Kontakt</h2>
            <p>
              Telefon: +49 3375 520953<br />
              Mobil: +49 171 8600860<br />
              E-Mail: <a href="mailto:info@cotralog.eu" className="text-accent hover:underline">info@cotralog.eu</a>
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-1">Umsatzsteuer</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              DE 229041523
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-1">Finanzamt</h2>
            <p>
              Finanzamt Königs Wusterhausen<br />
              Steuernummer: 049/107/03221
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-1">Verantwortlich für den Inhalt</h2>
            <p>Luis Nagel · luisn.l@icloud.com</p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-1">Haftung für Inhalte</h2>
            <p>Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-1">Urheberrecht</h2>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
