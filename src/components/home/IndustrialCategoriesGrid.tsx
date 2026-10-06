import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cog, Disc, Activity, Layers, Wrench, Shield, Sparkles } from 'lucide-react';
import { STORE_ASSETS } from '../../assets/images';

export const IndustrialCategoriesGrid: React.FC = () => {
  const categories = [
    {
      id: 'transmission',
      title: 'انتقال قدرت و حرکت',
      subtitle: 'کوپلینگ، تسمه، پولی، زنجیر صنعتی و فلکه',
      link: '/category/industrial-belts',
      image: STORE_ASSETS.products.forzaBelt || STORE_ASSETS.heroPulley,
      tag: 'تخصصی FORZA',
    },
    {
      id: 'bearings',
      title: 'بلبرینگ و یاتاقان صنعتی',
      subtitle: 'بلبرینگ‌های دور بالا، رولربیرینگ و یاتاقان خطوط سنگین',
      link: '/category/bearings',
      image: STORE_ASSETS.products.bearing || STORE_ASSETS.products.bearingNsk,
      tag: 'استاندارد DIN/ISO',
    },
    {
      id: 'gearbox',
      title: 'گیربکس و تجهیزات مکانیکی',
      subtitle: 'انواع گیربکس‌های صنعتی، شافت، الکتروموتور و ویبراتور',
      link: '/category/motors-gearboxes',
      image: STORE_ASSETS.products.motor,
      tag: 'بازدهی بالا',
    },
    {
      id: 'valves',
      title: 'شیرآلات و اتصالات پایپینگ',
      subtitle: 'شیرآلات فشار قوی بخار، فلنج، لوله و اتصالات صنعتی SWR',
      link: '/category/valves-piping',
      image: STORE_ASSETS.products.valve || STORE_ASSETS.products.flange,
      tag: 'تخصصی SWR',
    },
    {
      id: 'production-lines',
      title: 'قطعات خطوط تولید کارخانجات',
      subtitle: 'تسمه نقاله PVC، رولرهای سرامیکی و قطعات مصرفی کوره',
      link: '/category/conveyor-pvc',
      image: STORE_ASSETS.products.pvcBelt || STORE_ASSETS.products.ceramicParts,
      tag: 'ضمانت سایش',
    },
    {
      id: 'custom-engineering',
      title: 'تجهیزات سفارشی و مهندسی',
      subtitle: 'مهندسی معکوس، ساخت بر اساس نقشه CAD و قطعات تحریمی',
      link: '/catalog',
      image: STORE_ASSETS.whySanatCadEngineering,
      tag: 'ساخت سفارشی',
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200" dir="rtl">
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 space-y-8 sm:space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="space-y-2 text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-xs font-black text-[#E06518]">
              <Cog className="w-3.5 h-3.5" />
              <span>دسته‌بندی تجهیزات بر اساس نیاز کاربردی خطوط</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#12203C]">
              محصولات و تجهیزات صنعتی
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              تجهیزات مورد نیاز خطوط تولید را از یک تأمین‌کننده تخصصی با پشتیبانی فنی تهیه کنید.
            </p>
          </div>

          <Link
            to="/products"
            className="h-10 px-5 bg-white hover:bg-orange-50 border border-slate-200 hover:border-[#E06518] text-slate-700 hover:text-[#E06518] font-bold text-xs rounded-xl shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 group"
          >
            <span>مشاهده همه دسته‌بندی‌ها</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-[#E06518] p-4 sm:p-5 flex items-center gap-4 sm:gap-5 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-right"
            >
              {/* Thumbnail Image */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0 flex items-center justify-center p-2 group-hover:bg-orange-50/50 transition-colors">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Info */}
              <div className="flex-1 space-y-1.5 min-w-0">
                <span className="inline-block text-[10px] font-bold text-[#E06518] px-2 py-0.5 rounded-md bg-orange-50 border border-orange-200/50">
                  {cat.tag}
                </span>
                <h3 className="font-black text-sm sm:text-base text-[#12203C] group-hover:text-[#E06518] transition-colors leading-snug">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-500 font-normal line-clamp-2 leading-relaxed">
                  {cat.subtitle}
                </p>
              </div>

              {/* Arrow */}
              <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#E06518] text-slate-400 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
