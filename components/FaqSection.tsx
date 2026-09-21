'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, BookOpen, FileCheck, Award } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/saffron-data';

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="w-full bg-[#F6F3F2] py-12 sm:py-16 border-t border-[#E5E2E1]" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* FAQ Accordion (7 cols) */}
          <div className="lg:col-span-7 flex flex-col text-right space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs text-[#735C00] font-bold tracking-wider uppercase mb-1">
              <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>KNOWLEDGE & ASSISTANCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A0512]">
              پرسش‌های پرتکرار درباره خرید و مصرف زعفران
            </h2>

            <div className="space-y-3 pt-2">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openFaq === item.id;
                return (
                  <div
                    key={item.id}
                    className="bg-[#FFFFFF] border border-[#D4AF37]/30 rounded-xl overflow-hidden shadow-2xs transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(item.id)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-right text-xs sm:text-sm font-bold text-[#4A0512] hover:text-[#6B081D] focus:outline-none gap-3"
                    >
                      <span className="flex-1 leading-snug">{item.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#735C00] transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180 text-[#4A0512]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-xs text-[#574142] text-justify leading-relaxed border-t border-[#F0EDED] pt-3 animate-in fade-in duration-200">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Rich Editorial SEO Block (5 cols) */}
          <div className="lg:col-span-5 bg-[#FFFFFF] p-6 sm:p-7 rounded-2xl border border-[#D4AF37]/40 shadow-xs flex flex-col justify-between text-right space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#735C00] font-bold">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>میراث طلای سرخ ایران | خراسان جنوبی</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#4A0512]">
                راهنمای تخصصی تشخیص زعفران اصل قائنات
              </h3>
              <p className="text-xs text-[#574142] leading-relaxed text-justify">
                زعفران اصل قائنات با طعم اندکی تلخ و عطر شیرین و تند شناخته می‌شود. کلاله‌های واقعی شیپورمانند بوده و در آب ولرم به آرامی رنگ طلایی تا نارنجی زردگون رها می‌کنند نه رنگ قرمز تند ناگهانی. برند زرین با پایبندی به اصول سنتی چینش گل پیش از طلوع آفتاب و خشک‌سازی مدرن تحت شرایط کنترل‌شده، اصیل‌ترین محصول مهد زعفران جهان را تضمین می‌کند.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-[#E5E2E1] bg-[#F6F3F2] p-3.5 rounded-xl">
              <span className="text-xs font-bold text-[#735C00] block flex items-center gap-1">
                <FileCheck className="w-3.5 h-3.5" />
                کلیدواژه‌های رسمی رتبه‌بندی کیفی و سئو:
              </span>
              <p className="text-[11px] text-[#574142] leading-relaxed">
                خرید آنلاین زعفران سوپر نگین اتویی، قیمت هر مثقال زعفران قائنات امسال، پک هدیه نفیس خاتم‌کاری، برگه آنالیز آزمایشگاهی کروسین و سافرانال، زعفران ارگانیک درجه یک صادراتی ایران.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
