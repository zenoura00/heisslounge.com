"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DatenschutzPage() {
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
          DATENSCHUTZERKLÄRUNG
        </h1>
        <div className="w-24 h-0.5 bg-amber-600 mx-auto mb-12" />

        <div className="space-y-8 text-gray-300 leading-relaxed">
          {/* Einleitung */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-lg text-amber-400 mb-2">Allgemeine Hinweise</h3>
            <p className="text-sm">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
              Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen
              oder unsere Shisha Bar besuchen. Personenbezogene Daten sind alle Daten,
              mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          {/* Verantwortlicher */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              2. Verantwortliche Stelle
            </h2>
            <div className="space-y-2 text-sm">
              <p className="text-white text-base">Heiß Lounge</p>
              <p>[Straße und Hausnummer]</p>
              <p>90XXX Nürnberg</p>
              <p>Deutschland</p>
              <p className="mt-4">Telefon: [Telefonnummer]</p>
              <p>E-Mail: datenschutz@heiss-lounge.de</p>
            </div>
          </section>

          {/* Datenerfassung */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              3. Datenerfassung auf unserer Website
            </h2>

            <h3 className="text-lg text-amber-400 mb-2">Server-Log-Dateien</h3>
            <p className="text-sm mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen
              in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
              übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 ml-4 mb-4">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>

            <h3 className="text-lg text-amber-400 mb-2 mt-4">Cookies</h3>
            <p className="text-sm">
              Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr
              Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser
              Angebot nutzerfreundlicher zu machen.
            </p>
          </section>

          {/* Vor-Ort Datenerfassung */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              4. Datenerfassung in unserer Shisha Bar
            </h2>

            <h3 className="text-lg text-amber-400 mb-2">Altersverifikation</h3>
            <p className="text-sm mb-4">
              Gemäß dem Jugendschutzgesetz (JuSchG) sind wir verpflichtet, das Alter
              unserer Gäste zu überprüfen. Dabei können folgende Daten erhoben werden:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 ml-4">
              <li>Geburtsdatum (zur Altersverifikation)</li>
              <li>Ausweisart (Personalausweis/Reisepass)</li>
            </ul>
            <p className="text-sm mt-4 text-amber-400/80">
              Diese Daten werden nicht gespeichert und dienen ausschließlich der
              Zugangskontrolle vor Ort.
            </p>

            <h3 className="text-lg text-amber-400 mb-2 mt-6">Videoüberwachung</h3>
            <p className="text-sm">
              Zum Schutz unserer Gäste und Mitarbeiter sowie zur Prävention von
              Straftaten setzen wir Videoüberwachung ein. Die Aufnahmen werden nach
              72 Stunden automatisch gelöscht, sofern kein berechtigtes Interesse an
              einer längeren Speicherung besteht.
            </p>
          </section>

          {/* Ihre Rechte */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              5. Ihre Rechte (DSGVO)
            </h2>
            <p className="text-sm mb-4">
              Sie haben gemäß DSGVO folgende Rechte:
            </p>
            <ul className="list-disc list-inside text-sm space-y-2 ml-4">
              <li><span className="text-amber-400">Auskunftsrecht (Art. 15)</span> -
                Recht auf Auskunft über Ihre gespeicherten Daten</li>
              <li><span className="text-amber-400">Berichtigungsrecht (Art. 16)</span> -
                Recht auf Berichtigung unrichtiger Daten</li>
              <li><span className="text-amber-400">Löschungsrecht (Art. 17)</span> -
                Recht auf Löschung Ihrer Daten</li>
              <li><span className="text-amber-400">Einschränkungsrecht (Art. 18)</span> -
                Recht auf Einschränkung der Verarbeitung</li>
              <li><span className="text-amber-400">Widerspruchsrecht (Art. 21)</span> -
                Recht auf Widerspruch gegen die Verarbeitung</li>
              <li><span className="text-amber-400">Datenübertragbarkeit (Art. 20)</span> -
                Recht auf Datenübertragbarkeit</li>
            </ul>
          </section>

          {/* Beschwerderecht */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              6. Beschwerderecht
            </h2>
            <p className="text-sm">
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über
              die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
            </p>
            <div className="mt-4 text-sm">
              <p className="text-white">Bayerisches Landesamt für Datenschutzaufsicht</p>
              <p>Promenade 18</p>
              <p>91522 Ansbach</p>
            </div>
          </section>

          {/* Aktualisierung */}
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
