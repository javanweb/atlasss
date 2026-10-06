import React from 'react';
import { Headphones, ArrowLeft, Phone, FileText, CheckCircle2, ChevronLeft } from 'lucide-react';
import { STORE_ASSETS } from '../../assets/images';

interface FinalLeadCtaBannerProps {
  onOpenConsult: () => void;
  onOpenVisualSearch: () => void;
}

export const FinalLeadCtaBanner: React.FC<FinalLeadCtaBannerProps> = ({
  onOpenConsult,
  onOpenVisualSearch,
}) => {
  return (
    <section className="relative w-full py-12 sm:py-16 bg-[#F8FAFC]" dir="rtl">
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10">
        <div className="relative rounded-3xl overflow-hidden bg-[#55565A] text-white shadow-2xl border border-slate-600">
          {/* Subtle Ambient Industrial Waves / Geometric Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E06518]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* RIGHT in desktop: Text Information & CTA Buttons */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-5 text-right">
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-black text-orange-300">
                  <span className="w-2 h-2 rounded-full bg-[#E06518] animate-ping" />
                  <span>قدم بعدی: مشاوره و استعلام مستقیم</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-white leading-tight tracking-tight">
                  برای خط تولیدتان به یک راهکار مطمئن نیاز دارید؟
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed max-w-xl">
                  مشخصات نیاز یا قطعه مستهلک خود را برای ما ارسال کنید؛ کارشناسان ارشد مکانیک صنعت‌پیش جهت انتخاب بهینه و صدور پیش‌فاکتور رسمی در کوتاه‌ترین زمان با شما تماس می‌گیرند.
                </p>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onOpenConsult}
                  className="h-12 px-7 bg-gradient-to-r from-[#C95210] to-[#E06518] hover:from-[#C2410C] hover:to-[#C95210] text-white font-black text-xs sm:text-sm rounded-xl shadow-[0_6px_20px_rgba(224,101,24,0.45)] hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer active:scale-95 group"
                >
                  <ChevronLeft className="w-4 h-4 text-white group-hover:-translate-x-0.5 transition-transform" />
                  <span>درخواست مشاوره فنی</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenVisualSearch}
                  className="h-12 px-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 backdrop-blur-md cursor-pointer active:scale-95"
                >
                  <FileText className="w-4 h-4 text-orange-300" />
                  <span>استعلام قیمت آنلاین</span>
                </button>

                <a
                  href="tel:02142772340"
                  className="h-12 px-5 bg-black/40 hover:bg-black/60 border border-white/20 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2.5 backdrop-blur-xs cursor-pointer"
                  dir="ltr"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#E06518] flex items-center justify-center text-white shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono tracking-wider font-extrabold text-white text-sm sm:text-base">
                    ۰۲۱-۴۲۷۷۲۳۴۰
                  </span>
                </a>
              </div>
            </div>

            {/* LEFT in desktop: Clean Industrial Imagery */}
            <div className="lg:col-span-5 relative h-60 sm:h-72 lg:h-96 overflow-hidden bg-slate-900">
              <img
                src={STORE_ASSETS.ctaConsultBanner}
                alt="مشاوره تخصصی و استعلام قیمت قطعات خط تولید"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#55565A] via-transparent to-transparent hidden lg:block pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#55565A] via-transparent to-transparent lg:hidden pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
