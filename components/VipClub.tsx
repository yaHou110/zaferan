'use client';

import React, { useState } from 'react';
import { Gift, CheckCircle2, Copy, Send } from 'lucide-react';

export function VipClub() {
  const [contactInput, setContactInput] = useState('');
  const [discountCode, setDiscountCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactInput.trim()) {
      setDiscountCode('ZARRIN10');
    }
  };

  const copyCode = () => {
    if (discountCode) {
      navigator.clipboard.writeText(discountCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="w-full bg-[#4A0512] text-[#FFFFFF] py-12 sm:py-16 relative overflow-hidden">
      {/* Decorative ambient gold circles */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#FED65B]/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#6B081D] text-[#FED65B] rounded-full text-xs font-bold border border-[#D4AF37]/40 shadow-xs">
          <Gift className="w-4 h-4 text-[#FED65B]" />
          <span>تخفیف ویژه عضویت در باشگاه مشتریان</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFFFFF] leading-snug">
          عضویت در باشگاه مشتریان اختصاصی زعفران زرین
        </h2>

        <p className="text-xs sm:text-sm text-[#FFDADA] max-w-xl mx-auto leading-relaxed">
          با ثبت شماره تماس یا ایمیل خود، کد تخفیف ۱۰٪ ویژه اولین خرید و دسترسی زودهنگام به کاتالوگ برداشت پاییزه را دریافت کنید.
        </p>

        {discountCode ? (
          <div className="max-w-md mx-auto bg-[#FCFBF7] text-[#4A0512] p-5 rounded-2xl shadow-xl space-y-3 animate-in zoom-in-95 duration-300 text-right">
            <div className="flex items-center gap-2 text-green-700 font-bold text-xs">
              <CheckCircle2 className="w-4 h-4" />
              <span>تبریک! کد تخفیف ۱۰٪ اختصاصی شما آماده شد:</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-[#F0EDED] rounded-xl border border-[#D4AF37]/40">
              <span className="font-mono text-lg font-bold tracking-widest text-[#4A0512]" dir="ltr">
                {discountCode}
              </span>
              <button
                onClick={copyCode}
                className="px-3 py-1.5 bg-[#4A0512] text-[#FFFFFF] text-xs font-bold rounded-lg hover:bg-[#6B081D] flex items-center gap-1 transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'کپی شد' : 'کپی کد'}</span>
              </button>
            </div>

            <p className="text-[11px] text-[#574142]">
              این کد را می‌توانید در سبد خرید وارد نموده و ۱۰٪ تخفیف روی تمام محصولات اعمال کنید.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
            <input
              type="text"
              required
              value={contactInput}
              onChange={(e) => setContactInput(e.target.value)}
              placeholder="شماره موبایل یا ایمیل شما..."
              className="flex-1 px-4 py-3 bg-[#FFFFFF] text-[#1A1A1A] placeholder:text-[#8A7172] rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#FED65B]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#FED65B] hover:bg-[#FFE088] text-[#241A00] font-bold text-xs sm:text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              <Gift className="w-4 h-4" />
              <span>دریافت کد تخفیف ۱۰٪</span>
            </button>
          </form>
        )}

      </div>
    </section>
  );
}
