import type {Metadata} from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  display: 'swap',
  variable: '--font-vazirmatn',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'زعفران زرین قائنات | میراث اصیل طلای سرخ ایران',
  description: 'فروشگاه تخصصی زعفران سوپر نگین، پک‌های کادویی لوکس خاتم و هاون سنتی همراه با سامانه استعلام آنلاین گواهی آزمایشگاه ISO 3632',
  openGraph: {
    title: 'زعفران زرین قائنات | میراث اصیل طلای سرخ ایران',
    description: 'خرید مستقیم زعفران دست‌چین قائنات با ضمانت کروسین بالای ۲۹۰ و ارسال ویژه سراسر کشور',
    type: 'website',
    locale: 'fa_IR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'زعفران زرین قائنات | Zarrin Saffron',
    description: 'فروشگاه تخصصی زعفران صادراتی و هدایای نفیس تشریفاتی',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className={`${vazirmatn.className} bg-[#FCFBF7] text-[#1A1A1A] antialiased selection:bg-[#FED65B] selection:text-[#241A00]`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
