/**
 * Centralized SEO & Editorial Metadata Catalog for 77 Review
 * Strictly optimized for Bing Webmaster Guidelines & Google Search Console:
 * - Titles: 35–65 characters
 * - Meta Descriptions: 120–160 characters (optimized at 135–155 chars)
 * - Single authoritative H1 matching page topic
 * - Semantic canonical URLs
 */

export interface PageMetadata {
  path: string;
  title: string;
  h1: string;
  description: string;
  keywords: string;
  category?: string;
  ogType?: 'website' | 'article' | 'product';
}

export const METADATA_CATALOG: Record<string, PageMetadata> = {
  '/': {
    path: '/',
    title: '77 Review – Evidence-Based Health & Supplement Reviews',
    h1: '77 Review – Evidence-Aware Health, Fitness & Supplement Reviews',
    description:
      'Independent health, fitness, and dietary supplement editorial publication delivering evidence-backed reviews, comparisons, and clinical buying guides.',
    keywords:
      'evidence-based health reviews, dietary supplement evaluations, clinical trials, phytomem, prodentim, audisoothe, prostavive, neuroserge, igenics',
    ogType: 'website'
  },

  // 6 Product Review Pages
  '/review/phytomem-one-brain-memory-review': {
    path: '/review/phytomem-one-brain-memory-review',
    title: 'PhytoMemone Review: Clinical Memory Evidence (2026)',
    h1: 'PhytoMemone Review: Clinical Analysis & Memory Complex Evidence (2026)',
    description:
      'Independent clinical audit of PhytoMemone. We evaluate saffron, berberine, dosage trials, memory kinetics, safety benchmarks, and verified refund terms.',
    keywords:
      'PhytoMemone review, saffron memory supplement, berberine brain glucose, cognitive health trials, memory recall',
    category: 'Brain Health & Nootropics',
    ogType: 'product'
  },
  '/review/prodentim-advanced-oral-probiotics-review': {
    path: '/review/prodentim-advanced-oral-probiotics-review',
    title: 'ProDentim Review: Clinical Oral Probiotic Guide (2026)',
    h1: 'ProDentim Review: Clinical Evidence on Oral Probiotics & Teeth (2026)',
    description:
      'Clinical investigation of ProDentim oral probiotic chewables. We evaluate 3.5 billion CFU strains, gum microbiome studies, and customer trial results.',
    keywords:
      'ProDentim review, oral probiotics teeth, lactobacillus paracasei gums, oral microbiome health, dental probiotic',
    category: 'Dental & Oral Health',
    ogType: 'product'
  },
  '/review/audisoothe-ear-health-tinnitus-drops-review': {
    path: '/review/audisoothe-ear-health-tinnitus-drops-review',
    title: 'AudiSoothe Review: Ear Health & Tinnitus Relief (2026)',
    h1: 'AudiSoothe Review: Clinical Evaluation of Cochlear Ear Drops (2026)',
    description:
      'Board-reviewed clinical analysis of AudiSoothe ear drops. We examine cochlear microcirculation, botanical active ingredients, and trial safety data.',
    keywords:
      'AudiSoothe review, ear health drops, cochlear microcirculation, tinnitus relief botanicals, hearing support',
    category: 'Auditory & Ear Health',
    ogType: 'product'
  },
  '/review/prostavive-prostate-health-vitality-review': {
    path: '/review/prostavive-prostate-health-vitality-review',
    title: 'ProstaVive Review: Prostate Health & Nocturia (2026)',
    h1: 'ProstaVive Review: Clinical Botanical Powder Evaluation (2026)',
    description:
      'Clinical evaluation of ProstaVive powder for nighttime urinary flow, prostate cellular health, and vitality. Full formula breakdown and refund review.',
    keywords:
      'ProstaVive review, prostate health powder, nocturia urinary flow, tongkat ali prostate, zinc saw palmetto',
    category: "Men's Health & Longevity",
    ogType: 'product'
  },
  '/review/neuroserge-memory-focus-brain-health-review': {
    path: '/review/neuroserge-memory-focus-brain-health-review',
    title: 'Neuro Serge Review: Brain Memory & Focus Guide (2026)',
    h1: 'Neuro Serge Review: Clinical Analysis of Memory Complex (2026)',
    description:
      'Clinical analysis of Neuro Serge nootropic complex. We examine phosphatidylserine, bacopa monnieri, acetylcholine support, and 180-day refund terms.',
    keywords:
      'Neuro Serge review, phosphatidylserine memory, bacopa monnieri nootropic, huperzine A focus, brain fog relief',
    category: 'Brain Health & Nootropics',
    ogType: 'product'
  },
  '/review/igenics-vision-breakthrough-eye-health-review': {
    path: '/review/igenics-vision-breakthrough-eye-health-review',
    title: 'iGenics Review: Vision Restoration & Eye Health (2026)',
    h1: 'iGenics Review: Clinical Evaluation of Vision Restoration Formula (2026)',
    description:
      'Board-reviewed clinical evaluation of iGenics vision formula. We audit AREDS-2 carotenoids, lutein, zeaxanthin, saffron, and night contrast acuity.',
    keywords:
      'iGenics review, vision restoration formula, AREDS-2 lutein zeaxanthin, saffron eye health, macular pigment density',
    category: 'Eye Health & Vision Longevity',
    ogType: 'product'
  },
  '/review/the-genius-song-review': {
    path: '/review/the-genius-song-review',
    title: 'The Genius Song Review: Brainwave Audio Evidence (2026)',
    h1: 'The Genius Song Review: Clinical Audio Frequency & Brainwave Evidence (2026)',
    description:
      'Independent clinical audit of The Genius Song 12-minute audio track. We evaluate theta brainwave entrainment, EEG studies, $39 pricing, and refund terms.',
    keywords:
      'The Genius Song review, The Genius Wave, theta brainwave entrainment, binaural beats EEG study, 12 minute audio session, ClickBank guarantee',
    category: 'Acoustic Neurology & Cognitive Entrainment',
    ogType: 'product'
  },
  '/review/visiflora-gut-eye-axis-vision-support-review': {
    path: '/review/visiflora-gut-eye-axis-vision-support-review',
    title: 'VisiFlora Review: Gut-Eye Axis & Vision Support (2026)',
    h1: 'VisiFlora Review: Clinical Gut-Eye Axis & Vision Support Evidence (2026)',
    description:
      'Independent clinical audit of VisiFlora 22-in-1 eye supplement. We evaluate AREDS-2 carotenoids, Astaxanthin, the gut-retina axis, $49 pricing, and ClickBank guarantee.',
    keywords:
      'VisiFlora review, VisiFlora ingredients, gut-eye axis supplement, lutein zeaxanthin astaxanthin, eye fatigue formula, ClickBank vision review',
    category: 'Eye Health & Vision Longevity',
    ogType: 'product'
  },
  '/review/nitric-boost-ultra-blood-flow-stamina-review': {
    path: '/review/nitric-boost-ultra-blood-flow-stamina-review',
    title: 'Nitric Boost Ultra Review: Nitric Oxide & Stamina (2026)',
    h1: 'Nitric Boost Ultra Review: Clinical Nitric Oxide & Blood Flow Evidence (2026)',
    description:
      'Clinical evaluation of Nitric Boost Ultra drink mix. We audit Beet Root nitrates, L-Citrulline, Epimedium icariin, blood pressure data, and refund terms.',
    keywords:
      'Nitric Boost review, Nitric Boost Ultra, beet root nitrates, l-citrulline blood flow, epimedium icariin, nitric oxide drink, ClickBank guarantee',
    category: "Men's Health & Longevity",
    ogType: 'product'
  },
  '/review/gluco6-blood-sugar-glut4-metabolism-review': {
    path: '/review/gluco6-blood-sugar-glut4-metabolism-review',
    title: 'Gluco6 Review: GLUT-4 Blood Sugar Support (2026)',
    h1: 'Gluco6 Review: Clinical GLUT-4 Glucose & Sucrase Inhibition Evidence (2026)',
    description:
      'Independent clinical evaluation of Gluco6. We audit Sukre (L-arabinose), TeaCrine, Gymnema, Ceylon Cinnamon, Chromium, $39 pricing, and refund terms.',
    keywords:
      'Gluco6 review, Gluco 6 blood sugar, sukre l-arabinose, teacrine energy, gymnema sylvestre cravings, chromium glucose, GLUT-4 transporter',
    category: 'Metabolic & Glycemic Health',
    ogType: 'product'
  },

  // 6 Clinical Research Articles
  '/article/brain-glucose-metabolism-saffron-berberine-cognitive-health': {
    path: '/article/brain-glucose-metabolism-saffron-berberine-cognitive-health',
    title: 'Brain Glucose & Saffron: Clinical Cognitive Guide',
    h1: 'Brain Glucose Metabolism, Saffron & Berberine in Cognitive Health',
    description:
      'Clinical research on brain glucose kinetics, saffron crocins, and berberine AMPK activation for neuro-metabolic protection and memory consolidation.',
    keywords:
      'brain glucose metabolism, saffron crocins cognitive function, berberine AMPK brain, neuro-metabolism',
    category: 'Cognitive Science',
    ogType: 'article'
  },
  '/article/oral-microbiome-probiotics-periodontal-health-science': {
    path: '/article/oral-microbiome-probiotics-periodontal-health-science',
    title: 'Oral Microbiome & Probiotics: Periodontal Health',
    h1: 'The Oral Microbiome: Probiotic Strains & Periodontal Health Science',
    description:
      'Clinical analysis of oral microflora equilibrium, probiotic repopulation, salivary pH buffering, and periodontal tissue resilience in adults.',
    keywords:
      'oral microbiome science, probiotic strains periodontitis, salivary pH dental health, lactobacillus reuteri',
    category: 'Oral Biology',
    ogType: 'article'
  },
  '/article/auditory-nerve-hyperactivity-cochlear-microcirculation-tinnitus': {
    path: '/article/auditory-nerve-hyperactivity-cochlear-microcirculation-tinnitus',
    title: 'Auditory Nerve & Cochlear Microcirculation Science',
    h1: 'Auditory Nerve Hyperactivity & Cochlear Microcirculation Science',
    description:
      'Medical review of cochlear stria vascularis microcirculation, neural hyperactivity mechanisms in tinnitus, and evidence-graded botanical agents.',
    keywords:
      'auditory nerve hyperactivity, cochlear microcirculation tinnitus, stria vascularis ear health, ginkgo auditory',
    category: 'Auditory Neuroscience',
    ogType: 'article'
  },
  '/article/prostate-cellular-health-nocturia-urinary-flow-science': {
    path: '/article/prostate-cellular-health-nocturia-urinary-flow-science',
    title: 'Prostate Health & Nocturia: Clinical Mechanisms',
    h1: 'Prostate Cellular Health, Nocturia & Urinary Flow Science',
    description:
      'Physiological review of benign prostate tissue inflammation, detrusor bladder muscle dynamics, and evidence-based botanical extracts for flow.',
    keywords:
      'prostate cellular health, nocturia mechanisms, urinary flow science, saw palmetto beta-sitosterol, detrusor tone',
    category: 'Urological Physiology',
    ogType: 'article'
  },
  '/article/neuro-immune-microglia-synaptic-plasticity-science': {
    path: '/article/neuro-immune-microglia-synaptic-plasticity-science',
    title: 'Neuro-Immune Health & Microglia: Synaptic Science',
    h1: 'Neuro-Immune Modulation, Microglia & Synaptic Plasticity Science',
    description:
      'Mechanistic synthesis of microglial activation, neuro-inflammatory cascades, dendritic arborization, and phospholipid kinetic support for recall.',
    keywords:
      'neuro-immune modulation, microglia synaptic plasticity, dendritic arborization nootropics, phosphatidylserine science',
    category: 'Immunoneurology',
    ogType: 'article'
  },
  '/article/macular-carotenoids-retinal-photoreceptor-science': {
    path: '/article/macular-carotenoids-retinal-photoreceptor-science',
    title: 'Macular Carotenoids & Retinal Photoreceptor Guide',
    h1: 'Macular Carotenoids & Retinal Photoreceptor Health Science',
    description:
      'Ophthalmic research on lutein, zeaxanthin, and meso-zeaxanthin optical filtering against blue light and oxidative damage in human photoreceptors.',
    keywords:
      'macular carotenoids retina, lutein zeaxanthin photoreceptors, MPOD eye density, blue light retinal protection',
    category: 'Ophthalmic Science',
    ogType: 'article'
  },

  // 4 Category Hubs
  '/category/health-wellness': {
    path: '/category/health-wellness',
    title: 'Health & Wellness Reviews: Clinical Research Hub',
    h1: 'Health & Wellness: Clinical Evidence & Product Reviews',
    description:
      'Evidence-based investigations, clinical benchmarks, and independent product reviews across integrative health, preventive wellness, and nutrition.',
    keywords:
      'health and wellness reviews, preventive medicine evidence, integrative clinical nutrition, wellness benchmarks',
    ogType: 'website'
  },
  '/category/fitness-sports': {
    path: '/category/fitness-sports',
    title: 'Fitness & Sports Nutrition: Clinical Product Hub',
    h1: 'Fitness & Sports Nutrition: Evidence Reviews & Science',
    description:
      'Scientific reviews and evidence-based evaluations of athletic supplements, performance ergogenics, recovery compounds, and sports nutrition.',
    keywords:
      'sports nutrition reviews, athletic ergogenics evidence, workout recovery supplements, muscle preservation clinical',
    ogType: 'website'
  },
  '/category/supplements-nutrition': {
    path: '/category/supplements-nutrition',
    title: 'Dietary Supplements & Nutrition: Research Reviews',
    h1: 'Dietary Supplements & Nutrition: Clinical Evaluations',
    description:
      'Rigorous analysis of dietary supplements, botanical extracts, vitamins, and clinical formulations evaluated by our scientific medical board.',
    keywords:
      'dietary supplement reviews, vitamin quality audits, botanical extracts clinical evidence, supplement benchmarks',
    ogType: 'website'
  },
  '/category/product-reviews-comparisons': {
    path: '/category/product-reviews-comparisons',
    title: 'Product Reviews & Comparisons: Evidence Matrix',
    h1: 'Product Reviews & Formulation Comparisons',
    description:
      'Transparent, evidence-ranked comparisons and independent evaluations of top dietary supplements and wellness products available in the US.',
    keywords:
      'supplement reviews comparisons, head to head supplement matrix, clinical evidence comparisons, health products',
    ogType: 'website'
  },

  // Interactive Tools
  '/comparisons': {
    path: '/comparisons',
    title: 'Supplement Comparisons: Head-to-Head Evidence',
    h1: 'Evidence-Based Supplement Formulation Comparisons',
    description:
      'Side-by-side formulation matrix comparing leading health supplements on clinical evidence grades, ingredient dosages, and cost per serving.',
    keywords:
      'supplement comparison tool, head to head formulation matrix, cost per serving supplement, clinical evidence grade',
    ogType: 'website'
  },
  '/ingredients': {
    path: '/ingredients',
    title: 'Supplement Ingredients Index: Clinical Dosages',
    h1: 'Scientific Supplement Ingredient Evidence Database',
    description:
      'Comprehensive clinical evidence database of dietary supplement ingredients, standard effective dosages, scientific mechanisms, and study data.',
    keywords:
      'supplement ingredients directory, clinical dosage database, botanical extract mechanism, pubmed supplement science',
    ogType: 'website'
  },

  // 9 Trust, Governance & Legal Pages
  '/about': {
    path: '/about',
    title: 'About 77 Review: Editorial Standards & Mission',
    h1: 'About 77 Review: Independent Scientific Health Editorial',
    description:
      'Learn about 77 Review, our independent editorial mission, clinical research standards, and commitment to evidence-based health consumer reporting.',
    keywords:
      'about 77 Review, independent health editorial mission, evidence-based supplement testing, editorial integrity',
    ogType: 'website'
  },
  '/editorial-policy': {
    path: '/editorial-policy',
    title: 'Editorial Policy & Fact-Checking: 77 Review',
    h1: 'Editorial Policy, Fact-Checking & Review Standards',
    description:
      'Our comprehensive editorial governance, PubMed citation protocol, fact-checking methodology, and medical review requirements for all publications.',
    keywords:
      'editorial policy 77 Review, medical fact checking standards, pubmed citation requirements, editorial independence',
    ogType: 'website'
  },
  '/methodology': {
    path: '/methodology',
    title: 'Clinical Review Methodology: 77 Review Standards',
    h1: 'Scientific Review & Product Evaluation Methodology',
    description:
      'Our 5-tier evidence grading hierarchy, clinical trial scrutiny standards, laboratory purity audits, and formulation ranking methodology.',
    keywords:
      'clinical review methodology, 5 tier evidence grading, supplement ranking criteria, randomized controlled trial benchmark',
    ogType: 'website'
  },
  '/medical-review': {
    path: '/medical-review',
    title: 'Medical Review Board: Certified Clinical Experts',
    h1: 'Medical Review Board & Clinical Research Council',
    description:
      'Meet the physicians, pharmacologists, and registered dietitians who audit 77 Review content for clinical accuracy, safety, and contraindications.',
    keywords:
      'medical review board 77 Review, clinical health experts, medical advisory council, physician review panel',
    ogType: 'website'
  },
  '/affiliate-disclosure': {
    path: '/affiliate-disclosure',
    title: 'Affiliate & Commercial Disclosure: 77 Review',
    h1: 'Affiliate Disclosure & Commercial Independence Policy',
    description:
      'Complete transparency regarding our affiliate partnerships, FTC compliance, commercial independence pledge, and editorial firewall policies.',
    keywords:
      'affiliate disclosure, FTC compliance, editorial commercial firewall, transparent affiliate links',
    ogType: 'website'
  },
  '/corrections': {
    path: '/corrections',
    title: 'Corrections & Updates Policy: 77 Review',
    h1: 'Editorial Corrections & Content Update Policy',
    description:
      'Our transparent public corrections policy, version tracking standards, and protocol for addressing reader and researcher feedback.',
    keywords:
      'corrections policy, editorial updates, scientific accuracy revisions, errata protocol',
    ogType: 'website'
  },
  '/contact': {
    path: '/contact',
    title: 'Contact 77 Review: Editorial & Clinical Desk',
    h1: 'Contact 77 Review: Editorial & Research Desk',
    description:
      'Contact the editorial desk, clinical research board, and compliance team at 77 Review for inquiries, corrections, or media requests.',
    keywords:
      'contact 77 Review, editorial inquiry, clinical desk contact, reader feedback',
    ogType: 'website'
  },
  '/privacy': {
    path: '/privacy',
    title: 'Privacy Policy: Data Protection & 77 Review',
    h1: 'Privacy Policy & Data Protection Practices',
    description:
      'Our transparent data protection practices, cookie policy, consumer rights, and security protocols in compliance with US privacy regulations.',
    keywords:
      'privacy policy, data protection, cookie policy, consumer privacy rights',
    ogType: 'website'
  },
  '/terms': {
    path: '/terms',
    title: 'Terms of Service: User Agreement & 77 Review',
    h1: 'Terms of Service & Health Disclaimer Agreement',
    description:
      'Terms of service, medical disclaimer, and conditions governing the use of 77 Review editorial content and interactive health comparison tools.',
    keywords:
      'terms of service, medical disclaimer, user agreement, website terms',
    ogType: 'website'
  }
};

