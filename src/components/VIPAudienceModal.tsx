import React, { useState } from 'react';

interface VIPAudienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VIPAudienceModal: React.FC<VIPAudienceModalProps> = ({ isOpen, onClose }) => {
  const [salonCity, setSalonCity] = useState<'Dubai' | 'Muscat'>('Dubai');
  const [patronName, setPatronName] = useState('Fahad Al-Maktoum');
  const [patronContact, setPatronContact] = useState('+971 50 123 4567');
  const [date, setDate] = useState('2026-10-25');
  const [fragranceIntent, setFragranceIntent] = useState('Personal Sovereignty & Private Majlis Ceremony');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-[#121315] border border-[#d4af37]/40 rounded-2xl p-6 z-10 shadow-2xl flex flex-col gap-4 text-[#e3e2e5]">
        <div className="flex items-start justify-between border-b border-[#292a2c] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#f2ca50]">
              <span className="material-symbols-outlined text-[22px]">calendar_month</span>
            </div>
            <div>
              <span className="text-[10px] font-label-uppercase text-[#f2ca50] tracking-widest uppercase block">
                By Royal Appointment Only
              </span>
              <h3 className="font-headline-sm text-lg text-[#e3e2e5]">Private Attar Blending Salon</h3>
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

        {booked ? (
          <div className="py-8 flex flex-col items-center justify-center text-center gap-3">
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 text-[#f2ca50] flex items-center justify-center">
              <span className="material-symbols-outlined text-[32px]">verified</span>
            </div>
            <h4 className="font-headline-sm text-lg text-[#e3e2e5]">Private Audience Confirmed</h4>
            <p className="text-xs text-[#d0c5af] max-w-sm">
              Master Parfumeur Tariq Al-Hind look forward to welcoming you at our {salonCity} Salon on {date}. Your liaison will contact you via {patronContact}.
            </p>
            <button
              type="button"
              onClick={() => {
                setBooked(false);
                onClose();
              }}
              className="mt-3 px-6 py-2.5 bg-[#d4af37] text-[#3c2f00] font-bold text-xs uppercase tracking-wider rounded-lg"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 text-xs">
            <p className="text-[#d0c5af] leading-relaxed">
              Commission a bespoke signature flacon formulated exclusively for your body chemistry with Master Parfumeur Tariq Al-Hind.
            </p>

            {/* City Selection */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] tracking-wider uppercase text-[#99907c] font-semibold">
                Salon Sanctuary Location
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSalonCity('Dubai')}
                  className={`py-2 px-3 rounded-lg border text-left flex items-center justify-between ${
                    salonCity === 'Dubai'
                      ? 'border-[#f2ca50] bg-[#1f2022] text-[#f2ca50]'
                      : 'border-[#292a2c] bg-[#1b1c1e] text-[#d0c5af]'
                  }`}
                >
                  <span>Dubai DIFC Salon</span>
                  {salonCity === 'Dubai' && <span className="material-symbols-outlined text-[16px]">check</span>}
                </button>
                <button
                  type="button"
                  onClick={() => setSalonCity('Muscat')}
                  className={`py-2 px-3 rounded-lg border text-left flex items-center justify-between ${
                    salonCity === 'Muscat'
                      ? 'border-[#f2ca50] bg-[#1f2022] text-[#f2ca50]'
                      : 'border-[#292a2c] bg-[#1b1c1e] text-[#d0c5af]'
                  }`}
                >
                  <span>Old Muscat Vault</span>
                  {salonCity === 'Muscat' && <span className="material-symbols-outlined text-[16px]">check</span>}
                </button>
              </div>
            </div>

            {/* Patron Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] tracking-wider uppercase text-[#99907c]">Patron Dignitary Name</label>
                <input
                  type="text"
                  required
                  value={patronName}
                  onChange={(e) => setPatronName(e.target.value)}
                  className="bg-[#1b1c1e] border border-[#292a2c] rounded-lg px-3 py-2 text-[#e3e2e5] outline-none focus:border-[#d4af37]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] tracking-wider uppercase text-[#99907c]">Private Contact Phone</label>
                <input
                  type="text"
                  required
                  value={patronContact}
                  onChange={(e) => setPatronContact(e.target.value)}
                  className="bg-[#1b1c1e] border border-[#292a2c] rounded-lg px-3 py-2 text-[#e3e2e5] outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            {/* Date & Intent */}
            <div className="flex flex-col gap-1">
              <label className="text-[10px] tracking-wider uppercase text-[#99907c]">Requested Audience Date</label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-[#1b1c1e] border border-[#292a2c] rounded-lg px-3 py-2 text-[#e3e2e5] outline-none focus:border-[#d4af37]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] tracking-wider uppercase text-[#99907c]">Olfactory Intent / Notes</label>
              <input
                type="text"
                value={fragranceIntent}
                onChange={(e) => setFragranceIntent(e.target.value)}
                className="bg-[#1b1c1e] border border-[#292a2c] rounded-lg px-3 py-2 text-[#e3e2e5] outline-none focus:border-[#d4af37]"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-3 bg-[#d4af37] hover:bg-[#f2ca50] text-[#3c2f00] font-title-md font-bold uppercase tracking-wider rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all"
            >
              Request Royal Salon Audience
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
