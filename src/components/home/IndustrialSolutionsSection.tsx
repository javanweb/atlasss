import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, RefreshCw, Layers, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface IndustrialSolutionsSectionProps {
  onOpenConsult: () => void;
}

export const IndustrialSolutionsSection: React.FC<IndustrialSolutionsSectionProps> = ({ onOpenConsult }) => {
  const solutions = [
    {
      id: 1,
      number: '۰۱',
      title: 'کاهش توقف خط تولید',
      subtitle: 'افزایش قابلیت اطمینان سیستم',
      description:
        'انتخاب دقیق سایز و گرید تجهیزات انتقال قدرت بر اساس تنش واقعی کارکرد برای جلوگیری از بریدن ناگهانی تسمه و شکستن کوپلینگ.',
      icon: Clock,
      highlight: 'کاهش تا ۸۰٪ توقفات اضطراری',
    },
    {
      id: 2,
      number: '۰۲',
      title: 'انتخاب و جایگزینی قطعات',
      subtitle: 'پیشنهاد معادل مهندسی',
      description:
        'تطبیق و جایگزینی قطعات تحریمی یا ناموجود خطوط وارداتی با برندهای استاندارد بین‌المللی FORZA و SWR بدون نیاز به تغییر سازه.',
      icon: RefreshCw,
      highlight: 'تطبیق ۱۰۰٪ ابعاد و گشتاور',
    },
    {
      id: 3,
      number: '۰۳',
      title: 'تأمین قطعات خطوط تولید',
      subtitle: 'قراردادهای سالیانه و پروژه‌ای',
      description:
        'تأمین متمرکز، پایدار و بدون واسطه کلیه تجهیزات مصرفی کارخانجات با صدور فاکتور رسمی و گارانتی کتبی اصالت کالا.',
      icon: Layers,
      highlight: 'تأمین مستمر بیش از ۱۸,۰۰۰ پارت‌نامبر',
    },
    {
      id: 4,
      number: '۰۴',
      title: 'مهندسی و انتخاب تجهیز',
      subtitle: 'بررسی تخصصی پیش از سفارش',
      description:
        'بررسی شرایط محیطی، دمای کاری، سرعت دورانی و تحلیل نقشه‌های CAD توسط مهندسین مکانیک جهت تضمین طول عمر حداکثری.',
      icon: Wrench,
      highlight: 'مشاوره فنی رایگان',
    },
  ];

  return (
    <section className="relative w-full py-14 sm:py-20 bg-white border-b border-slate-200" dir="rtl">
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 space-y-8 sm:space-y-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="space-y-2 text-right max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-xs font-black text-[#E06518]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>رویکرد مهندسی و ارزش‌آفرین صنعت‌پیش</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#12203C]">
              فقط محصول نمی‌فروشیم؛{' '}
              <span className="text-[#E06518]">راهکار ارائه می‌دهیم</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              زبان ما حل چالش‌های فنی، افزایش راندمان مکانیکی و به صفر رساندن هزینه‌های توقف خطوط تولید کارخانجات کشور است.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenConsult}
            className="h-11 px-6 bg-[#12203C] hover:bg-[#1E335C] text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 active:scale-95"
          >
            <span>درخواست بررسی فنی خط تولید</span>
            <ArrowLeft className="w-4 h-4 text-orange-400" />
          </button>
        </div>

        {/* 4 Solution Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {solutions.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-slate-50/70 hover:bg-white rounded-2xl sm:rounded-3xl border border-slate-200 hover:border-[#E06518] p-5 sm:p-6 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 text-right"
              >
                <div className="space-y-3.5">
                  {/* Top Icon & Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-orange-50 border border-slate-200 group-hover:border-orange-200 flex items-center justify-center text-[#12203C] group-hover:text-[#E06518] shadow-2xs transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-black font-mono text-slate-300 group-hover:text-orange-300 transition-colors">
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="space-y-1">
                    <h3 className="font-black text-base sm:text-lg text-[#12203C] group-hover:text-[#E06518] transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-bold text-slate-500">{item.subtitle}</div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight Badge */}
                <div className="pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] font-bold text-[#E06518]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
