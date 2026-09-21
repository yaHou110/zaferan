'use client';

import React, { useState } from 'react';
import { Calculator, Scale, Users, ArrowRightLeft, CheckCircle2 } from 'lucide-react';
import { toPersianDigits, formatToman } from '@/lib/saffron-data';

export function SaffronCalculator() {
  const [calculatorMode, setCalculatorMode] = useState<'convert' | 'party'>('convert');

  // Convert state
  const [grams, setGrams] = useState<number>(4.608);
  const [mesghals, setMesghals] = useState<number>(1);

  // Party estimate state
  const [guestCount, setGuestCount] = useState<number>(30);
  const [dishType, setDishType] = useState<'rice' | 'dessert' | 'tea'>('rice');

  // Handlers for conversion (1 mesghal = 4.6083 grams)
  const handleGramChange = (val: number) => {
    setGrams(val);
    setMesghals(parseFloat((val / 4.6083).toFixed(3)));
  };

  const handleMesghalChange = (val: number) => {
    setMesghals(val);
    setGrams(parseFloat((val * 4.6083).toFixed(2)));
  };

  // Saffron requirement calculation:
  // Rice: ~0.08g per person
  // Dessert (Sholezard, Halva): ~0.12g per person
  // Tea / Drinks: ~0.04g per person
  const gramPerPersonMap = {
    rice: 0.08,
    dessert: 0.12,
    tea: 0.04,
  };

  const requiredGrams = parseFloat((guestCount * gramPerPersonMap[dishType]).toFixed(2));
  const requiredMesghals = parseFloat((requiredGrams / 4.6083).toFixed(2));

  return (
    <section className="w-full bg-[#FCFBF7] py-12 sm:py-16 border-y border-[#E5E2E1]" id="calculator">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FFFFFF] rounded-2xl border border-[#D4AF37]/40 p-6 sm:p-8 shadow-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E5E2E1] gap-4">
            <div className="text-right">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#735C00] font-bold tracking-wider uppercase mb-1">
                <Calculator className="w-4 h-4 text-[#D4AF37]" />
                <span>SMART SAFFRON UTILITY</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A0512]">
                ماشین‌حساب هوشمند تبدیل مثقال و محاسبه‌گر مصرف
              </h2>
              <p className="text-xs text-[#574142] mt-1">
                محاسبه دقیق واحد‌های سنتی و برآورد مقدار زعفران لازم برای مهمانی‌ها، تشریفات و نذورات
              </p>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex bg-[#F0EDED] p-1 rounded-xl">
              <button
                onClick={() => setCalculatorMode('convert')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  calculatorMode === 'convert'
                    ? 'bg-[#4A0512] text-[#FFFFFF] shadow-2xs'
                    : 'text-[#574142] hover:text-[#4A0512]'
                }`}
              >
                تبدیل گرم به مثقال
              </button>
              <button
                onClick={() => setCalculatorMode('party')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  calculatorMode === 'party'
                    ? 'bg-[#4A0512] text-[#FFFFFF] shadow-2xs'
                    : 'text-[#574142] hover:text-[#4A0512]'
                }`}
              >
                محاسبه برای مهمانی و نذورات
              </button>
            </div>
          </div>

          {/* Mode 1: Unit Converter */}
          {calculatorMode === 'convert' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-center text-right">
              
              <div className="md:col-span-5 space-y-2">
                <label className="text-xs font-bold text-[#4A0512] flex items-center justify-between">
                  <span>مقدار به گرم:</span>
                  <span className="text-[11px] text-[#735C00]">واحد استاندارد بین‌المللی</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    value={grams}
                    onChange={(e) => handleGramChange(parseFloat(e.target.value) || 0)}
                    className="w-full p-3 bg-[#F6F3F2] border border-[#E5E2E1] focus:border-[#D4AF37] focus:bg-[#FFFFFF] rounded-xl font-mono text-base font-bold text-[#4A0512] focus:outline-none"
                    dir="ltr"
                  />
                  <span className="absolute left-3 top-3.5 text-xs text-[#8A7172] font-semibold">g (گرم)</span>
                </div>
              </div>

              <div className="md:col-span-2 flex justify-center py-2">
                <div className="w-10 h-10 rounded-full bg-[#FFF9EA] text-[#735C00] border border-[#FED65B] flex items-center justify-center">
                  <ArrowRightLeft className="w-4 h-4" />
                </div>
              </div>

              <div className="md:col-span-5 space-y-2">
                <label className="text-xs font-bold text-[#4A0512] flex items-center justify-between">
                  <span>مقدار به مثقال:</span>
                  <span className="text-[11px] text-[#735C00]">۱ مثقال = ۴.۶۰۸ گرم (۲۴ نخود)</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    value={mesghals}
                    onChange={(e) => handleMesghalChange(parseFloat(e.target.value) || 0)}
                    className="w-full p-3 bg-[#F6F3F2] border border-[#E5E2E1] focus:border-[#D4AF37] focus:bg-[#FFFFFF] rounded-xl font-mono text-base font-bold text-[#4A0512] focus:outline-none"
                    dir="ltr"
                  />
                  <span className="absolute left-3 top-3.5 text-xs text-[#8A7172] font-semibold">مثقال صیرفی</span>
                </div>
              </div>

              {/* Conversion Cheat Sheet */}
              <div className="md:col-span-12 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center text-xs">
                <div className="p-2.5 bg-[#F6F3F2] rounded-lg">
                  <span className="text-[#8A7172] block">نیم مثقال:</span>
                  <span className="font-bold text-[#4A0512] font-mono">۲.۳ گرم</span>
                </div>
                <div className="p-2.5 bg-[#FFF9EA] rounded-lg border border-[#FED65B]/60">
                  <span className="text-[#745C00] block">۱ مثقال (رایج):</span>
                  <span className="font-bold text-[#4A0512] font-mono">۴.۶۰۸ گرم</span>
                </div>
                <div className="p-2.5 bg-[#F6F3F2] rounded-lg">
                  <span className="text-[#8A7172] block">۲ مثقال (کادویی):</span>
                  <span className="font-bold text-[#4A0512] font-mono">۹.۲۱۶ گرم</span>
                </div>
                <div className="p-2.5 bg-[#F6F3F2] rounded-lg">
                  <span className="text-[#8A7172] block">۵ مثقال (VIP):</span>
                  <span className="font-bold text-[#4A0512] font-mono">۲۳.۰۴ گرم</span>
                </div>
              </div>

            </div>
          )}

          {/* Mode 2: Banquet & Party Estimator */}
          {calculatorMode === 'party' && (
            <div className="space-y-6 pt-6 text-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Guest slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-[#4A0512]">
                    <span>تعداد مهمانان یا پرس غذا:</span>
                    <span className="text-base font-mono text-[#735C00] bg-[#FFF9EA] px-2.5 py-0.5 rounded border border-[#FED65B]">
                      {toPersianDigits(guestCount)} نفر
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="300"
                    step="5"
                    value={guestCount}
                    onChange={(e) => setGuestCount(parseInt(e.target.value, 10))}
                    className="w-full accent-[#4A0512] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#8A7172] font-mono" dir="ltr">
                    <span>5</span>
                    <span>50</span>
                    <span>100</span>
                    <span>200</span>
                    <span>300</span>
                  </div>
                </div>

                {/* Dish Type Select */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#4A0512] block">
                    نوع طبخ و مصرف:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setDishType('rice')}
                      className={`p-2.5 rounded-lg text-xs font-semibold border transition-all ${
                        dishType === 'rice'
                          ? 'bg-[#4A0512] text-[#FFFFFF] border-[#4A0512]'
                          : 'bg-[#F6F3F2] text-[#574142] border-[#E5E2E1]'
                      }`}
                    >
                      برنج و چلو مجلسی
                    </button>
                    <button
                      type="button"
                      onClick={() => setDishType('dessert')}
                      className={`p-2.5 rounded-lg text-xs font-semibold border transition-all ${
                        dishType === 'dessert'
                          ? 'bg-[#4A0512] text-[#FFFFFF] border-[#4A0512]'
                          : 'bg-[#F6F3F2] text-[#574142] border-[#E5E2E1]'
                      }`}
                    >
                      شله‌زرد و حلوا نذری
                    </button>
                    <button
                      type="button"
                      onClick={() => setDishType('tea')}
                      className={`p-2.5 rounded-lg text-xs font-semibold border transition-all ${
                        dishType === 'tea'
                          ? 'bg-[#4A0512] text-[#FFFFFF] border-[#4A0512]'
                          : 'bg-[#F6F3F2] text-[#574142] border-[#E5E2E1]'
                      }`}
                    >
                      چای و شربت زعفرانی
                    </button>
                  </div>
                </div>

              </div>

              {/* Estimation Results Card */}
              <div className="bg-[#FFF9EA] border border-[#FED65B] rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#745C00] block">
                    مقدار زعفران پیشنهادی برای {toPersianDigits(guestCount)} نفر:
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl sm:text-3xl font-bold text-[#4A0512] font-mono">
                      {toPersianDigits(requiredGrams)} گرم
                    </span>
                    <span className="text-sm font-semibold text-[#574142]">
                      (معادل حدود {toPersianDigits(requiredMesghals)} مثقال زعفران سوپر نگین زرین)
                    </span>
                  </div>
                </div>

                <a
                  href="#products"
                  className="px-5 py-2.5 bg-[#4A0512] hover:bg-[#6B081D] text-[#FFFFFF] font-bold text-xs rounded-lg transition-colors shadow-xs whitespace-nowrap"
                >
                  مشاهده بسته‌های متناسب
                </a>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
