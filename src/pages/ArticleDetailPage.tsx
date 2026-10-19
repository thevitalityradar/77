import React from 'react';
import { ArrowLeft, Clock, Calendar, ShieldCheck, UserCheck, Share2, BookOpen, ExternalLink } from 'lucide-react';
import { ArticleRecord, ProductRecord } from '../types';
import { getAuthorById, getReviewerById } from '../data/authors';
import { getProductById } from '../data/products';
import { ARTICLES } from '../data/articles';
import { EvidenceBadge } from '../components/EvidenceBadge';
import { AffiliateDisclosureBanner } from '../components/AffiliateDisclosureBanner';
import { MedicalDisclaimerBox } from '../components/MedicalDisclaimerBox';
import { ResearchTrailTable } from '../components/ResearchTrailTable';
import { ProductCard } from '../components/ProductCard';

interface ArticleDetailPageProps {
  article: ArticleRecord;
  onNavigate: (path: string) => void;
  onOpenComplianceAudit: (product: ProductRecord) => void;
  onOpenGovernance?: () => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  article,
  onNavigate,
  onOpenComplianceAudit,
  onOpenGovernance
}) => {
  const author = getAuthorById(article.authorId);
  const reviewer = getReviewerById(article.reviewerId);
  const relatedProducts = article.relatedProductIds.map(id => getProductById(id)).filter(Boolean) as ProductRecord[];
  const relatedArticles = article.relatedArticleIds.map(id => ARTICLES.find(a => a.id === id)).filter(Boolean) as ArticleRecord[];

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between border-b border-stone-200 pb-4">
        <button
          onClick={() => onNavigate(`/category/${article.category}`)}
          className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Category Archive</span>
        </button>

        <div className="flex items-center gap-2">
          {onOpenGovernance && (
            <button
              onClick={onOpenGovernance}
              className="text-xs text-stone-500 hover:text-emerald-800 underline underline-offset-2 inline-flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Audit Review Status</span>
            </button>
          )}
        </div>
      </div>

      {/* Article Header & Typography */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-semibold">
            {article.category.replace('-', ' ')}
          </span>
          <span aria-hidden="true" className="text-stone-300">/</span>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
            {article.articleType.replace('_', ' ')}
          </span>
          <span aria-hidden="true" className="text-stone-300">/</span>
          <EvidenceBadge grade={article.evidenceGrade} />
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 leading-tight tracking-tight">
          {article.title}
        </h1>

        <p className="text-lg sm:text-xl text-stone-600 font-serif leading-relaxed italic border-l-2 border-stone-300 pl-4 py-1">
          {article.subtitle}
        </p>

        {/* Author & Medical Reviewer Credential Lockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 bg-stone-50 border border-stone-200 text-xs">
          {/* Author */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-stone-200 shrink-0 border border-stone-300">
              <img
                src={author.avatarUrl}
                alt={author.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[11px] uppercase font-mono tracking-wider text-stone-400 block">
                Written By
              </span>
              <strong className="text-stone-900 text-sm block font-semibold">
                {author.name}
              </strong>
              <p className="text-stone-600 leading-tight mt-0.5">{author.credentials}</p>
            </div>
          </div>

          {/* Medical Reviewer */}
          {reviewer ? (
            <div className="flex items-start gap-3 border-t md:border-t-0 md:border-l border-stone-200 pt-3 md:pt-0 md:pl-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-stone-200 shrink-0 border border-stone-300">
                <img
                  src={reviewer.avatarUrl}
                  alt={reviewer.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[11px] uppercase font-mono tracking-wider text-emerald-800 block font-semibold flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Clinical Medical Review</span>
                </span>
                <strong className="text-stone-900 text-sm block font-semibold">
                  {reviewer.name}
                </strong>
                <p className="text-stone-600 leading-tight mt-0.5">
                  {reviewer.specialty} · {reviewer.institution}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-xs text-stone-500 self-center">
              General editorial review conducted under 77 Review evidence guidelines.
            </div>
          )}
        </div>

        {/* Date and Reading Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 font-mono border-y border-stone-100 py-3">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-stone-400" />
            <span>Published: {article.publishDate}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="text-stone-800 font-medium">
            Substantively Checked: {article.lastUpdatedDate}
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-stone-400" />
            <span>{article.readingTimeMinutes} min clinical read</span>
          </span>
        </div>
      </header>

      {/* Featured Visual */}
      <div className="relative aspect-[16/9] bg-stone-100 overflow-hidden border border-stone-200">
        <img
          src={article.heroImageUrl}
          alt={article.title}
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
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 right-3 text-[10px] text-white/90 bg-black/60 px-2 py-0.5 backdrop-blur-xs font-mono">
          Fig. 1 — Clinical formulation & laboratory analytical setting
        </div>
      </div>

      {/* Direct Answer Box (Answers Search Intent Immediately) */}
      <div className="bg-emerald-50/70 border border-emerald-200 p-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-900">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Executive Clinical Answer (Key Findings):</span>
        </div>
        <p className="text-sm sm:text-base font-serif text-emerald-950 leading-relaxed">
          {article.conciseSummaryAnswer}
        </p>
      </div>

      {/* Table of Contents */}
      <nav className="p-5 border border-stone-200 bg-stone-50/50 space-y-2 text-xs" aria-label="Table of Contents">
        <span className="font-mono font-semibold uppercase tracking-wider text-stone-500 block">
          Article Table of Contents
        </span>
        <ol className="space-y-1.5 pl-4 list-decimal text-stone-700 font-medium">
          {article.sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="hover:text-emerald-800 hover:underline transition-colors"
              >
                {section.heading}
              </a>
            </li>
          ))}
          <li>
            <a href="#documented-research-trail" className="hover:text-emerald-800 hover:underline">
              Documented Research Trail & Primary Evidence ({article.citations.length} Studies)
            </a>
          </li>
        </ol>
      </nav>

      {/* Editorial Body Reading Experience with Drop Cap */}
      <div className="space-y-12">
        {article.sections.map((section, idx) => (
          <section key={section.id} id={section.id} className="scroll-mt-20 space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2">
              {section.heading}
            </h2>

            <div
              className={`editorial-prose text-stone-800 leading-loose ${
                idx === 0
                  ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900'
                  : ''
              }`}
            >
              {section.content.split('\n\n').map((para, pIdx) => (
                <p key={pIdx} className="whitespace-pre-line">
                  {para}
                </p>
              ))}
            </div>

            {/* Key Takeaways Box */}
            {section.keyTakeaways && (
              <div className="p-4 bg-stone-50 border-l-2 border-emerald-800 text-xs space-y-1 text-stone-700">
                <span className="font-semibold text-stone-900 font-mono uppercase tracking-wider block text-[11px]">
                  Clinical Takeaway:
                </span>
                <ul className="list-disc pl-4 space-y-1">
                  {section.keyTakeaways.map((point, kIdx) => (
                    <li key={kIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Research Trail Table */}
      <div id="documented-research-trail">
        <ResearchTrailTable
          citations={article.citations}
          title={`Documented Research Trail for "${article.title}"`}
        />
      </div>

      {/* Medical Boundary Disclaimer */}
      <MedicalDisclaimerBox />

      {/* Discreet Commercial Affiliate Disclosure at Bottom */}
      {article.hasAffiliateLinks && (
        <AffiliateDisclosureBanner className="mt-2" />
      )}

      {/* Related Commercial Product Reviews */}
      {relatedProducts.length > 0 && (
        <section className="pt-10 border-t border-stone-200 space-y-6">
          <div className="border-b border-stone-200 pb-3 flex items-center justify-between">
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Evaluated Products Mentioned in this Study
            </h3>
            <span className="text-xs text-stone-500 font-mono">
              Independent Editorial Scorecards
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onNavigateToReview={(slug) => onNavigate(`/review/${slug}`)}
                onOpenComplianceAudit={onOpenComplianceAudit}
              />
            ))}
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="pt-10 border-t border-stone-200 space-y-4">
          <h3 className="text-lg font-serif font-bold text-stone-900">
            Further Clinical Investigations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.map(rel => (
              <div
                key={rel.id}
                className="p-4 border border-stone-200 bg-white hover:border-stone-400 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span>{rel.readingTimeMinutes} min</span>
                  <EvidenceBadge grade={rel.evidenceGrade} size="sm" />
                </div>
                <h4 className="text-sm font-semibold text-stone-900">
                  <button
                    onClick={() => onNavigate(`/article/${rel.slug}`)}
                    className="text-left hover:text-emerald-800"
                  >
                    {rel.title}
                  </button>
                </h4>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
