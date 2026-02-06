"use client";

import Link from "next/link";
import { ArrowLeft, AlertTriangle, Shield, Clock, Ban, Heart, Users } from "lucide-react";

export default function HausordnungPage() {
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
          HAUSORDNUNG
        </h1>
        <div className="w-24 h-0.5 bg-amber-600 mx-auto mb-6" />
        <p className="text-center text-gray-400 mb-12">
          Regeln für einen angenehmen Aufenthalt in der Heiß Lounge
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">

          {/* WICHTIGER HINWEIS - Altersbeschränkung */}
          <section className="bg-red-900/30 rounded-lg p-6 border-2 border-red-500">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl text-red-400 font-bold">
                ALTERSBESCHRÄNKUNG - AB 18 JAHREN
              </h2>
            </div>
            <div className="space-y-4">
              <div className="bg-red-950/50 rounded-lg p-4">
                <p className="text-lg text-white font-semibold mb-2">
                  Zutritt nur für Personen ab 18 Jahren!
                </p>
                <p className="text-sm">
                  Gemäß dem deutschen Jugendschutzgesetz (JuSchG) § 10 ist der Aufenthalt
                  in Raucherlokalen sowie der Konsum von Tabakwaren für Minderjährige
                  (Personen unter 18 Jahren) strengstens untersagt.
                </p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Bitte halten Sie Ihren <span className="text-white font-semibold">gültigen Lichtbildausweis</span> (Personalausweis, Reisepass oder Führerschein) bereit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Unser Personal ist <span className="text-white font-semibold">verpflichtet</span>, Ihr Alter zu überprüfen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Ohne gültigen Altersnachweis ist der Zutritt <span className="text-white font-semibold">nicht möglich</span>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Das Mitbringen von Minderjährigen ist <span className="text-white font-semibold">nicht gestattet</span>.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Gesetzliche Grundlagen */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-amber-500" />
              <h2 className="text-2xl text-amber-500 font-light">
                Gesetzliche Grundlagen (Bayern/Nürnberg)
              </h2>
            </div>
            <div className="space-y-4 text-sm">
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <h3 className="text-amber-400 font-semibold mb-2">Jugendschutzgesetz (JuSchG)</h3>
                <ul className="space-y-1">
                  <li>• § 10 Abs. 1: Verbot der Abgabe von Tabakwaren an Minderjährige</li>
                  <li>• § 10 Abs. 3: Verbot des Aufenthalts in Raucherlokalen für Minderjährige</li>
                </ul>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <h3 className="text-amber-400 font-semibold mb-2">Bayerisches Gesundheitsschutzgesetz (GSG)</h3>
                <ul className="space-y-1">
                  <li>• Rauchverbot in öffentlichen Räumen mit Ausnahmen für Raucherlokale</li>
                  <li>• Strenge Auflagen für Belüftung und Nichtraucherschutz</li>
                </ul>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <h3 className="text-amber-400 font-semibold mb-2">Gaststättenverordnung</h3>
                <ul className="space-y-1">
                  <li>• Einhaltung der Hygienevorschriften</li>
                  <li>• Ordnungsgemäße Lagerung von Tabakwaren</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Allgemeine Verhaltensregeln */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-amber-500" />
              <h2 className="text-2xl text-amber-500 font-light">
                Allgemeine Verhaltensregeln
              </h2>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 text-lg">1.</span>
                <span>Gegenseitiger Respekt und höflicher Umgang mit Gästen und Personal.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 text-lg">2.</span>
                <span>Anweisungen des Personals sind zu befolgen.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 text-lg">3.</span>
                <span>Ruhestörender Lärm und laute Musik sind zu vermeiden.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 text-lg">4.</span>
                <span>Das Mobiliar und Inventar ist pfleglich zu behandeln.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 text-lg">5.</span>
                <span>Sachbeschädigungen werden zur Anzeige gebracht und müssen ersetzt werden.</span>
              </li>
            </ul>
          </section>

          {/* Verbote */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-red-900/40">
            <div className="flex items-center gap-3 mb-4">
              <Ban className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl text-red-400 font-light">
                Verbote
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-950/30 rounded-lg p-4">
                <h3 className="text-red-400 font-semibold mb-3">Streng verboten:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✕</span>
                    <span>Illegale Drogen und Betäubungsmittel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✕</span>
                    <span>Waffen jeglicher Art</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✕</span>
                    <span>Mitbringen eigener Getränke/Speisen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✕</span>
                    <span>Eigene Tabakprodukte für Shisha</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✕</span>
                    <span>Belästigung anderer Gäste</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-950/30 rounded-lg p-4">
                <h3 className="text-red-400 font-semibold mb-3">Nicht gestattet:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✕</span>
                    <span>Tiere (außer Assistenzhunde)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✕</span>
                    <span>Fotografieren ohne Erlaubnis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✕</span>
                    <span>Glücksspiel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✕</span>
                    <span>Handel jeglicher Art</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✕</span>
                    <span>Diskriminierendes Verhalten</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Shisha-Regeln */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              Shisha-Nutzung
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-amber-500">•</span>
                <span>Shishas werden ausschließlich von unserem geschulten Personal vorbereitet und angezündet.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500">•</span>
                <span>Kohlewechsel nur durch Personal - bitte geben Sie uns Bescheid.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500">•</span>
                <span>Hygienische Einweg-Mundstücke werden für jeden Gast bereitgestellt.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500">•</span>
                <span>Die Shisha darf nicht verschoben oder umgestellt werden.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500">•</span>
                <span>Bei Unwohlsein informieren Sie bitte sofort das Personal.</span>
              </li>
            </ul>
          </section>

          {/* Öffnungszeiten */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-amber-500" />
              <h2 className="text-2xl text-amber-500 font-light">
                Öffnungszeiten & Ruhezeiten
              </h2>
            </div>
            <p className="text-sm mb-4">
              Bitte beachten Sie unsere Öffnungszeiten und die gesetzlichen Ruhezeiten.
              Ab 22:00 Uhr bitten wir um besondere Rücksichtnahme auf die Nachbarschaft.
            </p>
            <p className="text-sm text-gray-400">
              Letzter Einlass: 30 Minuten vor Schließung
            </p>
          </section>

          {/* Gesundheitshinweise */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20 border-l-4 border-l-amber-500">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-amber-500" />
              <h2 className="text-2xl text-amber-500 font-light">
                Gesundheitshinweise
              </h2>
            </div>
            <div className="bg-amber-900/20 rounded-lg p-4 mb-4">
              <p className="text-amber-400 font-semibold mb-2">
                Rauchen gefährdet Ihre Gesundheit!
              </p>
              <p className="text-sm">
                Der Konsum von Wasserpfeifentabak birgt erhebliche Gesundheitsrisiken.
                Shisha-Rauch enthält Kohlenmonoxid, Nikotin und andere Schadstoffe.
              </p>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Schwangeren wird vom Konsum dringend abgeraten.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Bei Herz-Kreislauf-Erkrankungen ist besondere Vorsicht geboten.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Trinken Sie ausreichend Wasser während des Konsums.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Bei Schwindel oder Übelkeit: Sofort aufhören und Personal informieren.</span>
              </li>
            </ul>
          </section>

          {/* Hausrecht */}
          <section className="bg-zinc-900/50 rounded-lg p-6 border border-amber-900/20">
            <h2 className="text-2xl text-amber-500 mb-4 font-light">
              Hausrecht & Konsequenzen
            </h2>
            <p className="text-sm mb-4">
              Bei Verstößen gegen diese Hausordnung behalten wir uns vor:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Verweisung aus dem Lokal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Erteilung eines Hausverbots</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Einschaltung der Polizei bei Straftaten</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>Geltendmachung von Schadensersatzansprüchen</span>
              </li>
            </ul>
          </section>

          {/* Abschluss */}
          <section className="bg-amber-900/20 rounded-lg p-6 border border-amber-500/30 text-center">
            <p className="text-lg text-amber-400 mb-2">
              Vielen Dank für Ihr Verständnis!
            </p>
            <p className="text-sm text-gray-300">
              Wir wünschen Ihnen einen angenehmen Aufenthalt in der Heiß Lounge.
            </p>
          </section>

          {/* Stand */}
          <section className="text-center">
            <p className="text-sm text-gray-500">
              Stand: Februar 2026 | Heiß Lounge, Nürnberg
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
