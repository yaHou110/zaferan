'use client';

import React, { useState } from 'react';
import { ShoppingCart, Star, Eye, Award, Check, Filter } from 'lucide-react';
import { SAFFRON_PRODUCTS, formatToman, toPersianDigits } from '@/lib/saffron-data';
import { SaffronProduct } from '@/lib/types';

interface ProductCatalogProps {
  onAddToCart: (product: SaffronProduct) => void;
  onSelectProduct: (product: SaffronProduct) => void;
  onOpenVerifier: (batchCode: string) => void;
  searchQuery: string;
}

export function ProductCatalog({
  onAddToCart,
  onSelectProduct,
  onOpenVerifier,
  searchQuery,
}: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'همه محصولات' },
    { id: 'super-negin', label: 'زعفران سوپر نگین' },
    { id: 'gift-box', label: 'پک‌های کادویی و سازمانی' },
    { id: 'sargol', label: 'سرگل ممتاز' },
    { id: 'accessory', label: 'هاون و ملزومات' },
  ];

  const filteredProducts = SAFFRON_PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleQuickAdd = (product: SaffronProduct) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section className="w-full bg-[#FCFBF7] py-12 sm:py-16" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-1 text-[#735C00] text-xs font-bold tracking-widest uppercase mb-1">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>AUTHENTIC PERSIAN COLLECTION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#4A0512]">
            پرفروش‌ترین محصولات زرین قائنات
          </h2>
          <p className="text-xs sm:text-sm text-[#574142] max-w-xl mt-2 leading-relaxed">
            ارسال فوری در بسته‌بندی‌های پلمپ شده ضد رطوبت به همراه فاکتور رسمی اصالت، هولوگرام رهگیری و برگه آنالیز آزمایشگاهی
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#4A0512] text-[#FFFFFF] shadow-sm'
                  : 'bg-[#F0EDED] text-[#574142] hover:bg-[#E5E2E1] hover:text-[#4A0512]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-[#F6F3F2] rounded-2xl p-8 border border-dashed border-[#E5E2E1]">
            <p className="text-sm font-bold text-[#4A0512]">محصولی متناسب با جستجوی شما یافت نشد.</p>
            <p className="text-xs text-[#574142] mt-1">لطفاً عبارت دیگری را جستجو نمایید یا دسته‌بندی‌ها را تغییر دهید.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#FFFFFF] rounded-2xl border border-[#D4AF37]/30 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative overflow-hidden rounded-xl bg-[#F6F3F2] mb-4 aspect-4/3 cursor-pointer" onClick={() => onSelectProduct(product)}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-3 right-3 bg-[#4A0512] text-[#FFFFFF] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs border border-[#D4AF37]/40">
                        {product.badge}
                      </span>
                    )}

                    {/* Quick Preview Eye */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="absolute bottom-3 left-3 bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#4A0512] p-2 rounded-lg shadow-sm backdrop-blur-xs transition-colors"
                      title="مشاهده جزئیات و آنالیز"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Metadata Row: Rating & Batch Code */}
                  <div className="flex items-center justify-between text-xs text-[#574142] mb-2">
                    <div className="flex items-center gap-1 text-[#735C00] font-bold">
                      <Star className="w-3.5 h-3.5 fill-[#FED65B] text-[#FED65B]" />
                      <span>{toPersianDigits(product.rating)}</span>
                      <span className="text-[11px] text-[#8A7172]">({toPersianDigits(product.reviewsCount)})</span>
                    </div>

                    <button
                      onClick={() => onOpenVerifier(product.batchCode)}
                      className="text-[11px] font-mono text-[#735C00] bg-[#F6F3F2] hover:bg-[#FED65B]/20 px-2 py-0.5 rounded border border-[#D4AF37]/40 flex items-center gap-1 transition-colors"
                      title="استعلام آزمایشگاهی این محصول"
                    >
                      <Award className="w-3 h-3 text-[#D4AF37]" />
                      <span>بچ: {product.batchCode}</span>
                    </button>
                  </div>

                  {/* Title & Weight */}
                  <h3 
                    onClick={() => onSelectProduct(product)}
                    className="text-base sm:text-lg font-bold text-[#4A0512] group-hover:text-[#6B081D] cursor-pointer transition-colors leading-snug"
                  >
                    {product.name}
                  </h3>
                  
                  <p className="text-xs text-[#574142] mt-1.5 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-2.5 inline-block text-[11px] font-semibold text-[#735C00] bg-[#FFF9EA] px-2.5 py-0.5 rounded border border-[#FED65B]/50">
                    وزن: {product.weightLabel}
                  </div>
                </div>

                {/* Price & Action Section */}
                <div className="mt-5 pt-4 border-t border-[#E5E2E1] flex flex-col gap-3">
                  <div className="flex items-baseline justify-between">
                    {product.originalPrice && (
                      <span className="text-xs text-[#8A7172] line-through font-mono">
                        {formatToman(product.originalPrice)} تومان
                      </span>
                    )}
                    <div className="text-right flex items-baseline gap-1 mr-auto">
                      <span className="text-xl sm:text-2xl font-bold text-[#4A0512] font-mono">
                        {formatToman(product.price)}
                      </span>
                      <span className="text-xs font-bold text-[#574142]">تومان</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="py-2.5 px-3 bg-[#F6F3F2] hover:bg-[#E5E2E1] text-[#4A0512] text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1 border border-[#E5E2E1]"
                    >
                      <span>مشاهده و آنالیز</span>
                    </button>

                    <button
                      onClick={() => handleQuickAdd(product)}
                      className={`py-2.5 px-3 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-xs ${
                        addedId === product.id
                          ? 'bg-[#735C00] text-[#FFFFFF]'
                          : 'bg-[#4A0512] hover:bg-[#6B081D] text-[#FFFFFF]'
                      }`}
                    >
                      {addedId === product.id ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>اضافه شد</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4 text-[#FED65B]" />
                          <span>خرید سریع</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
