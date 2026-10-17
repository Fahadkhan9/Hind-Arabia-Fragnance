export interface Fragrance {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  classification: string;
  badge?: string;
  harvestBadge?: string;
  rating?: number;
  reviewsCount?: number;
  batch?: string;
  description: string;
  notes: string[];
  terroir?: string;
  distillation?: string;
  basePrice: number; // 1 Full Tola (12ml)
  image: string;
  cardImage: string;
  gallery?: string[];
  pyramid?: {
    top: { title: string; subtitle: string; description: string; tags: string[] };
    heart: { title: string; subtitle: string; description: string; tags: string[] };
    base: { title: string; subtitle: string; description: string; tags: string[] };
  };
  specs?: {
    purity: string;
    alcohol: string;
    longevity: string;
    longevityDetail: string;
    projection: string;
    projectionDetail: string;
    extraction: string;
    extractionDetail: string;
  };
}

export const CREST_LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVKnq-HOPEqsdAKJN8gBbFne7EUHXdomuBXDVLy33c7ckMPe_KGdkljB5IvqD6vLRsGfcetSfBgpwYJBfc2w7I0n1ww2Z5mxHbgYawU8SXjUVRv3LuGPA-Dks5fUvLouZkJReaQRmIsiansYRA_RT_DTjQ_TX2gGJ-zTy3voaaFQMpMZpu2ErArHxMECqMolVwxCsY7b6vMb9XI3P8LbLejA953yl_KVQbWnIWxbna_e0ieGvJl7PbMw';

export const USER_AVATAR_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBTNj9AY5neHVrNPoivCTc2yVfMW5A5A2QHLEOt_62OCWpIhTVGVCTUecIG2FIO5xD9zEm-hTw4dnoLO6otDx_j-xRr8yODJEZJp4-hrr2LwmM9inqwwaxsU9pb2WvoaBNj4Qmhl71EVkLCdusI6yaUxcB2qJhhA8T8K-YLASQUJ1pwdqO8jQPrVZAncSw4k4_dLgMaWxbiem4peQ_mxpC0EuSe8RP-i9dpqa4c9BpV9TJz7oimO5iPg';

