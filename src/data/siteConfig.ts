export const SITE_CONFIG = {
  name: '77 Review',
  tagline: 'Evidence-Aware Health, Fitness & Supplement Reviews',
  description:
    'Independent editorial publication delivering evidence-backed reviews, transparent comparisons, and scientific buying guides for health and fitness products.',
  url: 'https://77-review.ai.studio',
  primaryMarket: 'United States',
  contactEmail: 'thevitalityradar@gmail.com',
  editorialDeskEmail: 'editorial@77review.com',
  complianceDeskEmail: 'compliance@77review.com',
  establishedYear: 2026,

  // Editorial Governance & Compliance Policies
  affiliateDisclosureText:
    'Disclosure: 77 Review may earn an affiliate commission when you purchase through links on this site, at no additional cost to you. Recommendations are governed strictly by documented clinical evidence and objective product benchmarks, never by commission rates.',

  medicalDisclaimerText:
    'Medical Disclaimer: Content published on 77 Review is intended strictly for general educational and informational purposes. It does not constitute medical advice, diagnosis, treatment, or personalized healthcare prescriptions. Always consult an appropriately qualified physician or registered healthcare provider before introducing any new dietary supplement, fitness equipment, or therapeutic protocol.',

  advertisingPolicyStatement:
    'Advertising & Commercial Policy: 77 Review adheres strictly to Google Ads Healthcare and Meta Advertising Standards. We reject unsubstantiated health claims, deceptive before-and-after promises, guaranteed cures, and products with unverified ingredients or non-transparent subscription rebills.',

  // Navigation Links
  navLinks: [
    { label: 'Health & Wellness', href: '/category/health-wellness' },
    { label: 'Fitness & Sports', href: '/category/fitness-sports' },
    { label: 'Supplements', href: '/category/supplements-nutrition' },
    { label: 'Comparisons', href: '/comparisons' },
    { label: 'Ingredient Index', href: '/ingredients' }
  ],

  // Footer Legal & Trust Links
  trustLinks: [
    { label: 'About 77 Review', href: '/about' },
    { label: 'Editorial Policy', href: '/editorial-policy' },
    { label: 'Research Methodology', href: '/methodology' },
    { label: 'Medical Review Board', href: '/medical-review' },
    { label: 'Affiliate Transparency', href: '/affiliate-disclosure' },
    { label: 'Corrections Policy', href: '/corrections' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Contact Us', href: '/contact' }
  ],

  // Evidence Grading Rubric
  evidenceHierarchy: [
    {
      grade: 'A',
      title: 'Grade A: Systematic Reviews & Meta-Analyses',
      description: 'Multiple randomized controlled human trials aggregated with statistically significant clinical endpoints.',
      badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200'
    },
    {
      grade: 'B',
      title: 'Grade B: Randomized Controlled Human Trials (RCTs)',
      description: 'Double-blind, placebo-controlled human studies with adequate sample size and reproducible methodology.',
      badgeColor: 'text-teal-800 bg-teal-50 border-teal-200'
    },
    {
      grade: 'C',
      title: 'Grade C: Observational / Mechanistic In Vitro',
      description: 'Prospective cohort associations, animal models, or physiological biochemical pathways. Not conclusive for human efficacy.',
      badgeColor: 'text-amber-800 bg-amber-50 border-amber-200'
    },
    {
      grade: 'D',
      title: 'Grade D: Inconclusive / Insufficient Evidence',
      description: 'Conflicting study findings, tiny underpowered sample sizes, or lack of peer-reviewed data. Excluded from recommendations.',
      badgeColor: 'text-rose-800 bg-rose-50 border-rose-200'
    }
  ]
};
