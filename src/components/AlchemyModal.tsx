import React from 'react';

interface AlchemyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AlchemyModal: React.FC<AlchemyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-[#121315] border border-[#d4af37]/40 rounded-2xl p-6 z-10 shadow-2xl flex flex-col gap-4 text-[#e3e2e5] max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between border-b border-[#292a2c] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#f2ca50]">
              <span className="material-symbols-outlined text-[22px]">science</span>
            </div>
            <div>
              <span className="text-[10px] font-label-uppercase text-[#f2ca50] tracking-widest uppercase block">
                Heritage Alchemy
              </span>
              <h3 className="font-headline-sm text-lg text-[#e3e2e5]">The Art of Attar Alchemy</h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#1b1c1e] hover:bg-[#292a2c] flex items-center justify-center text-[#d0c5af]"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="flex flex-col gap-4 text-xs leading-relaxed text-[#d0c5af]">
          <div className="relative h-44 rounded-xl overflow-hidden bg-[#0d0e10]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0C6Sk_a8nGWyn186qZ4wO3iXv9FWRKptUhPErMkW7rTw8vi-ivdH8Y-voZm7rF71NslcdAVvJADHJB0kYZ_MpeP-XqHsUgPumsYTvmRvTXYp_6PqUB2eWeO9ShTm_gNrHf0vvEJBLJ7wZkKZBsjwhazSq5p03yL2OLcZ--juKluhOL1Ql1SuTOZpntDWFiDABh0t6i-fLEItjXhwBYFPiiFf08fp5ZDlvpH0uzHQG_78dSRJoPJ035Q"
              alt="Copper Alembic"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121315] via-transparent to-transparent" />
            <span className="absolute bottom-2 left-3 text-[11px] font-mono text-[#f2ca50]">
              Deg &amp; Bhapka Distillation • Muscat Alembics
            </span>
          </div>

          <p>
            For more than four decades, Hind Arabia has preserved the ancient alchemical science of <em>Ittar</em> (Attar). Unlike Western alcohol-diluted perfumes that quickly evaporate, true pure attar is 100% undiluted botanical and resinous oil.
          </p>

          <div className="bg-[#1b1c1e] p-3.5 rounded-xl border border-[#292a2c] flex flex-col gap-2">
            <span className="font-title-md text-[#f2ca50] flex items-center gap-1.5 text-xs">
              <span className="material-symbols-outlined text-[16px]">water_drop</span>
              The 3 Sacred Laws of Our Distillation
            </span>
            <ul className="space-y-1.5 pl-2 list-disc list-inside text-[#e3e2e5]">
              <li><strong>Zero Alcohol Denat:</strong> Pure lipid-compatible extracts that meld with human skin.</li>
              <li><strong>Centennial Wild Agarwood:</strong> Sourced only from naturally fallen old-growth Aquilaria trees.</li>
              <li><strong>Muscat Subterranean Aging:</strong> Aged in glass and teak carboys beneath the desert earth to round off pungent facets into warm honeyed resonance.</li>
            </ul>
          </div>

          <p>
            A single drop of vintage Kalakassi or Royal Cambodi Supreme applied to the jugular pulse point radiates intimately for 24 to 48 hours, leaving an aristocratic scent trace on fine raw silk and cashmere.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-2.5 bg-[#d4af37] text-[#3c2f00] font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#f2ca50] transition-colors"
        >
          Close Archive
        </button>
      </div>
    </div>
  );
};
