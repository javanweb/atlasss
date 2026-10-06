import React from 'react';
import { Headphones, ArrowLeft, Send, Sparkles, Phone, FileText } from 'lucide-react';
import { STORE_ASSETS } from '../../assets/images';

interface LeadConsultationBannerProps {
  onOpenConsult: () => void;
  onOpenVisualSearch: () => void;
}

export const LeadConsultationBanner: React.FC<LeadConsultationBannerProps> = ({
  onOpenConsult,
  onOpenVisualSearch,
}) => {
  return (
    <section className="relative w-full py-10 sm:py-14" dir="rtl">
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#12203C] via-[#1A2E56] to-[#12203C] text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-700/60">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E06518]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            {/* Right: Text Information */}
            <div className="lg:col-span-8 space-y-4 text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-orange-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>مشاوره تخصصی مهندسی پیش از خرید</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-snug tracking-tight">
                نمی‌دانید کدام تجهیز برای خط تولید شما مناسب است؟
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed max-w-2xl">
                مشخصات فنی، شرایط کاری، میزان بار و دور موتور خط تولید خود را برای کارشناسان ما ارسال کنید تا مناسب‌ترین گزینه استاندارد را با کمترین هزینه پیشنهاد دهیم.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenConsult}
                  className="h-12 px-7 bg-gradient-to-r from-[#C95210] to-[#E06518] hover:from-[#C2410C] hover:to-[#C95210] text-white font-black text-xs sm:text-sm rounded-xl shadow-[0_6px_20px_rgba(224,101,24,0.4)] hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <Headphones className="w-4 h-4 text-white" />
                  <span>دریافت مشاوره فنی</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenVisualSearch}
                  className="h-12 px-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 backdrop-blur-md cursor-pointer active:scale-95"
                >
                  <FileText className="w-4 h-4 text-orange-400" />
                  <span>ارسال مشخصات یا تصویر تجهیز</span>
                </button>
              </div>
            </div>

            {/* Left: Quick Phone Hotline */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <a
                href="tel:02142772340"
                className="w-full sm:w-auto p-5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all text-center lg:text-right space-y-2 group block"
                dir="ltr"
              >
                <div className="flex items-center justify-center lg:justify-end gap-2 text-xs text-orange-300 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>پاسخگویی مستقیم کارشناسان:</span>
                </div>
                <div className="text-xl sm:text-2xl font-mono font-black text-white group-hover:text-orange-300 transition-colors">
                  ۰۲۱-۴۲۷۷۲۳۴۰
                </div>
                <div className="text-[11px] text-slate-300">شنبه تا چهارشنبه ۸ الی ۱۷ | پنجشنبه‌ها ۸ الی ۱۳</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
