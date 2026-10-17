import React, { useState } from 'react';
import { FRAGRANCES, Fragrance } from '../data/fragrances';

interface DiscoveryViewProps {
  onSelectFragrance: (fragrance: Fragrance) => void;
  onNavigateTab: (tab: 'collection' | 'vault') => void;
  onOpenVIPModal: () => void;
}

interface AtmosphereOption {
  id: string;
  title: string;
  icon: string;
  description: string;
  tags: string[];
  flaconName: string;
  matchPercent: number;
  fragranceId: string;
}

export const DiscoveryView: React.FC<DiscoveryViewProps> = ({
  onSelectFragrance,
  onNavigateTab,
  onOpenVIPModal,
}) => {
  const [selectedAtmosphereId, setSelectedAtmosphereId] = useState<string>('majlis');
  const [selectedSillage, setSelectedSillage] = useState<string>('Noble Presence');
  const [selectedReverie, setSelectedReverie] = useState<string>('Evening Gala');
  const [revealed, setRevealed] = useState<boolean>(false);

  const atmosphereOptions: AtmosphereOption[] = [
    {
      id: 'majlis',
      title: 'Midnight Majlis in the Desert',
      icon: 'verified',
      description:
        'Deep smoky oud, burning aromatic bakhoor, rich supple leather cushions, and golden threads of wild saffron.',
      tags: ['Mysterious', 'Majestic', 'Dominant'],
      flaconName: 'Dehn Al Oud Kalakassi & Royal Taif Mukhallat',
      matchPercent: 96,
      fragranceId: 'dehn-al-oud-kalakassi-1984',
    },
    {
      id: 'rose-garden',
      title: 'Sultan’s Dawn Rose Garden',
      icon: 'spa',
      description:
        'Dew-covered Taif roses picked at dawn, blossoming white jasmine petals, crisp desert morning air, and sweet solar amber.',
      tags: ['Romantic', 'Regal', 'Radiant'],
      flaconName: 'Pure Taif Rose Otto & Ambergris Nectar',
      matchPercent: 89,
      fragranceId: 'taif-rose-sultan',
    },
    {
      id: 'spice-vault',
      title: 'Ancient Silk Route Spice Vault',
      icon: 'account_balance',
      description:
        'Rare balsam tears, green Hojari frankincense, warm fossilized amber, Ceylon cinnamon bark, and smoked Bourbon vanilla pods.',
      tags: ['Warm', 'Enveloping', 'Sacred'],
      flaconName: 'Royal Hojari Frankincense & Amber Noir',
      matchPercent: 92,
      fragranceId: 'amber-ash-sharq',
    },
    {
      id: 'white-linen',
      title: 'Imperial Palace White Linen',
      icon: 'diamond',
      description:
        'Silken white musk, clean powdery royal lilies, creamy aged Mysore sandalwood, and tactile warmth of spun cashmere.',
      tags: ['Pure', 'Serene', 'Aristocratic'],
      flaconName: 'Imperial Mysore White Sandalwood & Cashmere',
      matchPercent: 84,
      fragranceId: 'misk-al-khatam',
    },
  ];

  const currentOption =
    atmosphereOptions.find((opt) => opt.id === selectedAtmosphereId) || atmosphereOptions[0];

  // SVG circular match calculations (radius 18 => circumference ~ 113.097)
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (currentOption.matchPercent / 100) * circumference;

  const matchedFragrance =
    FRAGRANCES.find((f) => f.id === currentOption.fragranceId) || FRAGRANCES[0];

  return (
    <div className="flex flex-col w-full text-[#e3e2e5] pb-28">
      <div className="px-4 md:px-8 max-w-xl mx-auto w-full flex flex-col gap-4 pt-3">
        {/* Royal Consultation Banner & Progress */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#f2ca50] text-[18px]">auto_awesome</span>
              <span className="font-label-uppercase text-label-uppercase text-[#f2ca50] tracking-[0.2em] uppercase font-bold">
                Private Salon Consultation
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-[#d0c5af] font-medium">Step 2 of 4</span>
          </div>

          {/* Stepper Bar */}
          <div className="w-full bg-[#343537] h-1 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-[#d4af37] rounded-full shadow-[0_0_12px_rgba(212,175,55,0.7)] transition-all duration-700 ease-out"
              style={{ width: '50%' }}
            />
          </div>

          {/* Question Title */}
          <div className="mt-1">
            <h1 className="font-headline-sm text-xl md:text-2xl text-[#e3e2e5] font-normal leading-snug">
              Which sensory atmosphere resonates with your spirit?
            </h1>
            <p className="font-body-md text-sm text-[#d0c5af] mt-1">
              Select the olfactory portrait that best mirrors your internal nobility.
            </p>
          </div>
        </div>

        {/* Sensory Atmosphere Cards */}
        <div className="flex flex-col gap-3" role="radiogroup" aria-label="Sensory Atmosphere">
          {atmosphereOptions.map((opt) => {
            const isSelected = selectedAtmosphereId === opt.id;
            return (
              <div
                key={opt.id}
                role="radio"
                tabIndex={0}
                aria-checked={isSelected}
                onClick={() => setSelectedAtmosphereId(opt.id)}
                className={`atmosphere-option relative p-4 rounded-xl cursor-pointer shadow-lg transition-all duration-300 active:scale-[0.99] overflow-hidden border ${
                  isSelected
                    ? 'bg-[#1f2022] border-[#f2ca50]/70 shadow-[0_0_24px_rgba(242,202,80,0.12)]'
                    : 'bg-[#1b1c1e] border-[#292a2c] hover:bg-[#1f2022]'
                }`}
              >
                {/* Glow ambient backdrop */}
                {isSelected && (
                  <div className="ambient-glow absolute -top-12 -right-12 w-36 h-36 bg-[#f2ca50]/10 rounded-full blur-2xl pointer-events-none transition-opacity duration-300 opacity-100" />
                )}

                <div className="relative flex items-start gap-3.5">
                  {/* Radio Indicator */}
                  <div
                    className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      isSelected ? 'bg-[#0d0e10] shadow-inner' : 'bg-[#343537]'
                    }`}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full bg-[#f2ca50] shadow-[0_0_8px_rgba(242,202,80,0.8)] transition-transform duration-200 ${
                        isSelected ? 'scale-100' : 'scale-0'
                      }`}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`font-title-md text-sm md:text-base tracking-wide ${
                          isSelected ? 'text-[#f2ca50]' : 'text-[#e3e2e5]'
                        }`}
                      >
                        {opt.title}
                      </span>
                      <span
                        className={`material-symbols-outlined text-[18px] ${
                          isSelected ? 'text-[#f2ca50]' : 'text-[#99907c]'
                        }`}
                      >
                        {opt.icon}
                      </span>
                    </div>

                    <p className="font-body-md text-xs md:text-sm text-[#d0c5af] mt-1.5 leading-relaxed">
                      {opt.description}
                    </p>

                    <div className="flex items-center gap-1.5 mt-3 flex-wrap">
                      {opt.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`font-label-uppercase text-[10px] uppercase px-2.5 py-0.5 rounded-full ${
                            isSelected
                              ? 'text-[#f2ca50] bg-[#d4af37]/20 border border-[#d4af37]/30'
                              : 'text-[#d0c5af] bg-[#292a2c]'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Refinements */}
        <div className="mt-2 flex flex-col gap-4">
          {/* Preferred Intensity & Sillage */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="font-title-md text-sm text-[#e3e2e5] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#f2ca50] text-[18px]">waves</span>
                Preferred Intensity &amp; Sillage
              </label>
              <span className="font-label-sm text-xs text-[#f2ca50]">{selectedSillage}</span>
            </div>

            {/* Segmented Control */}
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#0d0e10] border border-[#292a2c] rounded-lg">
              {['Intimate Whisper', 'Noble Presence', 'Monarch Sillage'].map((sillage) => {
                const isActive = selectedSillage === sillage;
                return (
                  <button
                    key={sillage}
                    type="button"
                    onClick={() => setSelectedSillage(sillage)}
                    className={`py-2 px-1 text-center font-label-uppercase text-[10px] tracking-wider rounded transition-colors ${
                      isActive
                        ? 'bg-[#292a2c] text-[#f2ca50] shadow font-semibold border border-[#d4af37]/30'
                        : 'text-[#d0c5af] hover:text-[#e3e2e5]'
                    }`}
                  >
                    {sillage}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time of Reverie */}
          <div className="flex flex-col gap-2">
            <label className="font-title-md text-sm text-[#e3e2e5] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#f2ca50] text-[18px]">schedule</span>
              Time of Reverie
            </label>
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { label: 'Evening Gala', icon: 'dark_mode' },
                { label: 'Daily Ritual', icon: 'wb_twilight' },
                { label: 'Special Occasion', icon: 'crown' },
              ].map((rev) => {
                const isActive = selectedReverie === rev.label;
                return (
                  <button
                    key={rev.label}
                    type="button"
                    onClick={() => setSelectedReverie(rev.label)}
                    className={`px-3.5 py-2 rounded-full font-label-sm text-xs tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#f2ca50] text-[#3c2f00] font-semibold shadow-sm'
                        : 'bg-[#1f2022] text-[#d0c5af] hover:text-[#e3e2e5] border border-[#292a2c]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[15px]">{rev.icon}</span>
                    <span>{rev.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Live Match Preview Card */}
        <div className="mt-2">
          <div className="bg-[#0d0e10] border border-[#292a2c] p-4 rounded-xl relative overflow-hidden shadow-2xl">
            {/* Ambient corner glow */}
            <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-[#f2ca50]/10 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center gap-3.5">
              {/* Circular Match Ring Visualization */}
              <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 44 44">
                  <circle
                    className="text-[#343537] stroke-current"
                    cx="22"
                    cy="22"
                    fill="none"
                    r={radius}
                    strokeWidth="3"
                  />
                  <circle
                    className="text-[#f2ca50] stroke-current transition-all duration-700 ease-out"
                    cx="22"
                    cy="22"
                    fill="none"
                    r={radius}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeOffset}
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
                  <span className="font-headline-sm text-[13px] font-bold text-[#f2ca50]">
                    {currentOption.matchPercent}%
                  </span>
                  <span className="font-label-uppercase text-[7px] text-[#99907c] uppercase tracking-wider">
                    Match
                  </span>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-label-uppercase text-[10px] uppercase tracking-widest text-[#f2ca50] font-bold">
                    Dynamic Affinity
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50] animate-pulse" />
                </div>
                <div className="font-title-md text-sm text-[#e3e2e5] truncate font-medium mt-0.5">
                  {currentOption.flaconName}
                </div>
                <div className="font-body-md text-[12px] text-[#99907c] truncate mt-0.5">
                  Pyramidal fit calibrated to your royal profile.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action CTA Area */}
        <div className="mt-2 mb-2 flex items-center gap-3">
          <button
            type="button"
            onClick={() => onNavigateTab('collection')}
            className="py-3.5 px-4 rounded-lg bg-[#1f2022] hover:bg-[#292a2c] text-[#f2ca50] font-label-uppercase text-xs tracking-wider transition-colors active:scale-95 flex items-center justify-center border border-[#292a2c]"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          </button>

          <button
            type="button"
            onClick={() => setRevealed(true)}
            className="flex-1 py-3.5 px-4 rounded-lg bg-[#d4af37] hover:bg-[#f2ca50] text-[#3c2f00] font-label-uppercase text-xs tracking-[0.16em] uppercase font-bold shadow-[0_4px_20px_rgba(212,175,55,0.35)] transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>Reveal My Royal Blends</span>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>

        {/* Tailored Consultation Results Modal */}
        {revealed && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={() => setRevealed(false)} />
            <div className="relative w-full max-w-lg bg-[#121315] border border-[#d4af37] rounded-2xl p-6 z-10 shadow-2xl flex flex-col gap-4 text-[#e3e2e5]">
              <div className="flex items-start justify-between border-b border-[#292a2c] pb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#f2ca50] text-[24px]">workspace_premium</span>
                  <div>
                    <span className="text-[10px] font-label-uppercase text-[#f2ca50] uppercase tracking-widest block font-bold">
                      Imperial Recommendation
                    </span>
                    <h3 className="font-headline-sm text-lg text-[#e3e2e5]">Calibrated Scent Silhouette</h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setRevealed(false)}
                  className="w-8 h-8 rounded-full bg-[#1b1c1e] hover:bg-[#292a2c] flex items-center justify-center text-[#d0c5af]"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>

              <div className="flex items-center gap-3.5 bg-[#1b1c1e] p-3.5 rounded-xl border border-[#292a2c]">
                <img
                  src={matchedFragrance.cardImage}
                  alt={matchedFragrance.name}
                  className="w-16 h-16 rounded-lg object-cover bg-[#0d0e10] border border-[#292a2c] shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#f2ca50] uppercase font-bold tracking-wider">
                      {currentOption.matchPercent}% Harmony Match
                    </span>
                    <span className="text-xs font-bold text-[#f2ca50]">AED {matchedFragrance.basePrice}</span>
                  </div>
                  <h4 className="font-headline-sm text-sm text-[#e3e2e5] truncate mt-0.5 font-medium">
                    {matchedFragrance.name}
                  </h4>
                  <p className="text-[11px] text-[#d0c5af] line-clamp-1 mt-0.5">
                    {matchedFragrance.subtitle}
                  </p>
                </div>
              </div>

              <div className="bg-[#1f2022] p-3 rounded-xl border border-[#292a2c] text-xs flex flex-col gap-1.5">
                <div className="flex justify-between">
                  <span className="text-[#99907c]">Sensory Atmosphere</span>
                  <span className="text-[#e3e2e5] font-medium">{currentOption.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#99907c]">Calibrated Sillage</span>
                  <span className="text-[#f2ca50]">{selectedSillage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#99907c]">Optimal Reverie</span>
                  <span className="text-[#e3e2e5]">{selectedReverie}</span>
                </div>
              </div>

              <div className="flex gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setRevealed(false);
                    onSelectFragrance(matchedFragrance);
                  }}
                  className="flex-1 py-3 bg-[#d4af37] hover:bg-[#f2ca50] text-[#3c2f00] font-title-md font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  <span>Inspect Flacon</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setRevealed(false);
                    onOpenVIPModal();
                  }}
                  className="py-3 px-3.5 bg-[#1f2022] hover:bg-[#292a2c] border border-[#d4af37]/40 text-[#f2ca50] font-title-md font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors"
                >
                  Bespoke Salon
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
