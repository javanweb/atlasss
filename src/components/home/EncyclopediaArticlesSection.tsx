import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, User, Sparkles, ChevronLeft, Bookmark, FileText, ArrowUpRight } from 'lucide-react';
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

  const categories = [
    { id: 'all', label: 'همه مقالات' },
    { id: 'transmission', label: 'تسمه و انتقال قدرت' },
    { id: 'quality', label: 'کنترل کیفیت و متالوژی' },
    { id: 'piping', label: 'شیرآلات و پایپینگ صنعتی' },
    { id: 'maintenance', label: 'نگهداری و تعمیرات (PM)' },
  ];

  const articles: ArticleItem[] = [
    {
      id: 'art-1',
      title: 'راهنمای محاسبه گشتاور و انتخاب تسمه‌های صنعتی در خطوط تولید پیوسته',
      category: 'تسمه و انتقال قدرت',
      categorySlug: 'transmission',
      excerpt:
        'تحلیل استانداردهای DIN 7721 و ISO 5296، بررسی خستگی کششی کورد نخ‌های فایبرگلاس و کولار در محیط‌های حرارتی صنعتی.',
      author: 'مهندس علیرضا کیانی',
      authorRole: 'سرپرست واحد فنی',
      readTime: '۷ دقیقه',
      date: '۱۵ شهریور ۱۴۰۳',
      image: STORE_ASSETS.whySanatCadEngineering,
      featured: true,
    },
    {
      id: 'art-2',
      title: 'استانداردهای تست غیرمخرب (NDT) و متالوژی بیرینگ‌های سنگین',
      category: 'کنترل کیفیت و متالوژی',
      categorySlug: 'quality',
      excerpt:
        'روش‌های پایش ارتعاشات FFT و ترموگرافی جهت شناسایی زودهنگام سایش در یاتاقان‌های خطوط فولاد و سیمان.',
      author: 'دکتر سهراب دهقان',
      authorRole: 'متخصص متالوژی',
      readTime: '۵ دقیقه',
      date: '۰۸ شهریور ۱۴۰۳',
      image: STORE_ASSETS.whySanatQc,
    },
    {
      id: 'art-3',
      title: 'انتخاب شیرآلات صنعتی و کلاس‌های فشاری ANSI در خطوط پایپینگ بخار',
      category: 'شیرآلات و پایپینگ صنعتی',
      categorySlug: 'piping',
      excerpt:
        'بررسی عملکرد شیرهای کروی و سماوری در برابر کاویتاسیون و ضربه قوچ در بویلرهای فشار قوی کارخانجات.',
      author: 'مهندس پریسا رستمی',
      authorRole: 'طراح خطوط پایپینگ',
      readTime: '۴ دقیقه',
      date: '۲۸ مرداد ۱۴۰۳',
      image: STORE_ASSETS.whySanatDirectFactory,
    },
    {
      id: 'art-4',
      title: 'استراتژی نگهداشت پیشگیرانه (PM) جهت کاهش توقفات اضطراری خط',
      category: 'نگهداری و تعمیرات (PM)',
      categorySlug: 'maintenance',
      excerpt:
        'مدیریت هوشمند دپوی قطعات بحرانی، محاسبه شاخص MTBF و کاهش هزینه‌های استهلاک ماشین‌آلات تولیدی.',
      author: 'مهندس کامران راد',
      authorRole: 'مشاور لجستیک',
      readTime: '۶ دقیقه',
      date: '۱۴ مرداد ۱۴۰۳',
      image: STORE_ASSETS.whySanatExpressDelivery,
    },
  ];

  const filteredArticles = articles.filter((article) => {
    return activeCategory === 'all' || article.categorySlug === activeCategory;
  });

  return (
    <section className="relative w-full py-14 sm:py-20 bg-white text-slate-900 border-b border-slate-200/80 overflow-hidden" dir="rtl">
      {/* Subtle Engineered Background Technical Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#12203c08_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      {/* Main Full-Width Container */}
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 space-y-8 sm:space-y-10 relative z-10">
        
        {/* 1. EDITORIAL ASYMMETRIC HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-2.5 text-right max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-xs font-black text-[#E06518]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>دانشنامه و مرجع مهندسی خطوط تولید</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black leading-tight text-[#12203C]">
              دانشنامه و مقالات تخصصی{' '}
              <span className="text-[#E06518] relative inline-block">
                صنعت‌پیش
                <span className="absolute -bottom-1 inset-x-0 h-1 bg-[#E06518]/20 rounded-full" />
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              راهنماهای انتخاب متریال، محاسبات مهندسی مکانیک، و استانداردهای بازرسی فنی برای ارتقای بهره‌وری کارخانجات.
            </p>
          </div>

          {/* Header Action & Filter Tabs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto scrollbar-none">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#12203C] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* View All Button */}
            <Link
              to="/catalog"
              className="h-10 px-5 bg-white hover:bg-orange-50 border border-slate-200 hover:border-[#E06518] text-slate-700 hover:text-[#E06518] font-bold text-xs rounded-xl shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 group"
            >
              <span>آرشیو دانشنامه</span>
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 2. 4-COLUMN BALANCED MODERN ARTICLE CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              to="/catalog"
              className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200 hover:border-[#E06518] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                {/* Top Category Tag */}
                <div className="absolute top-3 right-3 left-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-[#12203C]/90 backdrop-blur-md border border-white/20 text-orange-400 text-[10px] font-black shadow-sm">
                    {article.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-slate-200 text-[10px] font-mono border border-white/10 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-orange-400" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                {/* Bottom Author Tag over Image */}
                <div className="absolute bottom-2.5 right-3 left-3 flex items-center justify-between text-[11px] text-slate-200 font-medium">
                  <span>{article.author}</span>
                  <span className="text-[10px] text-slate-300 font-mono">{article.date}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-right space-y-3">
                <div className="space-y-2">
                  <h3 className="text-sm sm:text-[15px] font-black text-[#12203C] leading-snug group-hover:text-[#E06518] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                {/* Bottom Read Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#E06518]">
                  <span className="text-[11px] text-slate-400 font-normal">{article.authorRole}</span>
                  <div className="flex items-center gap-1 group-hover:-translate-x-1 transition-transform">
                    <span>مطالعه مقاله</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
