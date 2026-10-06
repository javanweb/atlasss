import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, TrendingUp, AlertCircle, Sparkles, Building2 } from 'lucide-react';
import { STORE_ASSETS } from '../../assets/images';

export const CaseStudiesSection: React.FC = () => {
  const cases = [
    {
      id: 1,
      industry: 'صنایع فولاد و نورد سنگین',
      title: 'بهینه‌سازی سیستم انتقال گشتاور خط نورد گرم',
      challenge: 'خرابی مکرر کوپلینگ‌های چدنی سنتی ناشی از شوک‌های ضربه‌ای و توقف ۴ ساعته خط در هفته.',
      solution: 'بررسی دینامیکی بار و جایگزینی با کوپلینگ‌های فلکسیبل هیدرولیک FORZA با جذب ارتعاش بالا.',
      result: 'کاهش ۸۰ درصدی توقفات تعمیراتی و صرفه‌جویی بیش از ۱.۲ میلیارد تومان در هزینه‌های سالیانه.',
      image: STORE_ASSETS.heroSteelCoils || STORE_ASSETS.industries.manufacturing,
      metric: '۸۰٪-',
      metricLabel: 'کاهش توقف خط',
    },
    {
      id: 2,
      industry: 'صنایع سیمان و فرآوری',
      title: 'افزایش طول عمر تسمه‌های انتقال در دمای کوره',
      challenge: 'پوسیدگی و دفرمه شدن تسمه‌های معمولی در دمای بالای ۹۰ درجه سانتی‌گراد طی هر ۲ ماه.',
      solution: 'طراحی و تأمین تسمه‌های مقاوم حرارتی با کورد نخ کولار و پوشش ضد سایش FORZA.',
      result: 'افزایش طول عمر کارکرد تسمه‌ها از ۲ ماه به بیش از ۱۰ ماه بدون افت گشتاور.',
      image: STORE_ASSETS.industries.cement,
      metric: '۵ برابر',
      metricLabel: 'افزایش طول عمر قطعه',
    },
    {
      id: 3,
      industry: 'پالایشگاه و پتروشیمی',
      title: 'مهار افت فشار و نشتی در خطوط بخار پرفشار',
      challenge: 'نشتی مکرر شیرآلات غیراستاندارد در خطوط بخار و توقف بخشی از واحد هیدروژناسیون.',
      solution: 'تجهیز خطوط به شیرآلات فشار قوی فولادی کلاس ۸۰۰ برند SWR با گواهینامه تست متالوژی.',
      result: 'به صفر رسیدن نشتی، ارتقای ایمنی فرآیند و دریافت تأییدیه بازرسی فنی مجتمع.',
      image: STORE_ASSETS.refineryDuskWide || STORE_ASSETS.industries.bgPlant,
      metric: '۱۰۰٪',
      metricLabel: 'مهار کامل نشتی و افت فشار',
    },
  ];

  return (
    <section className="relative w-full py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200" dir="rtl">
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 space-y-8 sm:space-y-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="space-y-2 text-right max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-xs font-black text-[#E06518]">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>نتایج قابل اندازه‌گیری در پروژه‌های واقعی</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#12203C]">
              تجربه ما در خطوط تولید{' '}
              <span className="text-[#E06518]">(Case Studies)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              ما فقط ادعا نمی‌کنیم؛ نمونه‌هایی از بهینه‌سازی فنی و حل چالش‌های واقعی در کارخانجات بزرگ کشور را مشاهده کنید.
            </p>
          </div>

          <Link
            to="/about"
            className="h-10 px-5 bg-white hover:bg-orange-50 border border-slate-200 hover:border-[#E06518] text-slate-700 hover:text-[#E06518] font-bold text-xs rounded-xl shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 group"
          >
            <span>مشاهده همه پروژه‌ها و مستندات</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {cases.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 hover:border-[#E06518] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Header with Metric Tag */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Industry Tag */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#12203C]/90 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-md">
                  {item.industry}
                </div>

                {/* Metric Overlay */}
                <div className="absolute bottom-3 left-3 text-left bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  <div className="text-xl sm:text-2xl font-mono font-black text-[#E06518] leading-none">
                    {item.metric}
                  </div>
                  <div className="text-[10px] text-slate-300 font-medium mt-0.5">{item.metricLabel}</div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between text-right">
                <div className="space-y-3">
                  <h3 className="font-black text-base sm:text-lg text-[#12203C] leading-snug group-hover:text-[#E06518] transition-colors">
                    {item.title}
                  </h3>

                  {/* Challenge */}
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-red-600">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>چالش کارخانه:</span>
                    </div>
                    <p className="text-slate-600 font-normal leading-relaxed pr-5">
                      {item.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-[#12203C]">
                      <Sparkles className="w-3.5 h-3.5 text-[#E06518] shrink-0" />
                      <span>راهکار صنعت‌پیش:</span>
                    </div>
                    <p className="text-slate-600 font-normal leading-relaxed pr-5">
                      {item.solution}
                    </p>
                  </div>
                </div>

                {/* Result */}
                <div className="pt-3 border-t border-slate-100 space-y-1 bg-emerald-50/60 p-3 rounded-xl border border-emerald-200/60">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>نتیجه حاصل‌شده:</span>
                  </div>
                  <p className="text-[11px] text-emerald-950 font-normal leading-relaxed">
                    {item.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
