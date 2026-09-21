'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CategoriesSection } from '@/components/CategoriesSection';
import { ProductCatalog } from '@/components/ProductCatalog';
import { ProductDetailModal } from '@/components/ProductDetailModal';
import { LabVerifierModal } from '@/components/LabVerifierModal';
import { CartDrawer } from '@/components/CartDrawer';
import { SaffronCalculator } from '@/components/SaffronCalculator';
import { BrewingGuide } from '@/components/BrewingGuide';
import { Testimonials } from '@/components/Testimonials';
import { FaqSection } from '@/components/FaqSection';
import { VipClub } from '@/components/VipClub';
import { Footer } from '@/components/Footer';
import { PlanComparisonModal } from '@/components/PlanComparisonModal';
import { B2BPortalModal } from '@/components/B2BPortalModal';
import { SaffronProduct } from '@/lib/types';
import { SAFFRON_PRODUCTS } from '@/lib/saffron-data';
import { useCart, cartStore } from '@/lib/cart-store';
import { Layers, Building2, Phone } from 'lucide-react';

export default function HomePage() {
  const cartItems = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isVerifierOpen, setIsVerifierOpen] = useState(false);
  const [isPlanComparisonOpen, setIsPlanComparisonOpen] = useState(false);
  const [isB2BOpen, setIsB2BOpen] = useState(false);
  const [verifierBatchCode, setVerifierBatchCode] = useState<string>('ZR-2024-N1');
  const [selectedProduct, setSelectedProduct] = useState<SaffronProduct | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product: SaffronProduct, quantity: number = 1) => {
    cartStore.addItem(product, quantity);
  };

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    cartStore.updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: string) => {
    cartStore.removeItem(productId);
  };

  const handleClearCart = () => {
    cartStore.clearCart();
  };

  const handleOpenVerifier = (batchCode?: string) => {
    if (batchCode) {
      setVerifierBatchCode(batchCode);
    }
    setIsVerifierOpen(true);
  };

  const handleSelectCategoryFromHeroOrNav = (catKey: string) => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Structured Data (JSON-LD) for High SEO Performance
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: 'زعفران زرین قائنات - Zarrin Saffron',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB_Y8ExkG7uWHksXRxr2T6A7t6e1r7nY7K4kuDxpppg4DS-jg892NMjFSOEnnOQHKo_k6UO3a5UBvxE9fBJujmTKZXdff1EUBfCrjXkn2MEKCIpembJl8D3GoHH1APwOERzmD9wcDScd0_4qQcyQYfiZvHnkUfCu3xbI0gzGol4v-ic2G440LDdUhq_5fPhP_yj9SXCRMUoqupwx2uStz0jtfDR6dGrp3JRRaHo4mCnA9NMWfBEmNDdw',
    description: 'فروشگاه اینترنتی معتبر زعفران اصیل قائنات خراسان جنوبی، زعفران سوپر نگین، سرگل و پک‌های کادویی نفیس با برگه آنالیز ISO 3632',
    priceRange: '۲۹۵,۰۰۰ - ۳,۴۵۰,۰۰۰ تومان',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'قائنات',
      addressRegion: 'خراسان جنوبی',
      addressCountry: 'IR',
    },
    telephone: '+98-21-88880000',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'محصولات زعفران اعلا',
      itemListElement: SAFFRON_PRODUCTS.map((p) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: p.name,
          description: p.description,
          category: p.categoryLabel,
          offers: {
            '@type': 'Offer',
            price: p.price,
            priceCurrency: 'IRR',
            availability: 'https://schema.org/InStock',
          },
        },
      })),
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBF7] text-[#1A1A1A] font-sans antialiased selection:bg-[#FED65B] selection:text-[#4A0512]">
      {/* SEO JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Navigation Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenVerifier={handleOpenVerifier}
        onOpenCalculator={() => {
          const el = document.getElementById('calculator');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenPlanComparison={() => setIsPlanComparisonOpen(true)}
        onOpenB2B={() => setIsB2BOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero
          onOpenVerifier={handleOpenVerifier}
          onExploreProducts={() => {
            const el = document.getElementById('products');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Featured Categories Grid */}
        <CategoriesSection onSelectCategory={handleSelectCategoryFromHeroOrNav} />

        {/* Product Catalog & Store */}
        <ProductCatalog
          onAddToCart={handleAddToCart}
          onSelectProduct={setSelectedProduct}
          onOpenVerifier={handleOpenVerifier}
          searchQuery={searchQuery}
        />

        {/* Interactive Mesghal-Gram Calculator & Banquet Estimator */}
        <SaffronCalculator />

        {/* Ice Shock Brewing Masterclass & 3 Home Purity Tests */}
        <BrewingGuide />

        {/* Chef & Connoisseur Testimonials Carousel */}
        <Testimonials />

        {/* Interactive FAQ & Editorial SEO Guide */}
        <FaqSection />

        {/* VIP Club 10% Discount Code Generator */}
        <VipClub />
      </main>

      {/* Comprehensive Iranian Luxury Footer */}
      <Footer
        onOpenVerifier={() => handleOpenVerifier()}
        onOpenCalculator={() => {
          const el = document.getElementById('calculator');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenPlanComparison={() => setIsPlanComparisonOpen(true)}
        onOpenB2B={() => setIsB2BOpen(true)}
      />

      {/* Floating Presenter Quick-Access Bar (Himora Demo Tools) */}
      <aside aria-label="ابزارهای دمو و مقایسه پلن‌ها" className="fixed bottom-5 left-5 z-40 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 drop-shadow-xl animate-in fade-in slide-in-from-bottom-3">
        <button
          onClick={() => setIsB2BOpen(true)}
          className="bg-[#FFFFFF] hover:bg-[#FFF9EA] text-[#4A0512] border border-[#D4AF37] px-3.5 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all cursor-pointer"
        >
          <Building2 className="w-4 h-4 text-[#D4AF37]" />
          <span>دموی پورتال عمده (B2B)</span>
        </button>

        <button
          onClick={() => setIsPlanComparisonOpen(true)}
          className="bg-[#4A0512] hover:bg-[#6B081D] text-[#FED65B] border border-[#FED65B]/60 px-4 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
        >
          <Layers className="w-4 h-4 text-[#FED65B]" />
          <span>مقایسه پلن ۳۰ و ۵۰ میلیون هیمورا</span>
        </button>
      </aside>

      {/* Modals & Slide-over Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenVerifier={handleOpenVerifier}
      />

      <LabVerifierModal
        isOpen={isVerifierOpen}
        onClose={() => setIsVerifierOpen(false)}
        initialBatchCode={verifierBatchCode}
      />

      <PlanComparisonModal
        isOpen={isPlanComparisonOpen}
        onClose={() => setIsPlanComparisonOpen(false)}
        onOpenB2B={() => {
          setIsPlanComparisonOpen(false);
          setIsB2BOpen(true);
        }}
        onOpenVerifier={() => {
          setIsPlanComparisonOpen(false);
          setIsVerifierOpen(true);
        }}
      />

      <B2BPortalModal
        isOpen={isB2BOpen}
        onClose={() => setIsB2BOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
