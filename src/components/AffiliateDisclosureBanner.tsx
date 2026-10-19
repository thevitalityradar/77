import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface AffiliateDisclosureBannerProps {
  className?: string;
}

export const AffiliateDisclosureBanner: React.FC<AffiliateDisclosureBannerProps> = ({
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border-t border-stone-200 pt-4 pb-2 text-[11px] sm:text-xs text-stone-500 leading-relaxed ${className}`}
      role="region"
      aria-label="Commercial Affiliate Disclosure"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
        <p className="text-stone-500">
          <span className="font-medium text-stone-700">Commercial Disclosure: </span>
          {SITE_CONFIG.affiliateDisclosureText}
        </p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-1 font-medium text-stone-600 hover:text-stone-900 underline underline-offset-2 shrink-0 self-start sm:self-auto cursor-pointer"
        >
          <span>{isOpen ? 'Hide Policy Details' : 'Editorial Independence'}</span>
          {isOpen ? <ChevronUp className="w-3 h-3 text-stone-400" /> : <ChevronDown className="w-3 h-3 text-stone-400" />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-3 p-3 bg-stone-50/80 border border-stone-200/70 text-[11px] text-stone-600 space-y-1.5 transition-all">
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-stone-500 shrink-0 mt-0.5" />
            <p>
              <strong className="text-stone-800">Zero Commission Bias:</strong> Product selections, laboratory test analyses, and rankings are governed solely by verified clinical trials, independent certificates of analysis, and transparent pricing. 77 Review writers and medical reviewers receive zero commission-based bonuses.
            </p>
          </div>
          <p className="pl-5 text-stone-500">
            We partner with verified affiliate networks (including ClickBank, ShareASale, and BuyGoods) and direct merchants. Products containing unverified ingredients or making unsupported medical claims are rejected regardless of commercial compensation.
          </p>
        </div>
      )}
    </div>
  );
};
