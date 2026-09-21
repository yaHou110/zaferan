'use client';

import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowLeft, ShieldCheck, Tag, CheckCircle } from 'lucide-react';
import { CartItem } from '@/lib/types';
import { formatToman, toPersianDigits } from '@/lib/saffron-data';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponMessage, setCouponMessage] = useState<{ text: string; isError: boolean } | null>(null);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', address: '', postalCode: '' });

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 1000000; // 1,000,000 Tomans
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 45000;
  const total = subtotal - discountAmount + shippingCost;
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progressPercent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const applyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'ZARRIN10' || code === 'GOLD1403' || code === 'VIP10') {
      setDiscountPercent(10);
      setCouponMessage({ text: 'کد تخفیف ۱۰٪ باشگاه زرین با موفقیت اعمال شد.', isError: false });
    } else {
      setCouponMessage({ text: 'کد تخفیف نامعتبر یا منقضی شده است.', isError: true });
    }
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert('لطفاً اطلاعات نام، شماره تماس و آدرس را تکمیل فرمایید.');
      return;
    }
    setCheckoutStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FCFBF7] shadow-2xl border-l border-[#D4AF37]/30 flex flex-col justify-between text-right animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="bg-[#4A0512] text-[#FFFFFF] p-4 flex items-center justify-between border-b border-[#D4AF37]/30">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#FED65B]" />
              <h2 className="font-bold text-base text-[#FFFFFF]">
                سبد خرید شما ({toPersianDigits(cartItems.length)} قلم کالا)
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/20 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-[#FFFFFF]" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            
            {checkoutStep === 'success' ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#4A0512]">
                  سفارش شما با موفقیت ثبت شد!
                </h3>
                <p className="text-xs text-[#574142] leading-relaxed max-w-xs mx-auto">
                  کد پیگیری سفارش شما: <span className="font-mono font-bold text-[#4A0512]">ZR-984210</span>
                  <br />
                  پیامک تایید ارسال و کد رهگیری پست پیشتاز به شماره {toPersianDigits(customerInfo.phone)} ارسال گردید.
                </p>
                <div className="p-4 bg-[#F0EDED] rounded-xl text-right text-xs space-y-2 max-w-xs mx-auto">
                  <div className="flex justify-between">
                    <span>گیرنده:</span>
                    <span className="font-bold">{customerInfo.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>مبلغ پرداخت شده:</span>
                    <span className="font-bold text-[#4A0512]">{formatToman(total)} تومان</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ضمانت:</span>
                    <span className="text-green-700 font-bold">بیمه مرسوله + هولوگرام ISO 3632</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onClearCart();
                    setCheckoutStep('cart');
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-[#4A0512] text-[#FFFFFF] font-bold text-xs rounded-lg hover:bg-[#6B081D] transition-colors"
                >
                  بازگشت به فروشگاه
                </button>
              </div>
            ) : checkoutStep === 'checkout' ? (
              /* Checkout Form Step */
              <form onSubmit={handleCheckoutSubmit} className="space-y-4 text-xs">
                <div className="flex items-center justify-between pb-2 border-b">
                  <span className="font-bold text-sm text-[#4A0512]">اطلاعات ارسال و تحویل گیرنده</span>
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="text-[#735C00] font-semibold flex items-center gap-1"
                  >
                    <span>ویرایش سبد</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-1">
                  <label className="block font-semibold text-[#4A0512]">نام و نام خانوادگی:</label>
                  <input
                    type="text"
                    required
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    placeholder="مثال: علی رضایی"
                    className="w-full p-2.5 bg-[#FFFFFF] rounded-lg border border-[#E5E2E1] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-semibold text-[#4A0512]">شماره تماس موبایل (جهت دریافت پیامک رهگیری):</label>
                  <input
                    type="tel"
                    required
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    placeholder="۰۹۱۲۰۰۰۰۰۰۰"
                    className="w-full p-2.5 bg-[#FFFFFF] rounded-lg border border-[#E5E2E1] focus:border-[#D4AF37] focus:outline-none"
                    dir="ltr"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-semibold text-[#4A0512]">آدرس دقیق پستی:</label>
                  <textarea
                    required
                    rows={3}
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    placeholder="استان، شهر، خیابان، پلاک، واحد..."
                    className="w-full p-2.5 bg-[#FFFFFF] rounded-lg border border-[#E5E2E1] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-semibold text-[#4A0512]">کد پستی ۱۰ رقمی (اختیاری):</label>
                  <input
                    type="text"
                    value={customerInfo.postalCode}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, postalCode: e.target.value })}
                    placeholder="۱۲۳۴۵۶۷۸۹۰"
                    className="w-full p-2.5 bg-[#FFFFFF] rounded-lg border border-[#E5E2E1] focus:border-[#D4AF37] focus:outline-none"
                    dir="ltr"
                  />
                </div>

                {/* Gateway Selection Mockup */}
                <div className="p-3 bg-[#FFF9EA] rounded-xl border border-[#FED65B] space-y-2">
                  <span className="font-bold text-[#745C00] block">درگاه پرداخت الکترونیکی امن شاپرک:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name="gateway" defaultChecked className="accent-[#4A0512]" />
                      <span>کلیه کارت‌های عضو شتاب (شاپرک)</span>
                    </label>
                  </div>
                  <div className="text-[11px] text-[#574142]">
                    اتصال به سریع‌ترین سرور درگاه بانکی با پروتکل رمزنگاری SSL ۲۵۶ بیتی
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#4A0512] hover:bg-[#6B081D] text-[#FFFFFF] font-bold text-sm rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-[#FED65B]" />
                  <span>پرداخت امن و ثبت نهایی ({formatToman(total)} تومان)</span>
                </button>
              </form>
            ) : (
              /* Standard Cart View */
              <>
                {/* Free Shipping Progress Indicator */}
                <div className="bg-[#FFF9EA] border border-[#FED65B]/60 p-3 rounded-xl space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-[#745C00] font-semibold">
                    {freeShippingRemaining === 0 ? (
                      <span className="text-green-700 font-bold flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        سفارش شما شامل ارسال رایگان گردید!
                      </span>
                    ) : (
                      <span>
                        فقط {formatToman(freeShippingRemaining)} تومان تا ارسال رایگان
                      </span>
                    )}
                    <span className="font-mono">{toPersianDigits(Math.round(progressPercent))}٪</span>
                  </div>
                  <div className="w-full bg-[#E5E2E1] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#D4AF37] h-full transition-all duration-500 rounded-full"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Items List */}
                {cartItems.length === 0 ? (
                  <div className="text-center py-12 space-y-3">
                    <div className="w-14 h-14 rounded-full bg-[#F0EDED] flex items-center justify-center mx-auto text-[#8A7172]">
                      <ShoppingBag className="w-7 h-7" />
                    </div>
                    <p className="text-sm font-bold text-[#4A0512]">سبد خرید شما در حال حاضر خالی است.</p>
                    <p className="text-xs text-[#574142]">محصولات مورد نظر خود را به سبد اضافه فرمایید.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div
                        key={item.product.id}
                        className="bg-[#FFFFFF] border border-[#E5E2E1] rounded-xl p-3 flex gap-3 shadow-2xs"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-16 h-16 rounded-lg object-cover bg-[#F6F3F2] shrink-0"
                        />
                        <div className="flex-1 flex flex-col justify-between text-xs">
                          <div>
                            <div className="flex items-start justify-between gap-1">
                              <h4 className="font-bold text-[#4A0512] line-clamp-1">{item.product.name}</h4>
                              <button
                                onClick={() => onRemoveItem(item.product.id)}
                                className="text-gray-400 hover:text-red-700 p-0.5"
                                title="حذف"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <span className="text-[10px] text-[#735C00]">{item.product.weightLabel}</span>
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center border rounded bg-[#F6F3F2]">
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                className="p-1 hover:bg-[#E5E2E1] text-[#4A0512]"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                              <span className="px-2 font-mono font-bold text-xs">{toPersianDigits(item.quantity)}</span>
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                                className="p-1 hover:bg-[#E5E2E1] text-[#4A0512]"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                            </div>

                            <div className="font-mono font-bold text-xs text-[#4A0512]">
                              {formatToman(item.product.price * item.quantity)} تومان
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Coupon Box */}
                {cartItems.length > 0 && (
                  <form onSubmit={applyCoupon} className="pt-2">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="w-3.5 h-3.5 absolute right-2.5 top-3 text-[#735C00]" />
                        <input
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="کد تخفیف (مثال: ZARRIN10)"
                          className="w-full pr-8 pl-3 py-2 bg-[#FFFFFF] border border-[#E5E2E1] rounded-lg text-xs font-mono uppercase focus:outline-none focus:border-[#D4AF37]"
                          dir="ltr"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-3 py-2 bg-[#F0EDED] hover:bg-[#E5E2E1] text-[#4A0512] font-bold text-xs rounded-lg transition-colors"
                      >
                        اعمال کد
                      </button>
                    </div>
                    {couponMessage && (
                      <p className={`text-[11px] mt-1.5 font-semibold ${couponMessage.isError ? 'text-red-600' : 'text-green-700'}`}>
                        {couponMessage.text}
                      </p>
                    )}
                  </form>
                )}
              </>
            )}

          </div>

          {/* Footer Summary & Checkout */}
          {cartItems.length > 0 && checkoutStep === 'cart' && (
            <div className="p-4 bg-[#FFFFFF] border-t border-[#E5E2E1] space-y-3">
              <div className="space-y-1.5 text-xs text-[#574142]">
                <div className="flex justify-between">
                  <span>جمع کل اقلام:</span>
                  <span className="font-mono font-bold">{formatToman(subtotal)} تومان</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-green-700 font-semibold">
                    <span>تخفیف باشگاه ({toPersianDigits(discountPercent)}٪):</span>
                    <span className="font-mono">- {formatToman(discountAmount)} تومان</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>هزینه بسته‌بندی و ارسال:</span>
                  <span className="font-mono font-bold">
                    {shippingCost === 0 ? 'رایگان' : `${formatToman(shippingCost)} تومان`}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t font-bold text-sm text-[#4A0512]">
                  <span>مبلغ نهایی قابل پرداخت:</span>
                  <span className="font-mono text-base text-[#4A0512]">{formatToman(total)} تومان</span>
                </div>
              </div>

              <button
                onClick={() => setCheckoutStep('checkout')}
                className="w-full py-3 bg-[#4A0512] hover:bg-[#6B081D] text-[#FFFFFF] font-bold text-sm rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>تکمیل خرید و ثبت آدرس</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
