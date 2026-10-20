/**
 * Pre-rendering Script for 77 Review (Vite SSG Post-Build)
 * Generates static HTML files for all 28 routes in dist/
 * Guarantees that Bingbot, Googlebot, and web crawlers encounter:
 * 1. Dedicated, unique H1 tag matching Bing Webmaster Guidelines
 * 2. Dedicated, unique <title> and <meta name="description">
 * 3. Exact canonical URL and Schema.org structured data
 * 4. Rich internal hyperlinks connecting all pages, categories, and reviews
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const BASE_URL = 'https://77-review.vercel.app';

// 28 Authoritative Routes & Metadata Catalog
const ROUTES = [
  {
    path: '/',
    title: '77 Review – Evidence-Aware Health, Fitness & Supplement Reviews',
    h1: '77 Review – Evidence-Aware Health, Fitness & Supplement Reviews',
    description: 'Independent health, fitness, and dietary supplement editorial publication delivering evidence-backed reviews, comparisons, and clinical buying guides.',
    type: 'website',
    schemaType: 'WebSite'
  },
  // 6 Product Reviews
  {
    path: '/review/phytomem-one-brain-memory-review',
    title: 'PhytoMemone Review: Clinical Memory Evidence (2026)',
    h1: 'PhytoMemone Review: Clinical Analysis & Memory Complex Evidence (2026)',
    description: 'Independent clinical audit of PhytoMemone. We evaluate saffron, berberine, dosage trials, memory kinetics, safety benchmarks, and verified refund terms.',
    type: 'product',
    brand: 'PhytoMemone',
    rating: '9.4',
    category: 'Brain Health & Nootropics',
    relatedArticle: '/article/brain-glucose-metabolism-saffron-berberine-cognitive-health'
  },
  {
    path: '/review/prodentim-advanced-oral-probiotics-review',
    title: 'ProDentim Review: Clinical Oral Probiotic Guide (2026)',
    h1: 'ProDentim Review: Clinical Evidence on Oral Probiotics & Teeth (2026)',
    description: 'Clinical investigation of ProDentim oral probiotic chewables. We evaluate 3.5 billion CFU strains, gum microbiome studies, and customer trial results.',
    type: 'product',
    brand: 'ProDentim',
    rating: '9.3',
    category: 'Dental & Oral Health',
    relatedArticle: '/article/oral-microbiome-probiotics-periodontal-health-science'
  },
  {
    path: '/review/audisoothe-ear-health-tinnitus-drops-review',
    title: 'AudiSoothe Review: Ear Health & Tinnitus Relief (2026)',
    h1: 'AudiSoothe Review: Clinical Evaluation of Cochlear Ear Drops (2026)',
    description: 'Board-reviewed clinical analysis of AudiSoothe ear drops. We examine cochlear microcirculation, botanical active ingredients, and trial safety data.',
    type: 'product',
    brand: 'AudiSoothe',
    rating: '9.1',
    category: 'Auditory & Ear Health',
    relatedArticle: '/article/auditory-nerve-hyperactivity-cochlear-microcirculation-tinnitus'
  },
  {
    path: '/review/prostavive-prostate-health-vitality-review',
    title: 'ProstaVive Review: Prostate Health & Nocturia (2026)',
    h1: 'ProstaVive Review: Clinical Botanical Powder Evaluation (2026)',
    description: 'Clinical evaluation of ProstaVive powder for nighttime urinary flow, prostate cellular health, and vitality. Full formula breakdown and refund review.',
    type: 'product',
    brand: 'ProstaVive',
    rating: '9.0',
    category: "Men's Health & Longevity",
    relatedArticle: '/article/prostate-cellular-health-nocturia-urinary-flow-science'
  },
  {
    path: '/review/neuroserge-memory-focus-brain-health-review',
    title: 'Neuro Serge Review: Brain Memory & Focus Guide (2026)',
    h1: 'Neuro Serge Review: Clinical Analysis of Memory Complex (2026)',
    description: 'Clinical analysis of Neuro Serge nootropic complex. We examine phosphatidylserine, bacopa monnieri, acetylcholine support, and 180-day refund terms.',
    type: 'product',
    brand: 'Neuro Serge',
    rating: '9.2',
    category: 'Brain Health & Nootropics',
    relatedArticle: '/article/neuro-immune-microglia-synaptic-plasticity-science'
  },
  {
    path: '/review/igenics-vision-breakthrough-eye-health-review',
    title: 'iGenics Review: Vision Restoration & Eye Health (2026)',
    h1: 'iGenics Review: Clinical Evaluation of Vision Restoration Formula (2026)',
    description: 'Board-reviewed clinical evaluation of iGenics vision formula. We audit AREDS-2 carotenoids, lutein, zeaxanthin, saffron, and night contrast acuity.',
    type: 'product',
    brand: 'iGenics',
    rating: '9.1',
    category: 'Eye Health & Vision Longevity',
    relatedArticle: '/article/macular-carotenoids-retinal-photoreceptor-science'
  },

  // 6 Clinical Research Articles
  {
    path: '/article/brain-glucose-metabolism-saffron-berberine-cognitive-health',
    title: 'Brain Glucose & Saffron: Clinical Cognitive Guide',
    h1: 'Brain Glucose Metabolism, Saffron & Berberine in Cognitive Health',
    description: 'Clinical research on brain glucose kinetics, saffron crocins, and berberine AMPK activation for neuro-metabolic protection and memory consolidation.',
    type: 'article',
    author: 'Dr. Evelyn Vance, MD, PhD',
    category: 'Cognitive Science',
    relatedReview: '/review/phytomem-one-brain-memory-review'
  },
  {
    path: '/article/oral-microbiome-probiotics-periodontal-health-science',
    title: 'Oral Microbiome & Probiotics: Periodontal Health',
    h1: 'The Oral Microbiome: Probiotic Strains & Periodontal Health Science',
    description: 'Clinical analysis of oral microflora equilibrium, probiotic repopulation, salivary pH buffering, and periodontal tissue resilience in adults.',
    type: 'article',
    author: 'Dr. Sarah Lin, DDS, MS',
    category: 'Oral Biology',
    relatedReview: '/review/prodentim-advanced-oral-probiotics-review'
  },
  {
    path: '/article/auditory-nerve-hyperactivity-cochlear-microcirculation-tinnitus',
    title: 'Auditory Nerve & Cochlear Microcirculation Science',
    h1: 'Auditory Nerve Hyperactivity & Cochlear Microcirculation Science',
    description: 'Medical review of cochlear stria vascularis microcirculation, neural hyperactivity mechanisms in tinnitus, and evidence-graded botanical agents.',
    type: 'article',
    author: 'Dr. Evelyn Vance, MD, PhD',
    category: 'Auditory Neuroscience',
    relatedReview: '/review/audisoothe-ear-health-tinnitus-drops-review'
  },
  {
    path: '/article/prostate-cellular-health-nocturia-urinary-flow-science',
    title: 'Prostate Health & Nocturia: Clinical Mechanisms',
    h1: 'Prostate Cellular Health, Nocturia & Urinary Flow Science',
    description: 'Physiological review of benign prostate tissue inflammation, detrusor bladder muscle dynamics, and evidence-based botanical extracts for flow.',
    type: 'article',
    author: 'Dr. Michael Chen, MD',
    category: 'Urological Physiology',
    relatedReview: '/review/prostavive-prostate-health-vitality-review'
  },
  {
    path: '/article/neuro-immune-microglia-synaptic-plasticity-science',
    title: 'Neuro-Immune Health & Microglia: Synaptic Science',
    h1: 'Neuro-Immune Modulation, Microglia & Synaptic Plasticity Science',
    description: 'Mechanistic synthesis of microglial activation, neuro-inflammatory cascades, dendritic arborization, and phospholipid kinetic support for recall.',
    type: 'article',
    author: 'Dr. Evelyn Vance, MD, PhD',
    category: 'Immunoneurology',
    relatedReview: '/review/neuroserge-memory-focus-brain-health-review'
  },
  {
    path: '/article/macular-carotenoids-retinal-photoreceptor-science',
    title: 'Macular Carotenoids & Retinal Photoreceptor Guide',
    h1: 'Macular Carotenoids & Retinal Photoreceptor Health Science',
    description: 'Ophthalmic research on lutein, zeaxanthin, and meso-zeaxanthin optical filtering against blue light and oxidative damage in human photoreceptors.',
    type: 'article',
    author: 'Dr. Evelyn Vance, MD, PhD',
    category: 'Ophthalmic Science',
    relatedReview: '/review/igenics-vision-breakthrough-eye-health-review'
  },

  // 4 Category Hubs
  {
    path: '/category/health-wellness',
    title: 'Health & Wellness Reviews: Clinical Research Hub',
    h1: 'Health & Wellness: Clinical Evidence & Product Reviews',
    description: 'Evidence-based investigations, clinical benchmarks, and independent product reviews across integrative health, preventive wellness, and nutrition.',
    type: 'category'
  },
  {
    path: '/category/fitness-sports',
    title: 'Fitness & Sports Nutrition: Clinical Product Hub',
    h1: 'Fitness & Sports Nutrition: Evidence Reviews & Science',
    description: 'Scientific reviews and evidence-based evaluations of athletic supplements, performance ergogenics, recovery compounds, and sports nutrition.',
    type: 'category'
  },
  {
    path: '/category/supplements-nutrition',
    title: 'Dietary Supplements & Nutrition: Research Reviews',
    h1: 'Dietary Supplements & Nutrition: Clinical Evaluations',
    description: 'Rigorous analysis of dietary supplements, botanical extracts, vitamins, and clinical formulations evaluated by our scientific medical board.',
    type: 'category'
  },
  {
    path: '/category/product-reviews-comparisons',
    title: 'Product Reviews & Comparisons: Evidence Matrix',
    h1: 'Product Reviews & Formulation Comparisons',
    description: 'Transparent, evidence-ranked comparisons and independent evaluations of top dietary supplements and wellness products available in the US.',
    type: 'category'
  },

  // Interactive Tools
  {
    path: '/comparisons',
    title: 'Supplement Comparisons: Head-to-Head Evidence',
    h1: 'Evidence-Based Supplement Formulation Comparisons',
    description: 'Side-by-side formulation matrix comparing leading health supplements on clinical evidence grades, ingredient dosages, and cost per serving.',
    type: 'tool'
  },
  {
    path: '/ingredients',
    title: 'Supplement Ingredients Index: Clinical Dosages',
    h1: 'Scientific Supplement Ingredient Evidence Database',
    description: 'Comprehensive clinical evidence database of dietary supplement ingredients, standard effective dosages, scientific mechanisms, and study data.',
    type: 'tool'
  },

  // 9 Trust, Governance & Legal Pages
  {
    path: '/about',
    title: 'About 77 Review: Editorial Standards & Mission',
    h1: 'About 77 Review: Independent Scientific Health Editorial',
    description: 'Learn about 77 Review, our independent editorial mission, clinical research standards, and commitment to evidence-based health consumer reporting.',
    type: 'legal'
  },
  {
    path: '/editorial-policy',
    title: 'Editorial Policy & Fact-Checking: 77 Review',
    h1: 'Editorial Policy, Fact-Checking & Review Standards',
    description: 'Our comprehensive editorial governance, PubMed citation protocol, fact-checking methodology, and medical review requirements for all publications.',
    type: 'legal'
  },
  {
    path: '/methodology',
    title: 'Clinical Review Methodology: 77 Review Standards',
    h1: 'Scientific Review & Product Evaluation Methodology',
    description: 'Our 5-tier evidence grading hierarchy, clinical trial scrutiny standards, laboratory purity audits, and formulation ranking methodology.',
    type: 'legal'
  },
  {
    path: '/medical-review',
    title: 'Medical Review Board: Certified Clinical Experts',
    h1: 'Medical Review Board & Clinical Research Council',
    description: 'Meet the physicians, pharmacologists, and registered dietitians who audit 77 Review content for clinical accuracy, safety, and contraindications.',
    type: 'legal'
  },
  {
    path: '/affiliate-disclosure',
    title: 'Affiliate & Commercial Disclosure: 77 Review',
    h1: 'Affiliate Disclosure & Commercial Independence Policy',
    description: 'Complete transparency regarding our affiliate partnerships, FTC compliance, commercial independence pledge, and editorial firewall policies.',
    type: 'legal'
  },
  {
    path: '/corrections',
    title: 'Corrections & Updates Policy: 77 Review',
    h1: 'Editorial Corrections & Content Update Policy',
    description: 'Our transparent public corrections policy, version tracking standards, and protocol for addressing reader and researcher feedback.',
    type: 'legal'
  },
  {
    path: '/contact',
    title: 'Contact 77 Review: Editorial & Clinical Desk',
    h1: 'Contact 77 Review: Editorial & Research Desk',
    description: 'Contact the editorial desk, clinical research board, and compliance team at 77 Review for inquiries, corrections, or media requests.',
    type: 'legal'
  },
  {
    path: '/privacy',
    title: 'Privacy Policy: Data Protection & 77 Review',
    h1: 'Privacy Policy & Data Protection Practices',
    description: 'Our transparent data protection practices, cookie policy, consumer rights, and security protocols in compliance with US privacy regulations.',
    type: 'legal'
  },
  {
    path: '/terms',
    title: 'Terms of Service: User Agreement & 77 Review',
    h1: 'Terms of Service & Health Disclaimer Agreement',
    description: 'Terms of service, medical disclaimer, and conditions governing the use of 77 Review editorial content and interactive health comparison tools.',
    type: 'legal'
  }
];

function generateStaticHtml(template, route) {
  const canonicalUrl = `${BASE_URL}${route.path === '/' ? '/' : route.path}`;
  let html = template;

  // 1. Update <title>
  html = html.replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`);

  // 2. Update <meta name="description">
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/>/s,
    `<meta name="description" content="${route.description}" />`
  );

  // 3. Update canonical URL
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/>/s,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // 4. Update OpenGraph tags
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/>/s,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/>/s,
    `<meta property="og:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/>/s,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  // 5. Update Twitter tags
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/>/s,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/>/s,
    `<meta name="twitter:description" content="${route.description}" />`
  );

  // 6. Generate Page-Specific Schema.org JSON-LD
  const schemaGraph = [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "77 Review",
      "url": BASE_URL,
      "logo": `${BASE_URL}/logo-77review.png`,
      "email": "thevitalityradar@gmail.com"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BASE_URL
        },
        ...(route.path !== '/' ? [
          {
            "@type": "ListItem",
            "position": 2,
            "name": route.h1,
            "item": canonicalUrl
          }
        ] : [])
      ]
    }
  ];

  if (route.type === 'product') {
    schemaGraph.push({
      "@type": "Product",
      "name": route.brand || route.h1,
      "description": route.description,
      "image": `${BASE_URL}/logo-77review.png`,
      "brand": {
        "@type": "Brand",
        "name": route.brand || "77 Review Verified"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": route.rating || "9.2",
        "bestRating": "10",
        "worstRating": "1",
        "ratingCount": 128
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": route.rating || "9.2",
          "bestRating": "10"
        },
        "author": {
          "@type": "Organization",
          "name": "77 Review Clinical Board"
        }
      }
    });
  } else if (route.type === 'article') {
    schemaGraph.push({
      "@type": "MedicalWebPage",
      "headline": route.h1,
      "description": route.description,
      "url": canonicalUrl,
      "author": {
        "@type": "Person",
        "name": route.author || "77 Review Medical Desk"
      },
      "publisher": {
        "@id": `${BASE_URL}/#organization`
      },
      "inLanguage": "en-US"
    });
  }

  const schemaTag = `<script type="application/ld+json">\n${JSON.stringify({ "@context": "https://schema.org", "@graph": schemaGraph }, null, 2)}\n    </script>`;
  html = html.replace(/<script type="application\/ld\+json">.*?<\/script>/s, schemaTag);

  // 7. Generate Semantic Body Content inside <div id="root">
  // This guarantees Bingbot extracts the exact H1 and internal links immediately without executing JavaScript
  const breadcrumbHtml = route.path === '/' ? '' : `
    <nav aria-label="Breadcrumb" style="font-size: 0.75rem; font-family: monospace; color: #78716c; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
      <a href="/" style="color: #065f46; text-decoration: none; font-weight: 600;">Home</a>
      <span>/</span>
      <span style="color: #44403c;">${route.type.toUpperCase()}</span>
      <span>/</span>
      <span style="color: #1c1917; font-weight: 500;">${route.h1}</span>
    </nav>
  `;

  const relatedLinksHtml = `
    <section style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e7e5e4;">
      <h2 style="font-size: 1.25rem; font-family: 'Source Serif 4', Georgia, serif; font-weight: 700; color: #1c1917; margin-bottom: 1rem;">
        Essential Editorial Health & Supplement Guides
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; font-size: 0.8125rem;">
        <div style="padding: 1rem; border: 1px solid #e7e5e4; background: #fafaf9;">
          <strong style="display: block; color: #065f46; font-size: 0.6875rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Clinical Review</strong>
          <a href="/review/phytomem-one-brain-memory-review" style="color: #1c1917; font-weight: 600; text-decoration: underline;">PhytoMemone Review (2026)</a>
          <p style="margin: 0.25rem 0 0 0; color: #78716c;">Saffron, Berberine & Brain Glucose kinetics audit.</p>
        </div>
        <div style="padding: 1rem; border: 1px solid #e7e5e4; background: #fafaf9;">
          <strong style="display: block; color: #065f46; font-size: 0.6875rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Clinical Review</strong>
          <a href="/review/prodentim-advanced-oral-probiotics-review" style="color: #1c1917; font-weight: 600; text-decoration: underline;">ProDentim Review (2026)</a>
          <p style="margin: 0.25rem 0 0 0; color: #78716c;">Oral microbiome chewable probiotic clinical trial.</p>
        </div>
        <div style="padding: 1rem; border: 1px solid #e7e5e4; background: #fafaf9;">
          <strong style="display: block; color: #065f46; font-size: 0.6875rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Research Paper</strong>
          <a href="/article/brain-glucose-metabolism-saffron-berberine-cognitive-health" style="color: #1c1917; font-weight: 600; text-decoration: underline;">Brain Glucose & Saffron Science</a>
          <p style="margin: 0.25rem 0 0 0; color: #78716c;">AMPK activation and neuro-metabolic protection.</p>
        </div>
        <div style="padding: 1rem; border: 1px solid #e7e5e4; background: #fafaf9;">
          <strong style="display: block; color: #065f46; font-size: 0.6875rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Interactive Tool</strong>
          <a href="/comparisons" style="color: #1c1917; font-weight: 600; text-decoration: underline;">Head-to-Head Comparison Matrix</a>
          <p style="margin: 0.25rem 0 0 0; color: #78716c;">Compare price per dose & clinical evidence grades.</p>
        </div>
        <div style="padding: 1rem; border: 1px solid #e7e5e4; background: #fafaf9;">
          <strong style="display: block; color: #065f46; font-size: 0.6875rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Clinical Database</strong>
          <a href="/ingredients" style="color: #1c1917; font-weight: 600; text-decoration: underline;">PubMed Ingredient Evidence Index</a>
          <p style="margin: 0.25rem 0 0 0; color: #78716c;">Human clinical trials and studied dosage thresholds.</p>
        </div>
        <div style="padding: 1rem; border: 1px solid #e7e5e4; background: #fafaf9;">
          <strong style="display: block; color: #065f46; font-size: 0.6875rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Institutional Trust</strong>
          <a href="/editorial-policy" style="color: #1c1917; font-weight: 600; text-decoration: underline;">Editorial Policy & Fact-Checking</a>
          <p style="margin: 0.25rem 0 0 0; color: #78716c;">Our rigorous 7-gate human verification protocol.</p>
        </div>
      </div>
    </section>
  `;

  const footerLinksHtml = `
    <footer style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid #292524; color: #78716c; font-size: 0.75rem;">
      <div style="margin-bottom: 1.5rem; display: flex; flex-wrap: wrap; gap: 1rem;">
        <a href="/" style="color: #065f46; font-weight: 600; text-decoration: none;">Home</a>
        <a href="/category/supplements-nutrition" style="color: #57534e; text-decoration: none;">Supplements & Nutrition</a>
        <a href="/category/health-wellness" style="color: #57534e; text-decoration: none;">Health & Wellness</a>
        <a href="/category/fitness-sports" style="color: #57534e; text-decoration: none;">Fitness & Sports</a>
        <a href="/category/product-reviews-comparisons" style="color: #57534e; text-decoration: none;">Product Reviews</a>
        <a href="/comparisons" style="color: #57534e; text-decoration: none;">Comparison Matrix</a>
        <a href="/ingredients" style="color: #57534e; text-decoration: none;">Ingredients Index</a>
        <a href="/about" style="color: #57534e; text-decoration: none;">About</a>
        <a href="/editorial-policy" style="color: #57534e; text-decoration: none;">Editorial Policy</a>
        <a href="/methodology" style="color: #57534e; text-decoration: none;">Methodology</a>
        <a href="/medical-review" style="color: #57534e; text-decoration: none;">Medical Review Board</a>
        <a href="/affiliate-disclosure" style="color: #57534e; text-decoration: none;">Affiliate Disclosure</a>
        <a href="/corrections" style="color: #57534e; text-decoration: none;">Corrections</a>
        <a href="/contact" style="color: #57534e; text-decoration: none;">Contact</a>
        <a href="/privacy" style="color: #57534e; text-decoration: none;">Privacy Policy</a>
        <a href="/terms" style="color: #57534e; text-decoration: none;">Terms of Use</a>
      </div>
      <p style="margin: 0;">© 2026 77 Review. Evidence-Aware Health, Fitness & Supplement Reviews. All rights reserved.</p>
    </footer>
  `;

  const bodyContent = `
    <div id="root">
      <main style="max-width: 1200px; margin: 0 auto; padding: 2.5rem 1.5rem; font-family: system-ui, -apple-system, sans-serif;">
        ${breadcrumbHtml}
        <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em; color: #065f46; font-weight: 600; display: block; margin-bottom: 0.5rem;">
          77 Review Clinical Desk · Peer-Reviewed Evidence 2026
        </span>
        <h1 style="font-size: 2.25rem; line-height: 1.25; font-weight: 700; color: #1c1917; font-family: 'Source Serif 4', Georgia, serif; letter-spacing: -0.025em; margin: 0 0 1rem 0;">
          ${route.h1}
        </h1>
        <p style="font-size: 1.125rem; color: #57534e; line-height: 1.6; max-width: 48rem; margin: 0 0 1.5rem 0;">
          ${route.description}
        </p>
        ${relatedLinksHtml}
        ${footerLinksHtml}
      </main>
    </div>
  `;

  html = html.replace(/<div id="root">.*?<\/div>\s*<script/s, `${bodyContent.trim()}\n    <script`);

  return html;
}

function runPrerender() {
  console.log('🚀 Starting Pre-rendering for 77 Review static routes...');

  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ Error: dist/ directory does not exist! Run "vite build" first.');
    process.exit(1);
  }

  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('❌ Error: dist/index.html template not found.');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf8');
  let generatedCount = 0;

  for (const route of ROUTES) {
    const pageHtml = generateStaticHtml(template, route);

    if (route.path === '/') {
      fs.writeFileSync(templatePath, pageHtml, 'utf8');
      console.log(`  ✓ Prerendered Homepage: dist/index.html (H1: "${route.h1}")`);
    } else {
      const targetDir = path.join(DIST_DIR, route.path.replace(/^\//, ''));
      fs.mkdirSync(targetDir, { recursive: true });
      const targetFile = path.join(targetDir, 'index.html');
      fs.writeFileSync(targetFile, pageHtml, 'utf8');
      console.log(`  ✓ Prerendered Route: ${route.path}/index.html (H1: "${route.h1}")`);
    }
    generatedCount++;
  }

  console.log(`✨ Successfully prerendered ${generatedCount} static HTML pages with unique H1 and internal hyperlinks.`);
}

runPrerender();
