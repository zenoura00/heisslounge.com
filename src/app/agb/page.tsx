"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AGBPage() {
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
          ALLGEMEINE GESCHÄFTSBEDINGUNGEN
        </h1>
        <div className="w-24 h-0.5 bg-amber-600 mx-auto mb-12" />

        <div className="space-y-8 text-gray-300 leading-relaxed">
          {/* Geltungsbereich */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              § 1 Geltungsbereich
            </h2>
            <p className="text-sm">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen
              der Heiß Lounge (nachfolgend "Betreiber") und den Gästen (nachfolgend "Kunde")
              über die Nutzung der Shisha Bar, den Verzehr von Speisen und Getränken sowie
              die Inanspruchnahme von Shisha-Dienstleistungen.
            </p>
          </section>

          {/* Vertragsschluss */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              § 2 Vertragsschluss
            </h2>
            <ol className="list-decimal list-inside text-sm space-y-2">
              <li>
                Der Vertrag kommt durch Bestellung und Annahme (Servieren) von Speisen,
                Getränken oder Shisha-Produkten zustande.
              </li>
              <li>
                Mit Betreten der Räumlichkeiten erkennt der Kunde die AGB und die
                Hausordnung an.
              </li>
              <li>
                Reservierungen sind verbindlich und gelten als angenommen, wenn sie
                vom Betreiber bestätigt wurden.
              </li>
            </ol>
          </section>

          {/* Preise und Zahlung */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              § 3 Preise und Zahlung
            </h2>
            <ol className="list-decimal list-inside text-sm space-y-2">
              <li>
                Es gelten die zum Zeitpunkt der Bestellung ausgewiesenen Preise.
                Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.
              </li>
              <li>
                Die Zahlung erfolgt nach Erhalt der Rechnung in bar, per EC-Karte
                oder Kreditkarte.
              </li>
              <li>
                Bei Reservierungen für größere Gruppen kann eine Anzahlung oder
                Mindestverzehr verlangt werden.
              </li>
            </ol>
          </section>

          {/* Altersbeschränkung */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20 border-l-4 border-l-red-500">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              § 4 Altersbeschränkung
            </h2>
            <div className="bg-red-900/20 rounded-lg p-4 mb-4">
              <p className="text-red-400 font-semibold text-lg mb-2">
                WICHTIGER HINWEIS
              </p>
              <p className="text-sm">
                Der Zutritt zur Heiß Lounge sowie der Konsum von Shisha-Produkten und
                alkoholischen Getränken ist ausschließlich Personen ab 18 Jahren gestattet.
              </p>
            </div>
            <ol className="list-decimal list-inside text-sm space-y-2">
              <li>
                Gemäß § 10 Jugendschutzgesetz (JuSchG) ist der Aufenthalt in
                Gaststätten, die als Raucherlokal betrieben werden, für Personen
                unter 18 Jahren nicht gestattet.
              </li>
              <li>
                Gemäß § 10 JuSchG ist das Rauchen von Tabakwaren und der Konsum
                nikotinhaltiger Erzeugnisse für Personen unter 18 Jahren verboten.
              </li>
              <li>
                Wir sind berechtigt und verpflichtet, einen gültigen Lichtbildausweis
                (Personalausweis, Reisepass, Führerschein) zur Altersverifikation zu verlangen.
              </li>
              <li>
                Personen, die keinen gültigen Altersnachweis vorlegen können, wird
                der Zutritt verweigert.
              </li>
            </ol>
          </section>

          {/* Shisha-Nutzung */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              § 5 Shisha-Nutzung
            </h2>
            <ol className="list-decimal list-inside text-sm space-y-2">
              <li>
                Shisha-Produkte werden ausschließlich durch geschultes Personal zubereitet.
              </li>
              <li>
                Das Mitbringen eigener Tabakprodukte oder Shisha-Köpfe ist nicht gestattet.
              </li>
              <li>
                Pro bestellter Shisha ist eine Nutzungsdauer von maximal 60 Minuten vorgesehen.
              </li>
              <li>
                Hygienische Einweg-Mundstücke werden für jeden Gast bereitgestellt.
              </li>
            </ol>
          </section>

          {/* Haftung */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              § 6 Haftung
            </h2>
            <ol className="list-decimal list-inside text-sm space-y-2">
              <li>
                Der Betreiber haftet für Schäden nur bei Vorsatz oder grober
                Fahrlässigkeit.
              </li>
              <li>
                Für Garderobe und mitgebrachte Gegenstände wird keine Haftung übernommen.
              </li>
              <li>
                Der Konsum von Shisha-Produkten erfolgt auf eigene Verantwortung.
                Der Gast ist über die Gesundheitsrisiken des Rauchens informiert.
              </li>
            </ol>
          </section>

          {/* Gesundheitshinweis */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20 border-l-4 border-l-amber-500">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              § 7 Gesundheitshinweis
            </h2>
            <div className="bg-amber-900/20 rounded-lg p-4">
              <p className="text-sm mb-2">
                <span className="text-amber-400 font-semibold">Rauchen ist gesundheitsschädlich.</span>
              </p>
              <p className="text-sm">
                Der Konsum von Tabakprodukten, einschließlich Wasserpfeifentabak,
                kann zu schweren Erkrankungen führen. Shisha-Rauch enthält
                gesundheitsschädliche Substanzen wie Kohlenmonoxid, Teer und Nikotin.
              </p>
            </div>
          </section>

          {/* Hausrecht */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              § 8 Hausrecht
            </h2>
            <p className="text-sm mb-4">
              Der Betreiber behält sich das Hausrecht vor. Bei Verstößen gegen diese
              AGB oder die Hausordnung kann ein Hausverbot erteilt werden. Dies gilt
              insbesondere bei:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 ml-4">
              <li>Aggressivem oder belästigendem Verhalten</li>
              <li>Konsum illegaler Substanzen</li>
              <li>Sachbeschädigung</li>
              <li>Nichteinhaltung der Altersvorschriften</li>
            </ul>
          </section>

          {/* Schlussbestimmungen */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              § 9 Schlussbestimmungen
            </h2>
            <ol className="list-decimal list-inside text-sm space-y-2">
              <li>
                Es gilt deutsches Recht.
              </li>
              <li>
                Gerichtsstand ist Nürnberg.
              </li>
              <li>
                Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit
                der übrigen Bestimmungen unberührt.
              </li>
            </ol>
          </section>

          {/* Stand */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <p className="text-sm text-gray-400">
              Stand: Februar 2026
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
