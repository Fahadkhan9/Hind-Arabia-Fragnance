/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FRAGRANCES, Fragrance, CartItem } from './data/fragrances';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { CartDrawer } from './components/CartDrawer';
import { VIPAudienceModal } from './components/VIPAudienceModal';
import { AlchemyModal } from './components/AlchemyModal';
import { HomeView } from './views/HomeView';
import { CollectionView } from './views/CollectionView';
import { DetailView } from './views/DetailView';
import { DiscoveryView } from './views/DiscoveryView';
import { VaultView } from './views/VaultView';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'collection' | 'discovery' | 'vault'>('home');
  const [selectedFragrance, setSelectedFragrance] = useState<Fragrance | null>(null);
  const [collectionFilter, setCollectionFilter] = useState<string>('all');

  // Initial cart with 2 items matching the badge "2" in screenshots
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'cart-1',
      fragranceId: 'royal-cambodi-supreme',
      name: 'Royal Cambodi Supreme',
      category: 'Vintage Dehn Al Oud',
      volumeLabel: '1 Full Tola (12ml)',
      volumeMultiplier: 1,
      price: 2400,
      walnutChest: false,
      chestPrice: 250,
      image: FRAGRANCES[0].cardImage,
    },
    {
      id: 'cart-2',
      fragranceId: 'taif-rose-sultan',
      name: 'Taif Rose Sultan',
      category: 'Pure Taif Rose',
      volumeLabel: '1/2 Tola (6ml)',
      volumeMultiplier: 0.55,
      price: 688,
      walnutChest: true,
      chestPrice: 250,
      image: FRAGRANCES[1].cardImage,
    },
  ]);

  const [cartOpen, setCartOpen] = useState(false);
  const [vipModalOpen, setVipModalOpen] = useState(false);
  const [alchemyModalOpen, setAlchemyModalOpen] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(
    new Set(['royal-cambodi-supreme', 'mukhallat-al-diwan'])
  );

  // Global action toast
  const [globalToast, setGlobalToast] = useState<string | null>(null);

  const triggerToast = (message: string) => {
    setGlobalToast(message);
    setTimeout(() => {
      setGlobalToast(null);
    }, 2800);
  };

  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        triggerToast('Removed from Private Vault Wishlist');
      } else {
        next.add(id);
        triggerToast('Saved to Private Vault Wishlist');
      }
      return next;
    });
  };

  const handleAddToCart = (
    fragrance: Fragrance,
    volumeLabel: string,
    volumeMultiplier: number,
    price: number,
    walnutChest: boolean = false
  ) => {
    const newItem: CartItem = {
      id: `cart-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      fragranceId: fragrance.id,
      name: fragrance.name,
      category: fragrance.category,
      volumeLabel,
      volumeMultiplier,
      price,
      walnutChest,
      chestPrice: 250,
      image: fragrance.cardImage,
    };

    setCartItems((prev) => [newItem, ...prev]);
    triggerToast(`${fragrance.name} (${volumeLabel}) placed into Velvet Pouch`);
  };

  const handleQuickReserve = (fragrance: Fragrance) => {
    handleAddToCart(fragrance, '1 Full Tola (12ml)', 1, fragrance.basePrice, false);
    setCartOpen(true);
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateChest = (id: string, enabled: boolean) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, walnutChest: enabled } : item))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleFilterFamily = (category: string) => {
    setCollectionFilter(category);
    setSelectedFragrance(null);
    setActiveTab('collection');
  };

  return (
    <div className="min-h-screen bg-[#121315] text-[#e3e2e5] flex flex-col font-body-md antialiased selection:bg-[#d4af37] selection:text-[#3c2f00]">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setSelectedFragrance(null);
          setActiveTab(tab);
        }}
        cartCount={cartItems.length}
        openCart={() => setCartOpen(true)}
        title={selectedFragrance ? 'Attar Detail' : undefined}
        onBack={selectedFragrance ? () => setSelectedFragrance(null) : undefined}
        isBookmarked={
          selectedFragrance ? bookmarkedIds.has(selectedFragrance.id) : undefined
        }
        onToggleBookmark={
          selectedFragrance ? () => handleToggleBookmark(selectedFragrance.id) : undefined
        }
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-16 flex flex-col">
        {selectedFragrance ? (
          <DetailView
            fragrance={selectedFragrance}
            onBack={() => setSelectedFragrance(null)}
            onAddToCart={handleAddToCart}
            isBookmarked={bookmarkedIds.has(selectedFragrance.id)}
            onToggleBookmark={handleToggleBookmark}
          />
        ) : activeTab === 'home' ? (
          <HomeView
            onSelectFragrance={(f) => setSelectedFragrance(f)}
            onNavigateTab={(tab) => setActiveTab(tab)}
            onQuickReserve={handleQuickReserve}
            onOpenVIPModal={() => setVipModalOpen(true)}
            onOpenAlchemyModal={() => setAlchemyModalOpen(true)}
            onFilterFamily={handleFilterFamily}
          />
        ) : activeTab === 'collection' ? (
          <CollectionView
            onSelectFragrance={(f) => setSelectedFragrance(f)}
            onAddToCart={handleAddToCart}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            initialFilter={collectionFilter}
          />
        ) : activeTab === 'discovery' ? (
          <DiscoveryView
            onSelectFragrance={(f) => setSelectedFragrance(f)}
            onNavigateTab={(tab) => setActiveTab(tab)}
            onOpenVIPModal={() => setVipModalOpen(true)}
          />
        ) : (
          <VaultView
            bookmarkedIds={bookmarkedIds}
            onSelectFragrance={(f) => setSelectedFragrance(f)}
            onNavigateTab={(tab) => setActiveTab(tab)}
            onOpenVIPModal={() => setVipModalOpen(true)}
          />
        )}
      </main>

      {/* Bottom Navigation */}
      {!selectedFragrance && (
        <BottomNav
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setSelectedFragrance(null);
            setActiveTab(tab);
          }}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveCartItem}
        onUpdateChest={handleUpdateChest}
        onClearCart={handleClearCart}
      />

      {/* VIP Salon Audience Modal */}
      <VIPAudienceModal
        isOpen={vipModalOpen}
        onClose={() => setVipModalOpen(false)}
      />

      {/* Art of Alchemy Modal */}
      <AlchemyModal
        isOpen={alchemyModalOpen}
        onClose={() => setAlchemyModalOpen(false)}
      />

      {/* Global Interactive Feedback Toast */}
      {globalToast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-300 bg-[#0d0e10]/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.8)] border border-[#d4af37]/40 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#f2ca50] text-[18px]">verified</span>
          <span className="font-label-sm text-xs text-[#e3e2e5]">{globalToast}</span>
        </div>
      )}
    </div>
  );
}
