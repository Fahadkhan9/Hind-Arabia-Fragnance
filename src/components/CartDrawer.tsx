import React, { useState } from 'react';
import { CartItem } from '../data/fragrances';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateChest: (id: string, enabled: boolean) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateChest,
  onClearCart,
}) => {
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [patronName, setPatronName] = useState('Fahad Al-Maktoum');
  const [patronCity, setPatronCity] = useState('Dubai, United Arab Emirates');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price + (item.walnutChest ? item.chestPrice : 0), 0);
  const qualifiesForSilkBox = subtotal >= 1000;

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      onClearCart();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#121315] border-l border-[#292a2c] h-full flex flex-col z-10 shadow-2xl">
        {/* Header */}
        <div className="p-4 md:p-5 border-b border-[#292a2c] flex items-center justify-between bg-[#1b1c1e]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#f2ca50] text-[22px]">local_mall</span>
            <div>
              <h2 className="font-headline-sm text-lg text-[#e3e2e5]">Imperial Velvet Pouch</h2>
              <span className="text-[11px] text-[#d0c5af] tracking-wider uppercase">
                {items.length} {items.length === 1 ? 'Attar Flacon' : 'Attar Flacons'}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#121315] hover:bg-[#292a2c] flex items-center justify-center text-[#d0c5af] hover:text-[#e3e2e5] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Complimentary presentation box alert */}
        <div className="px-4 py-2.5 bg-[#1f2022] border-b border-[#292a2c] flex items-center gap-2 text-xs">
          <span className="material-symbols-outlined text-[#f2ca50] text-[18px]">redeem</span>
          {qualifiesForSilkBox ? (
            <span className="text-[#f2ca50] font-medium">
              Royal Privilege Unlocked: Handcrafted Silk-Lined Presentation Box included!
            </span>
          ) : (
            <span className="text-[#d0c5af]">
              Add <span className="text-[#f2ca50] font-semibold">AED {1000 - subtotal}</span> more to unlock Complimentary Silk-Lined Presentation Box.
            </span>
          )}
        </div>

        {checkoutComplete ? (
          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center gap-4">
            <div className="w-20 h-20 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#f2ca50] shadow-[0_0_30px_rgba(212,175,55,0.4)]">
              <span className="material-symbols-outlined text-[38px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-label-uppercase text-[#f2ca50] tracking-[0.2em] uppercase">
                Order Sealed With Sovereign Wax
              </span>
              <h3 className="font-headline-md text-xl text-[#e3e2e5]">Reserve Dispatch Confirmed</h3>
              <p className="font-body-md text-sm text-[#d0c5af] max-w-xs mt-1">
                Your heirloom decanters are being hand-filled in copper alembics and sealed with hot royal wax.
              </p>
            </div>

            <div className="bg-[#1b1c1e] p-4 rounded-xl border border-[#292a2c] w-full text-left text-xs flex flex-col gap-2 mt-2">
              <div className="flex justify-between">
                <span className="text-[#99907c]">Certificate Code</span>
                <span className="text-[#f2ca50] font-mono">#HA-SOV-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#99907c]">Recipient</span>
                <span className="text-[#e3e2e5]">{patronName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#99907c]">Dispatch To</span>
                <span className="text-[#e3e2e5]">{patronCity}</span>
              </div>
              <div className="flex justify-between border-t border-[#292a2c] pt-2">
                <span className="text-[#99907c]">Total Investment</span>
                <span className="text-[#f2ca50] font-bold">AED {subtotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setCheckoutComplete(false);
                onClose();
              }}
              className="w-full mt-4 py-3 bg-[#d4af37] text-[#3c2f00] font-bold uppercase tracking-wider text-xs rounded-lg hover:bg-[#f2ca50] transition-colors"
            >
              Return to Imperial Collection
            </button>
          </div>
        ) : (
          <>
            {/* Items list */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#99907c] gap-3">
                  <span className="material-symbols-outlined text-[48px] text-[#4d4635]">spa</span>
                  <span className="font-headline-sm text-base text-[#d0c5af]">Your Velvet Pouch is Empty</span>
                  <p className="text-xs max-w-xs">
                    Explore the Sovereign Collection and select rare wild agarwood or Taif rose pure attars.
                  </p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#1b1c1e] border border-[#292a2c] rounded-xl p-3.5 flex flex-col gap-3 relative shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover bg-[#0d0e10] border border-[#292a2c] shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-[#f2ca50] block truncate">
                              {item.category}
                            </span>
                            <h4 className="font-headline-sm text-sm text-[#e3e2e5] truncate font-medium">
                              {item.name}
                            </h4>
                          </div>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.id)}
                            className="text-[#99907c] hover:text-[#ffb4ab] transition-colors p-1"
                          >
                            <span className="material-symbols-outlined text-[16px]">delete</span>
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-[#d0c5af]">{item.volumeLabel}</span>
                          <span className="text-xs font-bold text-[#f2ca50]">
                            AED {(item.price + (item.walnutChest ? item.chestPrice : 0)).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Walnut Chest toggle */}
                    <div className="pt-2 border-t border-[#292a2c] flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-[#d0c5af]">
                        <span className="material-symbols-outlined text-[15px] text-[#f2ca50]">inventory_2</span>
                        <span>Hand-Carved Walnut Chest (+AED 250)</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => onUpdateChest(item.id, !item.walnutChest)}
                        className={`w-10 h-5 rounded-full p-0.5 transition-colors relative ${
                          item.walnutChest ? 'bg-[#d4af37]' : 'bg-[#292a2c]'
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded-full bg-white shadow-md block transition-transform ${
                            item.walnutChest ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {items.length > 0 && (
              <div className="p-4 bg-[#1b1c1e] border-t border-[#292a2c] flex flex-col gap-3">
                <div className="flex flex-col gap-1.5 text-xs text-[#d0c5af]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-[#e3e2e5] font-semibold">AED {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Royal Courier (GCC & Worldwide)</span>
                    <span className="text-[#f2ca50]">Complimentary</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Provenance Certificate</span>
                    <span className="text-[#f2ca50]">Included & Sealed</span>
                  </div>
                  <div className="flex justify-between border-t border-[#292a2c] pt-2 text-sm">
                    <span className="font-semibold text-[#e3e2e5]">Total Investment</span>
                    <span className="font-bold text-[#f2ca50] text-base">AED {subtotal.toLocaleString()}</span>
                  </div>
                </div>

                {/* Patron delivery inputs */}
                <div className="flex flex-col gap-2 pt-1">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={patronName}
                      onChange={(e) => setPatronName(e.target.value)}
                      placeholder="Royal Patron Name"
                      className="flex-1 bg-[#121315] border border-[#292a2c] text-xs px-3 py-2 rounded-lg text-[#e3e2e5] placeholder-[#99907c] focus:border-[#d4af37] outline-none"
                    />
                    <input
                      type="text"
                      value={patronCity}
                      onChange={(e) => setPatronCity(e.target.value)}
                      placeholder="City / Country"
                      className="flex-1 bg-[#121315] border border-[#292a2c] text-xs px-3 py-2 rounded-lg text-[#e3e2e5] placeholder-[#99907c] focus:border-[#d4af37] outline-none"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCheckout}
                  className="w-full h-12 bg-[#d4af37] hover:bg-[#f2ca50] text-[#3c2f00] font-title-md font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    lock
                  </span>
                  <span>Acquire & Seal With Royal Wax</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