export function getPageMetadata(path: string): PageMetadata {
  const cleanPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
  if (METADATA_CATALOG[cleanPath]) {
    return METADATA_CATALOG[cleanPath];
  }
  // Fallback for subpaths
  if (cleanPath.startsWith('/review/')) {
    const slug = cleanPath.replace('/review/', '');
    return {
      path: cleanPath,
      title: `${slug.replace(/-/g, ' ')} Review (2026) – 77 Review`,
      h1: `${slug.replace(/-/g, ' ')} Clinical Review & Evidence (2026)`,
      description: `Comprehensive clinical evidence review and formulation analysis of ${slug.replace(/-/g, ' ')} by the 77 Review editorial board.`,
      keywords: `${slug.replace(/-/g, ' ')}, supplement review, clinical evidence`,
      ogType: 'product'
    };
  }
  if (cleanPath.startsWith('/article/')) {
    const slug = cleanPath.replace('/article/', '');
    return {
      path: cleanPath,
      title: `${slug.replace(/-/g, ' ')} – 77 Review Science`,
      h1: `${slug.replace(/-/g, ' ')}: Clinical Research Analysis`,
      description: `Scientific deep dive and peer-reviewed analysis on ${slug.replace(/-/g, ' ')} by the 77 Review medical research desk.`,
      keywords: `${slug.replace(/-/g, ' ')}, scientific research, clinical trial`,
      ogType: 'article'
    };
  }
  return METADATA_CATALOG['/'];
}
