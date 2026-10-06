import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, User, ArrowUpRight, Search, ChevronLeft, Sparkles, Filter } from 'lucide-react';
import { STORE_ASSETS } from '../../assets/images';

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  author: string;
  authorRole: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
}

export const EncyclopediaArticlesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'همه موضوعات دانشنامه' },
    { id: 'transmission', label: 'انتقال قدرت و تسمه‌ها' },
    { id: 'quality', label: 'کنترل کیفیت و متالوژی' },
    { id: 'piping', label: 'شیرآلات و خطوط پایپینگ' },
    { id: 'maintenance', label: 'مدیریت نگهداشت (PM)' },
  ];

  const articles: ArticleItem[] = [
    {
      id: 'art-1',
      title: 'راهنمای جامع محاسبه گشتاور و انتخاب تسمه‌های تایمینگ در خطوط تولید پیوسته',
      category: 'انتقال قدرت و تسمه‌ها',
      categorySlug: 'transmission',
      excerpt:
        'بررسی فرمول‌های استاندارد DIN 7721 و ISO 5296، تحلیل خستگی کششی کورد نخ‌های فایبرگلاس و کولار در محیط‌های حرارتی بالای ۸۰ درجه سانتی‌گراد.',
      author: 'مهندس علیرضا کیانی',
      authorRole: 'سرپرست واحد فنی مهندسی',
      readTime: '۷ دقیقه',
      date: '۱۵ شهریور ۱۴۰۳',
      image: STORE_ASSETS.whySanatCadEngineering,
      featured: true,
    },
    {
      id: 'art-2',
      title: 'استانداردهای متالوژی و تست‌های غیرمخرب (NDT) در بیرینگ‌های صنعتی سنگین',
      category: 'کنترل کیفیت و متالوژی',
      categorySlug: 'quality',
      excerpt:
        'تکنیک‌های پایش عیوب اولیه بلبرینگ‌ها با روش آنالیز ارتعاشات FFT و تصویربرداری ترموگرافی در صنایع فولاد و سیمان.',
      author: 'دکتر سهراب دهقان',
      authorRole: 'متخصص متالوژی و بازرسی فنی',
      readTime: '۵ دقیقه',
      date: '۰۸ شهریور ۱۴۰۳',
      image: STORE_ASSETS.whySanatQc,
    },
    {
      id: 'art-3',
      title: 'راهنمای انتخاب شیرآلات صنعتی و کلاس‌های فشاری ANSI در خطوط پایپینگ بخار',
      category: 'شیرآلات و خطوط پایپینگ',
      categorySlug: 'piping',
      excerpt:
        'مقایسه عملکرد شیرهای پروانه‌ای، کروی و سماوری در برابر پدیده کاویتاسیون و ضربه قوچ در بویلرهای فشار قوی کارخانجات.',
      author: 'مهندس پریسا رستمی',
      authorRole: 'طراح ارشد خطوط پایپینگ',
      readTime: '۴ دقیقه',
      date: '۲۸ مرداد ۱۴۰۳',
      image: STORE_ASSETS.whySanatDirectFactory,
    },
    {
      id: 'art-4',
      title: 'استراتژی نگهداری و تعمیرات پیشگیرانه (PM) و کاهش توقفات خط تولید',
      category: 'مدیریت نگهداشت (PM)',
      categorySlug: 'maintenance',
      excerpt:
        'مدیریت هوشمند دپوی قطعات مصرفی استراتژیک، محاسبه شاخص MTBF و کاهش هزینه توقفات اضطراری ماشین‌آلات صنعتی.',
      author: 'مهندس کامران راد',
      authorRole: 'مشاور ارشد نگهداری و لجستیک',
      readTime: '۶ دقیقه',
      date: '۱۴ مرداد ۱۴۰۳',
      image: STORE_ASSETS.whySanatExpressDelivery,
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesCat = activeCategory === 'all' || article.categorySlug === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredArticle = filteredArticles.find((a) => a.featured) || filteredArticles[0];
  const secondaryArticles = filteredArticles.filter((a) => a.id !== featuredArticle?.id);

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 border-b border-slate-200/80 overflow-hidden" dir="rtl">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#12203c08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* 1. EDITORIAL HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-3 text-right max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#E06518]">
              <span className="w-8 h-0.5 bg-[#E06518] rounded-full" />
              <span>دانشنامه مهندسی و مرجع فنی خطوط تولید</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-black leading-[1.25] tracking-tight text-[#12203C]">
              دانشنامه و مقالات تخصصی{' '}
              <span className="text-[#E06518]">صنعت‌پیش</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              مجموعه‌ای از مقالات، راهنماهای انتخاب قطعه، استانداردهای بین‌المللی متالوژی و تجارب عملی مهندسین در خطوط تولید بزرگ کشور.
            </p>
          </div>

          {/* Search in Articles Input */}
          <div className="w-full lg:w-72 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو در موضوعات دانشنامه..."
              className="w-full h-11 pr-10 pl-4 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#E06518] focus:ring-2 focus:ring-[#E06518]/10 transition-all shadow-2xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* 2. CATEGORY FILTER TABS (Clean Segmented Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#12203C] text-white shadow-sm'
                    : 'bg-white border border-slate-200/90 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3. ASYMMETRIC BENTO EDITORIAL ARTICLE GRID */}
        {filteredArticles.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-3xl border border-slate-200/90 space-y-3">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
            <div className="text-sm font-bold text-slate-700">مقاله‌ای با این عبارت یافت نشد.</div>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#E06518] hover:underline"
            >
              مشاهده تمام مقالات دانشنامه
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* FEATURED MARQUEE ARTICLE (7 COLS) */}
            {featuredArticle && (
              <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 hover:border-[#E06518] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group">
                {/* Visual Image Header */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#E06518] text-white text-[11px] font-bold shadow-md">
                      {featuredArticle.category}
                    </span>
                    {featuredArticle.featured && (
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#12203C] text-[10px] font-bold">
                        مقاله برگزیده
                      </span>
                    )}
                  </div>

                  {/* Bottom Meta on Image */}
                  <div className="absolute bottom-4 right-4 left-4 flex items-center justify-between text-xs text-slate-200">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-orange-400" />
                      <span className="font-medium">{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-orange-400" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between text-right">
                  <div className="space-y-2.5">
                    <div className="text-[11px] text-slate-400 font-mono font-medium">
                      تاریخ انتشار: {featuredArticle.date}
                    </div>
                    <h3 className="text-lg sm:text-2xl font-black text-[#12203C] leading-snug group-hover:text-[#E06518] transition-colors">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs text-slate-400">
                      تأییدیه مهندسی: <span className="font-bold text-slate-700">{featuredArticle.authorRole}</span>
                    </div>
                    <Link
                      to="/catalog"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#E06518] group-hover:translate-x-[-4px] transition-transform"
                    >
                      <span>مطالعه مقاله کامل</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* 3 SECONDARY ARTICLES COLUMN (5 COLS) */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 justify-between">
              {secondaryArticles.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#E06518] p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center gap-4 group cursor-pointer"
                >
                  {/* Thumbnail Image */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Article Summary */}
                  <div className="flex-1 space-y-1.5 text-right min-w-0">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-[#E06518]">
                      <span>{item.category}</span>
                      <span className="text-slate-300">·</span>
                      <span className="text-slate-400 font-mono">{item.readTime}</span>
                    </div>

                    <h4 className="text-xs sm:text-[13px] font-bold text-[#12203C] line-clamp-2 leading-snug group-hover:text-[#E06518] transition-colors">
                      {item.title}
                    </h4>

                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                      <span>{item.author}</span>
                      <span className="font-mono">{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Bottom Quick Hub Link */}
              <div className="p-4 rounded-2xl bg-white border border-dashed border-slate-300 text-center space-y-1.5">
                <div className="text-xs font-bold text-[#12203C]">به دنبال راهنمای قطعه یا کاتالوگ خاصی هستید؟</div>
                <Link
                  to="/catalog"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E06518] hover:underline"
                >
                  <span>ورود به آرشیو جامع کاتالوگ‌ها و مقالات</span>
                  <ArrowLeft className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
