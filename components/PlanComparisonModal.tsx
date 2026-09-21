'use client';

import React, { useState } from 'react';
import { 
  X, Check, ShieldCheck, Globe, DollarSign, 
  FileText, Award, Layers, Zap, Phone, ArrowLeft, CheckCircle2, ChevronDown
} from 'lucide-react';
import { toPersianDigits } from '@/lib/saffron-data';

interface PlanComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenB2B?: () => void;
  onOpenVerifier?: () => void;
}

interface FeatureItem {
  name: string;
  basic: string | boolean;
  premium: string | boolean;
  highlight?: boolean;
  category: 'core' | 'trust' | 'export' | 'b2b' | 'marketing';
}

const COMPARISON_FEATURES: FeatureItem[] = [
  // Trust & Lab ISO
  {
    name: 'سامانه استعلام آنلاین گواهی آزمایشگاه (ISO 3632)',
    basic: 'استعلام ساده متنی',
    premium: 'آنالیز کامل گرافیکی کروسین، پیکروکروسین + QR Code ردیابی مزرعه',
    highlight: true,
    category: 'trust',
  },
  {
    name: 'شناسنامه دیجیتال و نقشه مزرعه قائنات',
    basic: false,
    premium: 'سیستم ثبت هوشمند بچ (Batch ID) با تاریخ برداشت و لوکیشن مزارع',
    highlight: true,
    category: 'trust',
  },
  // Export & Global
  {
    name: 'پشتیبانی از زبان‌های بین‌المللی',
    basic: 'فقط فارسی',
    premium: '۳ زبانه کامل (فارسی، انگلیسی و عربی اختصاصی بازار خلیج فارس)',
    highlight: true,
    category: 'export',
  },
  {
    name: 'سوئیچ چند ارزی لحظه‌ای',
    basic: 'فقط تومان و ریال',
    premium: 'تومان + درهم امارات (AED) + دلار آمریکا (USD) + یورو (€)',
    highlight: true,
    category: 'export',
  },
  // B2B & Wholesale
  {
    name: 'پورتال سفارش عمده و سازمانی (B2B)',
    basic: false,
    premium: 'سامانه تخفیف پلکانی کیلویی + صدور خودکار پیش‌فاکتور رسمی PDF',
    highlight: true,
    category: 'b2b',
  },
  {
    name: 'کاستومایزر آنلاین پک‌های هدیه و تشریفات',
    basic: 'انتخاب از لیست پیش‌فرض',
    premium: 'سازنده آنلاین پک کادویی (انتخاب جعبه خاتم، هاون برنجی، کارت تبریک)',
    highlight: true,
    category: 'b2b',
  },
  // Core & Design
  {
    name: 'طراحی رابط کاربری و هویت بصری',
    basic: 'طراحی استاندارد فروشگاهی',
    premium: 'طراحی لوکس درباری با موتیف‌های مینیاتور زرین و انیمیشن‌های تعاملی',
    category: 'core',
  },
  {
    name: 'ماشین‌حساب هوشمند و تبدیل اوزان مثقال',
    basic: 'تبدیل ساده مثقال به گرم',
    premium: 'محاسبه‌گر پیشرفته سود خرید، دوز مصرفی و ارزش روز گرمی/مثقالی',
    category: 'core',
  },
  {
    name: 'باشگاه مشتریان وفادار (VIP Club)',
    basic: 'ثبت‌نام عادی',
    premium: 'سطح‌بندی برنز/نقره/زرین با کوپن‌های خودکار وفاداری و پیامک مناسبتی',
    category: 'marketing',
  },
  {
    name: 'سئو تکنیکال و رتبه ۱ گوگل در کلمات زعفران',
    basic: 'سئو پایه',
    premium: 'اسکیما مارک‌آپ پیشرفته (Schema.org) + سئو اختصاصی کلمات صادراتی',
    category: 'marketing',
  },
  {
    name: 'پشتیبانی فنی و نگهداری تخصصی هیمورا',
    basic: '۳ ماه پشتیبانی فنی',
    premium: '۱۲ ماه پشتیبانی طلایی VIP + مشاوره ارتقای فروش و هاست اختصاصی',
    highlight: true,
    category: 'core',
  },
];

