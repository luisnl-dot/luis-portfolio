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
            <p>Luis Nagel<br />Am Pulverberg 1<br />15738 Zeuthen</p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-1">Kontakt</h2>
            <p>E-Mail: <a href="mailto:luisn.l@icloud.com" className="text-accent hover:underline">luisn.l@icloud.com</a></p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-1">Hinweis zur Steuernummer</h2>
            <p>Eine Umsatzsteuer-ID liegt derzeit nicht vor, da keine gewerbliche Tätigkeit im Sinne des UStG ausgeübt wird.</p>
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
