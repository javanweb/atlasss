import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Shield, Headphones, Truck, CheckCircle2 } from 'lucide-react';
import { STORE_ASSETS } from '../../assets/images';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="relative w-full py-14 sm:py-20 bg-white text-slate-900 border-b border-slate-200" dir="rtl">
      {/* Subtle Technical Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#12203c08_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 space-y-8 sm:space-y-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="space-y-2.5 text-right max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-xs font-black text-[#E06518]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>اعتمادسازی مهندسی و رفع ریسک‌های تدارکات صنعتی</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-black text-[#12203C] leading-tight">
              چرا تأمین تجهیزات صنعتی را{' '}
              <span className="text-[#E06518] relative inline-block">
                به ما بسپارید؟
                <span className="absolute -bottom-1 inset-x-0 h-1 bg-[#E06518]/20 rounded-full" />
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              چطور ریسک انتخاب نادرست و خسارت‌های ناشی از توقف خطوط تولید را برای کارخانجات به حداقل می‌رسانیم؟
            </p>
          </div>

          <Link
            to="/about"
            className="h-12 px-7 bg-gradient-to-r from-[#C95210] to-[#E06518] hover:from-[#C2410C] hover:to-[#C95210] text-white font-bold text-xs sm:text-sm rounded-xl shadow-[0_6px_20px_rgba(224,101,24,0.35)] hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer active:scale-95 group shrink-0"
          >
            <span>بیشتر بدانید</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 High-Craft Asymmetric Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {/* Card 1 (7 Cols): مشاوره قبل از خرید */}
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 hover:border-[#E06518] group shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-end p-5 sm:p-8">
            <img
              src={STORE_ASSETS.whySanatQc}
              alt="مشاوره قبل از خرید و تست متالوژی"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-[#12203C]/90 backdrop-blur-md border border-white/20 text-orange-400 text-[11px] font-bold">
                مشاوره قبل از خرید
              </span>
            </div>

            <div className="relative z-10 space-y-2 text-right text-white">
              <div className="flex items-center gap-2 text-orange-400 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-orange-400" />
                <span>بررسی شرایط کاری قبل از ثبت سفارش</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                بررسی دقیق ابعاد، فشار و گشتاور خط تولید
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal max-w-2xl">
                قبل از انتخاب هر قطعه، شرایط بارگذاری، ارتعاش و محیط کاری با کاتالوگ سازنده تطبیق داده می‌شود تا از خطای خرید و خسارت مالی جلوگیری گردد.
              </p>
            </div>
          </div>

          {/* Card 2 (5 Cols): تأمین تخصصی */}
          <div className="lg:col-span-5 relative min-h-[360px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 hover:border-[#E06518] group shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between p-5 sm:p-8">
            <img
              src={STORE_ASSETS.whySanatDirectFactory}
              alt="تأمین تخصصی کالا"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-[#12203C]/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold">
                تأمین تخصصی
              </span>
            </div>

            <div className="relative z-10 space-y-2 text-right text-white">
              <div className="flex items-center gap-2 text-orange-400 text-xs font-bold">
                <Shield className="w-4 h-4 text-orange-400" />
                <span>پیشنهاد بر اساس کاربرد صنعتی</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                واردات و توزیع مستقیم با فاکتور رسمی
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                محصولات بر اساس مشخصات فنی واقعی خط تولید و بدون واسطه تجاری با بهترین قیمت تمام‌شده تأمین می‌شوند.
              </p>
            </div>
          </div>

          {/* Card 3 (5 Cols): کاهش ریسک انتخاب */}
          <div className="lg:col-span-5 relative min-h-[360px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 hover:border-[#E06518] group shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between p-5 sm:p-8">
            <img
              src={STORE_ASSETS.whySanatCadEngineering}
              alt="کاهش ریسک انتخاب مهندسی"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-[#12203C]/90 backdrop-blur-md border border-white/20 text-cyan-300 text-[11px] font-bold">
                کاهش ریسک انتخاب
              </span>
            </div>

            <div className="relative z-10 space-y-2 text-right text-white">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold">
                <Headphones className="w-4 h-4 text-cyan-300" />
                <span>بررسی فنی نقشه CAD</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                تضمین تطابق فنی با قطعه فابریک
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                به جای انتخاب صرفاً بر اساس قیمت، گزینه استاندارد با تضمین عملکرد و گارانتی تعویض کتبی در فاکتور قید می‌شود.
              </p>
            </div>
          </div>

          {/* Card 4 (7 Cols): پشتیبانی تا تأمین */}
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 hover:border-[#E06518] group shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-end p-5 sm:p-8">
            <img
              src={STORE_ASSETS.whySanatExpressDelivery}
              alt="پشتیبانی تا تأمین و تحویل"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-[#12203C]/90 backdrop-blur-md border border-white/20 text-amber-300 text-[11px] font-bold">
                پشتیبانی تا تأمین و راه‌اندازی
              </span>
            </div>

            <div className="relative z-10 space-y-2 text-right text-white">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold">
                <Truck className="w-4 h-4 text-amber-300" />
                <span>همراهی از بررسی تا تحویل کارخانه</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                ارسال اکسپرس و پشتیبانی ۲۴/۷ خطوط تولید
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal max-w-2xl">
                از بررسی درخواست و مشاوره اولیه تا رهگیری بارنامه، تحویل در محل کارخانه و راهنمای نصب در کنار تیم فنی شما هستیم.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