export function PlanComparisonModal({
  isOpen,
  onClose,
  onOpenB2B,
  onOpenVerifier,
}: PlanComparisonModalProps) {
  const [selectedTab, setSelectedTab] = useState<'all' | 'trust' | 'export' | 'b2b'>('all');

  if (!isOpen) return null;

  const filteredFeatures = COMPARISON_FEATURES.filter((f) => {
    if (selectedTab === 'all') return true;
    return f.category === selectedTab;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#1A1A1A]/75 backdrop-blur-xs animate-in fade-in">
      <div
        className="relative w-full max-w-4xl bg-[#FCFBF7] rounded-2xl shadow-2xl border border-[#D4AF37]/50 max-h-[92vh] flex flex-col overflow-hidden text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#4A0512] text-[#FFFFFF] p-5 sm:p-6 border-b border-[#6B081D] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#6B081D] border border-[#FED65B] flex items-center justify-center text-[#FED65B]">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black text-[#FFF1B8]">
                  مقایسه تخصصی پلن‌های توسعه وب‌سایت زعفران
                </h2>
                <span className="bg-[#FED65B] text-[#4A0512] text-[11px] font-bold px-2 py-0.5 rounded-full">
                  توسط گروه هیمورا
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#FFDADA]/80 mt-1">
                بررسی ارزش فنی و تجاری پلن پایه (۳۰ میلیون) در برابر پلن جامع صادراتی VIP (۵۰ میلیون)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#FFDADA] hover:text-[#FFFFFF] hover:bg-[#6B081D] rounded-full transition-colors"
            aria-label="بستن"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Pricing Cards Banner */}
        <div className="p-4 sm:p-6 bg-gradient-to-b from-[#FFFDF9] to-[#F5F2EB] border-b border-[#E5E2E1] shrink-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* 30M Plan Card */}
            <div className="rounded-xl border border-[#E5E2E1] bg-[#FFFFFF] p-4 flex flex-col justify-between shadow-2xs relative">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#735C00] bg-[#FFF9EA] px-2.5 py-1 rounded-md border border-[#FED65B]/40">
                    پلن استاندارد و شرکتی
                  </span>
                  <span className="text-xs text-gray-500">فروش محلی و داخلی</span>
                </div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#4A0512]">۳۰,۰۰۰,۰۰۰</span>
                  <span className="text-xs font-semibold text-gray-600">تومان</span>
                </div>
                <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                  مناسب برای فروشگاه‌های نوپا و فروش تک‌محصولی در بازار ایران با امکانات عمومی تجارت الکترونیک.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>شامل فروشگاه آنلاین + درگاه پرداخت + هاست پایه</span>
              </div>
            </div>

            {/* 50M Plan Card (Featured) */}
            <div className="rounded-xl border-2 border-[#D4AF37] bg-[#4A0512] text-[#FFFFFF] p-4 flex flex-col justify-between shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 bg-[#FED65B] text-[#4A0512] text-[10px] font-extrabold px-3 py-0.5 rounded-br-lg uppercase tracking-wider">
                پیشنهاد برتر صادراتی
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#FED65B] flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    پلن پریمیوم و صادراتی VIP
                  </span>
                </div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#FED65B]">۵۰,۰۰۰,۰۰۰</span>
                  <span className="text-xs font-semibold text-[#FFF1B8]/80">تومان</span>
                </div>
                <p className="text-xs text-[#FFDADA]/90 mt-1.5 leading-relaxed">
                  طراحی شده برای صادرکنندگان، تجار بین‌المللی و فروش عمده سازمانی با پتانسیل چند برابری فروش.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#6B081D] flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#FED65B]">
                  <Zap className="w-4 h-4 text-[#FED65B] shrink-0" />
                  <span className="font-semibold">پورتال B2B + سامانه ISO + ۳ زبانه</span>
                </div>
                <a
                  href="tel:09354467269"
                  className="bg-[#FED65B] text-[#4A0512] hover:bg-[#FFF1B8] px-3 py-1 rounded-lg text-xs font-bold transition-colors"
                >
                  سفارش این پلن
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="px-6 py-2.5 bg-[#F6F3F2] border-b border-[#E5E2E1] flex items-center gap-2 overflow-x-auto text-xs shrink-0">
          <span className="text-gray-500 font-bold shrink-0">فیلتر امکانات:</span>
          <button
            onClick={() => setSelectedTab('all')}
            className={`px-3 py-1 rounded-full font-medium transition-all ${
              selectedTab === 'all' ? 'bg-[#4A0512] text-[#FED65B]' : 'bg-[#FFFFFF] text-gray-700 hover:bg-gray-100'
            }`}
          >
            همه موارد
          </button>
          <button
            onClick={() => setSelectedTab('trust')}
            className={`px-3 py-1 rounded-full font-medium transition-all ${
              selectedTab === 'trust' ? 'bg-[#4A0512] text-[#FED65B]' : 'bg-[#FFFFFF] text-gray-700 hover:bg-gray-100'
            }`}
          >
            اعتماد و آنالیز آزمایشگاه (ISO 3632)
          </button>
          <button
            onClick={() => setSelectedTab('export')}
            className={`px-3 py-1 rounded-full font-medium transition-all ${
              selectedTab === 'export' ? 'bg-[#4A0512] text-[#FED65B]' : 'bg-[#FFFFFF] text-gray-700 hover:bg-gray-100'
            }`}
          >
            صادرات و چندزبانه بین‌المللی
          </button>
          <button
            onClick={() => setSelectedTab('b2b')}
            className={`px-3 py-1 rounded-full font-medium transition-all ${
              selectedTab === 'b2b' ? 'bg-[#4A0512] text-[#FED65B]' : 'bg-[#FFFFFF] text-gray-700 hover:bg-gray-100'
            }`}
          >
            پورتال B2B و فروش سازمانی
          </button>
        </div>

        {/* Features Table Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 divide-y divide-[#E5E2E1]">
          {filteredFeatures.map((item, idx) => (
            <div
              key={idx}
              className={`py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center rounded-lg px-2 transition-colors ${
                item.highlight ? 'bg-[#FFFBF0]/60' : 'hover:bg-[#F9F7F2]'
              }`}
            >
              {/* Feature Title */}
              <div className="sm:col-span-5 flex items-start gap-2">
                {item.highlight ? (
                  <Award className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0 mt-2" />
                )}
                <div>
                  <span className="font-bold text-sm text-[#1A1A1A] block">{item.name}</span>
                </div>
              </div>

              {/* 30M Plan Column */}
              <div className="sm:col-span-3 text-xs text-gray-600 bg-[#FFFFFF] sm:bg-transparent p-2 sm:p-0 rounded border sm:border-0 border-gray-200">
                <span className="sm:hidden font-bold text-gray-400 block mb-1">پلن ۳۰ میلیونی:</span>
                {typeof item.basic === 'boolean' ? (
                  item.basic ? (
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <Check className="w-4 h-4" /> دارد
                    </span>
                  ) : (
                    <span className="text-gray-400 font-medium">ندارد (نیاز به ارتقا)</span>
                  )
                ) : (
                  <span>{item.basic}</span>
                )}
              </div>

              {/* 50M Plan Column */}
              <div className="sm:col-span-4 text-xs font-semibold text-[#4A0512] bg-[#FFF9EA] sm:bg-transparent p-2 sm:p-0 rounded border sm:border-0 border-[#FED65B]/60">
                <span className="sm:hidden font-bold text-[#735C00] block mb-1">پلن ۵۰ میلیونی VIP:</span>
                <div className="flex items-start gap-1.5 text-[#4A0512]">
                  <CheckCircle2 className="w-4 h-4 text-[#AA820A] shrink-0 mt-0.5" />
                  <span>{item.premium}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions & Direct Contact with Himora */}
        <div className="p-4 sm:p-6 bg-[#F6F3F2] border-t border-[#E5E2E1] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#4A0512] text-[#FED65B] flex items-center justify-center font-bold font-sans">
              H
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-500 block">مشاوره اختصاصی و سفارش مستقیم:</span>
              <span className="text-sm font-extrabold text-[#4A0512]">گروه نرم‌افزاری هیمورا</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-xs font-semibold hover:bg-white transition-colors"
            >
              بستن پنجره
            </button>
            <a
              href="tel:09354467269"
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#4A0512] hover:bg-[#6B081D] text-[#FED65B] text-xs font-extrabold flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>تماس فوری: ۰۹۳۵۴۴۶۷۲۶۹</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
