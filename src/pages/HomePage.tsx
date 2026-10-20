import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Microscope,
  Award,
  CheckCircle2,
  ChevronRight,
  FileText,
  ExternalLink,
  RotateCcw,
  Star,
  BookOpen,
  Layers
} from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { INGREDIENTS_DATABASE } from '../data/ingredients';
import { ProductCard } from '../components/ProductCard';
import { AffiliateDisclosureBanner } from '../components/AffiliateDisclosureBanner';
import { EvidenceBadge } from '../components/EvidenceBadge';
import { getAuthorById, getReviewerById } from '../data/authors';
import { ProductRecord } from '../types';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenComplianceAudit: (product: ProductRecord) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenComplianceAudit
}) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const leadArticle = ARTICLES[0];
  const featuredProduct = PRODUCTS[selectedProductIndex] || PRODUCTS[0];
  const leadAuthor = getAuthorById(leadArticle.authorId);
  const leadReviewer = getReviewerById(leadArticle.reviewerId);

  const affiliateLink = featuredProduct.affiliateUrl;

  return (
    <div className="space-y-16 sm:space-y-20 pb-12 pt-6">

      {/* ========================================================= */}
      {/* 1. CURATORIAL HEADER & EDITORIAL RIBBON */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-stone-200 pb-4 mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-semibold block mb-1">
              Independent Scientific Health Publishing · Vol. 2026
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              77 Review – Evidence-Aware Health, Fitness &amp; Supplement Reviews
            </h1>
            <p className="text-sm sm:text-base text-stone-600 font-serif italic mt-1">
              Evidence Over Marketing: Independent Clinical Investigations, Ingredient Benchmarks &amp; Buying Guides
            </p>
          </div>
          <div className="text-xs text-stone-500 font-mono flex items-center gap-3">
            <span>Clinical Verification Desk</span>
            <span aria-hidden="true">·</span>
            <span className="text-stone-700 font-medium">Published & Updated for US Consumers</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. LEAD STORY + PRODUCT SPOTLIGHT */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Lead Clinical Investigation (7 Cols) */}
          <article className="lg:col-span-7 flex flex-col justify-between border border-stone-200 bg-white p-6 sm:p-8">
            <div className="space-y-4">
              <div className="relative aspect-[16/9] overflow-hidden bg-stone-100 border border-stone-100">
                <img
                  src={leadArticle.heroImageUrl}
                  alt={leadArticle.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.dataset.retried) {
                      img.dataset.retried = '1';
                      img.src = '/images/hero_editorial_health_1791735480668.jpg';
                    } else if (img.dataset.retried === '1') {
                      img.dataset.retried = '2';
                      img.src = 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80';
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
                <div className="absolute top-3 left-3">
                  <EvidenceBadge grade={leadArticle.evidenceGrade} />
                </div>
              </div>

              {/* Unboxed Metadata */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 pt-2">
                <span className="font-semibold text-emerald-800 uppercase tracking-wider font-mono">
                  Clinical Investigation
                </span>
                <span aria-hidden="true">·</span>
                <span>By {leadAuthor.name}</span>
                <span aria-hidden="true">·</span>
                <span>Reviewed by {leadReviewer?.name}</span>
                <span aria-hidden="true">·</span>
                <span>{leadArticle.readingTimeMinutes} min read</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 leading-tight">
                <a
                  href={`/article/${leadArticle.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/article/${leadArticle.slug}`);
                  }}
                  className="text-left hover:text-emerald-800 transition-colors block"
                >
                  {leadArticle.title}
                </a>
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {leadArticle.subtitle}
              </p>

              {/* Direct Answer Box */}
              <div className="bg-stone-50 border-l-2 border-emerald-700 p-4 text-xs text-stone-700 space-y-1">
                <span className="font-semibold text-stone-900 uppercase tracking-wide font-mono block text-[11px]">
                  Clinical Consensus Answer:
                </span>
                <p className="leading-relaxed">
                  {leadArticle.conciseSummaryAnswer}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-100 mt-6 flex items-center justify-between">
              <a
                href={`/article/${leadArticle.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/article/${leadArticle.slug}`);
                }}
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 hover:text-emerald-950 transition-colors group"
              >
                <span>Read Full Research Investigation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <span className="text-xs text-stone-400 font-mono">
                {leadArticle.citations.length} Verified Citations
              </span>
            </div>
          </article>

          {/* Right: Featured Product Review Box (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between border-2 border-emerald-900/15 bg-white p-6 sm:p-7 space-y-6">
            <div className="space-y-4">
              {/* Product Switcher Tabs */}
              <div className="flex flex-wrap border-b border-stone-200 gap-1 pb-2">
                {PRODUCTS.map((prod, idx) => (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedProductIndex(idx)}
                    className={`px-3 py-1.5 text-xs font-mono font-medium transition-colors cursor-pointer ${
                      selectedProductIndex === idx
                        ? 'bg-emerald-800 text-white font-semibold shadow-xs'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {prod.id === 'prod-phytomem-one-memory'
                      ? '1. PhytoMemone'
                      : prod.id === 'prod-prodentim-oral-health'
                      ? '2. ProDentim'
                      : prod.id === 'prod-audisoothe-ear-support'
                      ? '3. AudiSoothe'
                      : prod.id === 'prod-prostavive-prostate-vitality'
                      ? '4. ProstaVive'
                      : '5. Neuro Serge'}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between gap-2 border-b border-stone-100 pb-3">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-800 font-bold block">
                    Featured Product Review
                  </span>
                  <span className="text-xs text-stone-500 font-mono">
                    Editorial Score: {featuredProduct.rating.overall} / 10
                  </span>
                </div>
                <div className="bg-emerald-800 text-white text-[11px] font-semibold px-2.5 py-0.5 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current text-amber-300" />
                  <span>{featuredProduct.winnerBadge || 'Top Pick'}</span>
                </div>
              </div>

              <div className="aspect-[16/10] bg-stone-50 border border-stone-100 overflow-hidden flex items-center justify-center p-2">
                <img
                  src={featuredProduct.imageUrl}
                  alt={featuredProduct.name}
                  referrerPolicy="no-referrer"
                  className="max-h-full w-auto object-contain"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  <a
                    href={`/review/${featuredProduct.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/review/${featuredProduct.slug}`);
                    }}
                    className="text-left hover:text-emerald-800 transition-colors block"
                  >
                    {featuredProduct.name}
                  </a>
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {featuredProduct.shortDescription}
                </p>
              </div>

              {/* Quick Specs List */}
              <div className="grid grid-cols-2 gap-2 text-[11px] bg-stone-50 p-3 border border-stone-200">
                <div>
                  <span className="text-stone-400 block font-mono">Form:</span>
                  <strong className="text-stone-800">
                    {featuredProduct.id === 'prod-audisoothe-ear-support'
                      ? 'Sublingual Drops'
                      : featuredProduct.id === 'prod-prodentim-oral-health'
                      ? 'Chewable Tablet'
                      : featuredProduct.id === 'prod-prostavive-prostate-vitality'
                      ? 'Water-Soluble Powder'
                      : 'Oral Capsules'}
                  </strong>
                </div>
                <div>
                  <span className="text-stone-400 block font-mono">Purity:</span>
                  <strong className="text-stone-800">100% Stimulant-Free</strong>
                </div>
                <div>
                  <span className="text-stone-400 block font-mono">Standard:</span>
                  <strong className="text-stone-800">US cGMP / FDA Reg.</strong>
                </div>
                <div>
                  <span className="text-stone-400 block font-mono">Guarantee:</span>
                  <strong className="text-emerald-800">{featuredProduct.guaranteeDays}-Day Money-Back</strong>
                </div>
              </div>
            </div>

            {/* Actions: View Review + Official Store CTA */}
            <div className="space-y-2.5 pt-4 border-t border-stone-100">
              <a
                href={affiliateLink}
                target="_blank"
                rel="sponsored nofollow noopener"
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Check Current Price on Official Store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`/review/${featuredProduct.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/review/${featuredProduct.slug}`);
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 transition-colors text-center block cursor-pointer"
              >
                Read Full In-Depth Review &amp; Clinical Audit →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. OPERATIONAL METHODOLOGY & VERIFICATION PILLARS */}
      {/* ========================================================= */}
      <section className="bg-stone-100/80 border-y border-stone-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-stone-700">
            <div className="flex items-start gap-3">
              <Microscope className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900 block font-semibold text-sm mb-1">
                  PubMed & NIH Rigor
                </strong>
                <p className="text-stone-600 leading-relaxed">
                  Every active botanical is evaluated against peer-reviewed systematic reviews and double-blind human RCTs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900 block font-semibold text-sm mb-1">
                  Zero Disease Cure Claims
                </strong>
                <p className="text-stone-600 leading-relaxed">
                  Strict compliance with FDA DSHEA and FTC guidelines. We never promote supplements as cures for Alzheimer’s or dementia.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900 block font-semibold text-sm mb-1">
                  Clear Methodology
                </strong>
                <p className="text-stone-600 leading-relaxed">
                  We distinguish between firsthand laboratory assay testing and clinical desk research synthesis.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900 block font-semibold text-sm mb-1">
                  Independent Scorecards
                </strong>
                <p className="text-stone-600 leading-relaxed">
                  Commercial affiliate relationships never influence ranking scores, clinical cautions, or editorial verifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. COMPREHENSIVE PRODUCT REVIEW SHOWCASE */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-200 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold block mb-1">
              Verified Product Evaluations
            </span>
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              Published Product Reviews & Scorecards
            </h2>
          </div>
          <span className="text-xs text-stone-500 font-mono">
            {PRODUCTS.length} Verified Independent Reviews
          </span>
        </div>

        {/* Product Cards Grid - 3 Verified Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCTS.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              featured={true}
              onNavigateToReview={(slug) => onNavigate(`/review/${slug}`)}
              onOpenComplianceAudit={onOpenComplianceAudit}
            />
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4.5 EDITORIAL RESEARCH GUIDES & CLINICAL INVESTIGATIONS */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-200 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold block mb-1">
              Peer-Reviewed Science
            </span>
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              Published Clinical Investigations &amp; Biochemical Deep Dives
            </h2>
          </div>
          <span className="text-xs text-stone-500 font-mono">
            {ARTICLES.length} Published Clinical Papers
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((art) => {
            const artAuthor = getAuthorById(art.authorId);
            return (
              <article
                key={art.id}
                className="border border-stone-200 bg-white p-5 flex flex-col justify-between hover:shadow-sm transition-shadow"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span className="font-mono text-emerald-800 uppercase tracking-wider text-[11px] font-semibold">
                      {art.category.replace('-', ' ')}
                    </span>
                    <EvidenceBadge grade={art.evidenceGrade} size="sm" />
                  </div>

                  <h3 className="text-base font-serif font-bold text-stone-900 leading-snug">
                    <a
                      href={`/article/${art.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(`/article/${art.slug}`);
                      }}
                      className="hover:text-emerald-800 transition-colors block text-left"
                    >
                      {art.title}
                    </a>
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {art.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-mono text-[11px]">
                    By {artAuthor.name}
                  </span>
                  <a
                    href={`/article/${art.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/article/${art.slug}`);
                    }}
                    className="text-emerald-800 font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Paper</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4.6 CLINICAL TAXONOMY & CATEGORY HUBS (Internal Links) */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border border-stone-200 bg-stone-100/70 p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-200 pb-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold block mb-1">
                Editorial Taxonomy
              </span>
              <h2 className="text-xl font-serif font-bold text-stone-900">
                Explore Clinical Editorial Departments
              </h2>
            </div>
            <span className="text-xs text-stone-500 font-mono">
              4 Authoritative Health Categories
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`/category/${cat.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/category/${cat.id}`);
                }}
                className="p-4 bg-white border border-stone-200 hover:border-emerald-800 transition-colors space-y-2 block"
              >
                <div className="flex items-center justify-between">
                  <strong className="text-sm font-serif font-bold text-stone-900 block">
                    {cat.shortTitle}
                  </strong>
                  <ChevronRight className="w-4 h-4 text-emerald-700" />
                </div>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
                <span className="text-[11px] font-mono text-emerald-800 font-semibold block pt-1">
                  View Department Index →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. ACTIVE INGREDIENTS EVIDENCE SPOTLIGHT */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border border-stone-200 bg-white p-6 sm:p-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold block mb-1">
                Clinical Compounds Index
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                The Science of Verified Active Botanicals &amp; Nutrients
              </h2>
              <p className="text-xs text-stone-600 mt-1">
                Explore the verified clinical evidence, tested human dosages, and target mechanisms for each active ingredient.
              </p>
            </div>
            <a
              href="/ingredients"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/ingredients');
              }}
              className="py-2.5 px-5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 transition-colors shrink-0 inline-block text-center"
            >
              Browse Complete Evidence Index
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {INGREDIENTS_DATABASE.slice(0, 3).map((ing) => (
              <div key={ing.id} className="p-4 border border-stone-200 bg-stone-50/50 space-y-2">
                <div className="flex items-center justify-between">
                  <strong className="text-sm font-semibold text-stone-900 block">
                    {ing.name}
                  </strong>
                  <EvidenceBadge grade={ing.evidenceGrade} size="sm" showLabel={false} />
                </div>
                <span className="text-[11px] font-mono text-emerald-800 block">
                  Studied Dose: {ing.clinicallyStudiedDose}
                </span>
                <p className="text-stone-600 leading-relaxed line-clamp-3">
                  {ing.provenBenefits[0]}
                </p>
                <a
                  href="/ingredients"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/ingredients');
                  }}
                  className="text-emerald-800 font-semibold hover:underline inline-flex items-center gap-1 pt-1"
                >
                  <span>Review Clinical Studies</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. DISCREET BOTTOM COMMERCIAL AFFILIATE DISCLOSURE */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <AffiliateDisclosureBanner />
      </section>
    </div>
  );
};
