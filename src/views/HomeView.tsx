import React from 'react';
import { FRAGRANCES, Fragrance } from '../data/fragrances';

interface HomeViewProps {
  onSelectFragrance: (fragrance: Fragrance) => void;
  onNavigateTab: (tab: 'collection' | 'discovery' | 'vault') => void;
  onQuickReserve: (fragrance: Fragrance) => void;
  onOpenVIPModal: () => void;
  onOpenAlchemyModal: () => void;
  onFilterFamily: (category: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectFragrance,
  onNavigateTab,
  onQuickReserve,
  onOpenVIPModal,
  onOpenAlchemyModal,
  onFilterFamily,
}) => {
  const cambodi = FRAGRANCES.find((f) => f.id === 'royal-cambodi-supreme') || FRAGRANCES[0];
  const kalakassi = FRAGRANCES.find((f) => f.id === 'dehn-al-oud-kalakassi-1984') || FRAGRANCES[5];

  return (
    <div className="flex flex-col w-full text-[#e3e2e5] pb-28">
      {/* Top Royal Courier Announcement Strip */}
      <div className="bg-[#1b1c1e] border-b border-[#292a2c] py-2 px-4 flex items-center justify-between text-[11px] text-[#f2ca50]">
        <div className="flex items-center gap-1.5 truncate">
          <span className="material-symbols-outlined text-[15px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
            stars
          </span>
          <span className="truncate">
            Royal Courier to GCC &amp; Worldwide • Complimentary Silk Box on orders above AED 1,000
          </span>
        </div>
        <span className="material-symbols-outlined text-[15px] text-[#99907c] shrink-0">verified</span>
      </div>

      <div className="px-4 md:px-8 max-w-2xl mx-auto w-full flex flex-col gap-6 pt-3">
        {/* Private Reserve Hero Banner Card */}
        <div className="relative bg-[#1b1c1e] border border-[#292a2c] rounded-2xl p-4 md:p-6 flex flex-col gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Header Tag */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f2ca50] shadow-[0_0_8px_rgba(242,202,80,0.8)]" />
              <span className="font-label-uppercase text-[11px] tracking-[0.2em] text-[#f2ca50] uppercase font-bold">
                Private Reserve N° 07
              </span>
            </div>
            <span className="font-label-uppercase text-[10px] tracking-widest text-[#d0c5af] uppercase">
              Vintage 2024 Release
            </span>
          </div>

          {/* Hero Flacon Image Frame */}
          <div
            onClick={() => onSelectFragrance(cambodi)}
            className="group relative w-full h-80 rounded-xl overflow-hidden bg-[#0d0e10] cursor-pointer flex items-center justify-center border border-[#292a2c]"
          >
            <img
              src={cambodi.image}
              alt="The Sovereign Scent of the Orient"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1e] via-transparent to-black/30 pointer-events-none" />

            {/* Badges on image */}
            <div className="absolute top-3 left-3 bg-[#0d0e10]/80 backdrop-blur-md text-[#f2ca50] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5 border border-[#d4af37]/30 shadow-md">
              <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                diamond
              </span>
              <span>Pure Attar • 100% Oil</span>
            </div>

            <div className="absolute bottom-3 left-3 bg-[#0d0e10]/85 backdrop-blur-md text-[#e3e2e5] px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 border border-[#292a2c]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50]" />
              <span>Taif Rose &amp; Wild Agarwood</span>
            </div>
          </div>

          {/* Editorial Copy */}
          <div className="flex flex-col gap-2">
            <h1 className="font-headline-lg-mobile text-2xl md:text-3xl text-[#e3e2e5] leading-tight font-normal">
              The Sovereign Scent of the Orient
            </h1>
            <p className="font-body-md text-sm text-[#d0c5af] leading-relaxed">
              Distilled from century-old wild agarwood &amp; high-altitude Taif valley dawn-harvested roses. Untouched by synthetics or alcohol.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-2.5 pt-1">
            <button
              type="button"
              onClick={() => onNavigateTab('collection')}
              className="w-full py-3.5 px-5 rounded-lg bg-[#d4af37] hover:bg-[#f2ca50] text-[#3c2f00] font-title-md font-bold uppercase tracking-wider text-xs md:text-sm flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(212,175,55,0.35)] transition-all active:scale-[0.98]"
            >
              <span>Explore Private Reserve</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>

            <button
              type="button"
              onClick={onOpenAlchemyModal}
              className="w-full py-3 px-5 rounded-lg bg-[#121315] hover:bg-[#1f2022] border border-[#292a2c] text-[#f2ca50] font-title-md font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-[18px]">menu_book</span>
              <span>The Art of Attar Alchemy</span>
            </button>
          </div>
        </div>

        {/* Noble Fragrance Families Section */}
        <section className="flex flex-col gap-3">
          <div className="flex items-end justify-between">
            <div>
              <span className="font-label-uppercase text-[10px] tracking-[0.2em] text-[#f2ca50] uppercase block">
                The Olfactory Palettes
              </span>
              <h2 className="font-headline-sm text-xl text-[#e3e2e5]">Noble Fragrance Families</h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigateTab('collection')}
              className="text-xs text-[#f2ca50] hover:underline flex items-center gap-0.5 font-medium"
            >
              <span>View All</span>
              <span className="material-symbols-outlined text-[15px]">chevron_right</span>
            </button>
          </div>

          {/* 2 Palette Family Cards */}
          <div className="grid grid-cols-2 gap-3">
            {/* Card 1: Oud & Woods */}
            <div
              onClick={() => onFilterFamily('Pure Dehn Al Oud')}
              className="group relative bg-[#1b1c1e] border border-[#292a2c] hover:border-[#f2ca50]/50 rounded-xl p-3 flex flex-col gap-2.5 cursor-pointer shadow-md transition-all duration-300"
            >
              <div className="relative w-full h-28 rounded-lg overflow-hidden bg-[#0d0e10]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0C6Sk_a8nGWyn186qZ4wO3iXv9FWRKptUhPErMkW7rTw8vi-ivdH8Y-voZm7rF71NslcdAVvJADHJB0kYZ_MpeP-XqHsUgPumsYTvmRvTXYp_6PqUB2eWeO9ShTm_gNrHf0vvEJBLJ7wZkKZBsjwhazSq5p03yL2OLcZ--juKluhOL1Ql1SuTOZpntDWFiDABh0t6i-fLEItjXhwBYFPiiFf08fp5ZDlvpH0uzHQG_78dSRJoPJ035Q"
                  alt="Rare Oud & Woods"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-2 left-2 w-6 h-6 rounded-full bg-[#121315]/80 backdrop-blur-sm flex items-center justify-center text-[#f2ca50]">
                  <span className="material-symbols-outlined text-[14px]">spa</span>
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-headline-sm text-sm text-[#e3e2e5] group-hover:text-[#f2ca50] transition-colors">
                  Rare Oud &amp; Woods
                </h3>
                <span className="text-[11px] text-[#d0c5af] truncate">Aged Cambodi, Kalakassi 1984</span>
              </div>
            </div>

            {/* Card 2: Taif Rose & Florals */}
            <div
              onClick={() => onFilterFamily('Pure Taif Rose')}
              className="group relative bg-[#1b1c1e] border border-[#292a2c] hover:border-[#f2ca50]/50 rounded-xl p-3 flex flex-col gap-2.5 cursor-pointer shadow-md transition-all duration-300"
            >
              <div className="relative w-full h-28 rounded-lg overflow-hidden bg-[#0d0e10]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmrrrIyHq-gKKI7fEvZPqevAOBYqx5Bq09sAh-VPkyFTHPlGobKOInbR4sT1QoCyPXOAufUye9pPSaIaLn8RwJJ8v8WN5Gccg40BMjNR-f6UQqKzYjB4UuWiIPKu2BwwX26eQkPeSIWp7Qt2NY3kVr9NkOJaBARy6XPDXCHBuc0SJCOj2DE2hAd_82rHMjgoQdeUK0tr1L7r0Cr8D4tGkaodkLSEF8MJnGlVOr7aPsu0fDmWr7hAnc6w"
                  alt="Taif Rose & Florals"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-2 left-2 w-6 h-6 rounded-full bg-[#121315]/80 backdrop-blur-sm flex items-center justify-center text-[#f2ca50]">
                  <span className="material-symbols-outlined text-[14px]">filter_vintage</span>
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-headline-sm text-sm text-[#e3e2e5] group-hover:text-[#f2ca50] transition-colors">
                  Taif Rose &amp; Florals
                </h3>
                <span className="text-[11px] text-[#d0c5af] truncate">Ward Taifi, Jasmine Sambac</span>
              </div>
            </div>
          </div>
        </section>

        {/* Scent of the Season: Dehn Al Oud Kalakassi 1984 */}
        <section className="bg-[#1b1c1e] border border-[#292a2c] rounded-2xl p-4 md:p-5 flex flex-col gap-3.5 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-[#343537] text-[#f2ca50] font-label-uppercase text-[10px] tracking-wider uppercase font-semibold">
              Scent of the Season
            </span>
            <div className="flex items-center gap-1 text-xs text-[#f2ca50]">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="font-semibold text-[#e3e2e5]">4.97</span>
              <span className="text-[#99907c]">(142)</span>
            </div>
          </div>

          <div>
            <h2 className="font-headline-md text-xl text-[#e3e2e5]">{kalakassi.name}</h2>
            <p className="text-xs text-[#d0c5af] mt-0.5">Distillation Batch N° 12 • Aged 40 Solar Years</p>
          </div>

          {/* Olfactory Pyramid & Dry-down Box */}
          <div className="bg-[#121315] border border-[#292a2c] rounded-xl p-3.5 flex flex-col gap-2.5">
            <span className="text-[10px] font-label-uppercase text-[#f2ca50] tracking-[0.18em] uppercase font-bold">
              Olfactory Pyramid &amp; Dry-Down
            </span>

            {/* Top Note */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ffe088]" />
                <span className="text-[11px] font-semibold text-[#e3e2e5]">TOP NOTE (0 – 30M)</span>
              </div>
              <div className="flex gap-1.5 pl-4 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-[#1b1c1e] text-[10px] text-[#d0c5af] border border-[#292a2c]">
                  Green Cardamom
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#1b1c1e] text-[10px] text-[#d0c5af] border border-[#292a2c]">
                  Wild Kashmir Saffron
                </span>
              </div>
            </div>

            {/* Heart Accord */}
            <div className="flex flex-col gap-1 pt-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                <span className="text-[11px] font-semibold text-[#f2ca50]">HEART ACCORD (1 – 6H)</span>
              </div>
              <div className="flex gap-1.5 pl-4 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-[#1b1c1e] text-[10px] text-[#d0c5af] border border-[#292a2c]">
                  Aged Assam Agarwood Core
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#1b1c1e] text-[10px] text-[#d0c5af] border border-[#292a2c]">
                  Smoked Birch Resins
                </span>
              </div>
            </div>

            {/* Eternal Base */}
            <div className="flex flex-col gap-1 pt-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#99907c]" />
                <span className="text-[11px] font-semibold text-[#d0c5af]">ETERNAL BASE (8 – 24H+)</span>
              </div>
              <div className="flex gap-1.5 pl-4 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-[#1b1c1e] text-[10px] text-[#d0c5af] border border-[#292a2c]">
                  Wild Grey Ambergris
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#1b1c1e] text-[10px] text-[#d0c5af] border border-[#292a2c]">
                  Vintage Royal Leather
                </span>
              </div>
            </div>
          </div>

          {/* Investment & Quick Reserve */}
          <div className="flex items-center justify-between pt-1">
            <div>
              <span className="text-[9px] uppercase tracking-wider text-[#99907c] block">Investment</span>
              <div className="flex items-baseline gap-1">
                <span className="font-title-lg text-lg font-bold text-[#f2ca50]">AED 1,850</span>
                <span className="text-xs text-[#99907c]">/ 1 Tola (12ml)</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onQuickReserve(kalakassi)}
              className="py-2.5 px-4 rounded-lg bg-[#d4af37] hover:bg-[#f2ca50] text-[#3c2f00] font-title-md font-bold uppercase tracking-wider text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(212,175,55,0.25)] active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                lock
              </span>
              <span>Quick Reserve</span>
            </button>
          </div>
        </section>

        {/* The Sovereign Code of Hind Arabia */}
        <section className="flex flex-col gap-3 pt-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50]" />
            <h2 className="font-headline-sm text-lg text-[#e3e2e5]">The Sovereign Code of Hind Arabia</h2>
          </div>

          <div className="flex flex-col gap-2.5">
            {/* Pillar 1 */}
            <div className="bg-[#1b1c1e] border border-[#292a2c] rounded-xl p-3.5 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#121315] border border-[#292a2c] flex items-center justify-center text-[#f2ca50] shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[19px]">water_drop</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-title-md text-sm text-[#e3e2e5]">100% Pure Undiluted Oil (Zero Alcohol)</h3>
                <p className="text-xs text-[#d0c5af] leading-relaxed mt-0.5">
                  Cold distilled sacred botanical oils. Safe on precious silks and skin, lingering for days with zero synthetic fillers.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#1b1c1e] border border-[#292a2c] rounded-xl p-3.5 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#121315] border border-[#292a2c] flex items-center justify-center text-[#f2ca50] shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[19px]">science</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-title-md text-sm text-[#e3e2e5]">Matured in Teak &amp; Cut Crystal Carboys</h3>
                <p className="text-xs text-[#d0c5af] leading-relaxed mt-0.5">
                  Aged deep inside subterranean vault chambers beneath Muscat to achieve rounded balsamic sweetness and woody depth.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#1b1c1e] border border-[#292a2c] rounded-xl p-3.5 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#121315] border border-[#292a2c] flex items-center justify-center text-[#f2ca50] shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[19px]">shield</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-title-md text-sm text-[#e3e2e5]">Royal Court Heritage Since 1978</h3>
                <p className="text-xs text-[#d0c5af] leading-relaxed mt-0.5">
                  Four decades of crafting proprietary state gifts and private ceremony distillations for Arabian royalty and dignitary delegations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* By Royal Appointment Only: Private Salon */}
        <section className="bg-gradient-to-br from-[#1b1c1e] via-[#1f2022] to-[#121315] border border-[#d4af37]/40 rounded-2xl p-5 flex flex-col gap-3 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[#f2ca50]">
              <span className="material-symbols-outlined text-[16px]">stars</span>
              <span className="font-label-uppercase text-[10px] tracking-wider uppercase font-bold">
                By Royal Appointment Only
              </span>
            </div>
            <span className="text-[10px] text-[#d0c5af] font-medium bg-[#121315] px-2 py-0.5 rounded-full border border-[#292a2c]">
              Dubai &amp; Muscat
            </span>
          </div>

          <h2 className="font-headline-md text-xl text-[#e3e2e5]">Private Attar Blending Salon</h2>
          <p className="font-body-md text-xs text-[#d0c5af] leading-relaxed">
            Commission a bespoke signature flacon formulated exclusively for your body chemistry with Master Parfumeur Tariq Al-Hind.
          </p>

          <button
            type="button"
            onClick={onOpenVIPModal}
            className="w-full mt-1 py-3 px-4 rounded-lg bg-[#121315] hover:bg-[#292a2c] border border-[#d4af37]/50 text-[#f2ca50] font-title-md font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <span>Request VIP Audience</span>
            <span className="material-symbols-outlined text-[17px]">calendar_month</span>
          </button>
        </section>
      </div>
    </div>
  );
};
