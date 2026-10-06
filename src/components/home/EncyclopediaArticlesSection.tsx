import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, User, Search, Sparkles, FileText, ChevronLeft, ArrowUpRight } from 'lucide-react';
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
    { id: 'all', label: 'همه مقالات' },
    { id: 'transmission', label: 'انتقال قدرت و تسمه‌ها' },
    { id: 'quality', label: 'کنترل کیفیت و متالوژی' },
    { id: 'piping', label: 'شیرآلات و پایپینگ' },
    { id: 'maintenance', label: 'نگهداشت پیشگیرانه (PM)' },
  ];

  const articles: ArticleItem[] = [
    {
      id: 'art-1',
      title: 'راهنمای جامع محاسبه گشتاور و انتخاب تسمه‌های تایمینگ در خطوط پیوسته',
      category: 'انتقال قدرت و تسمه‌ها',
      categorySlug: 'transmission',
      excerpt:
        'بررسی فرمول‌های استاندارد DIN 7721 و ISO 5296، تحلیل خستگی کششی کورد نخ‌های فایبرگلاس و کولار در دماهای بالا.',
      author: 'مهندس علیرضا کیانی',
      authorRole: 'سرپرست واحد فنی',
      readTime: '۷ دقیقه مطالعه',
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
        'تکنیک‌های پایش عیوب اولیه بلبرینگ‌ها با روش آنالیز ارتعاشات FFT و تصویربرداری ترموگرافی در صنایع سنگین.',
      author: 'دکتر سهراب دهقان',
      authorRole: 'متخصص متالوژی',
      readTime: '۵ دقیقه مطالعه',
      date: '۰۸ شهریور ۱۴۰۳',
      image: STORE_ASSETS.whySanatQc,
    },
    {
      id: 'art-3',
      title: 'راهنمای انتخاب شیرآلات صنعتی و کلاس‌های فشاری ANSI در خطوط پایپینگ بخار',
      category: 'شیرآلات و پایپینگ',
      categorySlug: 'piping',
      excerpt:
        'مقایسه عملکرد شیرهای پروانه‌ای، کروی و سماوری در برابر پدیده کاویتاسیون و ضربه قوچ در بویلرهای فشار قوی.',
      author: 'مهندس پریسا رستمی',
      authorRole: 'طراح ارشد پایپینگ',
      readTime: '۴ دقیقه مطالعه',
      date: '۲۸ مرداد ۱۴۰۳',
      image: STORE_ASSETS.whySanatDirectFactory,
    },
    {
      id: 'art-4',
      title: 'استراتژی نگهداری و تعمیرات پیشگیرانه (PM) و کاهش توقفات خط تولید',
      category: 'نگهداشت پیشگیرانه (PM)',
      categorySlug: 'maintenance',
      excerpt:
        'مدیریت هوشمند دپوی قطعات مصرفی استراتژیک، محاسبه شاخص MTBF و کاهش هزینه‌های توقف اضطراری کارخانجات.',
      author: 'مهندس کامران راد',
      authorRole: 'مشاور ارشد نگهداری',
      readTime: '۶ دقیقه مطالعه',
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

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#F8FAFC] text-slate-900 border-y border-slate-200/90 overflow-hidden" dir="rtl">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(#12203c08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 space-y-8 sm:space-y-12 relative z-10">
        
        {/* 1. EDITORIAL HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-2.5 text-right max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#E06518]">
              <FileText className="w-3.5 h-3.5" />
              <span>دانشنامه فنی و مقالات تخصصی مهندسی</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black leading-[1.25] tracking-tight text-[#12203C]">
              دانشنامه و مقالات تخصصی{' '}
              <span className="text-[#E06518] relative inline-block">
                صنعت‌پیش
                <span className="absolute -bottom-1 inset-x-0 h-1 bg-[#E06518]/20 rounded-full" />
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              راهنماهای تخصصی انتخاب قطعات، محاسبات مهندسی مکانیک، استانداردهای بین‌المللی متالوژی و تجارب عملی متخصصین خطوط تولید.
            </p>
          </div>

          {/* Search & Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجو در مقالات و راهنماها..."
                className="w-full h-11 pr-10 pl-4 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#E06518] focus:ring-2 focus:ring-[#E06518]/10 transition-all shadow-xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
            </div>

            <Link
              to="/catalog"
              className="h-11 px-5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#E06518] text-[#12203C] hover:text-[#E06518] font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>مشاهده همه مقالات</span>
              <ArrowLeft className="w-3.5 h-3.5 text-[#E06518]" />
            </Link>
          </div>
        </div>

        {/* 2. CATEGORY PILLS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
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
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3. FOUR-CARD SYMMETRIC ARTICLE GRID (Edge-to-Edge aligned) */}
        {filteredArticles.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
            <div className="text-sm font-bold text-slate-700">مقاله‌ای با این عبارت یافت نشد.</div>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#E06518] hover:underline cursor-pointer"
            >
              مشاهده تمام مقالات دانشنامه
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200 hover:border-[#E06518] shadow-sm hover:shadow-xl transition-all duration-400 overflow-hidden flex flex-col justify-between"
              >
                {/* Image Showcase */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3 right-3 left-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#12203C]/90 backdrop-blur-md border border-white/20 text-orange-400 text-[10px] font-bold shadow-xs">
                      {article.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono tabular-nums">
                      {article.readTime}
                    </span>
                  </div>

                  {/* Bottom Meta on Image */}
                  <div className="absolute bottom-2.5 right-3 left-3 flex items-center justify-between text-[11px] text-slate-200">
                    <span className="font-medium truncate">{article.author}</span>
                    <span className="font-mono text-[10px] text-slate-300">{article.date}</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 text-right">
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-black text-[#12203C] leading-snug line-clamp-2 group-hover:text-[#E06518] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-medium">
                      {article.authorRole}
                    </span>
                    <Link
                      to="/catalog"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E06518] group-hover:-translate-x-1 transition-transform cursor-pointer"
                    >
                      <span>مطالعه مقاله</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
