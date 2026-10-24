import React, { useState, useEffect } from 'react';
import { ShieldCheck, FileText, CheckCircle2, AlertCircle, Mail, MapPin, ExternalLink, HelpCircle, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { REVIEWERS, AUTHORS } from '../data/authors';
import { METADATA_CATALOG } from '../data/metadataCatalog';

interface TrustAndLegalPagesProps {
  initialSlug?: string;
  onNavigate: (path: string) => void;
}

export const TrustAndLegalPages: React.FC<TrustAndLegalPagesProps> = ({
  initialSlug = 'about',
  onNavigate
}) => {
  const [activeSlug, setActiveSlug] = useState(initialSlug);

  useEffect(() => {
    if (initialSlug && initialSlug !== activeSlug) {
      setActiveSlug(initialSlug);
    }
  }, [initialSlug]);

  const tabs = [
    { slug: 'about', label: 'About 77 Review' },
    { slug: 'editorial-policy', label: 'Editorial Policy' },
    { slug: 'methodology', label: 'Research Methodology' },
    { slug: 'medical-review', label: 'Medical Review Board' },
    { slug: 'affiliate-disclosure', label: 'Affiliate Disclosure' },
    { slug: 'corrections', label: 'Corrections Policy' },
    { slug: 'contact', label: 'Contact Us' },
    { slug: 'privacy', label: 'Privacy Policy' },
    { slug: 'terms', label: 'Terms of Use' }
  ];

  const pageMeta = METADATA_CATALOG[`/${activeSlug}`] || METADATA_CATALOG['/about'];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Breadcrumb Navigation (Internal Hyperlinks for Bingbot & UX) */}
      <nav aria-label="Breadcrumb" className="text-xs text-stone-500 font-mono flex items-center gap-2">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/');
          }}
          className="hover:text-stone-900 transition-colors"
        >
          Home
        </a>
        <ChevronRight className="w-3 h-3 text-stone-400" />
        <span className="text-stone-700 font-medium">{tabs.find(t => t.slug === activeSlug)?.label || 'Governance'}</span>
      </nav>

      {/* Header with Unique Page H1 matching Bing Webmaster Guidelines */}
      <div className="border border-stone-200 bg-white p-6 sm:p-10 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-800 font-semibold">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Editorial Governance & Institutional Transparency</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
          {pageMeta.h1}
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-3xl">
          {pageMeta.description}
        </p>
      </div>

      {/* Tabs Navigation using Semantic Anchor Links */}
      <div className="flex flex-wrap items-center gap-1 p-1 bg-stone-100 border border-stone-200" role="tablist">
        {tabs.map(tab => (
          <a
            key={tab.slug}
            href={`/${tab.slug}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveSlug(tab.slug);
              onNavigate(`/${tab.slug}`);
            }}
            className={`py-2 px-3 text-xs font-medium transition-colors ${
              activeSlug === tab.slug
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {tab.label}
          </a>
        ))}
      </div>

      {/* Content Container */}
      <div className="border border-stone-200 bg-white p-6 sm:p-10 shadow-xs">
        
        {/* 1. ABOUT US */}
        {activeSlug === 'about' && (
          <div className="space-y-6 text-stone-800 text-sm leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-stone-900 border-b border-stone-100 pb-3">
              About 77 Review
            </h2>
            <p>
              <strong>77 Review</strong> is an independent editorial publication dedicated to health, fitness, and dietary supplement analysis. Founded in 2026, our mission is to cut through deceptive marketing, inflated label claims, and commercial affiliate hype by grounding all product reviews and educational articles in verifiable peer-reviewed science.
            </p>
            <h3 className="text-base font-bold text-stone-900 pt-2">Our Core Principles:</h3>
            <ul className="list-disc pl-5 space-y-2 text-stone-700">
              <li><strong>Evidence Over Marketing:</strong> We verify ingredient dosages against published human clinical trials, not manufacturer marketing brochures.</li>
              <li><strong>Zero Medical Authority Fabrication:</strong> We clearly explain what supplements can and cannot do. We never claim a supplement cures, treats, or replaces medical therapy.</li>
              <li><strong>Commercial Independence:</strong> While we participate in affiliate programs to fund our research operations, affiliate commission rates never dictate test ratings, ranking orders, or editorial verdicts.</li>
            </ul>
          </div>
        )}

        {/* 2. EDITORIAL POLICY */}
        {activeSlug === 'editorial-policy' && (
          <div className="space-y-6 text-stone-800 text-sm leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-stone-900 border-b border-stone-100 pb-3">
              Editorial Policy & Quality Governance
            </h2>
            <p>
              Health information requires stricter scrutiny than ordinary consumer lifestyle topics. 77 Review enforces a rigorous 7-step publishing gate workflow:
            </p>
            <div className="p-4 bg-stone-50 border border-stone-200 font-mono text-xs text-stone-700">
              Idea → Clinical Research → Draft → Source Verification → Health Risk Review → Human Specialist Sign-Off → Published
            </div>
            <h3 className="text-base font-bold text-stone-900 pt-2">Non-Negotiable Editorial Rules:</h3>
            <ol className="list-decimal pl-5 space-y-2 text-stone-700">
              <li><strong>No Automated Unverified AI Publishing:</strong> Every article must be authored, audited, and reviewed by qualified human editors and clinical reviewers.</li>
              <li><strong>Mandatory Research Trails:</strong> Every material health claim must cite the primary source URL, journal, year, and PubMed PMID.</li>
              <li><strong>Distinction Between In Vitro and Human Evidence:</strong> Rodent and cell culture studies are never presented as proven human outcomes.</li>
              <li><strong>Label Potency Verification:</strong> When evaluating dietary supplements, we scrutinize whether active ingredients meet established clinical thresholds or hide behind proprietary blends.</li>
            </ol>
          </div>
        )}

        {/* 3. RESEARCH METHODOLOGY */}
        {activeSlug === 'methodology' && (
          <div className="space-y-6 text-stone-800 text-sm leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-stone-900 border-b border-stone-100 pb-3">
              Research & Review Methodology
            </h2>
            <p>
              We prioritize evidence according to the accepted medical hierarchy:
            </p>
            <div className="space-y-3">
              {SITE_CONFIG.evidenceHierarchy.map(tier => (
                <div key={tier.grade} className="p-4 border border-stone-200 bg-stone-50/60 flex items-start gap-3">
                  <span className="font-mono font-bold text-emerald-800 text-sm">[{tier.grade}]</span>
                  <div>
                    <strong className="text-stone-900 block">{tier.title}</strong>
                    <p className="text-xs text-stone-600 mt-1">{tier.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-base font-bold text-stone-900 pt-2">Desk Audit vs. Hands-on Physical Testing:</h3>
            <p>
              In accordance with PRD Section 6.4, 77 Review clearly distinguishes between <em>physical laboratory bench testing</em> (e.g. digital force gauge stall testing on massage guns) and <em>clinical desk research synthesis</em> (evaluating published studies and Certificate of Analysis documents). We never claim physical testing occurred unless it was genuinely performed and documented.
            </p>
          </div>
        )}

        {/* 4. MEDICAL REVIEW BOARD */}
        {activeSlug === 'medical-review' && (
          <div className="space-y-6 text-stone-800 text-sm leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-stone-900 border-b border-stone-100 pb-3">
              Medical & Scientific Review Board
            </h2>
            <p>
              Health-sensitive and high-risk content on 77 Review is audited by certified medical doctors, exercise physiologists, and registered dietitians before publication. Reviewers audit articles for factual accuracy, clinical plausibility, contraindication warnings, and regulatory compliance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {REVIEWERS.map(reviewer => (
                <div key={reviewer.id} className="p-5 border border-stone-200 bg-stone-50/40 space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={reviewer.avatarUrl}
                      alt={reviewer.name}
                      width={48}
                      height={48}
                      loading="lazy"
                      decoding="async"
                      className="w-12 h-12 rounded-full object-cover border border-stone-300"
                    />
                    <div>
                      <h3 className="font-semibold text-stone-900 text-sm">{reviewer.name}</h3>
                      <span className="text-xs text-emerald-800 font-medium block">{reviewer.role}</span>
                      <span className="text-[11px] text-stone-500">{reviewer.institution}</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {reviewer.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. AFFILIATE DISCLOSURE */}
        {activeSlug === 'affiliate-disclosure' && (
          <div className="space-y-6 text-stone-800 text-sm leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-stone-900 border-b border-stone-100 pb-3">
              FTC Affiliate Disclosure & Commercial Transparency
            </h2>
            <div className="p-4 bg-stone-100 border-l-2 border-emerald-800 text-stone-800 font-medium">
              "Disclosure: 77 Review may earn a commission when you purchase through links on this page, at no additional cost to you."
            </div>
            <p>
              In compliance with Federal Trade Commission (FTC) guidelines, we maintain complete transparency regarding our commercial model:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-stone-700">
              <li>We partner with reputable affiliate networks (including ShareASale, ClickBank, and BuyGoods) and direct merchants.</li>
              <li>When you click an outbound link to a merchant store and complete a purchase, 77 Review may receive a referral commission.</li>
              <li>This commission incurs no additional fee for the buyer. In many cases, our partner links provide discounted introductory pricing.</li>
              <li><strong>Zero Ranking Distortion:</strong> Our editorial writers and reviewers are evaluated on research accuracy, not sales volume. Higher commissions never result in higher ratings or favorable reviews.</li>
              <li>We do not collect customer credit card details or handle fulfillment. All transactions occur on verified external merchant platforms.</li>
            </ul>
          </div>
        )}

        {/* 6. CORRECTIONS POLICY */}
        {activeSlug === 'corrections' && (
          <div className="space-y-6 text-stone-800 text-sm leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-stone-900 border-b border-stone-100 pb-3">
              Corrections & Revisions Policy
            </h2>
            <p>
              Scientific consensus evolves, product formulations change, and new clinical trials are published. 77 Review is committed to transparent factual updates:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-stone-700">
              <li>When an error of fact or citation is identified, our editorial desk updates the article and appends a dated correction notice explaining the change.</li>
              <li>We perform quarterly audits on supplement ingredient records to verify whether merchants have updated raw material sources or inactive excipients.</li>
              <li>Readers are encouraged to submit scientific feedback or corrections directly to our editorial team at <code>editorial@77review.com</code>.</li>
            </ul>
          </div>
        )}

        {/* 7. CONTACT US */}
        {activeSlug === 'contact' && (
          <div className="space-y-6 text-stone-800 text-sm leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-stone-900 border-b border-stone-100 pb-3">
              Contact 77 Review
            </h2>
            <p>
              We welcome scientific inquiries, study submissions, and compliance correspondence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 border border-stone-200 bg-stone-50 space-y-3">
                <div className="flex items-center gap-2 text-emerald-800 font-semibold font-mono text-xs uppercase">
                  <Mail className="w-4 h-4" />
                  <span>Editorial Desk</span>
                </div>
                <p className="text-xs text-stone-600">
                  For study review requests, research corrections, and editorial feedback:
                </p>
                <a href="mailto:editorial@77review.com" className="text-sm font-semibold text-stone-900 hover:underline block">
                  editorial@77review.com
                </a>
              </div>

              <div className="p-5 border border-stone-200 bg-stone-50 space-y-3">
                <div className="flex items-center gap-2 text-emerald-800 font-semibold font-mono text-xs uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Compliance & Legal</span>
                </div>
                <p className="text-xs text-stone-600">
                  For affiliate network compliance, Google/Meta advertising guidelines, and legal matters:
                </p>
                <a href="mailto:compliance@77review.com" className="text-sm font-semibold text-stone-900 hover:underline block">
                  compliance@77review.com
                </a>
              </div>
            </div>
          </div>
        )}

        {/* 8. PRIVACY POLICY */}
        {activeSlug === 'privacy' && (
          <div className="space-y-6 text-stone-800 text-sm leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-stone-900 border-b border-stone-100 pb-3">
              Privacy Policy (Zero Sensitive Health Telemetry)
            </h2>
            <p>
              77 Review respects reader privacy. In strict compliance with US state privacy regulations (CCPA/CPRA) and international standards:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-stone-700">
              <li><strong>Zero Health Data Collection:</strong> We do not ask for or store medical diagnoses, health histories, or biometric telemetry.</li>
              <li><strong>No Sensitive Data Transmission:</strong> We do not transmit health queries or personal diagnostic conditions to third-party ad networks or data brokers.</li>
              <li><strong>Cookies & Analytics:</strong> We utilize privacy-conscious, aggregated web performance metrics strictly to monitor page load times and identify broken outbound links.</li>
            </ul>
          </div>
        )}

        {/* 9. TERMS OF USE */}
        {activeSlug === 'terms' && (
          <div className="space-y-6 text-stone-800 text-sm leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-stone-900 border-b border-stone-100 pb-3">
              Terms of Use & Medical Liability Limitation
            </h2>
            <p>
              By accessing 77 Review, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-stone-700">
              <li>All editorial content is provided strictly for educational purposes and is not a substitute for professional clinical medical advice.</li>
              <li>Always check with your primary physician before initiating any supplement regimen or intensive physical exercise protocol.</li>
              <li>77 Review disclaims any and all liability for decisions made or actions taken based on the information provided on this platform.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
