import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductRecord } from '../types';
import { Check, X, Scale, ExternalLink, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { AffiliateDisclosureBanner } from '../components/AffiliateDisclosureBanner';
import { MedicalDisclaimerBox } from '../components/MedicalDisclaimerBox';

interface ComparisonToolPageProps {
  onNavigate: (path: string) => void;
  onOpenComplianceAudit: (product: ProductRecord) => void;
}

export const ComparisonToolPage: React.FC<ComparisonToolPageProps> = ({
  onNavigate,
  onOpenComplianceAudit
}) => {
  const phytomemone = PRODUCTS[0];
  const prodentim = PRODUCTS[1] || PRODUCTS[0];
  const audisoothe = PRODUCTS[2] || PRODUCTS[0];
  const prostavive = PRODUCTS.find((p) => p.id === 'prod-prostavive-prostate-vitality') || PRODUCTS[3] || PRODUCTS[0];
  const neuroserge = PRODUCTS.find((p) => p.id === 'prod-neuroserge-memory-complex') || PRODUCTS[4] || PRODUCTS[0];

  const [activeProductKey, setActiveProductKey] = useState<'phytomem' | 'prodentim' | 'audisoothe' | 'prostavive' | 'neuroserge'>('phytomem');
  const [selectedBaseline, setSelectedBaseline] = useState<string>('default');

  const currentProduct =
    activeProductKey === 'phytomem'
      ? phytomemone
      : activeProductKey === 'prodentim'
      ? prodentim
      : activeProductKey === 'audisoothe'
      ? audisoothe
      : activeProductKey === 'prostavive'
      ? prostavive
      : neuroserge;
  const affiliateLink = currentProduct.affiliateUrl;

  const phytomemComparisons: Record<string, {
    name: string;
    type: string;
    priceRange: string;
    costPerDay: string;
    activeApproach: string;
    metabolicAction: string;
    antioxidantSupport: string;
    sideEffectRisk: string;
    guarantee: string;
    verdict: string;
  }> = {
    caffeine: {
      name: 'Generic Caffeine-Heavy Smart Drug / Nootropic',
      type: 'Central Nervous System (CNS) Stimulant',
      priceRange: '$35 – $65 per bottle',
      costPerDay: '$1.20 – $2.10',
      activeApproach: 'High-dose anhydrous caffeine (150mg–250mg) + synthetic L-Theanine',
      metabolicAction: 'Blocks adenosine receptors temporarily; does NOT increase neuronal glucose uptake',
      antioxidantSupport: 'Minimal or none; no standardized saffron crocins',
      sideEffectRisk: 'Afternoon energy crash, tolerance buildup, jitters, elevated heart rate, sleep disruption',
      guarantee: 'Standard 14–30 day return window (unopened bottles only)',
      verdict: 'Produces a rapid spike in alertness that masks fatigue, but leaves underlying neuronal energy deficits unaddressed.'
    },
    ginkgo: {
      name: 'Single-Herb Ginkgo Biloba / Generic Store Brand',
      type: 'Single-Botanical Herbal Extract',
      priceRange: '$15 – $30 per bottle',
      costPerDay: '$0.50 – $1.00',
      activeApproach: 'Unstandardized Ginkgo biloba leaf extract (60mg–120mg)',
      metabolicAction: 'Mild peripheral circulation support; zero AMPK glucose pathway activation',
      antioxidantSupport: 'Modest flavonoid content; lacking marine carotenoids and saffron',
      sideEffectRisk: 'Mild gastrointestinal upset; generally low stimulant risk',
      guarantee: 'Store credit or 30-day unopened exchange policy',
      verdict: 'Inexpensive and gentle, but lacks the multi-compound synergy and glucose metabolism pathways needed for noticeable working memory support.'
    }
  };

  const prodentimComparisons: Record<string, {
    name: string;
    type: string;
    priceRange: string;
    costPerDay: string;
    activeApproach: string;
    metabolicAction: string;
    antioxidantSupport: string;
    sideEffectRisk: string;
    guarantee: string;
    verdict: string;
  }> = {
    mouthwash: {
      name: 'Alcohol-Based Antiseptic Mouthwash',
      type: 'Topical Chemical Sterilization Rinse',
      priceRange: '$7 – $14 per bottle',
      costPerDay: '$0.25 – $0.50',
      activeApproach: 'Denatured alcohol (20%+) + chlorhexidine or cetylpyridinium chloride',
      metabolicAction: 'Kills bacteria non-selectively; triggers rebound dry mouth and anaerobic overgrowth',
      antioxidantSupport: 'None; acidic pH can erode enamel with repeated exposure',
      sideEffectRisk: 'Burning sensation, loss of taste, chronic dry mouth, mucosal irritation',
      guarantee: 'Retail store return only',
      verdict: 'Provides immediate chemical freshness for 10 minutes, but destroys beneficial barrier bacteria and triggers worse rebound morning breath.'
    },
    digestive_capsules: {
      name: 'Generic Digestive Gut Probiotic Capsules',
      type: 'Enteric Gastrointestinal Capsules',
      priceRange: '$25 – $45 per bottle',
      costPerDay: '$0.85 – $1.50',
      activeApproach: 'Swallowed capsule designed to bypass stomach acid into the large intestine',
      metabolicAction: 'Colonizes lower gut microflora; zero bacterial adhesion to teeth or gums',
      antioxidantSupport: 'Beneficial for intestinal transit, but irrelevant to oral microbiome',
      sideEffectRisk: 'Mild initial digestive adaptation',
      guarantee: 'Manufacturer 30-day guarantee',
      verdict: 'Excellent for general digestive regularity, but swallowed capsules provide zero contact with teeth crevices, gums, or lingual biofilms.'
    }
  };

  const audisootheComparisons: Record<string, {
    name: string;
    type: string;
    priceRange: string;
    costPerDay: string;
    activeApproach: string;
    metabolicAction: string;
    antioxidantSupport: string;
    sideEffectRisk: string;
    guarantee: string;
    verdict: string;
  }> = {
    ear_drops: {
      name: 'External Homeopathic Tinnitus Ear Drops / Oils',
      type: 'Topical External Ear Canal Drops',
      priceRange: '$15 – $25 per bottle',
      costPerDay: '$0.50 – $0.80',
      activeApproach: 'Mustard oil, garlic oil, or diluted botanical drops placed directly into outer ear canal',
      metabolicAction: 'Moisturizes outer skin of ear canal; cannot cross intact eardrum to reach inner ear nerves',
      antioxidantSupport: 'Zero inner ear delivery; zero capillary circulation absorption',
      sideEffectRisk: 'Clogged sensation, potential earwax impaction, canal irritation',
      guarantee: 'Retail drugstore return only',
      verdict: 'Useful for minor outer ear dryness, but cannot reach the cochlea or quiet central auditory nerve hyperactivity.'
    },
    ginkgo_zinc: {
      name: 'Generic Ginkgo & Zinc Oral Tablets',
      type: 'Compressed Solid Dietary Tablets',
      priceRange: '$18 – $35 per bottle',
      costPerDay: '$0.60 – $1.15',
      activeApproach: 'Swallowed tablets of standard ginkgo and zinc gluconate',
      metabolicAction: 'Subject to stomach acid and liver first-pass metabolism; lacks inhibitory GABA calming action',
      antioxidantSupport: 'Moderate systemic antioxidant support; slower tissue uptake',
      sideEffectRisk: 'Occasional mild stomach upset from compressed binders and fillers',
      guarantee: 'Standard 30-day store policy',
      verdict: 'Provides basic vascular support, but lacks sublingual speed, GABAergic neural calming, and high-potency bioflavonoid synergy.'
    }
  };

  const prostaviveComparisons: Record<string, {
    name: string;
    type: string;
    priceRange: string;
    costPerDay: string;
    activeApproach: string;
    metabolicAction: string;
    antioxidantSupport: string;
    sideEffectRisk: string;
    guarantee: string;
    verdict: string;
  }> = {
    saw_palmetto: {
      name: 'Generic Saw Palmetto (Serenoa repens) Softgels',
      type: 'Single-Herb Compressed Softgels',
      priceRange: '$18 – $30 per bottle',
      costPerDay: '$0.60 – $1.00',
      activeApproach: 'Fatty acid extracts of saw palmetto berries in standard capsule carriers',
      metabolicAction: 'Mild competitive 5-AR inhibition; lacks Boron SHBG modulation, adaptogens, or nitric oxide drivers',
      antioxidantSupport: 'Low; lacks cellular polyphenols or chelated zinc cofactors',
      sideEffectRisk: 'Mild GI discomfort; capsule fillers and plasticizers',
      guarantee: 'Standard 30-day retail return',
      verdict: 'A common basic single-ingredient herb, but trials show mixed efficacy without multi-pathway botanical synergy or pelvic smooth muscle relaxants.'
    },
    beta_sitosterol: {
      name: 'Commercial Beta-Sitosterol Prostate Formula',
      type: 'Plant Sterol Solid Caplets',
      priceRange: '$35 – $55 per bottle',
      costPerDay: '$1.15 – $1.80',
      activeApproach: 'Phytosterol ester blend targeting urinary stream parameters',
      metabolicAction: 'Supports basic urinary flow velocity, but does not provide Boron, Ashwagandha, or adaptogenic nocturnal calming',
      antioxidantSupport: 'Minimal broad-spectrum antioxidant defense for prostatic epithelial cells',
      sideEffectRisk: 'Occasional digestive bloating or constipation',
      guarantee: 'Varies by brand (often 30–60 days)',
      verdict: 'Helpful for isolated stream dynamics, but requires swallowing large multiple pills daily and misses holistic hormonal and nighttime sleep support.'
    }
  };

  const neurosergeComparisons: Record<string, {
    name: string;
    type: string;
    priceRange: string;
    costPerDay: string;
    activeApproach: string;
    metabolicAction: string;
    antioxidantSupport: string;
    sideEffectRisk: string;
    guarantee: string;
    verdict: string;
  }> = {
    caffeine_stack: {
      name: 'High-Caffeine Smart Drug / Energy Nootropic',
      type: 'Stimulant-Driven Focus Capsule',
      priceRange: '$40 – $70 per bottle',
      costPerDay: '$1.33 – $2.33',
      activeApproach: 'Caffeine anhydrous (150-250mg) + synthetic theacrine or taurine',
      metabolicAction: 'Blocks adenosine receptors for short-term alertness, but causes adrenaline spikes, blood pressure elevation, and severe afternoon fatigue crashes',
      antioxidantSupport: 'Zero neuro-immune microglial support; does not supply Phosphatidylserine or Huperzine A',
      sideEffectRisk: 'High risk of tachycardia, nervous jitters, nocturnal insomnia, and dependency/tolerance',
      guarantee: 'Usually 30 days or no refund on opened bottles',
      verdict: 'Masks mental exhaustion with central nervous stimulation instead of nourishing neuronal membrane fluidity and synaptic acetylcholine neurotransmission.'
    },
    single_bacopa: {
      name: 'Generic Single-Herb Bacopa or Ginkgo Capsule',
      type: 'Mono-Herb Botanical Capsule',
      priceRange: '$18 – $30 per bottle',
      costPerDay: '$0.60 – $1.00',
      activeApproach: 'Unstandardized ground whole-plant leaf powder',
      metabolicAction: 'Provides mild antioxidant support, but lacks acetylcholinesterase inhibition, cellular phospholipids, and neuro-immune microglial dampening',
      antioxidantSupport: 'Modest localized herbal polyphenol activity',
      sideEffectRisk: 'Low (mild gastrointestinal upset if taken without food)',
      guarantee: 'Standard retail 30-day return policy',
      verdict: 'Inexpensive entry point, but missing the multi-pathway synergy of 7 targeted compounds (Phosphatidylserine, Huperzine A, Bilberry, and GABA).'
    }
  };

  const currentComparisons =
    activeProductKey === 'phytomem'
      ? phytomemComparisons
      : activeProductKey === 'prodentim'
      ? prodentimComparisons
      : activeProductKey === 'audisoothe'
      ? audisootheComparisons
      : activeProductKey === 'prostavive'
      ? prostaviveComparisons
      : neurosergeComparisons;

  const baselineKey = selectedBaseline in currentComparisons ? selectedBaseline : Object.keys(currentComparisons)[0];
  const baseline = currentComparisons[baselineKey];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="border border-stone-200 bg-white p-6 sm:p-10 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-800 font-semibold">
          <Scale className="w-4 h-4 text-emerald-700" />
          <span>Interactive Head-to-Head Specification Matrix</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
          Formulation Comparison: {currentProduct.name} vs. Market Alternatives
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-3xl">
          Side-by-side clinical evidence grading, active serving dosages, cost-per-serving calculations, and physiological mechanisms to help American consumers make an informed choice.
        </p>

        {/* Product Matrix Switcher */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-stone-100">
          <span className="text-xs font-mono text-stone-500 uppercase font-semibold">
            Product Category:
          </span>
          <button
            onClick={() => {
              setActiveProductKey('phytomem');
              setSelectedBaseline('caffeine');
            }}
            className={`px-3 py-1.5 text-xs font-mono font-medium transition-colors cursor-pointer ${
              activeProductKey === 'phytomem'
                ? 'bg-emerald-800 text-white font-semibold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            1. PhytoMemone (Brain)
          </button>
          <button
            onClick={() => {
              setActiveProductKey('prodentim');
              setSelectedBaseline('mouthwash');
            }}
            className={`px-3 py-1.5 text-xs font-mono font-medium transition-colors cursor-pointer ${
              activeProductKey === 'prodentim'
                ? 'bg-emerald-800 text-white font-semibold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            2. ProDentim (Dental)
          </button>
          <button
            onClick={() => {
              setActiveProductKey('audisoothe');
              setSelectedBaseline('ear_drops');
            }}
            className={`px-3 py-1.5 text-xs font-mono font-medium transition-colors cursor-pointer ${
              activeProductKey === 'audisoothe'
                ? 'bg-emerald-800 text-white font-semibold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            3. AudiSoothe (Hearing)
          </button>
          <button
            onClick={() => {
              setActiveProductKey('prostavive');
              setSelectedBaseline('saw_palmetto');
            }}
            className={`px-3 py-1.5 text-xs font-mono font-medium transition-colors cursor-pointer ${
              activeProductKey === 'prostavive'
                ? 'bg-emerald-800 text-white font-semibold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            4. ProstaVive (Prostate)
          </button>
          <button
            onClick={() => {
              setActiveProductKey('neuroserge');
              setSelectedBaseline('caffeine_stack');
            }}
            className={`px-3 py-1.5 text-xs font-mono font-medium transition-colors cursor-pointer ${
              activeProductKey === 'neuroserge'
                ? 'bg-emerald-800 text-white font-semibold'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            5. Neuro Serge (Memory)
          </button>
        </div>
      </div>

      {/* Baseline Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 border border-stone-200 bg-stone-50">
        <div>
          <span className="text-xs font-mono uppercase text-stone-500 font-semibold block">
            Compare Against:
          </span>
          <span className="text-sm font-semibold text-stone-800">
            Select a common market alternative to view the formula differences
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {Object.keys(currentComparisons).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedBaseline(key)}
              className={`px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                baselineKey === key
                  ? 'bg-stone-900 text-white'
                  : 'bg-white border border-stone-300 text-stone-700 hover:bg-stone-100'
              }`}
            >
              {key === 'caffeine' && 'High-Caffeine Nootropic'}
              {key === 'ginkgo' && 'Single-Herb Ginkgo'}
              {key === 'mouthwash' && 'Antiseptic Alcohol Mouthwash'}
              {key === 'digestive_capsules' && 'Swallowed Gut Probiotics'}
              {key === 'ear_drops' && 'External Ear Canal Drops'}
              {key === 'ginkgo_zinc' && 'Generic Ginkgo & Zinc Pills'}
              {key === 'saw_palmetto' && 'Saw Palmetto Only Capsule'}
              {key === 'otc_beta_sitosterol' && 'Standard Beta-Sitosterol'}
              {key === 'caffeine_stack' && 'High-Caffeine Smart Drug'}
              {key === 'single_bacopa' && 'Single-Herb Bacopa'}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="border border-stone-200 bg-white overflow-x-auto shadow-xs">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50 font-mono text-[11px] uppercase">
              <th className="p-4 text-stone-500 w-1/4">Evaluation Metric</th>
              <th className="p-4 text-emerald-900 bg-emerald-50/50 w-3/8 border-l border-emerald-100 font-bold">
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-800" />
                  <span>{currentProduct.name}</span>
                </div>
              </th>
              <th className="p-4 text-stone-600 w-3/8 border-l border-stone-200">
                {baseline.name}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-stone-700">
            {/* Classification */}
            <tr>
              <td className="p-4 font-semibold text-stone-900">Functional Approach</td>
              <td className="p-4 border-l border-emerald-100 bg-emerald-50/20 font-medium text-emerald-950">
                {activeProductKey === 'phytomem'
                  ? 'Dual-Defense Botanical Complex (Saffron + Berberine AMPK)'
                  : activeProductKey === 'prodentim'
                  ? '3.5 Billion CFU Oral Probiotic Chewables (Flora Repopulation)'
                  : 'Sublingual Botanical Liquid Drops (Neuro-Vascular Support)'}
              </td>
              <td className="p-4 border-l border-stone-100 text-stone-600">
                {baseline.type}
              </td>
            </tr>

            {/* Active Formulation */}
            <tr>
              <td className="p-4 font-semibold text-stone-900">Active Formulation</td>
              <td className="p-4 border-l border-emerald-100 bg-emerald-50/20 font-medium">
                {activeProductKey === 'phytomem'
                  ? '30mg Saffron (standardized), 200mg Berberine HCl, Ceylon Cinnamon, Banaba, Fucoxanthin'
                  : activeProductKey === 'prodentim'
                  ? '3.5B CFU (L. paracasei, B. lactis BL-04, L. reuteri) + Inulin Prebiotic & Malic Acid'
                  : 'GABA, Standardized Ginkgo Biloba, Vinpocetine, Grape Seed Extract, Green Tea (EGCG), Magnesium'}
              </td>
              <td className="p-4 border-l border-stone-100 text-stone-600">
                {baseline.activeApproach}
              </td>
            </tr>

            {/* Mechanism of Action */}
            <tr>
              <td className="p-4 font-semibold text-stone-900">Biological Action</td>
              <td className="p-4 border-l border-emerald-100 bg-emerald-50/20 text-emerald-900">
                {activeProductKey === 'phytomem'
                  ? 'Scavenges cerebral free radicals while activating AMPK to optimize cellular glucose uptake.'
                  : activeProductKey === 'prodentim'
                  ? 'Directly recolonizes oral epithelium, inhibiting volatile sulfur compound producing anaerobes.'
                  : 'Calms hyperactive auditory nerve signaling via GABA while increasing cochlear microvascular blood perfusion.'}
              </td>
              <td className="p-4 border-l border-stone-100 text-stone-600">
                {baseline.metabolicAction}
              </td>
            </tr>

            {/* Price & Cost Per Serving */}
            <tr>
              <td className="p-4 font-semibold text-stone-900">Cost per Day</td>
              <td className="p-4 border-l border-emerald-100 bg-emerald-50/20 font-mono font-bold text-stone-900">
                $1.63 / day (in 6-bottle bundle)
              </td>
              <td className="p-4 border-l border-stone-100 font-mono text-stone-600">
                {baseline.costPerDay}
              </td>
            </tr>

            {/* Side Effects / Risks */}
            <tr>
              <td className="p-4 font-semibold text-stone-900">Side Effect Risk Profile</td>
              <td className="p-4 border-l border-emerald-100 bg-emerald-50/20 text-emerald-900">
                100% caffeine-free & non-stimulant; exceptionally gentle and safe for daily use.
              </td>
              <td className="p-4 border-l border-stone-100 text-amber-800">
                {baseline.sideEffectRisk}
              </td>
            </tr>

            {/* Money-Back Guarantee */}
            <tr>
              <td className="p-4 font-semibold text-stone-900">Refund Guarantee</td>
              <td className="p-4 border-l border-emerald-100 bg-emerald-50/20 font-semibold text-emerald-900">
                {currentProduct.guaranteeDays}-Day Unconditional 100% Money-Back Guarantee (ClickBank Secured)
              </td>
              <td className="p-4 border-l border-stone-100 text-stone-600">
                {baseline.guarantee}
              </td>
            </tr>

            {/* Bottom Line Verdict */}
            <tr>
              <td className="p-4 font-semibold text-stone-900">Bottom Line Verdict</td>
              <td className="p-4 border-l border-emerald-100 bg-emerald-50/20 text-emerald-950 font-medium leading-relaxed">
                {activeProductKey === 'phytomem'
                  ? 'Recommended for adults seeking steady cognitive endurance, working memory clarity, and cellular brain fuel without artificial stimulants.'
                  : activeProductKey === 'prodentim'
                  ? 'Recommended for individuals looking to address the ecological root cause of breath odor and gum sensitivity rather than temporarily masking it.'
                  : 'Recommended for adults with ear ringing, hissing, or auditory fatigue seeking non-invasive sublingual microvascular support.'}
              </td>
              <td className="p-4 border-l border-stone-100 text-stone-600 leading-relaxed">
                {baseline.verdict}
              </td>
            </tr>

            {/* Purchase / Action */}
            <tr>
              <td className="p-4 font-semibold text-stone-900">Direct Official Store</td>
              <td className="p-4 border-l border-emerald-100 bg-emerald-50/20">
                <a
                  href={affiliateLink}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="py-2.5 px-5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 transition-colors inline-flex items-center gap-1.5 shadow-xs"
                >
                  <span>Order {currentProduct.name} on Official Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </td>
              <td className="p-4 border-l border-stone-100 text-stone-400">
                Standard Drugstore / Third-Party Resellers
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Review Link Callout */}
      <div className="p-6 border border-stone-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-serif font-bold text-stone-900">
            Want to read the full clinical audit for {currentProduct.name}?
          </h3>
          <p className="text-xs text-stone-600">
            Review detailed human trial data, dosage comparisons, and our editorial scorecard.
          </p>
        </div>
        <button
          onClick={() => onNavigate(`/review/${currentProduct.slug}`)}
          className="py-2.5 px-5 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors shrink-0 cursor-pointer"
        >
          Read Full {currentProduct.name} Review →
        </button>
      </div>

      {/* Medical Boundary */}
      <MedicalDisclaimerBox />

      {/* Discreet Commercial Disclosure */}
      <AffiliateDisclosureBanner />
    </div>
  );
};
