import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { STORE_ASSETS } from '../../assets/images';

export const MainBrandsBanner: React.FC = () => {
  // Subcategories for FORZA (Ordered Left-to-Right matching reference image)
  const forzaCategories = [
    {
      id: 'belts',
      title: 'تسمه‌ها',
      image: STORE_ASSETS.forzaSubBelt || STORE_ASSETS.products.forzaBelt,
      link: '/category/industrial-belts',
    },
    {
      id: 'bearings',
      title: 'بلبرینگ‌ها',
      image: STORE_ASSETS.forzaSubBearing || STORE_ASSETS.products.bearing,
      link: '/category/power-transmission',
    },
    {
      id: 'couplings',
      title: 'کوپلینگ‌ها',
      image: STORE_ASSETS.forzaSubCoupling || STORE_ASSETS.categories.transmission,
      link: '/category/power-transmission',
    },
    {
      id: 'fittings',
      title: 'اتصالات صنعتی',
      image: STORE_ASSETS.forzaSubFittings || STORE_ASSETS.products.ceramicParts,
      link: '/category/production-fittings',
    },
  ];

  // Subcategories for SWR (Ordered Left-to-Right matching reference image)
  const swrCategories = [
    {
      id: 'valves',
      title: 'شیرآلات',
      image: STORE_ASSETS.swrSubValve || STORE_ASSETS.products.valve,
      link: '/category/industrial-valves',
    },
    {
      id: 'elbows',
      title: 'اتصالات',
      image: STORE_ASSETS.swrSubElbow || STORE_ASSETS.products.ceramicParts,
      link: '/category/production-fittings',
    },
    {
      id: 'pipes',
      title: 'لوله‌ها',
      image: STORE_ASSETS.swrSubPipes || STORE_ASSETS.products.pipes,
      link: '/category/pipes-flanges',
    },
    {
      id: 'flanges',
      title: 'فلنج‌ها',
      image: STORE_ASSETS.swrSubFlanges || STORE_ASSETS.products.flange,
      link: '/category/pipes-flanges',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 border-y border-slate-200/90 shadow-sm py-12 sm:py-16 lg:py-20 select-none">
      {/* Subtle Engineered Background Technical Grid & Ambient Flares */}
      <div className="absolute inset-0 bg-[radial-gradient(#12203c08_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-8 lg:px-6 space-y-10 sm:space-y-12">
        {/* Top Centered Header Section */}
        <div className="text-center space-y-3 max-w-2xl mx-auto" dir="rtl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-xs font-bold text-[#E06518]">
            <span className="w-2 h-2 rounded-full bg-[#E06518] animate-pulse" />
            <span>نمایندگی و توزیع مستقیم برندهای بین‌المللی</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-black text-[#12203C] tracking-tight leading-tight">
            برندهای معتبر جهانی،{' '}
            <span className="text-[#E06518] relative inline-block">
              در کنار شما
              <span className="absolute -bottom-1 inset-x-0 h-1 bg-[#E06518]/20 rounded-full" />
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl mx-auto">
            پیش به صنعت با همکاری مستقیم با کمپانی‌های مطرح جهانی، تأمین‌کننده رسمی قطعات و تجهیزات صنعتی استاندارد با اصالت تضمین‌شده است.
          </p>
        </div>

        {/* Dual Brand Split Grid: Left = FORZA, Right = SWR */}
        <div
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch pt-2"
          dir="ltr"
        >
          {/* Center Vertical Divider Line */}
          <div className="hidden lg:block absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-px bg-slate-200 pointer-events-none" />

          {/* ================================================================= */}
          {/* LEFT COLUMN: FORZA (Orange Industrial Accent)                     */}
          {/* ================================================================= */}
          <div className="bg-white/90 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-between space-y-6">
            <div className="flex flex-col items-center space-y-4 w-full max-w-md">
              {/* FORZA Logo Lockup */}
              <div className="flex items-center justify-center gap-3.5">
                {/* Stylized Geometric Orange FORZA Emblem */}
                <svg
                  className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 drop-shadow-md"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <path
                    d="M14 14L44 6L38 22L22 26L18 46L8 52L14 14Z"
                    fill="url(#forzaGrad1)"
                  />
                  <path
                    d="M26 30L54 22L48 38L30 43L22 58L18 46L26 30Z"
                    fill="url(#forzaGrad2)"
                  />
                  <defs>
                    <linearGradient id="forzaGrad1" x1="8" y1="6" x2="44" y2="52" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF9E2C" />
                      <stop offset="1" stopColor="#E05A00" />
                    </linearGradient>
                    <linearGradient id="forzaGrad2" x1="18" y1="22" x2="54" y2="58" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF7A00" />
                      <stop offset="1" stopColor="#C94A00" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="text-left">
                  <div className="flex items-start leading-none">
                    <span className="text-3xl sm:text-[40px] font-black tracking-wider text-[#12203C] font-sans">
                      FORZA
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold ml-1 mt-1">®</span>
                  </div>
                  <div className="text-[9px] sm:text-[10px] tracking-[0.28em] text-[#E06518] font-black uppercase mt-1">
                    POWER YOUR INDUSTRY
                  </div>
                </div>
              </div>

              {/* FORZA Description (RTL Persian) */}
              <p
                dir="rtl"
                className="text-xs sm:text-[13px] text-slate-600 leading-relaxed text-center sm:text-right w-full max-w-[380px] font-normal"
              >
                <strong className="font-bold text-[#12203C]">فورزا (FORZA)</strong> یکی از برندهای نام‌آشنای صنعتی در تولید و تأمین انواع تسمه‌های انتقال نیرو، پولی‌ها و اتصالات خطوط کارخانجات است.
              </p>

              {/* FORZA Pill Button */}
              <div className="pt-1 w-full flex justify-center sm:justify-end max-w-[380px]">
                <Link
                  to="/category/swr-forza-exclusive"
                  className="inline-flex items-center justify-between gap-4 px-6 py-2.5 rounded-xl bg-orange-50 hover:bg-[#E06518] border border-orange-200 hover:border-[#E06518] text-[#E06518] hover:text-white text-xs sm:text-sm font-bold transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer group/btn"
                >
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  <span dir="rtl">مشاهده محصولات فورزا</span>
                </Link>
              </div>
            </div>

            {/* FORZA 4 Subcategory Cards */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-[430px] pt-2">
              {forzaCategories.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#E06518] rounded-2xl p-2 sm:p-2.5 flex flex-col items-center justify-between text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer group/card aspect-[1/1.18]"
                >
                  <div className="w-full flex-1 flex items-center justify-center overflow-hidden rounded-xl p-1 bg-white border border-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover/card:scale-108 transition-transform duration-300"
                    />
                  </div>
                  <span
                    dir="rtl"
                    className="text-[10px] sm:text-[11px] font-bold text-slate-700 group-hover/card:text-[#E06518] transition-colors pt-1.5 truncate w-full"
                  >
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: SWR (Blue Industrial Accent)                        */}
          {/* ================================================================= */}
          <div className="bg-white/90 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-between space-y-6">
            <div className="flex flex-col items-center space-y-4 w-full max-w-md">
              {/* SWR Logo Lockup */}
              <div className="flex items-center justify-center gap-3.5">
                {/* Stylized Two-Tone Blue SWR Emblem */}
                <svg
                  className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 drop-shadow-md"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <path
                    d="M32 6L10 30L22 42L36 26L28 18L36 10L32 6Z"
                    fill="#0077FF"
                  />
                  <path
                    d="M32 58L54 34L42 22L28 38L36 46L28 54L32 58Z"
                    fill="#0284C7"
                  />
                </svg>

                <div className="text-left">
                  <div className="flex items-start leading-none">
                    <span className="text-3xl sm:text-[40px] font-black tracking-wider text-[#12203C] font-sans">
                      SWR
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold ml-1 mt-1">®</span>
                  </div>
                  <div className="text-[9px] sm:text-[10px] tracking-[0.24em] text-[#0077FF] font-black uppercase mt-1">
                    INDUSTRIAL SOLUTIONS
                  </div>
                </div>
              </div>

              {/* SWR Description (RTL Persian) */}
              <p
                dir="rtl"
                className="text-xs sm:text-[13px] text-slate-600 leading-relaxed text-center sm:text-right w-full max-w-[380px] font-normal"
              >
                <strong className="font-bold text-[#12203C]">SWR</strong> با ارائه فناوری‌های نوین در زمینه شیرآلات صنعتی، اتصالات فشارقوی و خطوط لوله‌کشی، انتخابی استاندارد برای صنایع مادر است.
              </p>

              {/* SWR Pill Button */}
              <div className="pt-1 w-full flex justify-center sm:justify-end max-w-[380px]">
                <Link
                  to="/category/swr-forza-exclusive"
                  className="inline-flex items-center justify-between gap-4 px-6 py-2.5 rounded-xl bg-sky-50 hover:bg-[#0077FF] border border-sky-200 hover:border-[#0077FF] text-[#0077FF] hover:text-white text-xs sm:text-sm font-bold transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer group/btn"
                >
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  <span dir="rtl">مشاهده محصولات SWR</span>
                </Link>
              </div>
            </div>

            {/* SWR 4 Subcategory Cards */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-[430px] pt-2">
              {swrCategories.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#0077FF] rounded-2xl p-2 sm:p-2.5 flex flex-col items-center justify-between text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer group/card aspect-[1/1.18]"
                >
                  <div className="w-full flex-1 flex items-center justify-center overflow-hidden rounded-xl p-1 bg-white border border-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover/card:scale-108 transition-transform duration-300"
                    />
                  </div>
                  <span
                    dir="rtl"
                    className="text-[10px] sm:text-[11px] font-bold text-slate-700 group-hover/card:text-[#0077FF] transition-colors pt-1.5 truncate w-full"
                  >
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
