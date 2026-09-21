'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface CategoriesSectionProps {
  onSelectCategory: (categoryKey: string) => void;
}

export function CategoriesSection({ onSelectCategory }: CategoriesSectionProps) {
  const categories = [
    {
      key: 'super-negin',
      title: 'زعفران سوپر نگین',
      badge: 'صادراتی ویژه',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp3KyQteVRY8M2G69xmapXzNojstXkqh1_tC5jLnc8LhCiC8GwHbi4Eawynu8FOSW9UwkjReYqlANSM4d_WCuBl69LQfWlvLREptynob6X0W9oPDpsFJTZ53WuFcD0oYoF7lzd3NkazXk7ic20ceQ2M5mvuc-67PM7dif4yMOn7fV857M3t733gduOQ5qhkYQSnrnLmsb6ntRIyY37RXucnT8cs5SGSXpfwmu5cIPbKDq3lTeCD3nfiw',
      desc: 'نگین اتویی، قلم‌درشت، بدون ناخالصی یا بخش خامه (سفیدی)، با بالاترین شاخص رنگ‌دهی طبیعی کروسین ۲۹۰+.',
      actionText: 'مشاهده محصولات نگین',
    },
    {
      key: 'gift-box',
      title: 'پک‌های کادویی و سازمانی',
      badge: 'تشریفاتی و هدایا',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtVhjoPZGQepPpmzFSzAWB28qXue1utoMPpZhCLtq0jX2gkkJvxtbvTUz3YHN8mFj0sUhV0aP2iDTsUMiPC3FY7JS4Zegi-qxGJMUp9tkD4dYfyf9dUU7dWPDyEHVjUHhV8RXeYgbRBOKSkRtSxOL0cOLdOREJIoGuDh4kTuIsRv3JbfkBlDZSZMsUCvJ4DLrw9rcF6Ikq2c9-JqB1KMw0UOPpgRXFIKKIJy5qlbGNfuscbaLc__sdog',
      desc: 'جعبه‌های چوبی معرق، مینیاتور اصیل اصفهان همراه هاون برنجی دست‌ساز و شیشه‌های کریستال چوب‌پنبه‌ای.',
      actionText: 'مشاهده کلکسیون نفیس',
    },
    {
      key: 'sargol',
      title: 'زعفران سرگل ممتاز',
      badge: 'مصرف خانوادگی',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDee2NJATPLmLSeSILLaA8wOpleOt8Ri19i9JctyoM681pKaZj7hr-5gR1hWMqQrCkn662unBnM23PWvrFFNGaA00OqAF1xLWIb8MjzFrR26gL8JQn2jW5iL0rBZRKo9H5wlqufJkMzrvXKTX7v8V3PxM0-SmXcNnpBR5_UJi5l6gAJUK2T2A_uSClYxgHCk_N407ap9WGlQ4YwnqaX-MKBtvUoMFMD81_-eznWFxb50Rrf-RnpgyF72A',
      desc: 'خالص‌ترین سرگل دست‌چین، عطر پایدار، بهینه‌ترین انتخاب برای آشپزی مجلسی، رستوران‌ها و طب سنتی ایرانی.',
      actionText: 'مشاهده بسته‌ها',
    },
    {
      key: 'accessory',
      title: 'اکسسوری و هاون سنتی',
      badge: 'ملزومات دم‌آوری',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXKzquvw2R6VExceef3EvFCAe1yDv9cm5IHy6Bb7ZmTaGDGxOwLGqF-4f0Oebq7o6VfRfrjItnuRVfYjc2-xgupaCMUuwVDLPD7aPKPWGu8eoBpBwnlabv1T_mGCz-DKDnDQI0Sw7WmWRErCZ1hq_-WYbGj1qb9YBR0dSX9_Zq-H3ePFjAgnoIVDqBGjsol25JT1UdOBBuYnzkgWIfleYZzeYRnnGvRWrzeyajkPcGq1n5PuB5bRwtww',
      desc: 'هاون برنجی دست‌ساز قلم‌زنی، قوری‌های کریستال پیرکس نشکن و ظروف نگهداری تخصصی ضد نفوذ هوا.',
      actionText: 'مشاهده ابزارها',
    },
  ];

  return (
    <section className="w-full bg-[#F6F3F2] py-12 sm:py-16" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 text-right">
          <div>
            <span className="text-xs font-bold text-[#735C00] tracking-wider uppercase font-sans">
              PORTFOLIO CLASSIFICATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A0512] mt-1">
              دسته‌بندی‌های برگزیده زرین
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#574142] max-w-md text-justify leading-relaxed">
            هر رده محصولی پس از تفکیک دستی کلاله‌ها، در ظروف اختصاصی متناسب با ماندگاری حداکثری اسانس‌های فرار بسته‌بندی می‌شود.
          </p>
        </div>

        {/* Categories 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="gift-boxes">
          {categories.map((cat) => (
            <div
              key={cat.key}
              onClick={() => onSelectCategory(cat.key)}
              className="group cursor-pointer bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#D4AF37]/30 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="overflow-hidden rounded-xl h-52 mb-4 relative bg-[#F0EDED]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 right-2.5 bg-[#FFFFFF]/90 backdrop-blur-xs text-[#4A0512] px-2.5 py-1 rounded-full text-[11px] font-bold shadow-2xs border border-[#D4AF37]/30">
                    {cat.badge}
                  </span>
                </div>

                <div className="flex flex-col text-right">
                  <h3 className="text-base sm:text-lg font-bold text-[#4A0512] group-hover:text-[#6B081D] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#574142] mt-1.5 leading-relaxed line-clamp-3">
                    {cat.desc}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E5E2E1] flex items-center justify-between text-xs font-bold text-[#735C00] group-hover:text-[#4A0512] transition-colors">
                <span>{cat.actionText}</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
