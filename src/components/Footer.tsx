import React from 'react';
import { BrandLogo } from './BrandLogo';
import { SITE_CONFIG } from '../data/siteConfig';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-stone-800">
          
          {/* Brand & Editorial Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white inline-block p-2 rounded-xs">
              <BrandLogo size="md" />
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-md">
              77 Review is an independent health, fitness, and dietary supplement editorial publication. We conduct deep-dive clinical research syntheses, ingredient purity audits, and transparent consumer product evaluations without commercial bias.
            </p>
            <p className="text-xs text-stone-500">
              Primary Market: United States · Written in American English · Governed by peer-reviewed evidence.
            </p>
          </div>

          {/* Editorial Categories */}
          {/* Editorial Sections */}
          {/* Column 1: Editorial Reviews (6 Products) */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono text-emerald-400 mb-3 font-semibold">
              Clinical Reviews
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/review/phytomem-one-brain-memory-review"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/review/phytomem-one-brain-memory-review');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  PhytoMemone Review (2026)
                </a>
              </li>
              <li>
                <a
                  href="/review/prodentim-advanced-oral-probiotics-review"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/review/prodentim-advanced-oral-probiotics-review');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  ProDentim Review (2026)
                </a>
              </li>
              <li>
                <a
                  href="/review/audisoothe-ear-health-tinnitus-drops-review"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/review/audisoothe-ear-health-tinnitus-drops-review');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  AudiSoothe Review (2026)
                </a>
              </li>
              <li>
                <a
                  href="/review/prostavive-prostate-health-vitality-review"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/review/prostavive-prostate-health-vitality-review');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  ProstaVive Review (2026)
                </a>
              </li>
              <li>
                <a
                  href="/review/neuroserge-memory-focus-brain-health-review"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/review/neuroserge-memory-focus-brain-health-review');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  Neuro Serge Review (2026)
                </a>
              </li>
              <li>
                <a
                  href="/review/igenics-vision-breakthrough-eye-health-review"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/review/igenics-vision-breakthrough-eye-health-review');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  iGenics Review (2026)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Clinical Research Guides (6 Articles) */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono text-emerald-400 mb-3 font-semibold">
              Research Guides
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/article/brain-glucose-metabolism-saffron-berberine-cognitive-health"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/article/brain-glucose-metabolism-saffron-berberine-cognitive-health');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  Brain Glucose &amp; Saffron
                </a>
              </li>
              <li>
                <a
                  href="/article/oral-microbiome-probiotics-periodontal-health-science"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/article/oral-microbiome-probiotics-periodontal-health-science');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  Oral Microbiome Science
                </a>
              </li>
              <li>
                <a
                  href="/article/auditory-nerve-hyperactivity-cochlear-microcirculation-tinnitus"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/article/auditory-nerve-hyperactivity-cochlear-microcirculation-tinnitus');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  Auditory Nerve &amp; Tinnitus
                </a>
              </li>
              <li>
                <a
                  href="/article/prostate-cellular-health-nocturia-urinary-flow-science"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/article/prostate-cellular-health-nocturia-urinary-flow-science');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  Prostate Cellular Health
                </a>
              </li>
              <li>
                <a
                  href="/article/neuro-immune-microglia-synaptic-plasticity-science"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/article/neuro-immune-microglia-synaptic-plasticity-science');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  Neuro-Immune &amp; Microglia
                </a>
              </li>
              <li>
                <a
                  href="/article/macular-carotenoids-retinal-photoreceptor-science"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/article/macular-carotenoids-retinal-photoreceptor-science');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  Macular Carotenoids &amp; Retina
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Category Hubs & Interactive Tools */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono text-emerald-400 mb-3 font-semibold">
              Departments &amp; Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/category/supplements-nutrition"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/category/supplements-nutrition');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  Supplements &amp; Nutrition
                </a>
              </li>
              <li>
                <a
                  href="/category/health-wellness"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/category/health-wellness');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  Health &amp; Wellness Hub
                </a>
              </li>
              <li>
                <a
                  href="/category/fitness-sports"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/category/fitness-sports');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  Fitness &amp; Sports Science
                </a>
              </li>
              <li>
                <a
                  href="/category/product-reviews-comparisons"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/category/product-reviews-comparisons');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  Product Review Matrix
                </a>
              </li>
              <li className="pt-1 border-t border-stone-800">
                <a
                  href="/comparisons"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/comparisons');
                  }}
                  className="hover:text-white transition-colors text-emerald-400 font-semibold block"
                >
                  Formulation Comparison Matrix
                </a>
              </li>
              <li>
                <a
                  href="/ingredients"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/ingredients');
                  }}
                  className="hover:text-white transition-colors text-emerald-400 font-semibold block"
                >
                  Active Ingredients Database
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Institutional Governance & Trust */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono text-emerald-400 mb-3 font-semibold">
              Trust &amp; Governance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/about');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  About 77 Review
                </a>
              </li>
              <li>
                <a
                  href="/editorial-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/editorial-policy');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  Editorial Integrity Policy
                </a>
              </li>
              <li>
                <a
                  href="/methodology"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/methodology');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  Clinical Review Methodology
                </a>
              </li>
              <li>
                <a
                  href="/medical-review"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/medical-review');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  Medical Review Board
                </a>
              </li>
              <li>
                <a
                  href="/affiliate-disclosure"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/affiliate-disclosure');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  Affiliate Disclosure Policy
                </a>
              </li>
              <li>
                <a
                  href="/corrections"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/corrections');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  Corrections &amp; Updates Log
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  Contact Editorial Desk
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/privacy');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  Privacy Policy (No Health Data)
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/terms');
                  }}
                  className="hover:text-white transition-colors text-stone-300 block"
                >
                  Terms of Service &amp; Liability
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Medical Disclaimers */}
        <div className="pt-8 pb-8 space-y-4 text-[11px] text-stone-400 border-b border-stone-800 leading-relaxed">
          <p>
            <strong className="text-stone-300">Mandatory Medical Disclaimer: </strong>
            The educational content published on 77 Review is intended exclusively for informational and general knowledge purposes. 77 Review is not a healthcare clinic, medical provider, diagnostic laboratory, or pharmaceutical distributor. None of the editorial evaluations or ingredient breakdowns on this website are designed to diagnose, treat, cure, or prevent any chronic disease, pathology, or injury. Do not discontinue prescribed medications or alter medical regimens without consulting your board-certified physician or specialist.
          </p>
          <p>
            <strong className="text-stone-300">FTC Commercial Transparency: </strong>
            77 Review participates in affiliate marketing programs with vetted third-party networks (including ShareASale, ClickBank, and BuyGoods) and direct merchants. We may receive financial compensation when visitors click our outbound links and make purchases. This compensation does not influence our editorial assessments, test scores, clinical trial reviews, or ingredient purity rankings.
          </p>
          <p>
            <strong className="text-stone-300">Advertising Standards Compliance: </strong>
            In accordance with Google Ads Healthcare policies and Meta Advertising Standards, this website prohibits unsubstantiated cure claims, misleading before-and-after imagery, fabricated medical credentials, and undisclosed subscription auto-renewals.
          </p>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} 77 Review. All rights reserved. Independent Editorial Health Publishing.</p>
          <p className="flex items-center gap-3">
            <span>American English Edition</span>
            <span aria-hidden="true">·</span>
            <span>Version 2.0 Production</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
