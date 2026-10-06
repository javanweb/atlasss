import React from 'react';
import { ShieldCheck, Award, Wrench, Truck, Headphones, CheckCircle2 } from 'lucide-react';

export const IndustrialTrustBar: React.FC = () => {
  const trustItems = [
    {
      id: 1,
      number: '۱۰+',
      title: 'سال تجربه صنعتی',
      subtitle: 'تأمین تخصصی تجهیزات خطوط تولید',
      icon: Award,
    },
    {
      id: 2,
      number: 'FORZA & SWR',
      title: 'تأمین برندهای معتبر',
      subtitle: 'اصالت قطعات با ضمانت کتبی',
      icon: ShieldCheck,
    },
    {
      id: 3,
      number: 'تخصصی',
      title: 'مشاوره فنی مهندسی',
      subtitle: 'انتخاب متناسب با شرایط واقعی کاربرد',
      icon: Wrench,
    },
    {
      id: 4,
      number: '< ۲۴h',
      title: 'تأمین و ارسال سریع',
      subtitle: 'پشتیبانی و پیگیری سفارشات اضطراری',
      icon: Truck,
    },
    {
      id: 5,
      number: '۱۰۰٪',
      title: 'خدمات پس از فروش',
      subtitle: 'همراهی مهندسی تا راه‌اندازی کامل',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="relative w-full bg-white border-b border-slate-200 py-6 sm:py-8" dir="rtl">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 divide-y md:divide-y-0 lg:divide-x lg:divide-x-reverse divide-slate-100">
          {trustItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-center gap-3.5 pt-3 md:pt-0 ${idx !== 0 ? 'lg:pr-6' : ''}`}
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#E06518] shrink-0 shadow-2xs">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 text-right">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-black text-[#12203C]">{item.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-normal line-clamp-1">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
