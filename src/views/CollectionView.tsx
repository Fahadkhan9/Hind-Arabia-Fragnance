import React, { useState } from 'react';
import { FRAGRANCES, Fragrance } from '../data/fragrances';

interface CollectionViewProps {
  onSelectFragrance: (fragrance: Fragrance) => void;
  onAddToCart: (fragrance: Fragrance, volumeLabel: string, multiplier: number, price: number) => void;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (id: string) => void;
  initialFilter?: string;
}

export const CollectionView: React.FC<CollectionViewProps> = ({
  onSelectFragrance,
  onAddToCart,
  bookmarkedIds,
  onToggleBookmark,
  initialFilter = 'all',
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>(initialFilter);
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

  // Track selected size for each card
  const [selectedSizes, setSelectedSizes] = useState<Record<string, { label: string; multiplier: number }>>({
    'royal-cambodi-supreme': { label: '1 Tola (12ml)', multiplier: 1 },
    'taif-rose-sultan': { label: '1 Tola (12ml)', multiplier: 1 },
    'mukhallat-al-diwan': { label: '1 Tola (12ml)', multiplier: 1 },
    'amber-ash-sharq': { label: '1 Tola (12ml)', multiplier: 1 },
    'misk-al-khatam': { label: '1 Tola (12ml)', multiplier: 1 },
  });

  const filterCategories = [
    { id: 'all', label: 'All Blends (38)' },
    { id: 'Pure Dehn Al Oud', label: 'Pure Dehn Al Oud' },
    { id: 'Mukhallat Royal', label: 'Mukhallat Royal' },
    { id: 'Pure Taif Rose', label: 'Pure Taif Rose' },
    { id: 'Amber & Resins', label: 'Amber & Resins' },
    { id: 'Rare Musk', label: 'Rare Musk' },
  ];

  const filtered = FRAGRANCES.filter((f) => {
    if (selectedFilter === 'all') return true;
    return f.category === selectedFilter;
  }).sort((a, b) => {
    if (sortOrder === 'desc') return b.basePrice - a.basePrice;
    return a.basePrice - b.basePrice;
  });

  const getEffectivePrice = (fragrance: Fragrance) => {
    const size = selectedSizes[fragrance.id] || { multiplier: 1 };
    return Math.round(fragrance.basePrice * size.multiplier);
  };

  const handleSelectSize = (fragranceId: string, label: string, multiplier: number) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [fragranceId]: { label, multiplier },
    }));
  };

  const toggleSort = () => {
    setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'));
  };

  return (
    <div className="flex flex-col w-full text-[#e3e2e5] pb-28">
      <div className="px-4 md:px-8 max-w-3xl mx-auto w-full flex flex-col gap-5 pt-3">
        {/* Editorial Collection Banner & Introduction */}
        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50] shadow-[0_0_8px_rgba(242,202,80,0.8)]" />
            <span className="font-label-uppercase text-label-uppercase tracking-[0.2em] text-[#f2ca50]">
              Haute Parfumerie Royale
            </span>
          </div>
          <h1 className="font-headline-md text-headline-md text-[#e3e2e5] tracking-tight font-normal">
            The Sovereign Collection
          </h1>
          <p className="font-body-md text-body-md text-[#d0c5af] max-w-[62ch]">
            Pure, alcohol-free concentrated perfume oils crafted for profound longevity and intimate sillage. Extracted by master distillers in copper alembics.
          </p>
        </section>

        {/* Filter & Classification Scroll Ribbon */}
        <section className="w-full flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[#d0c5af]">
              <span className="material-symbols-outlined text-[18px] text-[#f2ca50]">filter_vintage</span>
              <span className="font-label-uppercase text-[10px] tracking-wider uppercase">
                Curated by Provenance
              </span>
            </div>
            <button
              type="button"
              id="sortToggle"
              onClick={toggleSort}
              className="flex items-center gap-1 text-[#f2ca50] bg-[#292a2c] hover:bg-[#343537] px-3 py-1 rounded-full text-label-sm font-label-sm active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[15px]">swap_vert</span>
              <span>{sortOrder === 'desc' ? 'Price: High to Low' : 'Price: Low to High'}</span>
            </button>
          </div>

          {/* Horizontal Pill Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 -mx-1 px-1">
            {filterCategories.map((cat) => {
              const isActive = selectedFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`filter-chip flex-shrink-0 px-3.5 py-1.5 rounded-full font-label-sm text-label-sm transition-all ${
                    isActive
                      ? 'bg-[#f2ca50] text-[#3c2f00] font-semibold shadow-[0_0_14px_rgba(212,175,55,0.35)]'
                      : 'bg-[#1b1c1e] text-[#d0c5af] hover:text-[#f2ca50] border border-[#292a2c]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Attar Product Showcase */}
        <section className="flex flex-col gap-5">
          {/* Card 1: Royal Cambodi Supreme */}
          {filtered.some((f) => f.id === 'royal-cambodi-supreme') && (() => {
            const f = FRAGRANCES.find((x) => x.id === 'royal-cambodi-supreme')!;
            const currentSize = selectedSizes[f.id] || { label: '1 Tola (12ml)', multiplier: 1 };
            const effectivePrice = Math.round(f.basePrice * currentSize.multiplier);
            const isBookmarked = bookmarkedIds.has(f.id);

            return (
              <article
                key={f.id}
                className="product-card group relative bg-[#1b1c1e] border border-[#292a2c] hover:border-[#f2ca50]/40 rounded-xl p-4 flex flex-col gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300"
              >
                {/* Image Container */}
                <div
                  onClick={() => onSelectFragrance(f)}
                  className="relative w-full h-56 rounded-lg overflow-hidden bg-[#0d0e10] flex items-center justify-center cursor-pointer"
                >
                  <img
                    src={f.cardImage}
                    alt={f.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1e] via-transparent to-black/30 pointer-events-none" />

                  {/* Royal Seal Badge */}
                  <div className="absolute top-3 left-3 bg-[#d4af37]/90 backdrop-blur-md text-[#3c2f00] px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                    <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      stars
                    </span>
                    <span className="font-label-uppercase text-[10px] tracking-widest uppercase font-bold">
                      Masterpiece
                    </span>
                  </div>

                  <button
                    type="button"
                    aria-label="Add to Wishlist"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(f.id);
                    }}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0d0e10]/70 backdrop-blur-md flex items-center justify-center transition-colors active:scale-90"
                  >
                    <span
                      className="material-symbols-outlined text-[17px]"
                      style={{
                        fontVariationSettings: isBookmarked ? "'FILL' 1" : "'FILL' 0",
                        color: isBookmarked ? '#f2ca50' : '#ffe088',
                      }}
                    >
                      bookmark
                    </span>
                  </button>

                  <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 bg-[#0d0e10]/80 px-2 py-0.5 rounded-md backdrop-blur-sm border border-[#292a2c]">
                    <span className="material-symbols-outlined text-[13px] text-[#f2ca50]">find_replace</span>
                    <span className="font-label-sm text-[11px] text-[#ffe088]">Aged 25 Years</span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-label-uppercase text-label-uppercase tracking-[0.16em] text-[#f2ca50]">
                      {f.classification}
                    </span>
                    <span className="font-label-sm text-label-sm text-[#d0c5af] font-medium">Batch #1999</span>
                  </div>
                  <h3
                    onClick={() => onSelectFragrance(f)}
                    className="font-headline-sm text-headline-sm text-[#e3e2e5] leading-tight cursor-pointer hover:text-[#f2ca50] transition-colors"
                  >
                    {f.name}
                  </h3>
                  <p className="font-body-md text-body-md text-[#d0c5af] line-clamp-2">
                    {f.description}
                  </p>

                  {/* Olfactory Note Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {f.notes.map((note) => (
                      <span
                        key={note}
                        className="px-2 py-0.5 rounded-full bg-[#292a2c] text-[#d0c5af] text-[11px] font-label-sm"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tola Measure Selector */}
                <div className="flex items-center justify-between pt-2">
                  <span className="font-label-sm text-label-sm text-[#d0c5af]">Measure:</span>
                  <div className="size-selector flex items-center gap-1 bg-[#292a2c] p-1 rounded-lg text-[11px] font-label-sm font-medium">
                    <button
                      type="button"
                      onClick={() => handleSelectSize(f.id, '1/4 Tola (3ml)', 0.3)}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        currentSize.multiplier === 0.3
                          ? 'bg-[#0d0e10] text-[#f2ca50] shadow-sm font-semibold'
                          : 'text-[#d0c5af] hover:text-[#e3e2e5]'
                      }`}
                    >
                      1/4 Tola
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectSize(f.id, '1/2 Tola (6ml)', 0.55)}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        currentSize.multiplier === 0.55
                          ? 'bg-[#0d0e10] text-[#f2ca50] shadow-sm font-semibold'
                          : 'text-[#d0c5af] hover:text-[#e3e2e5]'
                      }`}
                    >
                      1/2 Tola
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectSize(f.id, '1 Tola (12ml)', 1)}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        currentSize.multiplier === 1
                          ? 'bg-[#0d0e10] text-[#f2ca50] shadow-sm font-semibold'
                          : 'text-[#d0c5af] hover:text-[#e3e2e5]'
                      }`}
                    >
                      1 Tola (12ml)
                    </button>
                  </div>
                </div>

                {/* Price & Purchase CTA */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="font-label-uppercase text-[10px] text-[#d0c5af] block uppercase tracking-wider">
                      Royal Reserve
                    </span>
                    <span className="price-display font-title-lg text-title-lg font-bold text-[#f2ca50] tracking-wide">
                      AED {effectivePrice.toLocaleString()}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onAddToCart(f, currentSize.label, currentSize.multiplier, effectivePrice)}
                    className="add-to-pouch-btn flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#f2ca50] hover:bg-[#ffe088] text-[#3c2f00] font-title-md text-title-md font-semibold tracking-wider transition-all shadow-[0_0_18px_rgba(212,175,55,0.25)] active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                    <span>Acquire</span>
                  </button>
                </div>
              </article>
            );
          })()}

          {/* Card 2: Taif Rose Sultan */}
          {filtered.some((f) => f.id === 'taif-rose-sultan') && (() => {
            const f = FRAGRANCES.find((x) => x.id === 'taif-rose-sultan')!;
            const currentSize = selectedSizes[f.id] || { label: '1 Tola (12ml)', multiplier: 1 };
            const effectivePrice = Math.round(f.basePrice * currentSize.multiplier);
            const isBookmarked = bookmarkedIds.has(f.id);

            return (
              <article
                key={f.id}
                className="product-card group relative bg-[#1b1c1e] border border-[#292a2c] hover:border-[#f2ca50]/40 rounded-xl p-4 flex flex-col gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300"
              >
                <div
                  onClick={() => onSelectFragrance(f)}
                  className="relative w-full h-52 rounded-lg overflow-hidden bg-[#0d0e10] flex items-center justify-center cursor-pointer"
                >
                  <img
                    src={f.cardImage}
                    alt={f.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1e] via-transparent to-black/30 pointer-events-none" />

                  <div className="absolute top-3 left-3 bg-[#343537]/90 backdrop-blur-md text-[#f2ca50] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">spa</span>
                    <span className="font-label-uppercase text-[10px] tracking-widest uppercase font-semibold">
                      Seasonal
                    </span>
                  </div>

                  <button
                    type="button"
                    aria-label="Add to Wishlist"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(f.id);
                    }}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0d0e10]/70 backdrop-blur-md flex items-center justify-center transition-colors active:scale-90"
                  >
                    <span
                      className="material-symbols-outlined text-[17px]"
                      style={{
                        fontVariationSettings: isBookmarked ? "'FILL' 1" : "'FILL' 0",
                        color: isBookmarked ? '#f2ca50' : '#ffe088',
                      }}
                    >
                      bookmark
                    </span>
                  </button>

                  <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 bg-[#0d0e10]/80 px-2 py-0.5 rounded-md backdrop-blur-sm border border-[#292a2c]">
                    <span className="font-label-sm text-[11px] text-[#ffe088]">Al Hada Mountain Harvest</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-label-uppercase text-label-uppercase tracking-[0.16em] text-[#f2ca50]">
                      {f.classification}
                    </span>
                    <span className="font-label-sm text-label-sm text-[#d0c5af] font-medium">100% Pure</span>
                  </div>
                  <h3
                    onClick={() => onSelectFragrance(f)}
                    className="font-headline-sm text-headline-sm text-[#e3e2e5] leading-tight cursor-pointer hover:text-[#f2ca50] transition-colors"
                  >
                    {f.name}
                  </h3>
                  <p className="font-body-md text-body-md text-[#d0c5af] line-clamp-2">
                    {f.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {f.notes.map((note) => (
                      <span
                        key={note}
                        className="px-2 py-0.5 rounded-full bg-[#292a2c] text-[#d0c5af] text-[11px] font-label-sm"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-label-sm text-label-sm text-[#d0c5af]">Measure:</span>
                  <div className="size-selector flex items-center gap-1 bg-[#292a2c] p-1 rounded-lg text-[11px] font-label-sm font-medium">
                    <button
                      type="button"
                      onClick={() => handleSelectSize(f.id, '1/4 Tola (3ml)', 0.3)}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        currentSize.multiplier === 0.3
                          ? 'bg-[#0d0e10] text-[#f2ca50] shadow-sm font-semibold'
                          : 'text-[#d0c5af] hover:text-[#e3e2e5]'
                      }`}
                    >
                      1/4 Tola
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectSize(f.id, '1/2 Tola (6ml)', 0.55)}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        currentSize.multiplier === 0.55
                          ? 'bg-[#0d0e10] text-[#f2ca50] shadow-sm font-semibold'
                          : 'text-[#d0c5af] hover:text-[#e3e2e5]'
                      }`}
                    >
                      1/2 Tola
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectSize(f.id, '1 Tola (12ml)', 1)}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        currentSize.multiplier === 1
                          ? 'bg-[#0d0e10] text-[#f2ca50] shadow-sm font-semibold'
                          : 'text-[#d0c5af] hover:text-[#e3e2e5]'
                      }`}
                    >
                      1 Tola (12ml)
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="font-label-uppercase text-[10px] text-[#d0c5af] block uppercase tracking-wider">
                      Artisanal Extract
                    </span>
                    <span className="price-display font-title-lg text-title-lg font-bold text-[#f2ca50] tracking-wide">
                      AED {effectivePrice.toLocaleString()}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onAddToCart(f, currentSize.label, currentSize.multiplier, effectivePrice)}
                    className="add-to-pouch-btn flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#f2ca50] hover:bg-[#ffe088] text-[#3c2f00] font-title-md text-title-md font-semibold tracking-wider transition-all shadow-[0_0_18px_rgba(212,175,55,0.25)] active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                    <span>Acquire</span>
                  </button>
                </div>
              </article>
            );
          })()}

          {/* Card 3: Mukhallat Al-Diwan */}
          {filtered.some((f) => f.id === 'mukhallat-al-diwan') && (() => {
            const f = FRAGRANCES.find((x) => x.id === 'mukhallat-al-diwan')!;
            const currentSize = selectedSizes[f.id] || { label: '1 Tola (12ml)', multiplier: 1 };
            const effectivePrice = Math.round(f.basePrice * currentSize.multiplier);
            const isBookmarked = bookmarkedIds.has(f.id);

            return (
              <article
                key={f.id}
                className="product-card group relative bg-[#1b1c1e] border border-[#292a2c] hover:border-[#f2ca50]/40 rounded-xl p-4 flex flex-col gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300"
              >
                <div
                  onClick={() => onSelectFragrance(f)}
                  className="relative w-full h-52 rounded-lg overflow-hidden bg-[#0d0e10] flex items-center justify-center cursor-pointer"
                >
                  <img
                    src={f.cardImage}
                    alt={f.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1e] via-transparent to-black/30 pointer-events-none" />

                  <div className="absolute top-3 left-3 bg-[#3a4a46]/90 backdrop-blur-md text-[#a8b9b4] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">military_tech</span>
                    <span className="font-label-uppercase text-[10px] tracking-widest uppercase font-semibold">
                      Palace Blend
                    </span>
                  </div>

                  <button
                    type="button"
                    aria-label="Add to Wishlist"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(f.id);
                    }}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0d0e10]/70 backdrop-blur-md flex items-center justify-center transition-colors active:scale-90"
                  >
                    <span
                      className="material-symbols-outlined text-[17px]"
                      style={{
                        fontVariationSettings: isBookmarked ? "'FILL' 1" : "'FILL' 0",
                        color: isBookmarked ? '#f2ca50' : '#ffe088',
                      }}
                    >
                      bookmark
                    </span>
                  </button>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-label-uppercase text-label-uppercase tracking-[0.16em] text-[#f2ca50]">
                      {f.classification}
                    </span>
                    <span className="font-label-sm text-label-sm text-[#d0c5af] font-medium">Bespoke</span>
                  </div>
                  <h3
                    onClick={() => onSelectFragrance(f)}
                    className="font-headline-sm text-headline-sm text-[#e3e2e5] leading-tight cursor-pointer hover:text-[#f2ca50] transition-colors"
                  >
                    {f.name}
                  </h3>
                  <p className="font-body-md text-body-md text-[#d0c5af] line-clamp-2">
                    {f.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {f.notes.map((note) => (
                      <span
                        key={note}
                        className="px-2 py-0.5 rounded-full bg-[#292a2c] text-[#d0c5af] text-[11px] font-label-sm"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-label-sm text-label-sm text-[#d0c5af]">Measure:</span>
                  <div className="size-selector flex items-center gap-1 bg-[#292a2c] p-1 rounded-lg text-[11px] font-label-sm font-medium">
                    <button
                      type="button"
                      onClick={() => handleSelectSize(f.id, '1/4 Tola (3ml)', 0.3)}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        currentSize.multiplier === 0.3
                          ? 'bg-[#0d0e10] text-[#f2ca50] shadow-sm font-semibold'
                          : 'text-[#d0c5af] hover:text-[#e3e2e5]'
                      }`}
                    >
                      1/4 Tola
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectSize(f.id, '1/2 Tola (6ml)', 0.55)}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        currentSize.multiplier === 0.55
                          ? 'bg-[#0d0e10] text-[#f2ca50] shadow-sm font-semibold'
                          : 'text-[#d0c5af] hover:text-[#e3e2e5]'
                      }`}
                    >
                      1/2 Tola
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectSize(f.id, '1 Tola (12ml)', 1)}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        currentSize.multiplier === 1
                          ? 'bg-[#0d0e10] text-[#f2ca50] shadow-sm font-semibold'
                          : 'text-[#d0c5af] hover:text-[#e3e2e5]'
                      }`}
                    >
                      1 Tola (12ml)
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="font-label-uppercase text-[10px] text-[#d0c5af] block uppercase tracking-wider">
                      Noble Blend
                    </span>
                    <span className="price-display font-title-lg text-title-lg font-bold text-[#f2ca50] tracking-wide">
                      AED {effectivePrice.toLocaleString()}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onAddToCart(f, currentSize.label, currentSize.multiplier, effectivePrice)}
                    className="add-to-pouch-btn flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#f2ca50] hover:bg-[#ffe088] text-[#3c2f00] font-title-md text-title-md font-semibold tracking-wider transition-all shadow-[0_0_18px_rgba(212,175,55,0.25)] active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                    <span>Acquire</span>
                  </button>
                </div>
              </article>
            );
          })()}

          {/* Two Column Sub-Grid: Amber Ash-Sharq & Misk Al-Khatam */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 4: Amber Ash-Sharq */}
            {filtered.some((f) => f.id === 'amber-ash-sharq') && (() => {
              const f = FRAGRANCES.find((x) => x.id === 'amber-ash-sharq')!;
              const isBookmarked = bookmarkedIds.has(f.id);

              return (
                <article
                  key={f.id}
                  className="product-card group relative bg-[#1b1c1e] border border-[#292a2c] hover:border-[#f2ca50]/40 rounded-xl p-3.5 flex flex-col gap-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all"
                >
                  <div
                    onClick={() => onSelectFragrance(f)}
                    className="relative w-full h-40 rounded-lg overflow-hidden bg-[#0d0e10] flex items-center justify-center cursor-pointer"
                  >
                    <img
                      src={f.cardImage}
                      alt={f.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1e] via-transparent to-black/20 pointer-events-none" />
                    <button
                      type="button"
                      aria-label="Add to Wishlist"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(f.id);
                      }}
                      className="absolute top-2 right-2 w-7 h-7 rounded-full bg-[#0d0e10]/70 backdrop-blur-md flex items-center justify-center transition-colors active:scale-90"
                    >
                      <span
                        className="material-symbols-outlined text-[15px]"
                        style={{
                          fontVariationSettings: isBookmarked ? "'FILL' 1" : "'FILL' 0",
                          color: isBookmarked ? '#f2ca50' : '#ffe088',
                        }}
                      >
                        bookmark
                      </span>
                    </button>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-label-uppercase text-[10px] tracking-[0.14em] text-[#f2ca50]">
                      {f.classification}
                    </span>
                    <h4
                      onClick={() => onSelectFragrance(f)}
                      className="font-headline-sm text-title-lg text-[#e3e2e5] leading-snug cursor-pointer hover:text-[#f2ca50] transition-colors"
                    >
                      {f.name}
                    </h4>
                    <p className="font-body-md text-[13px] text-[#d0c5af] line-clamp-2">
                      {f.description}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {f.notes.map((note) => (
                        <span
                          key={note}
                          className="px-2 py-0.5 rounded-full bg-[#292a2c] text-[#d0c5af] text-[10px] font-label-sm"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="font-label-uppercase text-[9px] text-[#d0c5af] block uppercase">Per Tola</span>
                      <span className="price-display font-title-md text-title-md font-bold text-[#f2ca50]">
                        AED {f.basePrice.toLocaleString()}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onAddToCart(f, '1 Tola (12ml)', 1, f.basePrice)}
                      className="add-to-pouch-btn px-3 py-1.5 rounded-lg bg-[#292a2c] hover:bg-[#f2ca50] hover:text-[#3c2f00] text-[#f2ca50] transition-all font-label-sm text-label-sm font-semibold flex items-center gap-1 active:scale-95"
                    >
                      <span className="material-symbols-outlined text-[15px]">add</span>
                      <span>Bag</span>
                    </button>
                  </div>
                </article>
              );
            })()}

            {/* Card 5: Misk Al-Khatam */}
            {filtered.some((f) => f.id === 'misk-al-khatam') && (() => {
              const f = FRAGRANCES.find((x) => x.id === 'misk-al-khatam')!;
              const isBookmarked = bookmarkedIds.has(f.id);

              return (
                <article
                  key={f.id}
                  className="product-card group relative bg-[#1b1c1e] border border-[#292a2c] hover:border-[#f2ca50]/40 rounded-xl p-3.5 flex flex-col gap-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all"
                >
                  <div
                    onClick={() => onSelectFragrance(f)}
                    className="relative w-full h-40 rounded-lg overflow-hidden bg-[#0d0e10] flex items-center justify-center cursor-pointer"
                  >
                    <img
                      src={f.cardImage}
                      alt={f.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1e] via-transparent to-black/20 pointer-events-none" />
                    <button
                      type="button"
                      aria-label="Add to Wishlist"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(f.id);
                      }}
                      className="absolute top-2 right-2 w-7 h-7 rounded-full bg-[#0d0e10]/70 backdrop-blur-md flex items-center justify-center transition-colors active:scale-90"
                    >
                      <span
                        className="material-symbols-outlined text-[15px]"
                        style={{
                          fontVariationSettings: isBookmarked ? "'FILL' 1" : "'FILL' 0",
                          color: isBookmarked ? '#f2ca50' : '#ffe088',
                        }}
                      >
                        bookmark
                      </span>
                    </button>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="font-label-uppercase text-[10px] tracking-[0.14em] text-[#f2ca50]">
                      {f.classification}
                    </span>
                    <h4
                      onClick={() => onSelectFragrance(f)}
                      className="font-headline-sm text-title-lg text-[#e3e2e5] leading-snug cursor-pointer hover:text-[#f2ca50] transition-colors"
                    >
                      {f.name}
                    </h4>
                    <p className="font-body-md text-[13px] text-[#d0c5af] line-clamp-2">
                      {f.description}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {f.notes.map((note) => (
                        <span
                          key={note}
                          className="px-2 py-0.5 rounded-full bg-[#292a2c] text-[#d0c5af] text-[10px] font-label-sm"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="font-label-uppercase text-[9px] text-[#d0c5af] block uppercase">Per Tola</span>
                      <span className="price-display font-title-md text-title-md font-bold text-[#f2ca50]">
                        AED {f.basePrice.toLocaleString()}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onAddToCart(f, '1 Tola (12ml)', 1, f.basePrice)}
                      className="add-to-pouch-btn px-3 py-1.5 rounded-lg bg-[#292a2c] hover:bg-[#f2ca50] hover:text-[#3c2f00] text-[#f2ca50] transition-all font-label-sm text-label-sm font-semibold flex items-center gap-1 active:scale-95"
                    >
                      <span className="material-symbols-outlined text-[15px]">add</span>
                      <span>Bag</span>
                    </button>
                  </div>
                </article>
              );
            })()}
          </div>
        </section>

        {/* Olfactory Pyramid Accordion Teaser: The Anatomy of an Attar */}
        <section className="pb-2">
          <div className="bg-[#1b1c1e] border border-[#292a2c] rounded-xl p-4 flex flex-col gap-3 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#f2ca50] text-[20px]">architecture</span>
                <h4 className="font-title-md text-title-md text-[#e3e2e5]">The Anatomy of an Attar</h4>
              </div>
              <span className="font-label-uppercase text-[10px] text-[#f2ca50] tracking-widest uppercase">
                Skin Evolution
              </span>
            </div>

            {/* Visual Dry-Down Stepper */}
            <div className="flex flex-col gap-2 pt-1 relative">
              <div className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffe088] shadow-[0_0_6px_rgba(242,202,80,0.6)]" />
                  <span className="w-0.5 h-7 bg-[#343537] my-0.5" />
                </div>
                <div className="flex-1 pb-1">
                  <span className="font-label-uppercase text-[10px] text-[#f2ca50]">
                    Phase 1: Initial Touch (0–30 Mins)
                  </span>
                  <p className="font-body-md text-[13px] text-[#d0c5af]">
                    Top essences bloom via body warmth; pure Taif rose and fiery saffron shimmer.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
                  <span className="w-0.5 h-7 bg-[#343537] my-0.5" />
                </div>
                <div className="flex-1 pb-1">
                  <span className="font-label-uppercase text-[10px] text-[#f2ca50]">
                    Phase 2: Heart Harmony (1–4 Hours)
                  </span>
                  <p className="font-body-md text-[13px] text-[#d0c5af]">
                    Resins meld with epidermis, exuding golden honey, aged woods, and herbal tea.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#564300]" />
                </div>
                <div className="flex-1">
                  <span className="font-label-uppercase text-[10px] text-[#f2ca50]">
                    Phase 3: Deep Sillage (6–24+ Hours)
                  </span>
                  <p className="font-body-md text-[13px] text-[#d0c5af]">
                    Animalic wild oud, ambergris, and velvet musk cling intimately until sunrise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complimentary Silk Box Banner Notification */}
        <section className="pb-3">
          <div className="relative overflow-hidden bg-gradient-to-r from-[#292a2c] via-[#1f2022] to-[#292a2c] border border-[#d4af37]/30 rounded-xl p-4 flex items-center gap-3 shadow-lg">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex-shrink-0 flex items-center justify-center text-[#f2ca50]">
              <span className="material-symbols-outlined text-[22px]">redeem</span>
            </div>
            <div className="flex-1 flex flex-col">
              <span className="font-label-uppercase text-[10px] text-[#f2ca50] tracking-widest uppercase font-semibold">
                Royal Privilege
              </span>
              <p className="font-body-md text-[13px] text-[#e3e2e5] leading-snug">
                Complimentary Handcrafted Silk-Lined Presentation Box on all bespoke orders above{' '}
                <span className="font-bold text-[#f2ca50]">AED 1,000</span>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