export const FRAGRANCES: Fragrance[] = [
  {
    id: 'royal-cambodi-supreme',
    name: 'Royal Cambodi Supreme',
    subtitle: 'Vintage 25-Year Wild Harvested Agarwood Oil',
    category: 'Pure Dehn Al Oud',
    classification: 'Vintage Dehn Al Oud',
    badge: 'Masterpiece',
    harvestBadge: 'Aged 25 Years',
    rating: 5.0,
    reviewsCount: 89,
    batch: 'Batch #1999-RC',
    description: 'Sourced from old-growth Aquilaria wild forest trees. Resinous, sun-cured leather with an opulent balsamic honey dry-down.',
    notes: ['Sun-dried Wood', 'Balsamic Honey', 'Aged Tobacco'],
    terroir: 'Koh Kong, Cambodia',
    distillation: 'Aged Hydro-Steam',
    basePrice: 2400,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoMlGmwndzowwIAIFc4jPXoK0dU60cZbmPUFQbXGw98WtHomP68NIjeva8-gCz8AnlA2NPV4gWyleOL8YUEjjcAe3pxt0SQ-i0WtscDCKBRRoOMe7-G8_y7vtOAXLs_yQt4tMoNQmn19l3vKsoR_iANLr24uo4tupvzsZZvT1Sn7MWOXYW_FYMwIg27cPYva0tKukt70_xdaTTxPDUZ3W2W91QA0P75pb-IplOvHknAkNKsXgMcSQ67A',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0cbqXGbYu0wwMyzAmDYXnxGcHzw0bTdRVe7eSi4YpaQZpXGnRirXnxTjGRMVn2EmDVDyprRTH27w580YLLvJnn6dqZMA2rC7lTYTVq7O6UVqOCX3FKCgrMjmu9HYbq5ISsPjbYB6-slGoJhel2ubBedCJwu8J--Hb-AlCfM8LIczyt-94q9h7lo8nYtKx0EFDSDavWwOnca01pqdGPjW52mVrx-26AWYf25b2Z7ujwObIYFha24HX7w',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAoMlGmwndzowwIAIFc4jPXoK0dU60cZbmPUFQbXGw98WtHomP68NIjeva8-gCz8AnlA2NPV4gWyleOL8YUEjjcAe3pxt0SQ-i0WtscDCKBRRoOMe7-G8_y7vtOAXLs_yQt4tMoNQmn19l3vKsoR_iANLr24uo4tupvzsZZvT1Sn7MWOXYW_FYMwIg27cPYva0tKukt70_xdaTTxPDUZ3W2W91QA0P75pb-IplOvHknAkNKsXgMcSQ67A',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3Z0Moinncacnn_mJHXLB_t41s3_qaMsxQlvAkzw43vDBywycISvi9vMaKr7Y8BWqMSBin90YwnkJoPnxMuHaNGoa7DnObG4vX_B8buanVbL1W0_W8sVcdJc_zRNYVjA4gJdeaEc76NNhmiHHfhwuDm3qtQKz7GO_FA-ugyUnTWi4QaBKyO8bnVs--yqobJKg34NFA9hsOBAht3mLrLY1Y3n2Rd6u9UB9OF2iEPvPCtquOq61OEKMEMg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwzYqdufbbIfcog-OCnR69WnUl_c9J6iniDAmxsAJuMgGiz5gaW_8aF6MMUgAc-Nrtcbq2okF5H4emle90rwprVqotUnmFeE5ET7Qyg2_sd4-E02MwGy3ok7QryTXzJkbv4PHMU64kXZr3CpqvrPWSWAMAneKaOYHZmdMEaigmWjFgo3rlr7CoBhD8DbiIIRgeVqAdXnZjd51JgzbNX6Bm6ZFnb6fxcn0_3Aah1Ht8DgS_7WsHNujLgA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB0C6Sk_a8nGWyn186qZ4wO3iXv9FWRKptUhPErMkW7rTw8vi-ivdH8Y-voZm7rF71NslcdAVvJADHJB0kYZ_MpeP-XqHsUgPumsYTvmRvTXYp_6PqUB2eWeO9ShTm_gNrHf0vvEJBLJ7wZkKZBsjwhazSq5p03yL2OLcZ--juKluhOL1Ql1SuTOZpntDWFiDABh0t6i-fLEItjXhwBYFPiiFf08fp5ZDlvpH0uzHQG_78dSRJoPJ035Q',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuClZqBck1SkrG5LXDuwQrfiuKq0AkF8L-uGgfr0hOuVfs7viQ8O3V6AMuCc8azLipZZujcNqfco7CFqRDWO9QR2Xmgk7BaTN4bNS-GtDfasrS0Ga0cPPyZ2MQQCjl7S2eBsbEFnStIL1tGUdPGjNkpxFUF5yjlFFOl8Qbfa0t-bvml8wwf6G8MxppwoVuk0eWgYLZ2_OfSAYN21g8xtYeOBLROstv1byOyU7eU6YI1L4hLUnNEx6jS6Cw'
    ],
    pyramid: {
      top: {
        title: 'Top Accord • 0 to 1 Hour',
        subtitle: 'Vibrant Flash',
        description: 'Cambodian Wild Plum, Dried Golden Honey, Saffron Blossom',
        tags: ['Wild Plum', 'Dried Honey', 'Red Saffron']
      },
      heart: {
        title: 'Heart Accord • 1 to 8 Hours',
        subtitle: 'Resinous Core',
        description: '25-Yr Matured Agarwood, Unsweetened Dark Cocoa, Pipe Tobacco Smoke',
        tags: ['Cambodi Oud', 'Bitter Cocoa', 'Sweet Pipe Smoke']
      },
      base: {
        title: 'Base Accord • 8 to 24+ Hours',
        subtitle: 'Eternal Dry-down',
        description: 'Fossilized Baltic Amber, Polished Royal Leather, Sweet Animalic Resin',
        tags: ['Fossil Amber', 'Aged Leather', 'Dark Ambergris']
      }
    },
    specs: {
      purity: '100% Pure Attar',
      alcohol: '0% Alcohol Denat',
      longevity: '24+ Hours',
      longevityDetail: 'Days on Silk & Wool',
      projection: 'Regal Halo',
      projectionDetail: 'Intimate, Never Loud',
      extraction: 'Vintage 1999',
      extractionDetail: 'Single Harvest Run'
    }
  },
  {
    id: 'taif-rose-sultan',
    name: 'Taif Rose Sultan',
    subtitle: 'Hydro-distilled from high-altitude dawn blossoms',
    category: 'Pure Taif Rose',
    classification: 'Ward Taifi Otto',
    badge: 'Seasonal',
    harvestBadge: 'Al Hada Mountain Harvest',
    rating: 4.95,
    reviewsCount: 64,
    batch: 'Batch #2024-TR',
    description: 'Hydro-distilled from high-altitude dawn blossoms. Radiant, spicy tea-like floral facets with cooling green dew.',
    notes: ['Morning Dew', 'Damask Rose', 'Green Leaf'],
    terroir: 'Al Hada Mountain, Taif, KSA',
    distillation: 'Traditional Copper Alembic',
    basePrice: 1250,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmrrrIyHq-gKKI7fEvZPqevAOBYqx5Bq09sAh-VPkyFTHPlGobKOInbR4sT1QoCyPXOAufUye9pPSaIaLn8RwJJ8v8WN5Gccg40BMjNR-f6UQqKzYjB4UuWiIPKu2BwwX26eQkPeSIWp7Qt2NY3kVr9NkOJaBARy6XPDXCHBuc0SJCOj2DE2hAd_82rHMjgoQdeUK0tr1L7r0Cr8D4tGkaodkLSEF8MJnGlVOr7aPsu0fDmWr7hAnc6w',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmrrrIyHq-gKKI7fEvZPqevAOBYqx5Bq09sAh-VPkyFTHPlGobKOInbR4sT1QoCyPXOAufUye9pPSaIaLn8RwJJ8v8WN5Gccg40BMjNR-f6UQqKzYjB4UuWiIPKu2BwwX26eQkPeSIWp7Qt2NY3kVr9NkOJaBARy6XPDXCHBuc0SJCOj2DE2hAd_82rHMjgoQdeUK0tr1L7r0Cr8D4tGkaodkLSEF8MJnGlVOr7aPsu0fDmWr7hAnc6w',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCmrrrIyHq-gKKI7fEvZPqevAOBYqx5Bq09sAh-VPkyFTHPlGobKOInbR4sT1QoCyPXOAufUye9pPSaIaLn8RwJJ8v8WN5Gccg40BMjNR-f6UQqKzYjB4UuWiIPKu2BwwX26eQkPeSIWp7Qt2NY3kVr9NkOJaBARy6XPDXCHBuc0SJCOj2DE2hAd_82rHMjgoQdeUK0tr1L7r0Cr8D4tGkaodkLSEF8MJnGlVOr7aPsu0fDmWr7hAnc6w',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB0C6Sk_a8nGWyn186qZ4wO3iXv9FWRKptUhPErMkW7rTw8vi-ivdH8Y-voZm7rF71NslcdAVvJADHJB0kYZ_MpeP-XqHsUgPumsYTvmRvTXYp_6PqUB2eWeO9ShTm_gNrHf0vvEJBLJ7wZkKZBsjwhazSq5p03yL2OLcZ--juKluhOL1Ql1SuTOZpntDWFiDABh0t6i-fLEItjXhwBYFPiiFf08fp5ZDlvpH0uzHQG_78dSRJoPJ035Q'
    ],
    pyramid: {
      top: {
        title: 'Top Accord • 0 to 1 Hour',
        subtitle: 'Crystalline Flora',
        description: 'First Flush Mountain Rosebuds, Morning Dewdrops, Crushed Green Stems',
        tags: ['Morning Dew', 'Taif Buds', 'Green Flora']
      },
      heart: {
        title: 'Heart Accord • 1 to 8 Hours',
        subtitle: 'Crimson Nectar',
        description: 'Full Damask Rose Centifolia, Warm Saffron Mist, Pink Peppercorn',
        tags: ['Damask Otto', 'Spicy Rose', 'Saffron']
      },
      base: {
        title: 'Base Accord • 8 to 24+ Hours',
        subtitle: 'Intimate Sillage',
        description: 'Solar Amber, Silken White Musk, Aged Sandalwood Foundation',
        tags: ['Solar Amber', 'Silken Musk', 'Sandalwood']
      }
    },
    specs: {
      purity: '100% Pure Attar',
      alcohol: '0% Alcohol Denat',
      longevity: '18+ Hours',
      longevityDetail: 'Radiant on Skin & Pashmina',
      projection: 'Soft Cloud',
      projectionDetail: 'Enchanting & Luminous',
      extraction: 'Harvest 2024',
      extractionDetail: 'Dawn Harvest First Steam'
    }
  },
  {
    id: 'mukhallat-al-diwan',
    name: 'Mukhallat Al-Diwan',
    subtitle: 'The regal scent of grand reception halls',
    category: 'Mukhallat Royal',
    classification: 'Royal Mukhallat',
    badge: 'Palace Blend',
    harvestBadge: 'Bespoke Maceration',
    rating: 4.98,
    reviewsCount: 110,
    batch: 'Batch #2023-DIW',
    description: 'The regal scent of grand reception halls. Rare Kashmir saffron tempered with White Oud, vintage Taif rose, and cured ambergris.',
    notes: ['Taif Rose', 'White Oud', 'Ambergris', 'Saffron'],
    terroir: 'Oman & Kashmir Highlands',
    distillation: 'Multi-Floral Steam Distillation',
    basePrice: 1600,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrxsHzpMX7RNqHg2304nCCW4C4_neRT2MvdVxcrqZtzNl_3u8GvyK48kf25OY3hP9TD1dA_tMXcGvfA--a_D9yjdcLZLaERlxFuczZIGUJXDWECVrhJRK7Jg7ylR9ePqA02A3Mp9MaEZoMyTfQ78j6fFGN9y_6NGYL5nvcPAktoyQmzgJ73HR7_pDwkaNQAkPwP8jMZ6JosVpQlRMu85XVBZiyVNBsjzSfDoUCPp_Rba0yR1oVPjdOHg',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrxsHzpMX7RNqHg2304nCCW4C4_neRT2MvdVxcrqZtzNl_3u8GvyK48kf25OY3hP9TD1dA_tMXcGvfA--a_D9yjdcLZLaERlxFuczZIGUJXDWECVrhJRK7Jg7ylR9ePqA02A3Mp9MaEZoMyTfQ78j6fFGN9y_6NGYL5nvcPAktoyQmzgJ73HR7_pDwkaNQAkPwP8jMZ6JosVpQlRMu85XVBZiyVNBsjzSfDoUCPp_Rba0yR1oVPjdOHg',
    pyramid: {
      top: {
        title: 'Top Accord • 0 to 1 Hour',
        subtitle: 'Royal Prelude',
        description: 'Taif Rose Otto, Rare Cashmere Saffron, Cardamom Sparks',
        tags: ['Taif Rose', 'Cashmere Saffron', 'Cardamom']
      },
      heart: {
        title: 'Heart Accord • 1 to 8 Hours',
        subtitle: 'Diwan Heart',
        description: 'White Aquilaria Oud, Smoky Frankincense, Golden Honeycomb',
        tags: ['White Oud', 'Hojari Resin', 'Golden Honey']
      },
      base: {
        title: 'Base Accord • 8 to 24+ Hours',
        subtitle: 'Imperial Aura',
        description: 'Cured Wild Ambergris, Aged Deer Musk Accord, Mysore Sandalwood',
        tags: ['Grey Ambergris', 'Mysore Wood', 'Velvet Resin']
      }
    },
    specs: {
      purity: '100% Pure Attar',
      alcohol: '0% Alcohol Denat',
      longevity: '24+ Hours',
      longevityDetail: 'Transcendent Endurance',
      projection: 'Majestic Sillage',
      projectionDetail: 'Commanding Room Presence',
      extraction: 'Macerated 3 Years',
      extractionDetail: 'Master Blend Formula'
    }
  },
  {
    id: 'amber-ash-sharq',
    name: 'Amber Ash-Sharq',
    subtitle: 'Fossilized golden amber with Omani frankincense',
    category: 'Amber & Resins',
    classification: 'Smoky Resin',
    badge: 'Smoky Resin',
    harvestBadge: 'Dhofar Harvest',
    rating: 4.91,
    reviewsCount: 47,
    batch: 'Batch #2022-AS',
    description: 'Fossilized golden amber blended with Omani Royal Green Hojari frankincense.',
    notes: ['Olibanum', 'Labdanum', 'Vanilla'],
    terroir: 'Dhofar Mountains, Sultanate of Oman',
    distillation: 'Slow Resin Extraction',
    basePrice: 980,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsrr9BNRgkVMaOpafK3_BxHnfn2bPOo3stJVLpUd2OxM9f4yeZ7NqGbfSGZp3YfqXwJSMKHxbOsItimbbEcjyRxJMSK28Nxj52F1gW0KgfOerbAa3_-jsTqsuv_20LjKoqIi246mu-eEHRNei7KhsBTjWupWX9mc-l3LuB0wWArkxj5Yj537iYUP-7RY8UzQpnfEJ3c7WKb7Nfz4q2faZyE1YqIvyTvBP-wCZcdhuejRP3_XHQ2JJETg',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsrr9BNRgkVMaOpafK3_BxHnfn2bPOo3stJVLpUd2OxM9f4yeZ7NqGbfSGZp3YfqXwJSMKHxbOsItimbbEcjyRxJMSK28Nxj52F1gW0KgfOerbAa3_-jsTqsuv_20LjKoqIi246mu-eEHRNei7KhsBTjWupWX9mc-l3LuB0wWArkxj5Yj537iYUP-7RY8UzQpnfEJ3c7WKb7Nfz4q2faZyE1YqIvyTvBP-wCZcdhuejRP3_XHQ2JJETg',
    pyramid: {
      top: {
        title: 'Top Accord • 0 to 1 Hour',
        subtitle: 'Golden Incense',
        description: 'Green Hojari Frankincense, Citrus Zest, Crushed Elemi',
        tags: ['Olibanum', 'Green Hojari', 'Elemi']
      },
      heart: {
        title: 'Heart Accord • 1 to 8 Hours',
        subtitle: 'Resin Warmth',
        description: 'Fossilized Baltic Amber, Sweet Spanish Labdanum, Benzoin',
        tags: ['Baltic Amber', 'Labdanum', 'Benzoin Tears']
      },
      base: {
        title: 'Base Accord • 8 to 24+ Hours',
        subtitle: 'Sacred Smoke',
        description: 'Smoked Bourbon Vanilla, Scorched Oak, Cedar Resin',
        tags: ['Bourbon Vanilla', 'Oak Smoke', 'Ambergris']
      }
    },
    specs: {
      purity: '100% Pure Attar',
      alcohol: '0% Alcohol Denat',
      longevity: '20+ Hours',
      longevityDetail: 'Deep Warmth On Epidermis',
      projection: 'Enveloping Warmth',
      projectionDetail: 'Tactile & Meditative',
      extraction: 'Resin Co-Distillate',
      extractionDetail: 'Slow Copper Simmer'
    }
  },
  {
    id: 'misk-al-khatam',
    name: 'Misk Al-Khatam',
    subtitle: 'Velvety white musk distilled for skin-intimate purity',
    category: 'Rare Musk',
    classification: 'Silken Accord',
    badge: 'Silken Accord',
    harvestBadge: 'Aged Sandalwood Matrix',
    rating: 4.96,
    reviewsCount: 78,
    batch: 'Batch #2024-MK',
    description: 'Velvety white musk distilled for skin-intimate purity with white sandalwood cream.',
    notes: ['Clean Lily', 'White Musk', 'Sandalwood'],
    terroir: 'Mysore & Levantine Valleys',
    distillation: 'Silken Cold Filtration',
    basePrice: 750,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlxIKOCtDj_WJiYpGPj_RM17k1F3NxlSFWbPYRvgqlLiRnIusmhu07KsBk7sv1mo8VEYuPljmsCrsf1ZK0BVfgHy2qsY-h65RJg1zCmkTvOeAW1asX-lcptQ9JiRROCpXvXpeD_xmDGxNuaZiSBeg1-ivGxFeCiFqRGQFF4JApidC9JqS1TZhSXgIhNa2X6KzdYiA63DRoSRgCvyMOn8PDeKDdkETFaX_mWIRBARvj5R5bgTVtnP8c9Q',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlxIKOCtDj_WJiYpGPj_RM17k1F3NxlSFWbPYRvgqlLiRnIusmhu07KsBk7sv1mo8VEYuPljmsCrsf1ZK0BVfgHy2qsY-h65RJg1zCmkTvOeAW1asX-lcptQ9JiRROCpXvXpeD_xmDGxNuaZiSBeg1-ivGxFeCiFqRGQFF4JApidC9JqS1TZhSXgIhNa2X6KzdYiA63DRoSRgCvyMOn8PDeKDdkETFaX_mWIRBARvj5R5bgTVtnP8c9Q',
    pyramid: {
      top: {
        title: 'Top Accord • 0 to 1 Hour',
        subtitle: 'Purity Veil',
        description: 'White Water Lilies, Morning Cotton, Bergamot Dew',
        tags: ['Clean Lily', 'Cotton Flower', 'Dewdrop']
      },
      heart: {
        title: 'Heart Accord • 1 to 8 Hours',
        subtitle: 'Cashmere Core',
        description: 'Velvety White Musk, Silken Iris Pallida, Creamy Almond',
        tags: ['White Musk', 'Iris Cream', 'Almond Milk']
      },
      base: {
        title: 'Base Accord • 8 to 24+ Hours',
        subtitle: 'Second Skin',
        description: 'Mysore White Sandalwood Cream, Tonka Bean, Tactile Cashmere',
        tags: ['Sandalwood', 'Cashmere Warmth', 'Tonka']
      }
    },
    specs: {
      purity: '100% Pure Attar',
      alcohol: '0% Alcohol Denat',
      longevity: '16+ Hours',
      longevityDetail: 'Intimate Second-Skin Glow',
      projection: 'Intimate Whisper',
      projectionDetail: 'Perceived Within Embrace',
      extraction: 'Cryo-Filtered Essence',
      extractionDetail: 'Ultra Pure Oil'
    }
  },
  {
    id: 'dehn-al-oud-kalakassi-1984',
    name: 'Dehn Al Oud Kalakassi 1984',
    subtitle: 'Distillation Batch N° 12 • Aged 40 Solar Years',
    category: 'Pure Dehn Al Oud',
    classification: 'Vintage Reserve',
    badge: 'Scent of the Season',
    harvestBadge: 'Aged 40 Solar Years',
    rating: 4.97,
    reviewsCount: 142,
    batch: 'Distillation Batch N° 12',
    description: 'Distilled from century-old wild agarwood & high-altitude Taif valley dawn-harvested roses. Untouched by synthetics or alcohol.',
    notes: ['Green Cardamom', 'Wild Kashmir Saffron', 'Aged Assam Core', 'Smoked Birch Resins', 'Grey Ambergris', 'Vintage Leather'],
    terroir: 'Assam & Upper Burma Wildlands',
    distillation: 'Traditional 1984 Deg & Bhapka',
    basePrice: 1850,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0cbqXGbYu0wwMyzAmDYXnxGcHzw0bTdRVe7eSi4YpaQZpXGnRirXnxTjGRMVn2EmDVDyprRTH27w580YLLvJnn6dqZMA2rC7lTYTVq7O6UVqOCX3FKCgrMjmu9HYbq5ISsPjbYB6-slGoJhel2ubBedCJwu8J--Hb-AlCfM8LIczyt-94q9h7lo8nYtKx0EFDSDavWwOnca01pqdGPjW52mVrx-26AWYf25b2Z7ujwObIYFha24HX7w',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0cbqXGbYu0wwMyzAmDYXnxGcHzw0bTdRVe7eSi4YpaQZpXGnRirXnxTjGRMVn2EmDVDyprRTH27w580YLLvJnn6dqZMA2rC7lTYTVq7O6UVqOCX3FKCgrMjmu9HYbq5ISsPjbYB6-slGoJhel2ubBedCJwu8J--Hb-AlCfM8LIczyt-94q9h7lo8nYtKx0EFDSDavWwOnca01pqdGPjW52mVrx-26AWYf25b2Z7ujwObIYFha24HX7w',
    pyramid: {
      top: {
        title: 'TOP NOTE (0 – 30M)',
        subtitle: 'Aromatic Flash',
        description: 'Green Cardamom & Wild Kashmir Saffron',
        tags: ['Green Cardamom', 'Wild Kashmir Saffron']
      },
      heart: {
        title: 'HEART ACCORD (1 – 6H)',
        subtitle: 'Resinous Heart',
        description: 'Aged Assam Agarwood Core & Smoked Birch Resins',
        tags: ['Aged Assam Agarwood Core', 'Smoked Birch Resins']
      },
      base: {
        title: 'ETERNAL BASE (8 – 24H+)',
        subtitle: 'Deep Sillage',
        description: 'Wild Grey Ambergris & Vintage Royal Leather',
        tags: ['Wild Grey Ambergris', 'Vintage Royal Leather']
      }
    },
    specs: {
      purity: '100% Pure Attar',
      alcohol: '0% Alcohol Denat',
      longevity: '36+ Hours',
      longevityDetail: 'Generational Longevity',
      projection: 'Imperial Presence',
      projectionDetail: 'Warm Seductive Radiance',
      extraction: 'Vintage 1984 Still',
      extractionDetail: 'Preserved in Muscat Chamber'
    }
  }
];

export interface CartItem {
  id: string;
  fragranceId: string;
  name: string;
  category: string;
  volumeLabel: string;
  volumeMultiplier: number;
  price: number;
  walnutChest: boolean;
  chestPrice: number;
  image: string;
}
