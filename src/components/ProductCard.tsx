import React from 'react';
import { ExternalLink, Check, X, ShieldAlert, Award } from 'lucide-react';
import { ProductRecord } from '../types';

interface ProductCardProps {
  product: ProductRecord;
  onNavigateToReview?: (slug: string) => void;
  onOpenComplianceAudit?: (product: ProductRecord) => void;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onNavigateToReview,
  onOpenComplianceAudit,
  featured = false
}) => {
  return (
    <article
      className={`border border-stone-200 bg-white transition-shadow duration-200 hover:shadow-md flex flex-col ${
        featured ? 'ring-1 ring-emerald-800/20' : ''
      }`}
    >
      {/* Visual Header / Product Image */}
      <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden border-b border-stone-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            // High-fidelity fallback container
            const target = e.currentTarget;
            target.style.display = 'none';
            if (target.parentElement) {
              target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'p-6', 'text-stone-400');
              target.parentElement.innerHTML = `<div class="text-center"><span class="block text-xs uppercase tracking-widest font-mono text-stone-500 mb-1">Product Verification</span><span class="text-sm font-serif font-medium text-stone-700">${product.name}</span></div>`;
            }
          }}
        />

        {product.winnerBadge && (
          <div className="absolute top-3 left-3 bg-stone-900/90 text-white text-xs font-medium px-2.5 py-1 tracking-tight flex items-center gap-1.5 backdrop-blur-xs">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>{product.winnerBadge}</span>
          </div>
        )}

        <div className="absolute top-3 right-3 bg-white/95 text-stone-900 text-xs font-mono font-bold px-2 py-1 border border-stone-200 tabular-nums">
          {product.rating.overall.toFixed(1)} / 10
        </div>
      </div>

      {/* Product Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
            <span className="font-medium text-stone-700">{product.brand}</span>
            <span aria-hidden="true">·</span>
            <span>{product.reviewMethodologyType === 'hands_on_testing' ? 'Bench Tested' : 'Clinical Desk Audit'}</span>
            <span aria-hidden="true">·</span>
            <span>Updated {product.lastVerifiedDate}</span>
          </div>

          <h3 className="text-base font-semibold text-stone-900 leading-snug tracking-tight mb-2">
            <a
              href={`/review/${product.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigateToReview?.(product.slug);
              }}
              className="text-left hover:text-emerald-800 transition-colors block"
            >
              {product.name}
            </a>
          </h3>

          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
            {product.shortDescription}
          </p>

          {/* Quick Specification Highlights */}
          <div className="bg-stone-50/80 p-3 border border-stone-100 text-xs space-y-1.5 mb-4">
            {Object.entries(product.verifiedSpecs).slice(0, 3).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center text-stone-600">
                <span className="text-stone-500">{key}:</span>
                <span className="font-medium text-stone-900 text-right">{value}</span>
              </div>
            ))}
          </div>

          {/* Pros & Cons Preview */}
          <div className="space-y-1.5 mb-4 text-xs">
            <div className="flex items-start gap-1.5 text-stone-700">
              <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{product.pros[0]}</span>
            </div>
            <div className="flex items-start gap-1.5 text-stone-600">
              <X className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{product.cons[0]}</span>
            </div>
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="pt-4 border-t border-stone-100 mt-auto">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-lg font-bold text-stone-900 font-mono tabular-nums">
                ${product.price.toFixed(2)}
              </span>
              {product.costPerServing && (
                <span className="text-xs text-stone-500 ml-1.5 font-mono">
                  (${product.costPerServing.toFixed(2)} / serving)
                </span>
              )}
            </div>
            <span className="text-xs text-stone-500">
              via {product.merchantName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`/review/${product.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigateToReview?.(product.slug);
              }}
              className="flex-1 py-2 px-3 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 transition-colors text-center block"
            >
              Full Evidence Review
            </a>
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="py-2 px-3 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 transition-colors inline-flex items-center gap-1 shrink-0"
              title="Visit official merchant store"
            >
              <span>Check Merchant</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {onOpenComplianceAudit && (
            <div className="mt-2 text-center">
              <button
                onClick={() => onOpenComplianceAudit(product)}
                className="text-[11px] text-stone-400 hover:text-stone-700 underline underline-offset-2 inline-flex items-center gap-1"
              >
                <ShieldAlert className="w-3 h-3 text-stone-400" />
                <span>Inspect Ad & Health Compliance</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
