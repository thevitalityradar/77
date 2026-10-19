import { ProductCategory } from '../types';

export interface CategoryInfo {
  id: ProductCategory;
  title: string;
  shortTitle: string;
  slug: string;
  description: string;
  editorialScope: string;
  topics: string[];
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'health-wellness',
    title: 'Health & Wellness',
    shortTitle: 'Wellness',
    slug: 'health-wellness',
    description:
      'Rigorous, research-guided educational analysis on circadian sleep biology, systemic recovery, stress physiology, and preventative lifestyle habits.',
    editorialScope:
      'General wellness education grounded in peer-reviewed clinical literature. Does not provide medical diagnoses or treatment regimens.',
    topics: ['Sleep Physiology', 'Stress & Cortisol', 'Cold/Heat Therapy', 'Circadian Biology', 'Hydration Science']
  },
  {
    id: 'fitness-sports',
    title: 'Fitness & Sports',
    shortTitle: 'Fitness',
    slug: 'fitness-sports',
    description:
      'Biomechanics, athletic conditioning principles, and objective evaluations of training gear, recovery tools, and biometric tracking technology.',
    editorialScope:
      'Evidence-backed exercise science distinguishing verified performance adaptations from commercial marketing exaggerations.',
    topics: ['Percussive Therapy', 'Resistance Equipment', 'Endurance Gear', 'Biometric Rings & Bands', 'Active Recovery']
  },
  {
    id: 'supplements-nutrition',
    title: 'Supplements & Nutrition',
    shortTitle: 'Supplements',
    slug: 'supplements-nutrition',
    description:
      'Compound-by-compound clinical evaluations, third-party purity standards, label dose verification, and safety contraindications.',
    editorialScope:
      'Ingredient-level scrutiny benchmarking commercial product doses against randomized human clinical trials. Unsubstantiated claims are rejected.',
    topics: ['Oral Microbiome & Dental Probiotics', 'Nootropics & Cognitive Botanicals', 'Creatine Formulations', 'Electrolytes & Minerals', 'Omega-3 Fatty Acids']
  },
  {
    id: 'product-reviews-comparisons',
    title: 'Product Reviews & Comparisons',
    shortTitle: 'Reviews & Comparisons',
    slug: 'product-reviews-comparisons',
    description:
      'Head-to-head laboratory label breakdowns, cost-per-serving calculations, and transparent editorial scorecards for consumer health products.',
    editorialScope:
      'Independent editorial criteria separate from merchant commissions. Clear distinction between firsthand bench testing and clinical desk analysis.',
    topics: ['Head-to-Head Comparisons', 'Cost-Per-Serving Analysis', 'Best For Use Case Guides', 'Third-Party Purity Audits']
  }
];

export const getCategoryById = (id: ProductCategory) => CATEGORIES.find(c => c.id === id);
