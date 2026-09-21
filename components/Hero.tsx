'use client';

import React from 'react';
import Image from 'next/image';
import { ShoppingBag, FileCheck2, ShieldCheck, Truck, RotateCcw, Sprout, Award, CheckCircle2 } from 'lucide-react';
import { toPersianDigits } from '@/lib/saffron-data';

interface HeroProps {
  onOpenVerifier: (code?: string) => void;
  onExploreProducts: () => void;
}

export function Hero({ onOpenVerifier, onExploreProducts }: HeroProps) {
  return (
    <section className="relative w-full bg-[#FCFBF7] overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-[#E5E2E1]">
      {/* Subtle Luxury Ambient Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#FED65B]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-[#6B081D]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[560px]">
          
          {/* RTL Right Column: Typography & Action */}
          <div className="lg:col-span-6 flex flex-col items-start text-right space-y-5">
            
            {/* Harvest Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F0EDED] rounded-full text-[#735C00] text-xs sm:text-sm font-medium border border-[#D4AF37]/30 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#735C00] animate-ping" />
              <span>برداشت تازه پاییزه مزارع قائنات | گواهی درجه یک ISO 3632</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#4A0512] font-black tracking-tight leading-snug sm:leading-tight">
              طلای سرخ قائنات؛<br />
              <span className="text-[#735C00] font-extrabold">عطر و رنگ اصالت ایرانی</span>
            </h1>

            {/* Subheading / Value Description */}
            <p className="text-sm sm:text-base text-[#574142] text-justify leading-loose max-w-xl font-normal">
              برداشت دست‌چین امسال با بالاترین کروسین (قدرت رنگ‌دهی ۲۹۰+) و سافرانال ثبت‌شده در آزمایشگاه‌های مرجع بین‌المللی. بسته‌بندی در شیشه‌های کریستال تراش‌خورده با چوب‌پنبه طبیعی و جعبه‌های نفیس خاتم و معرق کاری دست‌ساز.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#4A0512] hover:bg-[#6B081D] text-[#FFFFFF] font-bold text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <ShoppingBag className="w-5 h-5 text-[#FED65B] group-hover:scale-110 transition-transform" />
                <span>مشاهده و خرید آنلاین</span>
              </button>

              <button
                onClick={() => onOpenVerifier('ZR-2024-N1')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#FFFFFF] hover:bg-[#F6F3F2] text-[#735C00] font-bold text-sm sm:text-base rounded-lg border border-[#D4AF37]/40 shadow-xs transition-all"
              >
                <FileCheck2 className="w-5 h-5 text-[#D4AF37]" />
                <span>استعلام آنلاین برگه آنالیز</span>
              </button>
            </div>

            {/* Micro Trust Badges Grid */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full">
              <div className="p-2.5 bg-[#F6F3F2] rounded-lg text-right flex flex-col gap-0.5 border border-[#E5E2E1]/60">
                <span className="text-xs text-[#735C00] font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  اصالت ۱۰۰٪
                </span>
                <span className="text-[11px] text-[#1A1A1A]">کد رهگیری آزمایشگاه</span>
              </div>

              <div className="p-2.5 bg-[#F6F3F2] rounded-lg text-right flex flex-col gap-0.5 border border-[#E5E2E1]/60">
                <span className="text-xs text-[#735C00] font-bold flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" />
                  ارسال اکسپرس
                </span>
                <span className="text-[11px] text-[#1A1A1A]">بسته‌بندی ایمن ضدضربه</span>
              </div>

              <div className="p-2.5 bg-[#F6F3F2] rounded-lg text-right flex flex-col gap-0.5 border border-[#E5E2E1]/60">
                <span className="text-xs text-[#735C00] font-bold flex items-center gap-1">
                  <RotateCcw className="w-3.5 h-3.5" />
                  ضمانت عودت
                </span>
                <span className="text-[11px] text-[#1A1A1A]">۴۸ ساعت بازگشت وجه</span>
              </div>

              <div className="p-2.5 bg-[#F6F3F2] rounded-lg text-right flex flex-col gap-0.5 border border-[#E5E2E1]/60">
                <span className="text-xs text-[#735C00] font-bold flex items-center gap-1">
                  <Sprout className="w-3.5 h-3.5" />
                  مستقیم از مزرعه
                </span>
                <span className="text-[11px] text-[#1A1A1A]">قائنات خراسان جنوبی</span>
              </div>
            </div>

          </div>

          {/* RTL Left Column: Hero Visual Studio Showcase */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none group">
              
              {/* Main Visual Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-[#F6F3F2] shadow-xl border border-[#D4AF37]/30">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB_Y8ExkG7uWHksXRxr2T6A7t6e1r7nY7K4kuDxpppg4DS-jg892NMjFSOEnnOQHKo_k6UO3a5UBvxE9fBJujmTKZXdff1EUBfCrjXkn2MEKCIpembJl8D3GoHH1APwOERzmD9wcDScd0_4qQcyQYfiZvHnkUfCu3xbI0gzGol4v-ic2G440LDdUhq_5fPhP_yj9SXCRMUoqupwx2uStz0jtfDR6dGrp3JRRaHo4mCnA9NMWfBEmNDdw"
                  alt="جام کریستال زعفران سوپر نگین زرین قائنات با کلاله‌های سرخ یاقوتی بر روی سنگ مرمر و مخمل درباری"
                  className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A0512]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Lab Certificate Card */}
              <div 
                onClick={() => onOpenVerifier('ZR-2024-N1')}
                className="absolute -bottom-4 right-3 sm:right-6 bg-[#FFFFFF]/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-lg border border-[#D4AF37]/40 flex items-center gap-3 cursor-pointer hover:bg-[#FFFFFF] transition-all hover:scale-102"
              >
                <div className="w-11 h-11 rounded-full bg-[#FED65B] flex items-center justify-center text-[#745C00] shadow-2xs">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[10px] font-bold text-[#735C00] tracking-widest uppercase font-sans">
                    SUPER NEGIN GRADE 1
                  </span>
                  <span className="text-sm sm:text-base text-[#4A0512] font-bold">
                    کروسین رنگ‌دهی: ۲۹۴+
                  </span>
                  <span className="text-[11px] text-[#574142] flex items-center gap-1">
                    <span>برگه سنجش نوری ISO 3632</span>
                    <span className="text-[#D4AF37] font-bold">← مشاهده</span>
                  </span>
                </div>
              </div>

              {/* Decorative Pill Tag */}
              <div className="hidden sm:flex absolute -top-3 -left-3 bg-[#4A0512] text-[#FFFFFF] text-xs font-semibold py-1.5 px-3.5 rounded-full shadow-md items-center gap-1.5 border border-[#D4AF37]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FED65B]" />
                <span>تضمین قلم‌درشت و بدون خامه سفید</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
