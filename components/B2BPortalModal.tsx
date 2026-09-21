'use client';

import React, { useState } from 'react';
import { 
  X, FileText, Download, Building2, Globe, Calculator, 
  CheckCircle2, Phone, ShieldCheck, Printer, ArrowRight
} from 'lucide-react';
import { toPersianDigits } from '@/lib/saffron-data';

interface B2BPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function B2BPortalModal({ isOpen, onClose }: B2BPortalModalProps) {
  const [weightKg, setWeightKg] = useState<number>(2.5);
  const [saffronGrade, setSaffronGrade] = useState<'super_negin' | 'negin' | 'sargol'>('super_negin');
  const [packagingType, setPackagingType] = useState<'bulk_metal' | 'khatam_box' | 'crystal'>('bulk_metal');
  const [currency, setCurrency] = useState<'IRT' | 'USD' | 'AED'>('IRT');
  const [buyerType, setBuyerType] = useState<'export' | 'corporate_gift' | 'restaurant_chain'>('export');
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [isInvoiceGenerated, setIsInvoiceGenerated] = useState(false);

  if (!isOpen) return null;

  // Base price per kg in Toman
  const basePricePerKg: Record<string, number> = {
    super_negin: 115000000, // 115M Toman / kg
    negin: 98000000,        // 98M Toman / kg
    sargol: 86000000,       // 86M Toman / kg
  };

  // Bulk Discount tiers
  let discountPercent = 0;
  if (weightKg >= 10) discountPercent = 14;
  else if (weightKg >= 5) discountPercent = 9;
  else if (weightKg >= 2) discountPercent = 5;

  const rawTotalToman = weightKg * basePricePerKg[saffronGrade];
  const discountAmountToman = (rawTotalToman * discountPercent) / 100;
  const finalTotalToman = rawTotalToman - discountAmountToman;

  // Currency Conversion Rates (Approximations for demo)
  const USD_RATE = 90000; // Toman per USD
  const AED_RATE = 24500; // Toman per AED

