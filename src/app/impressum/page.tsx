"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-amber-900/30">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Zurück zum Menü</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-light text-amber-500 mb-8 tracking-wider text-center">
          IMPRESSUM
        </h1>
        <div className="w-24 h-0.5 bg-amber-600 mx-auto mb-12" />

        <div className="space-y-8 text-gray-300 leading-relaxed">
          {/* Angaben gemäß § 5 TMG */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="space-y-2">
              <p className="text-xl text-white">Heiß Lounge</p>
              <p>Shisha & Cocktail Bar</p>
              <p>Ludwigstraße 55,</p>
              <p>90402 Nürnberg</p>
              <p>Deutschland</p>
            </div>
          </section>

          {/* Kontakt */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">Kontakt</h2>
            <div className="space-y-2">
              <p>Telefon: 017623296860</p>
              <p>E-Mail: info@heiss-lounge.de</p>
            </div>
          </section>

          {/* Geschäftsführer */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              Geschäftsführer / Inhaber
            </h2>
            <p>Ahmad</p>
          </section>

          {/* Aufsichtsbehörde */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              Zuständige Aufsichtsbehörde
            </h2>
            <div className="space-y-2">
              <p>Stadt Nürnberg</p>
              <p>Ordnungsamt</p>
              <p>Gewerbeabteilung</p>
            </div>
          </section>

          {/* Streitschlichtung */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              Streitschlichtung
            </h2>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
            </p>
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-400 underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            <p className="mt-4 text-sm text-gray-400">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* Haftungsausschluss */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              Haftungsausschluss
            </h2>

            <h3 className="text-lg text-amber-400 mb-2 mt-4">Haftung für Inhalte</h3>
            <p className="text-sm">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
              §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen.
            </p>

            <h3 className="text-lg text-amber-400 mb-2 mt-4">Haftung für Links</h3>
            <p className="text-sm">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter verantwortlich.
            </p>

            <h3 className="text-lg text-amber-400 mb-2 mt-4">Urheberrecht</h3>
            <p className="text-sm">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung.
            </p>
          </section>
        </div>

        {/* Back Button - Bottom */}
        <div className="flex justify-center mt-12 pb-8">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900/90 backdrop-blur-sm border border-amber-500/50 rounded-full text-amber-500 hover:bg-zinc-800 hover:border-amber-400 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm tracking-wider font-light">Zurück zur Hauptseite</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
