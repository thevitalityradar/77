import React, { useState } from 'react';
import { getCategoryById, CATEGORIES } from '../data/categories';
import { ARTICLES } from '../data/articles';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { EvidenceBadge } from '../components/EvidenceBadge';
import { getAuthorById } from '../data/authors';
import { ProductCategory, ProductRecord } from '../types';
import { ArrowLeft, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { AffiliateDisclosureBanner } from '../components/AffiliateDisclosureBanner';

interface CategoryPageProps {
  categoryId: ProductCategory;
  onNavigate: (path: string) => void;
  onOpenComplianceAudit: (product: ProductRecord) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categoryId,
  onNavigate,
  onOpenComplianceAudit
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const category = getCategoryById(categoryId) || CATEGORIES[0];

  const categoryArticles = ARTICLES.filter(a => a.category === categoryId);
  const categoryProducts = PRODUCTS.filter(p => p.category === categoryId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb Back */}
      <div>
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Categories</span>
        </button>
      </div>

      {/* Category Header Hero */}
      <div className="border border-stone-200 bg-white p-6 sm:p-10 space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-emerald-800 uppercase tracking-wider">
          <span>Editorial Department</span>
          <span aria-hidden="true">·</span>
          <span>Verified Clinical Taxonomy</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
          {category.title}
        </h1>

        <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-3xl">
          {category.description}
        </p>

        {/* Editorial Scope Box */}
        <div className="bg-stone-50 border border-stone-200 p-4 text-xs text-stone-700 max-w-3xl">
          <strong className="text-stone-900 block font-semibold mb-1">
            Department Scope & Medical Boundary:
          </strong>
          <p className="leading-relaxed">
            {category.editorialScope}
          </p>
        </div>

        {/* Sub-Topics Filter Bar */}
        <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-stone-500 font-mono">Filter by Focus:</span>
          <button
            onClick={() => setSelectedTopic('all')}
            className={`px-3 py-1 font-medium border transition-colors ${
              selectedTopic === 'all'
                ? 'bg-stone-900 text-white border-stone-900'
                : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
            }`}
          >
            All Subjects
          </button>
          {category.topics.map(topic => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`px-3 py-1 font-medium border transition-colors ${
                selectedTopic === topic
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Articles in Category */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3 flex items-center justify-between">
          <h2 className="text-xl font-serif font-bold text-stone-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-800" />
            <span>Research Guides & Investigations</span>
          </h2>
          <span className="text-xs font-mono text-stone-500">
            {categoryArticles.length} Published Papers
          </span>
        </div>

        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryArticles.map(article => {
              const author = getAuthorById(article.authorId);
              return (
                <article
                  key={article.id}
                  className="border border-stone-200 bg-white p-6 flex flex-col justify-between hover:border-stone-400 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-stone-500">
                        <span>{article.readingTimeMinutes} min read</span>
                        <span aria-hidden="true" className="mx-1">·</span>
                        <span>{article.publishDate}</span>
                      </div>
                      <EvidenceBadge grade={article.evidenceGrade} size="sm" />
                    </div>

                    <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                      <button
                        onClick={() => onNavigate(`/article/${article.slug}`)}
                        className="text-left hover:text-emerald-800 transition-colors"
                      >
                        {article.title}
                      </button>
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {article.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between text-xs">
                    <span className="text-stone-500">
                      Author: <strong className="text-stone-700">{author.name}</strong>
                    </span>
                    <button
                      onClick={() => onNavigate(`/article/${article.slug}`)}
                      className="text-emerald-800 font-semibold hover:underline"
                    >
                      Read Full Article →
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="p-8 border border-stone-200 bg-white text-center text-xs text-stone-500 space-y-2">
            <p>Additional clinical investigations in this department are currently undergoing peer source verification.</p>
            <p className="font-mono text-stone-400">Strict zero-thin-content publishing policy enforced.</p>
          </div>
        )}
      </section>

      {/* Verified Products in Category */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3 flex items-center justify-between">
          <h2 className="text-xl font-serif font-bold text-stone-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-800" />
            <span>Tested Products & Lab Benchmarks in {category.shortTitle}</span>
          </h2>
          <span className="text-xs font-mono text-stone-500">
            {categoryProducts.length} Verified Products
          </span>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onNavigateToReview={(slug) => onNavigate(`/review/${slug}`)}
                onOpenComplianceAudit={onOpenComplianceAudit}
              />
            ))}
          </div>
        ) : (
          <div className="p-8 border border-stone-200 bg-white text-center text-xs text-stone-500 space-y-2">
            <p>Product records for this sub-niche are currently undergoing laboratory CoA audit.</p>
            <p className="font-mono text-stone-400">Only authorized, third-party screened items are published.</p>
          </div>
        )}
      </section>

      {/* Discreet Commercial Affiliate Disclosure at Bottom */}
      <AffiliateDisclosureBanner className="mt-4" />
    </div>
  );
};
