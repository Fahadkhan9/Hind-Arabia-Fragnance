import React, { useState } from 'react';
import { FRAGRANCES, Fragrance } from '../data/fragrances';

interface VaultViewProps {
  bookmarkedIds: Set<string>;
  onSelectFragrance: (fragrance: Fragrance) => void;
  onNavigateTab: (tab: 'collection' | 'discovery') => void;
  onOpenVIPModal: () => void;
}

export const VaultView: React.FC<VaultViewProps> = ({
  bookmarkedIds,
  onSelectFragrance,
  onNavigateTab,
  onOpenVIPModal,
}) => {
  const [certInput, setCertInput] = useState<string>('HA-1999-RC');
  const [verifiedResult, setVerifiedResult] = useState<any>({
    code: 'HA-1999-RC',
    title: 'Royal Cambodi Supreme 25-Year',
    terroir: 'Koh Kong Wild Forests, Cambodia',
    maceration: '25 Solar Years in Muscat Carboys',
    distiller: 'Master Parfumeur Tariq Al-Hind',
    seal: 'Imperial Hot Wax & 24K Leaf Seal',
    status: 'Authentic Sovereign Reserve',
  });

  const bookmarkedFragrances = FRAGRANCES.filter((f) => bookmarkedIds.has(f.id));

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = certInput.trim().toUpperCase();
    if (clean.includes('1984') || clean.includes('KALA')) {
      setVerifiedResult({
        code: clean,
        title: 'Dehn Al Oud Kalakassi 1984',
        terroir: 'Assam & Upper Burma Old-Growth',
        maceration: '40 Solar Years Subterranean Vault',
        distiller: 'Master Parfumeur Tariq Al-Hind',
        seal: 'Deg & Bhapka Historic Wax Seal',
        status: 'Authentic Sovereign Reserve',
      });
    } else {
      setVerifiedResult({
        code: clean || 'HA-1999-RC',
        title: 'Royal Cambodi Supreme 25-Year',
        terroir: 'Koh Kong Wild Forests, Cambodia',
        maceration: '25 Solar Years in Muscat Carboys',
        distiller: 'Master Parfumeur Tariq Al-Hind',
        seal: 'Imperial Hot Wax & 24K Leaf Seal',
        status: 'Authentic Sovereign Reserve',
      });
    }
  };

  return (
    <div className="flex flex-col w-full text-[#e3e2e5] pb-28">
      <div className="px-4 md:px-8 max-w-xl mx-auto w-full flex flex-col gap-6 pt-3">
        {/* Vault Banner */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#f2ca50] text-[20px]">lock</span>
            <span className="font-label-uppercase text-[11px] tracking-[0.2em] text-[#f2ca50] uppercase font-bold">
              Subterranean Vault Archive
            </span>
          </div>
          <h1 className="font-headline-md text-2xl text-[#e3e2e5] font-normal">
            Private Cellar &amp; Provenance
          </h1>
          <p className="font-body-md text-xs md:text-sm text-[#d0c5af] leading-relaxed">
            Reserved decanters, bookmarked attars, and verifiable Master Distiller wax certificates registered under your royal patron account.
          </p>
        </div>

        {/* Patron Badge Card */}
        <div className="bg-gradient-to-r from-[#1b1c1e] via-[#292a2c] to-[#1b1c1e] border border-[#d4af37]/40 rounded-2xl p-4 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#f2ca50]/20 border border-[#d4af37] flex items-center justify-center text-[#f2ca50]">
              <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-[#99907c]">Sovereign Patron</span>
              <span className="font-title-md text-sm text-[#e3e2e5]">Fahad Al-Maktoum</span>
              <span className="text-[11px] text-[#f2ca50]">Tier 1 Imperial Privileges</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenVIPModal}
            className="py-1.5 px-3 bg-[#121315] hover:bg-[#1f2022] border border-[#d4af37]/40 text-[#f2ca50] rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            VIP Salon
          </button>
        </div>

        {/* Bookmarked / Wishlist Section */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#f2ca50] text-[18px]">bookmark</span>
              <h2 className="font-headline-sm text-base text-[#e3e2e5]">Saved Scent Silhouettes</h2>
            </div>
            <span className="text-xs text-[#99907c]">({bookmarkedFragrances.length} saved)</span>
          </div>

          {bookmarkedFragrances.length === 0 ? (
            <div className="bg-[#1b1c1e] border border-[#292a2c] rounded-xl p-5 text-center flex flex-col items-center gap-2.5">
              <span className="material-symbols-outlined text-[32px] text-[#4d4635]">bookmark_border</span>
              <p className="text-xs text-[#d0c5af]">
                No fragrances bookmarked yet. Tap the bookmark icon on any flacon in the Collection.
              </p>
              <button
                type="button"
                onClick={() => onNavigateTab('collection')}
                className="mt-1 px-4 py-2 bg-[#292a2c] hover:bg-[#343537] text-[#f2ca50] rounded-lg text-xs font-semibold"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2.5">
              {bookmarkedFragrances.map((f) => (
                <div
                  key={f.id}
                  onClick={() => onSelectFragrance(f)}
                  className="bg-[#1b1c1e] border border-[#292a2c] hover:border-[#f2ca50]/50 rounded-xl p-3 flex items-center justify-between cursor-pointer transition-all shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={f.cardImage}
                      alt={f.name}
                      className="w-12 h-12 rounded-lg object-cover bg-[#0d0e10] border border-[#292a2c]"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-[10px] uppercase text-[#f2ca50] block">{f.classification}</span>
                      <h3 className="font-title-md text-sm text-[#e3e2e5]">{f.name}</h3>
                      <span className="text-xs text-[#d0c5af]">AED {f.basePrice.toLocaleString()}</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[#f2ca50] text-[20px]">chevron_right</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Certificate Authenticity Verification Tool */}
        <section className="bg-[#1b1c1e] border border-[#292a2c] rounded-2xl p-4 md:p-5 flex flex-col gap-3.5 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#f2ca50] text-[20px]">verified</span>
              <h2 className="font-headline-sm text-base text-[#e3e2e5]">Hot Wax Certificate Authenticator</h2>
            </div>
            <span className="font-label-uppercase text-[10px] text-[#99907c] uppercase tracking-wider">
              Muscat Registry
            </span>
          </div>

          <p className="text-xs text-[#d0c5af] leading-relaxed">
            Enter the hand-inscribed certificate registration code on your flacon wax seal or walnut presentation chest to inspect distillation provenance:
          </p>

          <form onSubmit={handleVerify} className="flex gap-2">
            <input
              type="text"
              value={certInput}
              onChange={(e) => setCertInput(e.target.value)}
              placeholder="e.g. HA-1999-RC"
              className="flex-1 bg-[#121315] border border-[#292a2c] rounded-lg px-3 py-2 text-xs font-mono uppercase text-[#f2ca50] placeholder-[#99907c] outline-none focus:border-[#d4af37]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#d4af37] hover:bg-[#f2ca50] text-[#3c2f00] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
            >
              Verify
            </button>
          </form>

          {/* Verification Certificate Dossier */}
          {verifiedResult && (
            <div className="bg-[#121315] border border-[#d4af37]/40 rounded-xl p-4 flex flex-col gap-2.5 text-xs">
              <div className="flex items-center justify-between border-b border-[#292a2c] pb-2">
                <span className="text-[10px] uppercase tracking-wider font-mono text-[#f2ca50]">
                  Registration Code: {verifiedResult.code}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#f2ca50]/20 text-[#f2ca50] text-[9px] font-bold uppercase tracking-wider">
                  {verifiedResult.status}
                </span>
              </div>

              <div className="font-headline-sm text-sm text-[#e3e2e5] font-medium">
                {verifiedResult.title}
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                <div>
                  <span className="text-[#99907c] block">Origin &amp; Terroir</span>
                  <span className="text-[#e3e2e5] font-medium">{verifiedResult.terroir}</span>
                </div>
                <div>
                  <span className="text-[#99907c] block">Maceration Age</span>
                  <span className="text-[#e3e2e5] font-medium">{verifiedResult.maceration}</span>
                </div>
                <div>
                  <span className="text-[#99907c] block">Distillation Master</span>
                  <span className="text-[#f2ca50] font-medium">{verifiedResult.distiller}</span>
                </div>
                <div>
                  <span className="text-[#99907c] block">Seal Authentication</span>
                  <span className="text-[#e3e2e5] font-medium">{verifiedResult.seal}</span>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Private Reserve Cellar Inventory */}
        <section className="bg-[#1b1c1e] border border-[#292a2c] rounded-2xl p-4 md:p-5 flex flex-col gap-3 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#f2ca50] text-[20px]">science</span>
            <h2 className="font-headline-sm text-base text-[#e3e2e5]">Subterranean Muscat Maturation</h2>
          </div>
          <p className="text-xs text-[#d0c5af] leading-relaxed">
            All Hind Arabia flacons undergo minimum 3 to 40 solar years of subterranean resting in carved limestone grottos beneath Muscat, Oman. This enables the heavy sesquiterpenes in wild Aquilaria resin to oxidize into liquid amber gold.
          </p>
        </section>
      </div>
    </div>
  );
};
