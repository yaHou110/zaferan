'use client';

import React, { useState } from 'react';
import { Snowflake, Flame, CheckCircle2, AlertTriangle, BookOpen, Clock, Droplets } from 'lucide-react';
import { toPersianDigits } from '@/lib/saffron-data';

export function BrewingGuide() {
  const [activeMethod, setActiveMethod] = useState<'ice' | 'hot'>('ice');

  return (
    <section className="w-full bg-[#FCFBF7] py-12 sm:py-16" id="brewing-guide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#735C00] font-bold tracking-wider uppercase mb-1">
            <BookOpen className="w-4 h-4 text-[#D4AF37]" />
            <span>CULINARY & BREWING HERITAGE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A0512]">
            راهنمای تخصصی دم‌آوری و آزمون اصالت زعفران
          </h2>
          <p className="text-xs sm:text-sm text-[#574142] max-w-xl mt-2 leading-relaxed">
            روش‌های حرفه‌ای آزادسازی حداکثر کروسین (رنگ یاقوتی) و حفظ اسانس معطر سافرانال در آشپزی اصیل ایرانی
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Method 1 & 2 Tabbed Brewing Masterclass */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-2xl border border-[#D4AF37]/30 p-6 sm:p-8 shadow-xs text-right space-y-6">
            
            {/* Method Tabs */}
            <div className="flex bg-[#F0EDED] p-1.5 rounded-xl gap-2">
              <button
                onClick={() => setActiveMethod('ice')}
                className={`flex-1 py-3 px-4 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  activeMethod === 'ice'
                    ? 'bg-[#4A0512] text-[#FFFFFF] shadow-sm'
                    : 'text-[#574142] hover:text-[#4A0512]'
                }`}
              >
                <Snowflake className="w-4 h-4 text-[#FED65B]" />
                <span>روش شوک یخ (پیشنهاد سرآشپزان - بالاترین رنگ‌دهی)</span>
              </button>

              <button
                onClick={() => setActiveMethod('hot')}
                className={`flex-1 py-3 px-4 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  activeMethod === 'hot'
                    ? 'bg-[#4A0512] text-[#FFFFFF] shadow-sm'
                    : 'text-[#574142] hover:text-[#4A0512]'
                }`}
              >
                <Flame className="w-4 h-4 text-[#FED65B]" />
                <span>روش سنتی آب جوش (دم‌آوری سریع)</span>
              </button>
            </div>

            {/* Ice Shock Steps */}
            {activeMethod === 'ice' ? (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="p-4 bg-[#FFF9EA] border border-[#FED65B]/60 rounded-xl flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-[#745C00] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#745C00] leading-relaxed">
                    <strong>چرا شوک یخ؟</strong> کاهش ناگهانی دما ساختار سلولی کلاله زعفران را بدون تبخیر اسانس‌های فرار باز می‌کند و پس از اضافه شدن گرما، حداکثر کروسین به صورت رنگ سرخ غلیظ آزاد می‌شود.
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#574142]">
                  <div className="flex items-start gap-3 p-3 bg-[#F6F3F2] rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-[#4A0512] text-[#FFFFFF] flex items-center justify-center text-xs font-bold shrink-0">
                      ۱
                    </span>
                    <div>
                      <h4 className="font-bold text-[#4A0512]">ساییدن دقیق در هاون برنجی:</h4>
                      <p className="text-xs text-[#574142] mt-0.5">کلاله‌های زعفران را همراه با یک حبه قند کوچک یا چند دانه شکر در هاون برنجی بسابید تا کاملاً نرم شود.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-[#F6F3F2] rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-[#4A0512] text-[#FFFFFF] flex items-center justify-center text-xs font-bold shrink-0">
                      ۲
                    </span>
                    <div>
                      <h4 className="font-bold text-[#4A0512]">افزودن قطعات یخ قالبی:</h4>
                      <p className="text-xs text-[#574142] mt-0.5">به ازای هر نصف قاشق چای‌خوری پودر زعفران، ۲ تا ۳ قالب یخ کوچک روی آن قرار داده و در دمای اتاق رها کنید تا یخ‌ها کاملاً ذوب شوند.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-[#F6F3F2] rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-[#4A0512] text-[#FFFFFF] flex items-center justify-center text-xs font-bold shrink-0">
                      ۳
                    </span>
                    <div>
                      <h4 className="font-bold text-[#4A0512]">شوک حرارتی با آب جوش:</h4>
                      <p className="text-xs text-[#574142] mt-0.5">پس از آب شدن کامل یخ، مقدار اندکی (۲ الی ۳ قاشق غذاخوری) آب جوش تازه اضافه کرده و درب ظرف را ۵ دقیقه بگذارید. عصاره یاقوتی شما آماده است!</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Hot Water Steps */
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="p-4 bg-[#FDF2F4] border border-[#E57E84]/50 rounded-xl flex items-start gap-3">
                  <Flame className="w-5 h-5 text-[#6B081D] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#6B081D] leading-relaxed">
                    <strong>نکته طلایی دم با آب جوش:</strong> هرگز زعفران را روی شعله مستقیم به جوش نیاورید! جوشاندن حرارتی باعث از بین رفتن سافرانال و تغییر بوی زعفران می‌شود.
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#574142]">
                  <div className="flex items-start gap-3 p-3 bg-[#F6F3F2] rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-[#4A0512] text-[#FFFFFF] flex items-center justify-center text-xs font-bold shrink-0">
                      ۱
                    </span>
                    <div>
                      <h4 className="font-bold text-[#4A0512]">پودر کردن با قاشق چوبی یا هاون:</h4>
                      <p className="text-xs text-[#574142] mt-0.5">کلاله‌ها را بدون گرم شدن بیش از حد، با ملایمت پودر نمایید.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-[#F6F3F2] rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-[#4A0512] text-[#FFFFFF] flex items-center justify-center text-xs font-bold shrink-0">
                      ۲
                    </span>
                    <div>
                      <h4 className="font-bold text-[#4A0512]">افزودن آب با دمای ۸۵ الی ۹۰ درجه:</h4>
                      <p className="text-xs text-[#574142] mt-0.5">آب جوش را پس از ۱ دقیقه استراحت روی پودر زعفران بریزید.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-[#F6F3F2] rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-[#4A0512] text-[#FFFFFF] flex items-center justify-center text-xs font-bold shrink-0">
                      ۳
                    </span>
                    <div>
                      <h4 className="font-bold text-[#4A0512]">دم‌آوری روی بخار کتری (۱۵ دقیقه):</h4>
                      <p className="text-xs text-[#574142] mt-0.5">ظرف زعفران را روی درب کتری یا سماور بگذارید تا به آرامی دم کشیده و عطر آن آزاد شود.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* 3 Home Authenticity Diagnostic Tests */}
          <div className="lg:col-span-5 bg-[#FFFFFF] rounded-2xl border border-[#D4AF37]/30 p-6 sm:p-8 shadow-xs text-right space-y-5">
            
            <div className="flex items-center gap-2 text-[#735C00] font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>۳ آزمون سریع تشخیص زعفران اصل در منزل</span>
            </div>

            <div className="space-y-4 text-xs">
              
              {/* Test 1 */}
              <div className="p-3.5 bg-[#F6F3F2] rounded-xl space-y-1 border border-[#E5E2E1]">
                <span className="font-bold text-[#4A0512] block">
                  ۱. آزمون سرعت رنگ‌دهی در آب سرد:
                </span>
                <p className="text-[#574142] leading-relaxed">
                  چند کلاله زعفران را در لیوان آب ولرم بیندازید. زعفران اصل رنگ را به آرامی و به صورت خطوط طلایی مایل به زرد آزاد می‌کند. اگر آب بلافاصله سرخ تند شد، نشانه استفاده از رنگ شیمیایی است.
                </p>
              </div>

              {/* Test 2 */}
              <div className="p-3.5 bg-[#F6F3F2] rounded-xl space-y-1 border border-[#E5E2E1]">
                <span className="font-bold text-[#4A0512] block">
                  ۲. آزمون جوش شیرین (تغییر رنگ قلیایی):
                </span>
                <p className="text-[#574142] leading-relaxed">
                  کمی جوش شیرین را در آب حل کرده و زعفران را بیفزایید. زعفران اصل آب را به رنگ زرد خالص درمی‌آورد؛ اما زعفران تقلبی رنگ آب را قرمز کدر می‌کند.
                </p>
              </div>

              {/* Test 3 */}
              <div className="p-3.5 bg-[#F6F3F2] rounded-xl space-y-1 border border-[#E5E2E1]">
                <span className="font-bold text-[#4A0512] block">
                  ۳. آزمون لمس کلاله و کاغذ روغنی:
                </span>
                <p className="text-[#574142] leading-relaxed">
                  کلاله‌ها را بین دو انگشت یا کاغذ سفید فشار دهید؛ نباید هیچ‌گونه اثر چربی یا روغنی باقی بگذارد. زعفران اصل خشک، ترد و شکننده است.
                </p>
              </div>

            </div>

            <div className="p-3 bg-[#FFF9EA] rounded-xl border border-[#FED65B] text-center text-xs text-[#745C00] font-semibold">
              کلیه محصولات زرین دارای ضمانت کتبی آزمایشگاهی ISO 3632 و ضمانت ۱۰۰٪ بازگشت وجه هستند.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
