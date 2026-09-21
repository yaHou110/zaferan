'use client';

import React, { useState } from 'react';
import { X, ShoppingBag, Star, Award, ShieldCheck, MapPin, Plus, Minus, Check } from 'lucide-react';
import { SaffronProduct } from '@/lib/types';
import { formatToman, toPersianDigits } from '@/lib/saffron-data';

interface ProductDetailModalProps {
  product: SaffronProduct | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: SaffronProduct, quantity: number) => void;
  onOpenVerifier: (batchCode: string) => void;
}

export function ProductDetailModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onOpenVerifier,
}: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!isOpen || !product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/70 backdrop-blur-xs animate-in fade-in">
      <div 
        className="relative w-full max-w-3xl bg-[#FCFBF7] rounded-2xl shadow-2xl border border-[#D4AF37]/50 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#4A0512] flex items-center justify-center shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 text-right">
          
          {/* Image & Purity Badge Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="relative overflow-hidden rounded-xl bg-[#F6F3F2] border border-[#D4AF37]/30 aspect-square shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-3 right-3 bg-[#4A0512] text-[#FFFFFF] text-xs font-bold px-3 py-1 rounded-full border border-[#D4AF37]/40 shadow-xs">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Quick Lab Specs Mini Box */}
            {product.crocinLevel > 0 && (
              <div className="bg-[#FFF9EA] border border-[#FED65B] p-3.5 rounded-xl space-y-2">
                <div className="flex items-center justify-between text-xs text-[#745C00] font-bold">
                  <span className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-[#D4AF37]" />
                    شاخص‌های سنجش نوری ISO 3632
                  </span>
                  <button
                    onClick={() => onOpenVerifier(product.batchCode)}
                    className="text-[11px] underline hover:text-[#4A0512]"
                  >
                    مشاهده برگه کامل
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-[#FFFFFF] p-1.5 rounded border border-[#FED65B]/40">
                    <span className="text-[10px] text-[#574142] block">کروسین (رنگ):</span>
                    <span className="font-bold text-[#4A0512] font-mono">{toPersianDigits(product.crocinLevel)}</span>
                  </div>
                  <div className="bg-[#FFFFFF] p-1.5 rounded border border-[#FED65B]/40">
                    <span className="text-[10px] text-[#574142] block">سافرانال (عطر):</span>
                    <span className="font-bold text-[#4A0512] font-mono">{toPersianDigits(product.safranalLevel)}</span>
                  </div>
                  <div className="bg-[#FFFFFF] p-1.5 rounded border border-[#FED65B]/40">
                    <span className="text-[10px] text-[#574142] block">پیکروکروسین:</span>
                    <span className="font-bold text-[#4A0512] font-mono">{toPersianDigits(product.picrocrocinLevel)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Details & Purchase Column */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              
              {/* Category & Batch */}
              <div className="flex items-center justify-between text-xs text-[#574142]">
                <span className="font-semibold text-[#735C00] bg-[#F0EDED] px-2.5 py-1 rounded">
                  {product.categoryLabel}
                </span>
                <span className="font-mono text-[#8A7172]">کد رهگیری: {product.batchCode}</span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A0512] leading-snug">
                {product.name}
              </h2>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-2 text-xs text-[#574142]">
                <div className="flex items-center gap-1 text-[#735C00] font-bold">
                  <Star className="w-4 h-4 fill-[#FED65B] text-[#FED65B]" />
                  <span>{toPersianDigits(product.rating)}</span>
                </div>
                <span>•</span>
                <span>{toPersianDigits(product.reviewsCount)} نظر ثبت شده خریداران</span>
                <span>•</span>
                <span className="text-green-700 font-semibold">موجود در انبار زرین</span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#574142] leading-relaxed text-justify">
                {product.description}
              </p>

              {/* Key Features Specs Table */}
              <div className="space-y-1.5 pt-2 text-xs text-[#574142]">
                <div className="flex justify-between py-1 border-b border-[#E5E2E1]">
                  <span>وزن خالص:</span>
                  <span className="font-bold text-[#1A1A1A]">{product.weightLabel}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E5E2E1]">
                  <span>نوع بسته‌بندی:</span>
                  <span className="font-bold text-[#1A1A1A]">{product.packagingType}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E5E2E1]">
                  <span>خاستگاه و مزرعه:</span>
                  <span className="font-bold text-[#1A1A1A]">{product.origin}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E5E2E1]">
                  <span>فصل برداشت:</span>
                  <span className="font-bold text-[#1A1A1A]">{product.harvestYear}</span>
                </div>
              </div>

            </div>

            {/* Price & Add to Cart Controls */}
            <div className="space-y-4 pt-4 border-t border-[#E5E2E1]">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-[#8A7172]">قیمت نهایی با احتساب تخفیف:</span>
                <div className="flex items-baseline gap-1 text-right">
                  <span className="text-2xl sm:text-3xl font-bold text-[#4A0512] font-mono">
                    {formatToman(product.price * quantity)}
                  </span>
                  <span className="text-xs font-bold text-[#574142]">تومان</span>
                </div>
              </div>

              {/* Quantity Selector + Add Button */}
              <div className="flex gap-3">
                <div className="flex items-center border border-[#E5E2E1] rounded-lg bg-[#FFFFFF] px-2">
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-[#4A0512] hover:bg-[#F6F3F2] rounded transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-bold text-sm font-mono">
                    {toPersianDigits(quantity)}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-[#4A0512] hover:bg-[#F6F3F2] rounded transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className={`flex-1 py-3 px-6 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm ${
                    added
                      ? 'bg-green-700 text-[#FFFFFF]'
                      : 'bg-[#4A0512] hover:bg-[#6B081D] text-[#FFFFFF]'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>با موفقیت به سبد افزوده شد</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5 text-[#FED65B]" />
                      <span>افزودن به سبد خرید</span>
                    </>
                  )}
                </button>
              </div>

              {/* Guarantees mini text */}
              <div className="flex items-center justify-between text-[11px] text-[#735C00] pt-1">
                <span>✓ ارسال سریع در بسته‌بندی ضدضربه</span>
                <span>✓ ضمانت ۴۸ ساعته بازگشت وجه</span>
                <span>✓ هولوگرام رسمی کنترل کیفی</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
