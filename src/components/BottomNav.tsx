import React from 'react';

interface BottomNavProps {
  activeTab: 'home' | 'collection' | 'discovery' | 'vault';
  setActiveTab: (tab: 'home' | 'collection' | 'discovery' | 'vault') => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'temple_buddhist' },
    { id: 'collection', label: 'Collection', icon: 'science' },
    { id: 'discovery', label: 'Discovery', icon: 'explore' },
    { id: 'vault', label: 'Vault', icon: 'lock' },
  ] as const;

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-[#0d0e10]/95 backdrop-blur-xl shadow-[0_-8px_32px_rgba(0,0,0,0.7)] border-t border-[#292a2c]/50">
      <div className="flex justify-around items-center h-20 px-2 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`relative group flex flex-col items-center justify-center gap-1 w-16 h-14 transition-all duration-300 ${
                isActive ? 'text-[#f2ca50]' : 'text-[#d0c5af] hover:text-[#f2ca50]'
              }`}
            >
              {/* Glow aura */}
              <span
                className={`glow-aura absolute inset-0 -top-1 bg-[#f2ca50]/10 rounded-full blur-md pointer-events-none transition-opacity duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              />

              <span
                className={`material-symbols-outlined text-[23px] transition-transform duration-300 group-hover:scale-110 ${
                  isActive ? 'font-semibold' : ''
                }`}
              >
                {tab.icon}
              </span>

              <span className="font-label-uppercase text-[10px] tracking-widest uppercase">
                {tab.label}
              </span>

              {/* Glow indicator dot */}
              <span
                className={`glow-indicator absolute bottom-0.5 w-1 h-1 rounded-full bg-[#f2ca50] shadow-[0_0_8px_#d4af37] transition-opacity duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
};
