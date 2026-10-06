import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Camera,
  Sparkles,
  Headphones,
  Shield,
  ShieldCheck,
  Building,
  Truck,
  Award,
  Share2,
  FileText,
  Calculator,
  Flame,
  Phone,
  CheckCircle2,
  Factory,
  Zap,
  Cpu,
  Gem,
  Wheat,
  Play,
  Mouse,
  Settings,
  Clock,
} from 'lucide-react';
import { STORE_ASSETS } from '../assets/images';
import { AiVisualPartSearchModal } from '../components/search/AiVisualPartSearchModal';
import { AiConsultModal } from '../components/search/AiConsultModal';
import { OurClientsSection } from '../components/home/OurClientsSection';
import { IndustrialTrustBar } from '../components/home/IndustrialTrustBar';
import { IndustrialCategoriesGrid } from '../components/home/IndustrialCategoriesGrid';
import { PopularProductsSection } from '../components/home/PopularProductsSection';
import { LeadConsultationBanner } from '../components/home/LeadConsultationBanner';
import { IndustrialSolutionsSection } from '../components/home/IndustrialSolutionsSection';
import { MainBrandsBanner } from '../components/home/MainBrandsBanner';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { CaseStudiesSection } from '../components/home/CaseStudiesSection';
import { EncyclopediaArticlesSection } from '../components/home/EncyclopediaArticlesSection';
import { FinalLeadCtaBanner } from '../components/home/FinalLeadCtaBanner';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // Modals state
  const [isVisualSearchOpen, setIsVisualSearchOpen] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  // Active Why SanatPish interactive card
  const [activeWhyIndex, setActiveWhyIndex] = useState(0);

  // Hero Slider
  const [activeSlide, setActiveSlide] = useState(1);
  const totalSlides = 3;

  // Window scroll tracking for Parallax, Headline fade/shift, Sticky Advantages bar, and Scroll Indicator line
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleWindowScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, currentScroll / totalHeight)));
      }
    };

    window.addEventListener('scroll', handleWindowScroll, { passive: true });
    handleWindowScroll();

    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  // ---------------------------------------------------------------------------
  // Hero Carousel Data & Automatic 5s Slide Switching
  // ---------------------------------------------------------------------------
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);

  interface HeroSlideItem {
    id: number;
    image: string;
    eyebrow: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    primaryBtn: {
      text: string;
      link?: string;
      action?: 'visualSearch' | 'consult';
    };
    secondaryBtn: {
      text: string;
      link?: string;
      action?: 'visualSearch' | 'consult';
    };
    badge: {
      title: string;
      subtitle: string;
    };
  }

  const heroSlides: HeroSlideItem[] = [
    {
      id: 1,
      image: STORE_ASSETS.heroSteelCoils || STORE_ASSETS.heroPulley,
      eyebrow: 'راهکارهای انتقال قدرت و تجهیزات صنعتی',
      titlePart1: 'انتقال قدرت مطمئن برای خطوط تولید',
      titlePart2: 'با تجهیزات صنعتی FORZA و SWR',
      description:
        'تأمین تخصصی تجهیزات انتقال قدرت و قطعات خطوط تولید، با تمرکز بر انتخاب صحیح، کیفیت و پشتیبانی فنی.',
      primaryBtn: {
        text: 'درخواست مشاوره و استعلام قیمت',
        action: 'consult',
      },
      secondaryBtn: {
        text: 'مشاهده محصولات',
        link: '/products',
      },
      badge: {
        title: 'تضمین کیفیت و اصالت قطعات صنعتی',
        subtitle: 'پشتیبانی فنی مهندسین مکانیک',
      },
    },
    {
      id: 2,
      image: STORE_ASSETS.heroPulley,
      eyebrow: 'تأمین برندهای معتبر بین‌المللی',
      titlePart1: 'سیستم‌های انتقال قدرت تخصصی',
      titlePart2: 'تسمه، کوپلینگ و پولی‌های استاندارد',
      description:
        'تأمین مستقیم انواع پولی‌های صنعتی، تسمه‌های نسوز و دنده‌ای FORZA و شیرآلات فشار قوی SWR با بالاترین بازدهی گشتاور.',
      primaryBtn: {
        text: 'درخواست مشاوره و استعلام قیمت',
        action: 'consult',
      },
      secondaryBtn: {
        text: 'مشاهده محصولات FORZA و SWR',
        link: '/category/swr-forza-exclusive',
      },
      badge: {
        title: 'کاهش ریسک توقف خط تولید',
        subtitle: 'تطبیق ابعادی بر اساس استاندارد DIN',
      },
    },
    {
      id: 3,
      image: STORE_ASSETS.heroBanner,
      eyebrow: 'سامانه استعلام فوری و شناسایی قطعه',
      titlePart1: 'کاهش زمان توقف خط تولید',
      titlePart2: 'تأمین فوری قطعات اضطراری',
      description:
        'با ارسال مشخصات فنی یا تصویر پلاک قطعه مستهلک، قطعه استاندارد را با پیش‌فاکتور رسمی و ارسال سریع دریافت کنید.',
      primaryBtn: {
        text: 'ارسال مشخصات یا تصویر قطعه',
        action: 'visualSearch',
      },
      secondaryBtn: {
        text: 'درخواست مشاوره فنی',
        action: 'consult',
      },
      badge: {
        title: 'ارسال اکسپرس به شهرک‌های صنعتی',
        subtitle: 'پشتیبانی و پیگیری سفارشات',
      },
    },
  ];

  // 5-second automatic slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleNextSlide = () => {
    setHeroSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setHeroSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Mobile Touch Gestures for Hero Carousel
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    // In RTL, swipe left (diff > 40) moves forward to next slide
    if (diff > 40) {
      handleNextSlide();
    } else if (diff < -40) {
      handlePrevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Industries carousel scroll tracking
  const industriesScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkIndustriesScroll = () => {
    const el = industriesScrollRef.current;
    if (!el) return;
    // In RTL, scrollLeft can be 0 at initial state or negative/positive depending on browser implementation
    // When user scrolls to left (forward in carousel), scroll offset changes from initial 0
    const scrolled = Math.abs(el.scrollLeft) > 10;
    setCanScrollRight(scrolled);
  };

  const handleScrollLeft = () => {
    const el = industriesScrollRef.current;
    if (el) {
      // In RTL, scrolling "left" (forward) is done with negative or positive depending on layout
      el.scrollBy({ left: -320, behavior: 'smooth' });
      // Immediately reveal right button
      setCanScrollRight(true);
    }
  };

  const handleScrollRight = () => {
    const el = industriesScrollRef.current;
    if (el) {
      el.scrollBy({ left: 320, behavior: 'smooth' });
      setTimeout(checkIndustriesScroll, 350);
    }
  };

  // 8 Categories matching production line catalog
  const categories = [
    {
      id: 1,
      title: 'قطعات و سیستم‌های انتقال قدرت',
      image: STORE_ASSETS.categories.transmission,
      link: '/category/power-transmission',
    },
    {
      id: 2,
      title: 'تسمه‌های خط تولید و کانوایر',
      image: STORE_ASSETS.categories.belts,
      link: '/category/industrial-belts',
    },
    {
      id: 3,
      title: 'کاشی، سرامیک و رولرهای کوره',
      image: STORE_ASSETS.products.ceramicParts,
      link: '/category/ceramic-tiles',
    },
    {
      id: 4,
      title: 'پولی، فلکه و بوش قفل‌کننده',
      image: STORE_ASSETS.categories.pulleys,
      link: '/category/pulleys-idlers',
    },
    {
      id: 5,
      title: 'بلبرینگ، رولبرینگ و یاتاقان',
      image: STORE_ASSETS.categories.bearings,
      link: '/category/bearings-bushings',
    },
    {
      id: 6,
      title: 'زنجیر و چرخ زنجیر خطوط انتقال',
      image: STORE_ASSETS.categories.chains,
      link: '/category/chains-sprockets',
    },
    {
      id: 7,
      title: 'تجهیزات و تسمه‌های نساجی',
      image: STORE_ASSETS.categories.conveyor,
      link: '/category/textile-machinery',
    },
    {
      id: 8,
      title: 'محصولات انحصاری SWR و FORZA',
      image: STORE_ASSETS.heroPulley,
      link: '/category/swr-forza-exclusive',
    },
  ];

  // 7 Covered Industries matching reference screenshot exactly
  const coveredIndustries = [
    {
      id: 1,
      title: 'سیمان و فولاد',
      image: STORE_ASSETS.industries.cement,
      icon: Factory,
      link: '/category/cement-industry',
    },
    {
      id: 2,
      title: 'صنایع غذایی',
      image: STORE_ASSETS.industries.foodBottles,
      icon: Wheat,
      link: '/category/food-industry',
    },
    {
      id: 3,
      title: 'معادن',
      image: STORE_ASSETS.industries.miningTruck,
      icon: Gem,
      link: '/category/mining-steel',
    },
    {
      id: 4,
      title: 'نساجی',
      image: STORE_ASSETS.industries.textile,
      icon: Cpu,
      link: '/category/textile-machinery',
    },
    {
      id: 5,
      title: 'کاشی و سرامیک',
      image: STORE_ASSETS.industries.ceramic,
      icon: Flame,
      link: '/category/ceramic-tiles',
    },
    {
      id: 6,
      title: 'نیرو و انرژی',
      image: STORE_ASSETS.industries.powerCooling,
      icon: Zap,
      link: '/category/power-energy',
    },
    {
      id: 7,
      title: 'تولیدی و ساخت',
      image: STORE_ASSETS.industries.robotArm,
      icon: Factory,
      link: '/category/manufacturing',
    },
  ];

  // 4 Minimal & Visual Core Pillars for Why SanatPish (چرا صنعت‌پیش؟ - مینیمال، بصری و مدرن)
  const whySanatPishItems = [
    {
      id: 0,
      title: 'تضمین ۱۰۰٪ اصالت و شناسنامه فنی کالا',
      desc: 'ارائه برگه آنالیز متریال، سرتیفیکیت معتبر و گارانتی کتبی تعویض بی‌قید و شرط.',
      metric: '۱۰۰٪',
      metricLabel: 'ضمانت اصالت و سلامت قطعه',
      image: STORE_ASSETS.engineerWhyAtlas,
      icon: ShieldCheck,
    },
    {
      id: 1,
      title: 'تأمین مستقیم و قیمت کارخانه',
      desc: 'واردات و پخش مستقیم از خطوط تولید جهانی با صدور فاکتور رسمی و بدون واسطه.',
      metric: '۲۵٪-',
      metricLabel: 'صرفه‌جویی در هزینه‌های تدارکات',
      image: STORE_ASSETS.heroPulley,
      icon: Shield,
    },
    {
      id: 2,
      title: 'مشاوره فنی و تطبیق مهندسی',
      desc: 'بررسی نقشه‌ها و شرایط خط تولید توسط مهندسین مکانیک پیش از ثبت سفارش.',
      metric: 'رایگان',
      metricLabel: 'پشتیبانی فنی مهندسین مقیم',
      image: STORE_ASSETS.ctaConsultBanner,
      icon: Headphones,
    },
    {
      id: 3,
      title: 'موجودی پایدار و ارسال ۲۴ ساعته',
      desc: 'دپوی مستمر در انبار مرکزی و ارسال اکسپرس به تمامی شهرک‌های صنعتی سراسر کشور.',
      metric: '< ۲۴h',
      metricLabel: 'ارسال سفارشات اورژانسی',
      image: STORE_ASSETS.heroBanner,
      icon: Truck,
    },
  ];

  return (
    <div className="w-full text-right font-sans pb-12 overflow-x-hidden relative">
      {/* ========================================================================= */}
      {/* 0. VERTICAL ORANGE SCROLL INDICATOR LINE (میزان اسکرول صفحه)              */}
      {/* ========================================================================= */}
      <div 
        className="fixed top-0 right-0 z-50 w-1 h-full pointer-events-none bg-[#12203C]/15"
        title="شاخص پیمایش صفحه"
      >
        {/* Glowing Orange Fill Line */}
        <div
          className="w-full bg-gradient-to-b from-[#C95210] via-[#E06518] to-[#FF8C00] shadow-[0_0_8px_#E06518] transition-all duration-75"
          style={{ height: `${Math.round(scrollProgress * 100)}%` }}
        />
      </div>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION - 5-SECOND DYNAMIC CAROUSEL WITH PARALLAX & ANIMATIONS    */}
      {/* ========================================================================= */}
      <section
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full overflow-hidden bg-[#12203C] text-white border-b border-slate-800/80 min-h-[580px] sm:min-h-[680px] md:min-h-[740px] lg:min-h-[800px] xl:min-h-[860px] flex flex-col justify-between select-none"
      >
        {/* Background Factory Images with Smooth Cross-Fade & Parallax */}
        {heroSlides.map((slide, idx) => {
          const isActive = idx === heroSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute -top-10 -bottom-10 inset-x-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out will-change-transform ${
                isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: `translateY(${Math.min(120, scrollY * 0.26)}px) scale(1.04)`,
              }}
            />
          );
        })}

        {/* Cinematic Factory Overlay: Clean neutral gradient allowing vibrant image clarity with crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
        {/* Warm Golden Flare on Factory floor */}
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[180px] bg-gradient-to-t from-orange-600/20 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />

        {/* Top & Middle Content Container - Standard max-w-7xl matching the header perfectly */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 flex-1 flex flex-col justify-center">
          <div
            key={heroSlideIndex}
            className="max-w-xl lg:max-w-2xl space-y-4 sm:space-y-6 transition-all duration-500 ease-out animate-in fade-in slide-in-from-right-3"
          >
            {/* Top Eyebrow Tag */}
            <div className="flex items-center gap-2 justify-start">
              <span className="w-6 sm:w-8 h-[2px] bg-[#E06518]" />
              <span className="text-[11px] sm:text-[13px] font-bold text-orange-400/90 tracking-wide line-clamp-1">
                {heroSlides[heroSlideIndex].eyebrow}
              </span>
            </div>

            {/* Main Headline (With Fade & Shift to Right on Scroll) */}
            <div
              className="transition-all duration-100 ease-out will-change-transform"
              style={{
                opacity: Math.max(0, 1 - scrollY / 320),
                transform: `translateX(${Math.min(70, scrollY * 0.2)}px)`,
              }}
            >
              <h1 className="text-2xl sm:text-5xl lg:text-[56px] font-black leading-[1.25] sm:leading-[1.18] tracking-tight text-white drop-shadow-md">
                <span>{heroSlides[heroSlideIndex].titlePart1}</span>
                <span className="block text-[#E06518] pt-1.5">{heroSlides[heroSlideIndex].titlePart2}</span>
              </h1>
            </div>

            {/* Action Buttons & Subtitle */}
            <div className="pt-2 sm:pt-4 space-y-3.5 sm:space-y-5">
              {/* Subtitle Description */}
              <p className="text-xs sm:text-[15px] text-slate-200/95 leading-relaxed max-w-xl font-normal min-h-[38px] sm:min-h-[48px]">
                {heroSlides[heroSlideIndex].description}
              </p>

              {/* Action Buttons Row - Full width touch targets on mobile */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5">
                {/* Primary Button */}
                {heroSlides[heroSlideIndex].primaryBtn.link ? (
                  <Link
                    to={heroSlides[heroSlideIndex].primaryBtn.link!}
                    className="h-12 sm:h-13 px-6 sm:px-8 bg-gradient-to-r from-[#C95210] to-[#E06518] hover:from-[#C2410C] hover:to-[#C95210] text-white font-black text-xs sm:text-sm rounded-xl shadow-[0_6px_18px_rgba(249,115,22,0.35)] hover:shadow-[0_8px_22px_rgba(249,115,22,0.5)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer group active:scale-95"
                  >
                    <span>{heroSlides[heroSlideIndex].primaryBtn.text}</span>
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-white" />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      if (heroSlides[heroSlideIndex].primaryBtn.action === 'visualSearch') {
                        setIsVisualSearchOpen(true);
                      } else if (heroSlides[heroSlideIndex].primaryBtn.action === 'consult') {
                        setIsConsultOpen(true);
                      }
                    }}
                    className="h-12 sm:h-13 px-6 sm:px-8 bg-gradient-to-r from-[#C95210] to-[#E06518] hover:from-[#C2410C] hover:to-[#C95210] text-white font-black text-xs sm:text-sm rounded-xl shadow-[0_6px_18px_rgba(249,115,22,0.35)] hover:shadow-[0_8px_22px_rgba(249,115,22,0.5)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer group active:scale-95"
                  >
                    <Camera className="w-4 h-4 text-white" />
                    <span>{heroSlides[heroSlideIndex].primaryBtn.text}</span>
                  </button>
                )}

                {/* Secondary Button */}
                {heroSlides[heroSlideIndex].secondaryBtn.action === 'consult' ? (
                  <button
                    type="button"
                    onClick={() => setIsConsultOpen(true)}
                    className="h-12 sm:h-13 px-5 sm:px-7 bg-[#12203C]/70 hover:bg-[#12203C]/85 text-white font-bold text-xs sm:text-sm rounded-xl border border-white/20 hover:border-orange-500/70 backdrop-blur-md transition-all flex items-center justify-center gap-2.5 cursor-pointer group shadow-md active:scale-95"
                  >
                    <span className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-[#E06518] group-hover:scale-110 transition-transform">
                      <Play className="w-3 h-3 fill-[#E06518] text-[#E06518] ml-0.5" />
                    </span>
                    <span>{heroSlides[heroSlideIndex].secondaryBtn.text}</span>
                    <ArrowLeft className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsVisualSearchOpen(true)}
                    className="h-12 sm:h-13 px-5 sm:px-7 bg-[#12203C]/70 hover:bg-[#12203C]/85 text-white font-bold text-xs sm:text-sm rounded-xl border border-white/20 hover:border-orange-500/70 backdrop-blur-md transition-all flex items-center justify-center gap-2.5 cursor-pointer group shadow-md active:scale-95"
                  >
                    <span>{heroSlides[heroSlideIndex].secondaryBtn.text}</span>
                    <ArrowLeft className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                  </button>
                )}
              </div>
            </div>

            {/* Slide Navigation Dots with 5-Second Timer Progress Bar & Controls */}
            <div className="pt-3 sm:pt-4 flex items-center justify-between sm:justify-start gap-3">
              <div className="flex items-center gap-2 bg-[#12203C]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                {heroSlides.map((slide, idx) => {
                  const isActive = idx === heroSlideIndex;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setHeroSlideIndex(idx)}
                      className={`relative h-2 rounded-full transition-all duration-300 overflow-hidden cursor-pointer ${
                        isActive ? 'w-8 bg-orange-500/30' : 'w-2 bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`اسلاید ${idx + 1}`}
                    >
                      {isActive && (
                        <div
                          key={`progress-${idx}-${heroSlideIndex}`}
                          className="absolute inset-0 bg-[#E06518] rounded-full"
                          style={{
                            animation: 'heroProgress 5s linear forwards',
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Slide Counter (01 / 03) */}
              <span className="text-[11px] font-mono font-bold text-slate-300">
                0{heroSlideIndex + 1} / 0{heroSlides.length}
              </span>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  className="w-7 h-7 rounded-full bg-[#12203C]/70 hover:bg-[#E06518] border border-white/15 hover:border-[#E06518] text-white flex items-center justify-center transition-all cursor-pointer active:scale-90"
                  aria-label="اسلاید قبلی"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextSlide}
                  className="w-7 h-7 rounded-full bg-[#12203C]/70 hover:bg-[#E06518] border border-white/15 hover:border-[#E06518] text-white flex items-center justify-center transition-all cursor-pointer active:scale-90"
                  aria-label="اسلاید بعدی"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Far Left Vertical Scroll Visual Indicator (آیکون ماوس اسکرول + نشانگر) */}
        <div className="absolute left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-2.5 text-slate-400">
          <div className="flex flex-col items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="w-1.5 h-4 rounded-full bg-[#E06518] shadow-[0_0_6px_#E06518]" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          </div>

          <div className="w-5 h-8 rounded-full border-2 border-white/35 flex items-start justify-center pt-1">
            <span className="w-1 h-1.5 rounded-full bg-white/80 animate-bounce" />
          </div>
          <span className="text-[8px] font-mono font-bold tracking-[0.2em] text-slate-400 uppercase rotate-180 [writing-mode:vertical-lr]">
            SCROLL
          </span>
        </div>

        {/* Bottom Left Badge: بر اساس اسلاید جاری */}
        <div
          key={`badge-${heroSlideIndex}`}
          className="absolute left-4 sm:left-8 bottom-32 z-20 hidden lg:flex items-center gap-2 bg-[#12203C]/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 shadow-md transition-all duration-500 animate-in fade-in"
        >
          <div className="w-1.5 h-5 bg-[#E06518] rounded-full" />
          <div className="text-right">
            <div className="text-[11px] font-bold text-white">{heroSlides[heroSlideIndex].badge.title}</div>
            <div className="text-[9px] text-slate-400 font-medium">{heroSlides[heroSlideIndex].badge.subtitle}</div>
          </div>
          <ArrowLeft className="w-3 h-3 text-orange-400 mr-1" />
        </div>

        {/* ========================================================================= */}
        {/* CLIENTS LOGO TICKER BAR AT BOTTOM OF HERO                                 */}
        {/* ========================================================================= */}
        <div className="relative z-20 w-full bg-white border-t border-slate-100">
          <OurClientsSection />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRUST BAR - اثبات اولیه (قابل اعتماد هستیم)                            */}
      {/* ========================================================================= */}
      <IndustrialTrustBar />

      {/* ========================================================================= */}
      {/* 3. PRODUCT CATEGORIES - محصولات اصلی (چه چیزی نیاز دارید؟)                 */}
      {/* ========================================================================= */}
      <IndustrialCategoriesGrid />

      {/* ========================================================================= */}
      {/* 4. PRODUCT SHOWCASE - محصولات منتخب و پرکاربرد (این‌ها را تأمین می‌کنیم)  */}
      {/* ========================================================================= */}
      <div className="w-full my-4">
        <PopularProductsSection />
      </div>

      {/* ========================================================================= */}
      {/* 5. TECHNICAL CONSULTING BANNER - لید جنریشن (اگر نمی‌دانید چه انتخاب کنید) */}
      {/* ========================================================================= */}
      <LeadConsultationBanner
        onOpenConsult={() => setIsConsultOpen(true)}
        onOpenVisualSearch={() => setIsVisualSearchOpen(true)}
      />

      {/* ========================================================================= */}
      {/* 6. INDUSTRIES - صنایع (صنعت شما را می‌شناسیم)                             */}
      {/* ========================================================================= */}
      <section
        className="relative w-full overflow-hidden bg-[#12203C] text-white py-14 sm:py-20 my-4 shadow-2xl border-y border-orange-950/40"
        dir="rtl"
      >
        {/* Background Plant Backdrop with natural transparent gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={STORE_ASSETS.industries.bgPlant}
            alt="Industrial Plant Refinery"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Diagonal Glowing Laser Light Rays at bottom right */}
        <div className="absolute bottom-0 right-0 w-[55%] h-32 pointer-events-none z-1 overflow-hidden opacity-80">
          <div className="absolute -bottom-10 right-10 w-[650px] h-[3px] bg-gradient-to-r from-transparent via-[#E06518] to-transparent rotate-[-18deg] shadow-[0_0_15px_#E06518]" />
          <div className="absolute -bottom-16 right-32 w-[550px] h-[2px] bg-gradient-to-r from-transparent via-[#C95210] to-transparent rotate-[-18deg] shadow-[0_0_10px_#C95210]" />
          <div className="absolute -bottom-24 right-56 w-[450px] h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent rotate-[-18deg]" />
        </div>

        {/* Subtle Industrial Background Dot Pattern */}
        <div className="absolute inset-0 z-1 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        {/* Carousel Navigation Chevron Arrows */}
        <button
          type="button"
          onClick={handleScrollRight}
          className={`absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#12203C]/85 hover:bg-[#E06518] border border-white/20 hover:border-[#E06518] text-white flex items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-300 cursor-pointer group ${
            canScrollRight ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'
          }`}
          aria-label="صنایع قبلی"
        >
          <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>

        <button
          type="button"
          onClick={handleScrollLeft}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#12203C]/85 hover:bg-[#E06518] border border-white/20 hover:border-[#E06518] text-white flex items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-300 cursor-pointer group"
          aria-label="صنایع بعدی"
        >
          <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>

        {/* Main Content Layout */}
        <div className="relative z-10 max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Right Header Text Column */}
          <div className="w-full lg:w-[420px] xl:w-[460px] space-y-4 text-right shrink-0">
            <div className="flex items-center gap-2 justify-start">
              <span className="text-xs sm:text-sm font-black tracking-[0.25em] text-[#E06518] uppercase font-mono">
                INDUSTRIES & SOLUTIONS
              </span>
              <span className="w-12 h-[2px] bg-[#E06518]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white leading-[1.2] tracking-tight">
              راهکارهای ما برای
              <span className="block text-[#E06518] pt-1">صنایع مختلف</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-light">
              تجهیزات و راهکارهای انتقال قدرت متناسب با شرایط هر صنعت؛ از فولاد، سیمان و پتروشیمی تا صنایع غذایی، نیروگاهی و ماشین‌سازی.
            </p>

            <div className="pt-3">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2.5 h-12 sm:h-13 px-8 bg-gradient-to-r from-[#C95210] to-[#E06518] hover:from-[#C2410C] hover:to-[#C95210] text-white text-sm sm:text-base font-black rounded-2xl shadow-[0_10px_25px_rgba(249,115,22,0.4)] hover:shadow-[0_12px_30px_rgba(249,115,22,0.6)] hover:scale-[1.02] transition-all cursor-pointer group"
              >
                <span>مشاهده قطعات خطوط</span>
                <ArrowLeft className="w-5 h-5 text-white group-hover:-translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Scrollable Cards Row */}
          <div
            id="industries-scroll-container"
            ref={industriesScrollRef}
            onScroll={checkIndustriesScroll}
            className="flex-1 w-full min-w-0 flex items-stretch gap-3.5 sm:gap-4 overflow-x-auto pb-4 pt-2 px-1 scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {coveredIndustries.map((ind) => {
              const IconComp = ind.icon;

              return (
                <Link
                  key={ind.id}
                  to={ind.link}
                  className="group relative w-[170px] sm:w-[195px] shrink-0 aspect-[1/1.7] rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-end p-2.5 sm:p-3 transition-all duration-300 snap-start cursor-pointer border-2 border-white/15 hover:border-[#E06518] hover:shadow-[0_0_25px_rgba(249,115,22,0.45)] hover:ring-2 hover:ring-orange-500/30 hover:scale-[1.03] hover:z-10"
                >
                  <img
                    src={ind.image}
                    alt={ind.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#E06518] to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

                  <div className="relative z-10 flex items-center justify-between gap-1.5 bg-[#12203C]/85 backdrop-blur-md px-2.5 py-2 rounded-xl border border-white/15 shadow-lg group-hover:border-orange-500/60 transition-all duration-300">
                    <div className="w-6 h-6 rounded-full bg-[#E06518] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#C95210] transition-all">
                      <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    </div>

                    <span className="text-xs sm:text-[13px] font-bold text-white group-hover:text-orange-200 transition-colors line-clamp-1">
                      {ind.title}
                    </span>

                    {IconComp && (
                      <div className="w-5 h-5 flex items-center justify-center shrink-0 text-orange-400/80 group-hover:text-[#E06518] transition-colors">
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Slider Indicator Dots */}
        <div className="flex items-center justify-center gap-2 pt-8 sm:pt-12 relative z-10">
          <span className="w-9 h-2.5 rounded-full bg-[#E06518] shadow-[0_0_10px_#E06518]" />
          <span className="w-7 h-2 rounded-full bg-white/25" />
          <span className="w-7 h-2 rounded-full bg-white/25" />
          <span className="w-7 h-2 rounded-full bg-white/25" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SOLUTIONS - راهکارها (مشکل شما را واقعاً حل می‌کنیم)                   */}
      {/* ========================================================================= */}
      <IndustrialSolutionsSection onOpenConsult={() => setIsConsultOpen(true)} />

      {/* ========================================================================= */}
      {/* 8. BRANDS - برندهای معتبر (با چه برندهایی کار می‌کنیم)                     */}
      {/* ========================================================================= */}
      <MainBrandsBanner />

      {/* ========================================================================= */}
      {/* 9. WHY US - چرا ما؟ (چرا از شما بخرم؟)                                     */}
      {/* ========================================================================= */}
      <WhyChooseUsSection />

      {/* ========================================================================= */}
      {/* 10. CASE STUDIES - پروژه‌ها و تجارب واقعی (قبلاً انجامش داده‌اید؟)         */}
      {/* ========================================================================= */}
      <CaseStudiesSection />

      {/* ========================================================================= */}
      {/* 11. ARTICLES - دانشنامه تخصصی صنعت (دانش فنی دارید؟)                      */}
      {/* ========================================================================= */}
      <EncyclopediaArticlesSection />

      {/* ========================================================================= */}
      {/* 12. FINAL CTA BANNER - فراخوان نهایی (قدم بعدی چیست)                       */}
      {/* ========================================================================= */}
      <FinalLeadCtaBanner
        onOpenConsult={() => setIsConsultOpen(true)}
        onOpenVisualSearch={() => setIsVisualSearchOpen(true)}
      />

      {/* Global Modals for interactive AI features */}
      <AiVisualPartSearchModal
        isOpen={isVisualSearchOpen}
        onClose={() => setIsVisualSearchOpen(false)}
      />

      <AiConsultModal isOpen={isConsultOpen} onClose={() => setIsConsultOpen(false)} />
    </div>
  );
};
