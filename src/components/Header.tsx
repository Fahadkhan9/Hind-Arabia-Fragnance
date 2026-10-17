import React, { useState } from 'react';
import { CREST_LOGO_URL, USER_AVATAR_URL } from '../data/fragrances';

interface HeaderProps {
  activeTab: 'home' | 'collection' | 'discovery' | 'vault';
  setActiveTab: (tab: 'home' | 'collection' | 'discovery' | 'vault') => void;
  cartCount: number;
  openCart: () => void;
  title?: string;
  onBack?: () => void;
  isBookmarked?: boolean;
  onToggleBookmark?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  openCart,
  title,
  onBack,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-[#121315]/90 backdrop-blur-xl pt-safe shadow-[0_4px_24px_rgba(0,0,0,0.45)] border-b border-[#292a2c]/60">
        <div className="h-16 px-4 md:px-8 max-w-7xl mx-auto flex items-center justify-between">
          {/* Left section: back or menu button + logo */}
          <div className="flex items-center gap-2 md:gap-3">
            {onBack ? (
              <button
                type="button"
                aria-label="Go Back"
                onClick={onBack}
                className="w-11 h-11 flex items-center justify-center text-[#f2ca50] hover:text-[#ffe08d] transition-colors active:scale-95 rounded-lg hover:bg-[#1f2022]"
              >
                <span className="material-symbols-outlined text-[24px]">arrow_back</span>
              </button>
            ) : (
              <button
                type="button"
                aria-label="Navigation Menu"
                onClick={() => setMenuOpen(true)}
                className="w-11 h-11 flex items-center justify-center text-[#f2ca50] hover:text-[#ffe08d] transition-colors active:scale-95 rounded-lg hover:bg-[#1f2022]"
              >
                <span className="material-symbols-outlined text-[24px]">menu</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                if (onBack) onBack();
                else setActiveTab('home');
              }}
              className="flex items-center gap-2 text-left group"
            >
              <img
                src={CREST_LOGO_URL}
                alt="Hind Arabia Royal Crest Logo"
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {title ? (
                <span className="font-headline-sm text-headline-sm tracking-wide text-[#e3e2e5] truncate max-w-[200px] md:max-w-md">
                  {title}
                </span>
              ) : (
                <span className="font-headline-sm text-headline-sm tracking-wider uppercase text-[#e3e2e5] hidden xs:inline-block">
                  Hind Arabia
                </span>
              )}
            </button>
          </div>

          {/* Center desktop navigation */}
          <nav className="hidden md:flex items-center gap-7">
            <button
              type="button"
              onClick={() => setActiveTab('home')}
              className={`text-xs uppercase tracking-[0.16em] transition-colors ${
                activeTab === 'home' && !title
                  ? 'text-[#f2ca50] font-semibold'
                  : 'text-[#d0c5af] hover:text-[#f2ca50]'
              }`}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('collection')}
              className={`text-xs uppercase tracking-[0.16em] transition-colors ${
                activeTab === 'collection' && !title
                  ? 'text-[#f2ca50] font-semibold'
                  : 'text-[#d0c5af] hover:text-[#f2ca50]'
              }`}
            >
              Collection
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('discovery')}
              className={`text-xs uppercase tracking-[0.16em] transition-colors ${
                activeTab === 'discovery' && !title
                  ? 'text-[#f2ca50] font-semibold'
                  : 'text-[#d0c5af] hover:text-[#f2ca50]'
              }`}
            >
              Salon Consultation
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('vault')}
              className={`text-xs uppercase tracking-[0.16em] transition-colors ${
                activeTab === 'vault' && !title
                  ? 'text-[#f2ca50] font-semibold'
                  : 'text-[#d0c5af] hover:text-[#f2ca50]'
              }`}
            >
              Private Vault
            </button>
          </nav>

          {/* Right section: bookmark (if in detail), cart, profile */}
          <div className="flex items-center gap-1.5 md:gap-3">
            {onToggleBookmark && (
              <button
                type="button"
                aria-label="Bookmark Fragrance"
                onClick={onToggleBookmark}
                className="w-11 h-11 flex items-center justify-center text-[#d0c5af] hover:text-[#f2ca50] transition-colors active:scale-95"
              >
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={{
                    fontVariationSettings: isBookmarked ? "'FILL' 1" : "'FILL' 0",
                    color: isBookmarked ? '#f2ca50' : undefined,
                  }}
                >
                  {isBookmarked ? 'bookmark' : 'bookmark_border'}
                </span>
              </button>
            )}

            <button
              type="button"
              aria-label="Royal Cart"
              onClick={openCart}
              className="relative w-11 h-11 flex items-center justify-center text-[#f2ca50] hover:text-[#ffe08d] transition-colors rounded-lg hover:bg-[#1f2022] active:scale-95"
            >
              <span className="material-symbols-outlined text-[22px]">local_mall</span>
              {cartCount > 0 && (
                <span className="absolute top-2 right-2 min-w-[17px] h-[17px] px-1 flex items-center justify-center bg-[#d4af37] text-[#3c2f00] text-[10px] font-bold rounded-full leading-none shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              type="button"
              aria-label="Profile"
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-11 h-11 flex items-center justify-center relative active:scale-95"
            >
              <img
                src={USER_AVATAR_URL}
                alt="Royal Patron Profile"
                className="w-8 h-8 rounded-full object-cover shadow-[0_0_10px_rgba(212,175,55,0.25)] border border-[#d4af37]/40"
                referrerPolicy="no-referrer"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Navigation Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative w-80 max-w-[85vw] bg-[#121315] border-r border-[#292a2c] h-full flex flex-col p-6 z-10 shadow-2xl">
            <div className="flex items-center justify-between pb-6 border-b border-[#292a2c]">
              <div className="flex items-center gap-2.5">
                <img
                  src={CREST_LOGO_URL}
                  alt="Hind Arabia"
                  className="h-8 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col">
                  <span className="font-headline-sm text-sm uppercase tracking-wider text-[#e3e2e5]">Hind Arabia</span>
                  <span className="text-[10px] text-[#f2ca50] tracking-widest uppercase">Haute Parfumerie</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 flex items-center justify-center text-[#d0c5af] hover:text-[#e3e2e5] rounded-full hover:bg-[#1f2022]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <nav className="flex-1 py-6 flex flex-col gap-2 overflow-y-auto">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('home');
                  setMenuOpen(false);
                }}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-lg text-left transition-colors ${
                  activeTab === 'home'
                    ? 'bg-[#1f2022] text-[#f2ca50] font-semibold'
                    : 'text-[#e3e2e5] hover:bg-[#1b1c1e] hover:text-[#f2ca50]'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">temple_buddhist</span>
                <span className="font-title-md text-sm">Imperial Residence (Home)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('collection');
                  setMenuOpen(false);
                }}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-lg text-left transition-colors ${
                  activeTab === 'collection'
                    ? 'bg-[#1f2022] text-[#f2ca50] font-semibold'
                    : 'text-[#e3e2e5] hover:bg-[#1b1c1e] hover:text-[#f2ca50]'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">science</span>
                <span className="font-title-md text-sm">The Sovereign Collection</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('discovery');
                  setMenuOpen(false);
                }}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-lg text-left transition-colors ${
                  activeTab === 'discovery'
                    ? 'bg-[#1f2022] text-[#f2ca50] font-semibold'
                    : 'text-[#e3e2e5] hover:bg-[#1b1c1e] hover:text-[#f2ca50]'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">explore</span>
                <span className="font-title-md text-sm">Salon Consultation (Quiz)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('vault');
                  setMenuOpen(false);
                }}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-lg text-left transition-colors ${
                  activeTab === 'vault'
                    ? 'bg-[#1f2022] text-[#f2ca50] font-semibold'
                    : 'text-[#e3e2e5] hover:bg-[#1b1c1e] hover:text-[#f2ca50]'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">lock</span>
                <span className="font-title-md text-sm">Private Reserve Vault</span>
              </button>

              <div className="my-3 border-t border-[#292a2c]" />

              <div className="px-3 py-2 text-[10px] tracking-[0.2em] uppercase text-[#99907c]">
                Bespoke Services
              </div>

              <div className="bg-[#1b1c1e] p-3.5 rounded-xl border border-[#292a2c] flex flex-col gap-2">
                <span className="text-xs font-semibold text-[#f2ca50]">Bespoke Blending Salon</span>
                <p className="text-[12px] text-[#d0c5af] leading-relaxed">
                  Private consultations with Master Parfumeur Tariq Al-Hind in Dubai DIFC & Old Muscat.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('discovery');
                    setMenuOpen(false);
                  }}
                  className="mt-1 text-xs text-[#f2ca50] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Start Consultation</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </nav>

            <div className="pt-4 border-t border-[#292a2c] text-[11px] text-[#99907c] flex flex-col gap-1">
              <span className="text-[#d0c5af]">Hind Arabia Haute Parfumerie Royale</span>
              <span>Distillers since 1978 • Muscat & Dubai</span>
            </div>
          </div>
        </div>
      )}

      {/* User Patron Popover */}
      {profileOpen && (
        <div className="fixed top-16 right-4 z-50 w-72 bg-[#1b1c1e] border border-[#d4af37]/30 rounded-xl shadow-2xl p-4 flex flex-col gap-3">
          <div className="flex items-center gap-3 pb-3 border-b border-[#292a2c]">
            <img
              src={USER_AVATAR_URL}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border border-[#d4af37]"
            />
            <div className="flex flex-col">
              <span className="font-title-md text-sm text-[#e3e2e5]">Fahad Al-Maktoum</span>
              <span className="text-[11px] text-[#f2ca50] flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  stars
                </span>
                Sovereign Circle Member
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 text-xs text-[#d0c5af]">
            <div className="flex justify-between py-1">
              <span>Vault Tier</span>
              <span className="text-[#e3e2e5] font-semibold">Tier 1 Imperial</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Reserved Decanters</span>
              <span className="text-[#f2ca50] font-semibold">3 Flacons</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Bespoke Attar Formula</span>
              <span className="text-[#e3e2e5]">#HA-1999-RC Active</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setActiveTab('vault');
              setProfileOpen(false);
            }}
            className="w-full py-2 bg-[#292a2c] hover:bg-[#343537] text-[#f2ca50] rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            Access Private Vault
          </button>
        </div>
      )}
    </>
  );
};
