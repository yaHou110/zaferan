'use client';

import React, { useState } from 'react';
import { ShoppingBag, Search, Phone, ShieldCheck, Heart, Menu, X, Award, Tag, Building2, Layers, CheckCircle2, Truck } from 'lucide-react';
import { toPersianDigits } from '@/lib/saffron-data';
import { SaffronLogo } from '@/components/SaffronLogo';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenVerifier: (batchCode?: string) => void;
  onOpenCalculator: () => void;
  onOpenPlanComparison?: () => void;
  onOpenB2B?: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

const POPULAR_SEARCH_TAGS = [
  'سوپر نگین صادراتی',
  'پک هدیه خاتم',
  'بسته‌بندی کریستال',
  'یک مثقالی',
  'هاون برنجی',
  'زعفران سرگل ممتاز',
];

export function Header({
  cartCount,
  onOpenCart,
  onOpenVerifier,
  onOpenCalculator,
  onOpenPlanComparison,
  onOpenB2B,
  searchQuery,
  onSearchChange,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FCFBF7] border-b border-[#E5E2E1] shadow-xs">
      {/* Top Value Proposition Bar */}
      <div className="bg-[#4A0512] text-[#F9F1D8] py-2 px-4 text-xs md:text-sm font-medium border-b border-[#6B081D]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center gap-2 text-[#D4AF37]">
            <Award className="w-4 h-4" />
            <span>برداشت تازه پاییزه مزارع قائنات خراسان جنوبی</span>
          </div>

          <div className="flex-1 text-center flex items-center justify-center gap-2">
            <Truck className="w-4 h-4 text-[#FED65B]" />
            <span>ارسال رایگان برای خریدهای بالای ۱ میلیون تومان + ضمانت اصالت آزمایشگاهی</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:09354467269"
              className="relative inline-flex items-center gap-2 bg-[#FED65B] hover:bg-[#FFF1B8] text-[#4A0512] font-black text-xs md:text-sm px-3.5 py-1.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 animate-pulse border border-[#FFE088] hover:scale-105"
            >
              {/* Blinking Live Indicator Dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-90"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              
              <Phone className="w-3.5 h-3.5 text-[#4A0512]" />
              <span className="tracking-wide">گروه نرم‌افزاری هیمورا: ۰۹۳۵۴۴۶۷۲۶۹</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          
          {/* Right Section: Mobile Toggle & Brand Logo */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1A1A1A] hover:text-[#6B081D] rounded-lg hover:bg-[#F0EDED] transition-colors"
              aria-label="منو"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <a href="#" className="flex items-center gap-3.5 group">
              {/* Luxury Royal Saffron Emblem */}
              <SaffronLogo size="md" />
              <div className="flex flex-col text-right">
                <span className="text-xl sm:text-2xl font-black text-[#4A0512] tracking-tight group-hover:text-[#6B081D] transition-colors">
                  زعفران زرین قائنات
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#735C00] uppercase font-sans">
                  ZARRIN SAFFRON • EST. 2009
                </span>
              </div>
            </a>
          </div>

          {/* Center Section: Spacious Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-[#4A0512]">
            <a 
              href="#products" 
              className="hover:text-[#6B081D] transition-colors py-2 border-b-2 border-transparent hover:border-[#D4AF37]"
            >
              محصولات و فروشگاه
            </a>
            <a 
              href="#categories" 
              className="hover:text-[#6B081D] transition-colors py-2 border-b-2 border-transparent hover:border-[#D4AF37]"
            >
              دسته‌بندی‌ها
            </a>
            <a 
              href="#gift-boxes" 
              className="hover:text-[#6B081D] transition-colors py-2 border-b-2 border-transparent hover:border-[#D4AF37]"
            >
              پک‌های نفیس هدیه
            </a>
            <button
              onClick={() => onOpenVerifier()}
              className="hover:text-[#6B081D] transition-colors py-2 flex items-center gap-1.5 text-[#735C00] font-bold"
            >
              <Award className="w-4 h-4 text-[#D4AF37]" />
              استعلام گواهی آزمایشگاه
            </button>
            <button
              onClick={onOpenCalculator}
              className="hover:text-[#6B081D] transition-colors py-2"
            >
              ماشین‌حساب مثقال
            </button>
            <button
              onClick={onOpenB2B}
              className="hover:text-[#6B081D] transition-colors py-2 flex items-center gap-1 text-[#4A0512] font-semibold"
            >
              <Building2 className="w-4 h-4 text-[#D4AF37]" />
              پورتال عمده (B2B)
            </button>
            <a 
              href="#brewing-guide" 
              className="hover:text-[#6B081D] transition-colors py-2"
            >
              راهنمای دم‌آوری
            </a>
            <a 
              href="#faq" 
              className="hover:text-[#6B081D] transition-colors py-2"
            >
              پرسش‌های متداول
            </a>
            {onOpenPlanComparison && (
              <button
                onClick={onOpenPlanComparison}
                className="bg-[#FFF9EA] hover:bg-[#FED65B]/30 text-[#735C00] border border-[#FED65B] px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs"
              >
                <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
                مقایسه پلن‌های هیمورا
              </button>
            )}
          </nav>

          {/* Left Section: Cart Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Cart Trigger Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center justify-center bg-[#4A0512] text-[#FFFFFF] hover:bg-[#6B081D] px-4 py-2.5 rounded-lg transition-all shadow-xs hover:shadow-md gap-2.5"
              aria-label="سبد خرید"
            >
              <ShoppingBag className="w-5 h-5 text-[#FED65B]" />
              <span className="hidden sm:inline text-xs font-bold">سبد خرید</span>
              {cartCount > 0 ? (
                <span className="bg-[#FED65B] text-[#241A00] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {toPersianDigits(cartCount)}
                </span>
              ) : (
                <span className="text-[11px] text-[#FED65B]/80 font-mono hidden md:inline">({toPersianDigits(0)})</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Dedicated Full-Width Sub-Header Bar for Search & Quick Filter Tags */}
      <div className="bg-[#F6F3F2] border-t border-[#E5E2E1] py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Main Search Input */}
          <div className="relative w-full md:w-80 lg:w-96 flex items-center">
            <Search className="w-4 h-4 text-[#735C00] absolute right-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="جستجوی سوپر نگین، پک کادویی، هاون، وزن..."
              className="w-full bg-[#FFFFFF] rounded-lg pr-9 pl-8 py-2 text-xs sm:text-sm text-[#1A1A1A] placeholder:text-[#8A7172] border border-[#D4AF37]/40 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 focus:outline-none transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute left-2.5 text-xs text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full w-4 h-4 flex items-center justify-center"
                title="پاک کردن جستجو"
              >
                ×
              </button>
            )}
          </div>

          {/* Quick-Search Topic Tags */}
          <div className="w-full md:w-auto flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs">
            <span className="text-[11px] text-[#735C00] font-bold shrink-0 flex items-center gap-1 pl-1">
              <Tag className="w-3 h-3 text-[#D4AF37]" />
              پیشنهادات:
            </span>
            {POPULAR_SEARCH_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => onSearchChange(tag === searchQuery ? '' : tag)}
                className={`shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
                  searchQuery === tag
                    ? 'bg-[#4A0512] text-[#FED65B] shadow-2xs'
                    : 'bg-[#FFFFFF] text-[#574142] hover:bg-[#FFF9EA] hover:text-[#4A0512] border border-[#E5E2E1]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCFBF7] border-b border-[#E5E2E1] px-4 py-4 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#4A0512] hover:text-[#6B081D]"
          >
            کاتالوگ و محصولات زعفران
          </a>
          <a
            href="#categories"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#4A0512] hover:text-[#6B081D]"
          >
            دسته‌بندی‌های برگزیده
          </a>
          <a
            href="#gift-boxes"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#4A0512] hover:text-[#6B081D]"
          >
            پک‌های هدیه و سازمانی
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenVerifier();
            }}
            className="w-full text-right py-2 text-sm font-semibold text-[#735C00] flex items-center gap-2"
          >
            <Award className="w-4 h-4 text-[#D4AF37]" />
            استعلام آنلاین برگه آزمایشگاه ISO 3632
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCalculator();
            }}
            className="w-full text-right py-2 text-sm font-semibold text-[#4A0512]"
          >
            ماشین‌حساب هوشمند گرم به مثقال
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenB2B?.();
            }}
            className="w-full text-right py-2 text-sm font-semibold text-[#4A0512] flex items-center gap-2"
          >
            <Building2 className="w-4 h-4 text-[#D4AF37]" />
            پورتال فروش عمده و صادرات (B2B)
          </button>
          <a
            href="#brewing-guide"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#4A0512]"
          >
            راهنمای دم‌آوری با یخ و تست اصالت
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-[#4A0512]"
          >
            پرسش‌های متداول
          </a>
          {onOpenPlanComparison && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanComparison();
              }}
              className="w-full text-center py-2.5 px-3 bg-[#FFF9EA] border border-[#FED65B] text-[#735C00] font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-2xs"
            >
              <Layers className="w-4 h-4 text-[#D4AF37]" />
              مشاهده مقایسه پلن‌های ۳۰ و ۵۰ میلیون هیمورا
            </button>
          )}
          <div className="pt-3 border-t border-[#E5E2E1] flex flex-col gap-1 text-xs text-[#574142]">
            <span className="font-semibold text-[#735C00]">طراحی و توسعه: گروه نرم‌افزاری هیمورا</span>
            <div className="flex items-center justify-between">
              <span>مشاوره و سفارش:</span>
              <a href="tel:09354467269" className="font-bold text-[#4A0512] font-sans text-sm" dir="ltr">
                09354467269
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
