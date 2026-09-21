'use client';

import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, Award, Clock, Heart } from 'lucide-react';
import { toPersianDigits } from '@/lib/saffron-data';
import { SaffronLogo } from '@/components/SaffronLogo';

interface FooterProps {
  onOpenVerifier: () => void;
  onOpenCalculator: () => void;
  onOpenPlanComparison?: () => void;
  onOpenB2B?: () => void;
}

export function Footer({ 
  onOpenVerifier, 
  onOpenCalculator,
  onOpenPlanComparison,
  onOpenB2B 
}: FooterProps) {
  return (
    <footer className="w-full bg-[#1A0207] text-[#FFDADA] pt-14 pb-8 border-t border-[#6B081D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#4A0512] text-right">
          
          {/* Col 1: Brand & Story (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <SaffronLogo size="md" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#FFFFFF]">زعفران زرین قائنات</span>
                <span className="text-[10px] text-[#FED65B] tracking-wider uppercase font-sans">
                  ROYAL PERSIAN SAFFRON
                </span>
              </div>
            </div>

            <p className="text-xs text-[#FFDADA]/80 leading-relaxed text-justify">
              مجموعه زرین قائنات از سال ۱۳۸۸ با هدف عرضه مستقیم مرغوب‌ترین زعفران دست‌چین مزارع خراسان جنوبی به سفره خانواده‌های ایرانی و بازارهای صادراتی بین‌المللی فعالیت می‌کند. کلیه بسته‌ها مجهز به کد رهگیری ISO 3632 و پلمپ ضد تقلب هستند.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#FED65B]">
              <Award className="w-4 h-4 text-[#FED65B]" />
              <span>دارنده نشان کیفیت برتر صادراتی و استاندارد ملی ایران</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-[#FFFFFF] border-r-2 border-[#FED65B] pr-2">
              دسترسی سریع
            </h4>
            <ul className="space-y-2 text-xs text-[#FFDADA]/80">
              <li>
                <a href="#products" className="hover:text-[#FED65B] transition-colors">
                  کاتالوگ محصولات
                </a>
              </li>
              <li>
                <a href="#gift-boxes" className="hover:text-[#FED65B] transition-colors">
                  پک‌های کادویی و هدایا
                </a>
              </li>
              <li>
                <button onClick={onOpenVerifier} className="hover:text-[#FED65B] transition-colors text-right">
                  استعلام برگه آزمایشگاه
                </button>
              </li>
              <li>
                <button onClick={onOpenCalculator} className="hover:text-[#FED65B] transition-colors text-right">
                  ماشین‌حساب مثقال و گرم
                </button>
              </li>
              <li>
                <a href="#brewing-guide" className="hover:text-[#FED65B] transition-colors">
                  راهنمای دم‌آوری با یخ
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FED65B] transition-colors">
                  سوالات متداول خریداران
                </a>
              </li>
              {onOpenB2B && (
                <li>
                  <button onClick={onOpenB2B} className="text-[#FED65B] hover:underline font-bold text-right">
                    پورتال سفارش عمده (B2B)
                  </button>
                </li>
              )}
              {onOpenPlanComparison && (
                <li>
                  <button onClick={onOpenPlanComparison} className="text-[#FFF1B8] hover:text-[#FFFFFF] underline text-right">
                    مشاهده مقایسه پلن‌های ۳۰ و ۵۰ میلیون
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 3: Contact Info & Farms (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#FFFFFF] border-r-2 border-[#FED65B] pr-2">
              ارتباط و دفاتر مرکزی
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FFDADA]/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FED65B] shrink-0 mt-0.5" />
                <span>
                  <strong>مزارع و کارخانه:</strong> خراسان جنوبی، شهرستان قائنات، شهرک صنعتی، مجتمع فرآوری زعفران زرین
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FED65B] shrink-0 mt-0.5" />
                <span>
                  <strong>دفتر تهران:</strong> خیابان ولیعصر، بالاتر از میدان ونک، برج نگین، طبقه ۸
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FED65B] shrink-0" />
                <a href="tel:09354467269" className="hover:text-[#FED65B] transition-colors">
                  <span dir="ltr" className="font-mono font-bold text-[#FED65B]">09354467269</span>
                  <span className="text-xs text-[#FFDADA]/80 mr-2">(تماس و سفارش مستقیم - گروه نرم‌افزاری هیمورا)</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FED65B] shrink-0" />
                <span>پاسخگویی و پشتیبانی: شنبه تا جمعه (همه‌روزه) از ۸:۰۰ الی ۲۳:۰۰</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust Badges & Licenses (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#FFFFFF] border-r-2 border-[#FED65B] pr-2">
              مجوزها و نمادهای اعتماد
            </h4>
            
            {/* Iranian Trust Emblems Grid */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#2A050D] border border-[#6B081D] p-2.5 rounded-xl flex flex-col items-center justify-center text-center space-y-1">
                <ShieldCheck className="w-6 h-6 text-[#FED65B]" />
                <span className="text-[10px] text-[#FFFFFF] font-bold">اینماد ۵ ستاره</span>
                <span className="text-[9px] text-[#FED65B]">تجارت الکترونیک</span>
              </div>

              <div className="bg-[#2A050D] border border-[#6B081D] p-2.5 rounded-xl flex flex-col items-center justify-center text-center space-y-1">
                <Award className="w-6 h-6 text-[#FED65B]" />
                <span className="text-[10px] text-[#FFFFFF] font-bold">ISO 3632</span>
                <span className="text-[9px] text-[#FED65B]">گرید ۱ بین‌المللی</span>
              </div>

              <div className="bg-[#2A050D] border border-[#6B081D] p-2.5 rounded-xl flex flex-col items-center justify-center text-center space-y-1">
                <ShieldCheck className="w-6 h-6 text-[#FED65B]" />
                <span className="text-[10px] text-[#FFFFFF] font-bold">سازمان غذا و دارو</span>
                <span className="text-[9px] text-[#FED65B]">سیب سلامت</span>
              </div>
            </div>

            <div className="p-2.5 bg-[#2A050D] rounded-xl border border-[#6B081D] text-[11px] text-[#FFDADA]/80 text-center">
              پرداخت امن و تضمین شده تحت شبکه سراسری شاپرک بانک مرکزی
            </div>
          </div>

        </div>

        {/* Copyright & Subfooter */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFDADA]/70 gap-3 text-center sm:text-right">
          <div>
            طراحی و پیاده‌سازی وب‌سایت: <strong className="text-[#FED65B]">گروه نرم‌افزاری هیمورا</strong> (تماس و مشاوره سفارش نرم‌افزار: <a href="tel:09354467269" className="text-[#FFF1B8] font-bold font-mono underline hover:text-[#FFFFFF]" dir="ltr">09354467269</a>)
          </div>
          <div className="flex items-center gap-1 text-[#FED65B]">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>دست‌چین شده با عشق در مزارع قائنات</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
