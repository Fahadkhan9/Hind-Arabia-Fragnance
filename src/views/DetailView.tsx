import React, { useState } from 'react';
import { Fragrance } from '../data/fragrances';

interface DetailViewProps {
  fragrance: Fragrance;
  onBack: () => void;
  onAddToCart: (fragrance: Fragrance, volumeLabel: string, multiplier: number, price: number, walnutChest: boolean) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export const DetailView: React.FC<DetailViewProps> = ({
  fragrance,
  onBack,
  onAddToCart,
  isBookmarked,
  onToggleBookmark,
}) => {
  // Volume selection
  const [selectedVolumeIndex, setSelectedVolumeIndex] = useState<number>(2); // 1 Full Tola default
  const [chestAddon, setChestAddon] = useState<boolean>(false);
  const [activeTier, setActiveTier] = useState<number>(2); // Heart accord default
  const [showTolaExplainer, setShowTolaExplainer] = useState<boolean>(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);
  const [showToast, setShowToast] = useState<string | null>(null);

  const galleryImages = fragrance.gallery || [fragrance.image, fragrance.cardImage];

  const volumeOptions = [
    {
      id: 'quarter',
      name: '1/4 Tola (3ml)',
      subtitle: 'Intimate Discovery Vial',
      price: Math.round(fragrance.basePrice * 0.3) < 650 && fragrance.basePrice === 2400 ? 650 : Math.round(fragrance.basePrice * 0.3),
      multiplier: 0.3,
      badge: null,
    },
    {
      id: 'half',
      name: '1/2 Tola (6ml)',
      subtitle: 'Connoisseur Flacon',
      price: Math.round(fragrance.basePrice * 0.55) < 1250 && fragrance.basePrice === 2400 ? 1250 : Math.round(fragrance.basePrice * 0.55),
      multiplier: 0.55,
      badge: null,
    },
    {
      id: 'full',
      name: '1 Full Tola (12ml)',
      subtitle: 'Full Heirloom Crystal Decanter',
      price: fragrance.basePrice,
      multiplier: 1,
      badge: 'Royal Heritage',
    },
  ];

  const currentVolume = volumeOptions[selectedVolumeIndex];
  const chestPrice = chestAddon ? 250 : 0;
  const totalPrice = currentVolume.price + chestPrice;

  const handleAcquire = () => {
    onAddToCart(fragrance, currentVolume.name, currentVolume.multiplier, currentVolume.price, chestAddon);
    triggerToast(
      `Vault Decanter Reserved: ${fragrance.name} (${currentVolume.name}${chestAddon ? ' with Walnut Chest' : ''}) secured in private vault reserve.`
    );
  };

  const triggerToast = (msg: string) => {
    setShowToast(msg);
    setTimeout(() => {
      setShowToast(null);
    }, 3800);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${fragrance.name} | Hind Arabia`,
          text: `Experience ${fragrance.name} (${fragrance.subtitle}) by Hind Arabia Haute Perfumery.`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      triggerToast('Private fragrance link copied to clipboard.');
    }
  };

  const pyramid = fragrance.pyramid || {
    top: {
      title: 'Top Accord • 0 to 1 Hour',
      subtitle: 'Vibrant Flash',
      description: 'Cambodian Wild Plum, Dried Golden Honey, Saffron Blossom',
      tags: ['Wild Plum', 'Dried Honey', 'Red Saffron'],
    },
    heart: {
      title: 'Heart Accord • 1 to 8 Hours',
      subtitle: 'Resinous Core',
      description: '25-Yr Matured Agarwood, Unsweetened Dark Cocoa, Pipe Tobacco Smoke',
      tags: ['Cambodi Oud', 'Bitter Cocoa', 'Sweet Pipe Smoke'],
    },
    base: {
      title: 'Base Accord • 8 to 24+ Hours',
      subtitle: 'Eternal Dry-down',
      description: 'Fossilized Baltic Amber, Polished Royal Leather, Sweet Animalic Resin',
      tags: ['Fossil Amber', 'Aged Leather', 'Dark Ambergris'],
    },
  };

  const specs = fragrance.specs || {
    purity: '100% Pure Attar',
    alcohol: '0% Alcohol Denat',
    longevity: '24+ Hours',
    longevityDetail: 'Days on Silk & Wool',
    projection: 'Regal Halo',
    projectionDetail: 'Intimate, Never Loud',
    extraction: 'Vintage 1999',
    extractionDetail: 'Single Harvest Run',
  };

  return (
    <div className="flex flex-col w-full text-[#e3e2e5] pb-32">
      {/* Top Visual Showcase with Ambient Halo */}
      <div className="relative w-full overflow-hidden bg-[#0d0e10]">
        {/* Candlelight Specular Diffusion Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#f2ca50]/10 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-48 h-48 bg-[#eecb6c]/10 rounded-full blur-[70px] pointer-events-none" />

        {/* Quick Floating Action Overlay */}
        <div className="absolute top-3 right-4 z-20 flex items-center gap-2">
          <button
            type="button"
            aria-label="Share Fragrance"
            onClick={handleShare}
            className="w-10 h-10 rounded-full bg-[#1f2022]/80 backdrop-blur-md flex items-center justify-center text-[#d0c5af] hover:text-[#f2ca50] transition-colors shadow-lg active:scale-95 border border-[#292a2c]"
          >
            <span className="material-symbols-outlined text-[20px]">share</span>
          </button>
          <button
            type="button"
            aria-label="Add to Wishlist"
            onClick={() => onToggleBookmark(fragrance.id)}
            className="w-10 h-10 rounded-full bg-[#1f2022]/80 backdrop-blur-md flex items-center justify-center transition-transform shadow-lg active:scale-90 border border-[#292a2c]"
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={{
                fontVariationSettings: isBookmarked ? "'FILL' 1" : "'FILL' 0",
                color: isBookmarked ? '#f2ca50' : '#d0c5af',
              }}
            >
              favorite
            </span>
          </button>
        </div>

        {/* Hero Image Presentation */}
        <div className="relative w-full h-[400px] md:h-[480px] flex items-center justify-center px-4 pt-3 max-w-xl mx-auto">
          <img
            id="mainFlaconImg"
            src={galleryImages[activeGalleryIndex]}
            alt={fragrance.name}
            className="w-full h-full object-cover rounded-xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.9)] transition-all duration-500 ease-out border border-[#292a2c]"
            referrerPolicy="no-referrer"
          />

          {/* Crown Vintage Seal Ribbon */}
          <div className="absolute bottom-5 left-6 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b1c1e]/90 backdrop-blur-md border border-[#d4af37]/40 shadow-md">
            <span
              className="material-symbols-outlined text-[#f2ca50] text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              workspace_premium
            </span>
            <span className="font-label-uppercase text-label-uppercase text-[#f2ca50] tracking-widest uppercase font-bold text-[10px]">
              Reserve Millésime 1999
            </span>
          </div>
        </div>

        {/* Gallery Thumbnails Carousel */}
        <div className="flex items-center gap-3 px-4 py-4 overflow-x-auto max-w-xl mx-auto scrollbar-none">
          {galleryImages.map((img, idx) => {
            const isActive = activeGalleryIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveGalleryIndex(idx)}
                className={`thumb-btn relative shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-[#292a2c] transition-all duration-200 border ${
                  isActive
                    ? 'border-[#f2ca50] scale-105 shadow-[0_0_12px_rgba(242,202,80,0.4)] opacity-100'
                    : 'border-[#292a2c] opacity-60 hover:opacity-90'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {isActive && <div className="absolute inset-0 bg-[#f2ca50]/20 pointer-events-none" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Body */}
      <div className="px-4 md:px-8 max-w-xl mx-auto w-full pt-4 flex flex-col gap-6">
        {/* Title & Provenance Block */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-label-uppercase text-label-uppercase text-[#f2ca50] tracking-widest uppercase">
              Haute Parfumerie Royale
            </span>
            <span className="font-label-sm text-label-sm text-[#d0c5af] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50] animate-pulse" />
              Vault Reserve
            </span>
          </div>

          <h1 className="font-headline-lg-mobile text-2xl md:text-3xl text-[#e3e2e5] tracking-tight font-normal">
            {fragrance.name}
          </h1>

          <p className="font-body-md text-sm text-[#d0c5af] leading-relaxed">
            {fragrance.subtitle}
          </p>

          {/* Royal Collector Proof Row */}
          <div className="flex items-center justify-between pt-2 pb-2.5 bg-[#1b1c1e] border border-[#292a2c] px-3.5 py-2.5 rounded-xl shadow-sm">
            <div className="flex items-center gap-2">
              <div className="flex text-[#f2ca50]">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[17px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <span className="font-title-md text-sm text-[#e3e2e5] font-semibold">{fragrance.rating || '5.0'}</span>
              <span className="font-label-sm text-xs text-[#99907c]">
                ({fragrance.reviewsCount || '89'} royal patrons)
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-label-sm text-xs text-[#b9cac5]">
              <span className="material-symbols-outlined text-[16px] text-[#f2ca50]">verified</span>
              <span>{fragrance.batch || 'Batch #1999-RC'}</span>
            </div>
          </div>
        </div>

        {/* Origin & Terroir Micro-Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#1f2022] border border-[#292a2c] p-3 rounded-xl flex items-center gap-3 shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-[#292a2c] flex items-center justify-center text-[#f2ca50] shrink-0">
              <span className="material-symbols-outlined text-[20px]">explore</span>
            </div>
            <div className="min-w-0">
              <div className="font-label-uppercase text-[10px] text-[#99907c] tracking-wider uppercase truncate">
                Terroir
              </div>
              <div className="font-title-md text-xs md:text-sm text-[#e3e2e5] truncate font-medium">
                {fragrance.terroir || 'Koh Kong, Cambodia'}
              </div>
            </div>
          </div>

          <div className="bg-[#1f2022] border border-[#292a2c] p-3 rounded-xl flex items-center gap-3 shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-[#292a2c] flex items-center justify-center text-[#f2ca50] shrink-0">
              <span className="material-symbols-outlined text-[20px]">history_edu</span>
            </div>
            <div className="min-w-0">
              <div className="font-label-uppercase text-[10px] text-[#99907c] tracking-wider uppercase truncate">
                Distillation
              </div>
              <div className="font-title-md text-xs md:text-sm text-[#e3e2e5] truncate font-medium">
                {fragrance.distillation || 'Aged Hydro-Steam'}
              </div>
            </div>
          </div>
        </div>

        {/* Volume & Size Selection (Tola) */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-title-md text-sm md:text-base text-[#e3e2e5]">Select Vessel Volume</span>
            <button
              type="button"
              onClick={() => setShowTolaExplainer(!showTolaExplainer)}
              className="font-label-sm text-xs text-[#f2ca50] underline underline-offset-4 hover:text-[#ffe088]"
            >
              What is a Tola?
            </button>
          </div>

          {/* Tola Explainer Note */}
          {showTolaExplainer && (
            <div className="bg-[#1b1c1e] border border-[#d4af37]/30 p-3.5 rounded-xl text-[#d0c5af] font-body-md text-xs shadow-sm leading-relaxed">
              <p>
                A classical South Asian &amp; Arabian unit for rare attar oils. 1 Full Tola equals approximately 11.66 grams (12ml), traditionally dispensed by master distillers in heirloom crystal flacons.
              </p>
            </div>
          )}

          {/* Option Cards */}
          <div className="flex flex-col gap-2.5">
            {volumeOptions.map((opt, idx) => {
              const isSelected = selectedVolumeIndex === idx;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedVolumeIndex(idx)}
                  className={`w-full text-left p-3.5 rounded-xl flex items-center justify-between transition-all duration-200 border ${
                    isSelected
                      ? 'bg-[#292a2c] border-[#f2ca50]/60 shadow-[0_0_24px_rgba(242,202,80,0.15)]'
                      : 'bg-[#1f2022] border-[#292a2c] hover:border-[#4d4635]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-[#f2ca50]' : 'bg-[#343537]'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isSelected ? 'bg-[#3c2f00]' : 'bg-transparent'
                        }`}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-title-md text-sm ${
                            isSelected ? 'text-[#f2ca50] font-semibold' : 'text-[#e3e2e5]'
                          }`}
                        >
                          {opt.name}
                        </span>
                        {opt.badge && (
                          <span className="px-2 py-0.5 rounded-full bg-[#f2ca50]/20 text-[#f2ca50] font-label-uppercase text-[9px] tracking-wider uppercase font-bold">
                            {opt.badge}
                          </span>
                        )}
                      </div>
                      <div className="font-label-sm text-xs text-[#99907c]">{opt.subtitle}</div>
                    </div>
                  </div>
                  <span
                    className={`font-title-md text-sm ${
                      isSelected ? 'text-[#f2ca50] font-bold' : 'text-[#e3e2e5] font-semibold'
                    }`}
                  >
                    AED {opt.price.toLocaleString()}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Add-on Toggle: Walnut Chest */}
          <div className="bg-[#1b1c1e] border border-[#292a2c] p-3.5 rounded-xl flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-[#1f2022] flex items-center justify-center text-[#f2ca50] shrink-0 border border-[#292a2c]">
                <span className="material-symbols-outlined text-[22px]">inventory_2</span>
              </div>
              <div className="min-w-0">
                <div className="font-title-md text-sm text-[#e3e2e5] truncate">Hand-Carved Walnut Chest</div>
                <div className="font-label-sm text-xs text-[#99907c] truncate">
                  Raw silk lining with engraved crest (+AED 250)
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-label="Toggle Bespoke Walnut Chest"
              onClick={() => setChestAddon(!chestAddon)}
              className={`w-12 h-6 rounded-full p-0.5 transition-colors duration-300 relative shrink-0 ${
                chestAddon ? 'bg-[#d4af37]' : 'bg-[#343537]'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full bg-white shadow-md block transition-transform duration-300 ${
                  chestAddon ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Visual Olfactory Pyramid (Interactive Diagram) */}
        <div className="flex flex-col gap-3 bg-[#1b1c1e] border border-[#292a2c] p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#f2ca50] text-[20px]">filter_vintage</span>
              <span className="font-headline-sm text-base text-[#e3e2e5]">Olfactory Architecture</span>
            </div>
            <span className="font-label-sm text-xs text-[#99907c]">Dry-down progression</span>
          </div>

          {/* Interactive Accord Selector / Timeline */}
          <div className="flex flex-col gap-3 mt-1">
            {/* Top Notes Tier */}
            <div
              onClick={() => setActiveTier(1)}
              className={`tier-card p-3 rounded-lg cursor-pointer transition-all duration-200 border ${
                activeTier === 1
                  ? 'bg-[#292a2c] border-[#f2ca50]/50 shadow-[0_0_16px_rgba(242,202,80,0.12)]'
                  : 'bg-[#1f2022] border-[#292a2c]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#b9cac5]" />
                  <span className="font-label-uppercase text-[10px] text-[#b9cac5] tracking-wider uppercase">
                    {pyramid.top.title}
                  </span>
                </div>
                <span className="font-label-sm text-xs text-[#99907c]">{pyramid.top.subtitle}</span>
              </div>
              <p className="font-body-md text-xs md:text-sm text-[#e3e2e5] mb-2 font-medium">
                {pyramid.top.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {pyramid.top.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-full bg-[#292a2c] text-[#e3e2e5] font-label-sm text-[10px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Heart Notes Tier (Expanded/Highlighted by Default) */}
            <div
              onClick={() => setActiveTier(2)}
              className={`tier-card p-3 rounded-lg cursor-pointer transition-all duration-200 border ${
                activeTier === 2
                  ? 'bg-[#292a2c] border-[#f2ca50]/60 shadow-[0_0_16px_rgba(242,202,80,0.15)]'
                  : 'bg-[#1f2022] border-[#292a2c]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f2ca50] animate-pulse" />
                  <span className="font-label-uppercase text-[10px] text-[#f2ca50] tracking-wider uppercase font-semibold">
                    {pyramid.heart.title}
                  </span>
                </div>
                <span className="font-label-sm text-xs text-[#f2ca50] font-semibold">
                  {pyramid.heart.subtitle}
                </span>
              </div>
              <p className="font-body-md text-xs md:text-sm text-[#e3e2e5] mb-2 font-medium">
                {pyramid.heart.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {pyramid.heart.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-full bg-[#f2ca50]/20 text-[#f2ca50] font-label-sm text-[10px] border border-[#d4af37]/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Base Notes Tier */}
            <div
              onClick={() => setActiveTier(3)}
              className={`tier-card p-3 rounded-lg cursor-pointer transition-all duration-200 border ${
                activeTier === 3
                  ? 'bg-[#292a2c] border-[#f2ca50]/50 shadow-[0_0_16px_rgba(242,202,80,0.12)]'
                  : 'bg-[#1f2022] border-[#292a2c]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#eecb6c]" />
                  <span className="font-label-uppercase text-[10px] text-[#eecb6c] tracking-wider uppercase">
                    {pyramid.base.title}
                  </span>
                </div>
                <span className="font-label-sm text-xs text-[#99907c]">{pyramid.base.subtitle}</span>
              </div>
              <p className="font-body-md text-xs md:text-sm text-[#e3e2e5] mb-2 font-medium">
                {pyramid.base.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {pyramid.base.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-full bg-[#292a2c] text-[#e3e2e5] font-label-sm text-[10px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance & Specifications Grid */}
        <div className="flex flex-col gap-3">
          <span className="font-title-md text-sm text-[#e3e2e5]">Distillation &amp; Sillage Profile</span>
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-[#1f2022] border border-[#292a2c] p-3.5 rounded-xl flex flex-col gap-1 shadow-sm">
              <span className="font-label-uppercase text-[9px] text-[#99907c] tracking-wider uppercase">Purity</span>
              <span className="font-title-md text-sm text-[#e3e2e5] font-semibold">{specs.purity}</span>
              <span className="font-label-sm text-xs text-[#b9cac5]">{specs.alcohol}</span>
            </div>
            <div className="bg-[#1f2022] border border-[#292a2c] p-3.5 rounded-xl flex flex-col gap-1 shadow-sm">
              <span className="font-label-uppercase text-[9px] text-[#99907c] tracking-wider uppercase">Longevity</span>
              <span className="font-title-md text-sm text-[#e3e2e5] font-semibold">{specs.longevity}</span>
              <span className="font-label-sm text-xs text-[#b9cac5]">{specs.longevityDetail}</span>
            </div>
            <div className="bg-[#1f2022] border border-[#292a2c] p-3.5 rounded-xl flex flex-col gap-1 shadow-sm">
              <span className="font-label-uppercase text-[9px] text-[#99907c] tracking-wider uppercase">Projection</span>
              <span className="font-title-md text-sm text-[#e3e2e5] font-semibold">{specs.projection}</span>
              <span className="font-label-sm text-xs text-[#99907c]">{specs.projectionDetail}</span>
            </div>
            <div className="bg-[#1f2022] border border-[#292a2c] p-3.5 rounded-xl flex flex-col gap-1 shadow-sm">
              <span className="font-label-uppercase text-[9px] text-[#99907c] tracking-wider uppercase">Extraction</span>
              <span className="font-title-md text-sm text-[#e3e2e5] font-semibold">{specs.extraction}</span>
              <span className="font-label-sm text-xs text-[#99907c]">{specs.extractionDetail}</span>
            </div>
          </div>
        </div>

        {/* Application Ritual Guide */}
        <div className="bg-gradient-to-br from-[#292a2c] via-[#1f2022] to-[#1b1c1e] border border-[#d4af37]/30 p-4 rounded-xl flex flex-col gap-2.5 shadow-md">
          <div className="flex items-center gap-2 text-[#f2ca50]">
            <span className="material-symbols-outlined text-[20px]">spa</span>
            <span className="font-title-md text-sm tracking-wide">The Royal Application Ritual</span>
          </div>
          <p className="font-body-md text-xs text-[#d0c5af] leading-relaxed italic">
            “Withdraw the crystal wand and gently dab a micro-drop to the pulse points at the base of the throat, inner wrists, and behind earlobes. Allow skin warmth to slowly awaken the dormant 25-year wood resins without aggressive friction.”
          </p>
        </div>

        {/* Heritage Guarantee Card */}
        <div className="bg-[#0d0e10] border border-[#292a2c] p-4 rounded-xl flex items-center gap-3.5 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#f2ca50]/10 flex items-center justify-center text-[#f2ca50] shrink-0 border border-[#d4af37]/20">
            <span className="material-symbols-outlined text-[26px]">verified_user</span>
          </div>
          <div className="flex flex-col">
            <span className="font-title-md text-sm text-[#e3e2e5]">Hind Arabia Sovereign Certificate</span>
            <span className="font-body-md text-xs text-[#99907c] mt-0.5 leading-snug">
              Each decanter arrives sealed with hot wax and a hand-signed Certificate of Provenance from our Master Distiller.
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Sovereign CTA Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#121315]/95 backdrop-blur-xl px-4 py-3 pb-safe shadow-[0_-8px_32px_rgba(0,0,0,0.7)] border-t border-[#292a2c]">
        <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
          {/* Price Output */}
          <div className="flex flex-col">
            <span className="font-label-uppercase text-[9px] text-[#99907c] tracking-wider uppercase">
              Total Investment
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-headline-md text-xl text-[#f2ca50] font-bold">
                AED {totalPrice.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Sovereign CTA Button */}
          <button
            type="button"
            onClick={handleAcquire}
            className="flex-1 h-12 bg-[#f2ca50] hover:bg-[#ffe088] text-[#3c2f00] rounded-lg font-title-md text-xs md:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(242,202,80,0.35)] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[19px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              lock
            </span>
            <span>Acquire Flacon</span>
          </button>
        </div>
      </div>

      {/* Acquisition Toast Modal */}
      {showToast && (
        <div className="fixed inset-x-4 bottom-24 z-50 max-w-md mx-auto bg-[#343537] border border-[#d4af37] p-4 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-300">
          <div className="w-10 h-10 rounded-full bg-[#f2ca50] flex items-center justify-center text-[#3c2f00] shrink-0">
            <span className="material-symbols-outlined text-[22px]">check</span>
          </div>
          <div className="flex flex-col">
            <span className="font-title-md text-sm text-[#e3e2e5]">Vault Decanter Reserved</span>
            <span className="font-label-sm text-xs text-[#d0c5af]">{showToast}</span>
          </div>
        </div>
      )}
    </div>
  );
};