  const formatPrice = (tomanAmount: number) => {
    if (currency === 'USD') {
      const val = Math.round(tomanAmount / USD_RATE);
      return `$${val.toLocaleString()}`;
    }
    if (currency === 'AED') {
      const val = Math.round(tomanAmount / AED_RATE);
      return `${val.toLocaleString()} AED`;
    }
    return `${toPersianDigits(Math.round(tomanAmount).toLocaleString())} تومان`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#1A1A1A]/75 backdrop-blur-xs animate-in fade-in">
      <div
        className="relative w-full max-w-3xl bg-[#FCFBF7] rounded-2xl shadow-2xl border border-[#D4AF37]/50 max-h-[92vh] flex flex-col overflow-hidden text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#4A0512] text-[#FFFFFF] p-5 border-b border-[#6B081D] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#6B081D] border border-[#FED65B] flex items-center justify-center text-[#FED65B]">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black text-[#FFF1B8]">
                  پورتال فروش عمده و صادرات سازمانی (B2B)
                </h2>
                <span className="bg-[#FED65B] text-[#4A0512] text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                  ماژول پلن ۵۰ میلیونی
                </span>
              </div>
              <p className="text-xs text-[#FFDADA]/80 mt-0.5">
                محاسبه قیمت پلکانی بر حسب کیلوگرم و صدور فوری پیش‌فاکتور رسمی صادراتی
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#FFDADA] hover:text-[#FFFFFF] hover:bg-[#6B081D] rounded-full transition-colors"
            aria-label="بستن"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Currency & Market Selector */}
          <div className="bg-[#F0EDED] p-3 rounded-xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#4A0512]">
              <Globe className="w-4 h-4 text-[#735C00]" />
              <span>ارز مبنای پیش‌فاکتور:</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-lg border border-[#E5E2E1]">
              <button
                onClick={() => setCurrency('IRT')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                  currency === 'IRT' ? 'bg-[#4A0512] text-[#FED65B]' : 'text-gray-600 hover:text-black'
                }`}
              >
                تومان (ایران)
              </button>
              <button
                onClick={() => setCurrency('AED')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                  currency === 'AED' ? 'bg-[#4A0512] text-[#FED65B]' : 'text-gray-600 hover:text-black'
                }`}
              >
                درهم امارات (AED)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                  currency === 'USD' ? 'bg-[#4A0512] text-[#FED65B]' : 'text-gray-600 hover:text-black'
                }`}
              >
                دلار (USD)
              </button>
            </div>
          </div>

          {/* Configuration Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Grade Selection */}
            <div>
              <label className="block text-xs font-bold text-[#4A0512] mb-1.5">درجه کیفی زعفران:</label>
              <select
                value={saffronGrade}
                onChange={(e) => setSaffronGrade(e.target.value as any)}
                className="w-full bg-[#FFFFFF] border border-[#D4AF37]/50 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#D4AF37]/30 focus:outline-none"
              >
                <option value="super_negin">زعفران سوپر نگین اتویی صادراتی (کروسین ۲۹۰+)</option>
                <option value="negin">زعفران نگین ممتاز قائنات (کروسین ۲۶۰+)</option>
                <option value="sargol">زعفران سرگل ممتاز ویژه (کروسین ۲۳۰+)</option>
              </select>
            </div>

            {/* Buyer Type */}
            <div>
              <label className="block text-xs font-bold text-[#4A0512] mb-1.5">نوع سفارش / خریدار:</label>
              <select
                value={buyerType}
                onChange={(e) => setBuyerType(e.target.value as any)}
                className="w-full bg-[#FFFFFF] border border-[#D4AF37]/50 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#D4AF37]/30 focus:outline-none"
              >
                <option value="export">صادرات رسمی گمرکی (Export Grade)</option>
                <option value="corporate_gift">پک‌های سازمانی و کادویی نوروز / ارگان‌ها</option>
                <option value="restaurant_chain">زنجیره هتل‌ها و رستوران‌های بین‌المللی</option>
              </select>
            </div>

          </div>

          {/* Weight Slider & Tier Discounts */}
          <div className="bg-[#FFFDF9] border border-[#FED65B]/60 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#4A0512] flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-[#D4AF37]" />
                میزان تناژ / وزن درخواستی:
              </span>
              <span className="text-sm font-extrabold text-[#4A0512] bg-[#FED65B]/30 px-3 py-1 rounded-lg">
                {toPersianDigits(weightKg.toFixed(1))} کیلوگرم ({toPersianDigits((weightKg * 217).toFixed(0))} مثقال)
              </span>
            </div>

            <input
              type="range"
              min="0.5"
              max="20"
              step="0.5"
              value={weightKg}
              onChange={(e) => setWeightKg(parseFloat(e.target.value))}
              className="w-full h-2 bg-[#E5E2E1] rounded-lg appearance-none cursor-pointer accent-[#4A0512]"
            />

            <div className="flex justify-between text-[11px] text-gray-500 mt-1">
              <span>۰.۵ کیلوگرم (حداقل B2B)</span>
              <span>۵ کیلوگرم (۹٪ تخفیف)</span>
              <span>۱۰+ کیلوگرم (۱۴٪ تخفیف ویژه تجار)</span>
              <span>۲۰ کیلوگرم</span>
            </div>
          </div>

          {/* Pricing Summary Box */}
          <div className="bg-[#4A0512] text-[#FFFFFF] rounded-xl p-4 border border-[#D4AF37]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span className="text-xs text-[#FFDADA]/80 block">جمع کل برآورد قیمت عمده:</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#FED65B]">
                    {formatPrice(finalTotalToman)}
                  </span>
                  {discountPercent > 0 && (
                    <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2 py-0.5 rounded border border-emerald-500/30">
                      {toPersianDigits(discountPercent)}٪ تخفیف پلکانی عمده
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => setIsInvoiceGenerated(true)}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#FED65B] hover:bg-[#FFF1B8] text-[#4A0512] font-black text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>صدور پیش‌فاکتور رسمی B2B</span>
              </button>
            </div>
          </div>

          {/* Official Invoice Preview */}
          {isInvoiceGenerated && (
            <div className="border-2 border-dashed border-[#D4AF37] rounded-xl p-5 bg-[#FFFFFF] animate-in fade-in space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <span className="text-xs font-bold text-[#735C00]">پیش‌فاکتور رسمی صادرات زعفران زرین قائنات</span>
                  <p className="text-[11px] text-gray-500 mt-0.5">شماره فاکتور: ZR-INV-2024-884 | تاریخ: امروز</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                  <ShieldCheck className="w-4 h-4" />
                  <span>تأییدیه گمرکی و آزمایشگاهی ISO 3632</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2 bg-gray-50 rounded">
                  <span className="text-gray-500 block">نوع زعفران:</span>
                  <span className="font-bold text-[#4A0512]">
                    {saffronGrade === 'super_negin' ? 'سوپر نگین صادراتی' : saffronGrade === 'negin' ? 'نگین ممتاز' : 'سرگل ویژه'}
                  </span>
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  <span className="text-gray-500 block">وزن ناخالص:</span>
                  <span className="font-bold text-[#4A0512]">{toPersianDigits(weightKg)} کیلوگرم</span>
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  <span className="text-gray-500 block">ارز محاسبه:</span>
                  <span className="font-bold text-[#4A0512]">{currency}</span>
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  <span className="text-gray-500 block">مبلغ قابل پرداخت:</span>
                  <span className="font-bold text-emerald-700">{formatPrice(finalTotalToman)}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-gray-500">
                  جهت نهایی‌سازی قرارداد و دریافت فایل PDF رسمی با واحد فروش هیمورا تماس حاصل فرمایید.
                </span>
                <a
                  href="tel:09354467269"
                  className="px-4 py-2 rounded-lg bg-[#4A0512] text-[#FED65B] text-xs font-bold hover:bg-[#6B081D] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>ثبت قطعی با ۰۹۳۵۴۴۶۷۲۶۹</span>
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F6F3F2] border-t border-[#E5E2E1] flex items-center justify-between text-xs text-gray-600">
          <span>توسعه و شخصی‌سازی ماژول B2B توسط گروه نرم‌افزاری هیمورا</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-gray-300 hover:bg-white transition-colors"
          >
            بستن
          </button>
        </div>

      </div>
    </div>
  );
}
