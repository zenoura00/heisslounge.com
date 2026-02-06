import Link from "next/link";
import { menuData, getMenuBySlug } from "@/lib/menuData";
import { notFound } from "next/navigation";
import MobileMenu from "@/components/MobileMenu";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return menuData.map((category) => ({ slug: category.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function MenuPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getMenuBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Mobile Menu */}
      <MobileMenu />

      {/* Back Button - Bottom */}
      <Link
        href="/menu"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-2 px-6 py-3 bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#c9a962]/50 rounded-full text-[#c9a962] hover:bg-[#252525] hover:border-[#c9a962] transition-all duration-300 shadow-lg shadow-black/50"
        aria-label="Zurück zum Menu"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm tracking-wider font-light">Zurück</span>
      </Link>

      {/* Header */}
      <header className="header fixed top-0 left-0 right-0 z-50 h-14 sm:h-16 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-end">
          {/* Social Media Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/heiss_lounge/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a962] hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1DfMp4u2Vz/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a962] hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 sm:pt-20 pb-10 sm:pb-14 px-3 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Page Title */}
          <section className="text-center mb-8 sm:mb-12">
            <h1 className="section-title text-xl sm:text-2xl md:text-3xl">{category.title}</h1>
            <div className="section-divider" />
          </section>

          {/* Menu Sections */}
          <div className="space-y-6 sm:space-y-10">
            {category.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="menu-section rounded-lg p-4 sm:p-6 md:p-8">
                <h2 className="menu-section-title pb-3 sm:pb-4 mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl">
                  {section.title}
                  {section.note && (
                    <span className="block sm:inline text-xs sm:text-sm text-[#8a8a8a] sm:ml-4 font-normal mt-1 sm:mt-0">
                      {section.note}
                    </span>
                  )}
                </h2>

                <div className="space-y-0">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="menu-item py-3 sm:py-4 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                          <span className="item-name text-sm sm:text-base">{item.name}</span>
                          {item.size && (
                            <span className="item-size text-xs">{item.size}</span>
                          )}
                        </div>
                        {item.description && (
                          <p className="item-description mt-1 text-xs sm:text-sm">{item.description}</p>
                        )}
                      </div>
                      <div className="sm:text-right shrink-0">
                        <span className="item-price text-sm sm:text-base">
                          {item.price}€
                          {item.price2 && (
                            <span className="text-[#8a8a8a] mx-1">|</span>
                          )}
                          {item.price2 && `${item.price2}€`}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer py-3 sm:py-4 text-center">
        <p className="text-[#c9a962] text-[10px] sm:text-xs tracking-widest">
          HEIß LOUNGE
        </p>
      </footer>
    </div>
  );
}
