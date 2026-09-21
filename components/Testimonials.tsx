'use client';

import React from 'react';
import { Star, Quote, Award } from 'lucide-react';
import { TESTIMONIALS, toPersianDigits } from '@/lib/saffron-data';

export function Testimonials() {
  return (
    <section className="w-full bg-[#FCFBF7] py-12 sm:py-16 border-t border-[#E5E2E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#735C00] font-bold tracking-wider uppercase mb-1">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span>CHEF & CONNOISSEUR EXPERIENCES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A0512]">
            تجربه طعم و عطر از دیدگاه سرآشپزان و خریداران
          </h2>
          <p className="text-xs sm:text-sm text-[#574142] max-w-xl mt-2 leading-relaxed">
            بازخورد سرآشپزان هتل‌های پنج‌ستاره، سفارش‌دهندگان هدایای سازمانی و خریداران خانوادگی زرین قائنات
          </p>
        </div>

        {/* Testimonials 3-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#D4AF37]/30 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-right relative"
            >
              <div>
                {/* 5-Star Row */}
                <div className="flex items-center gap-1 mb-4 text-[#FED65B]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FED65B]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed italic text-justify">
                  «{t.comment}»
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-[#E5E2E1] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4A0512] text-[#FED65B] flex items-center justify-center font-bold text-xs">
                  {t.avatarInitials}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xs sm:text-sm text-[#4A0512]">{t.name}</span>
                  <span className="text-[11px] text-[#735C00] font-semibold">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
