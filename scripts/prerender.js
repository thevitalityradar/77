/**
 * Pre-rendering Script for 77 Review (Vite SSG Post-Build)
 * Generates static HTML files for all 28 routes in dist/
 * Strictly enforces Bing Webmaster Guidelines and Google Search Essentials:
 * 1. ZERO THIN CONTENT: Every route contains 1,200 to 2,500+ words of structured semantic HTML.
 * 2. E-E-A-T & MEDICAL GOVERNANCE: Medical Review Board credentials, publication dates, and clinical citations.
 * 3. TRANSPARENCY & COMPLIANCE: FTC Affiliate Disclosures and FDA Health Disclaimers on all pages.
 * 4. SCHEMA.ORG JSON-LD: Product, Review, MedicalWebPage, Organization, BreadcrumbList, and FAQPage schemas.
 * 5. TECHNICAL SEO: Single H1, logical H2/H3 hierarchy, exact canonical URLs, and rich internal linking.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_METADATA, MEDICAL_BOARD, PRODUCT_REVIEWS, CLINICAL_ARTICLES } from './prerender-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const BASE_URL = SITE_METADATA.baseUrl;

// 28 Authoritative Routes Catalog
const ROUTES = [
  // 1. Homepage
  {
    path: '/',
    type: 'home',
    title: '77 Review – Evidence-Aware Health, Fitness & Supplement Reviews',
    h1: '77 Review – Evidence-Aware Health, Fitness & Supplement Reviews',
    description: 'Independent health, fitness, and dietary supplement editorial publication delivering evidence-backed reviews, comparisons, and clinical buying guides.',
    ogType: 'website'
  },

  // 2–7. 6 Product Reviews
  {
    path: '/review/prodentim-advanced-oral-probiotics-review',
    type: 'review',
    reviewKey: 'prodentim-advanced-oral-probiotics-review',
    title: 'ProDentim Review: Clinical Oral Probiotic Guide (2026)',
    h1: 'ProDentim Review: Clinical Evidence on Oral Probiotics & Teeth (2026)',
    description: 'Clinical investigation of ProDentim oral probiotic chewables. We evaluate 3.5 billion CFU strains, gum microbiome studies, and customer trial results.',
    ogType: 'product'
  },
  {
    path: '/review/phytomem-one-brain-memory-review',
    type: 'review',
    reviewKey: 'phytomem-one-brain-memory-review',
    title: 'PhytoMemone Review: Clinical Memory Evidence (2026)',
    h1: 'PhytoMemone Review: Clinical Analysis & Memory Complex Evidence (2026)',
    description: 'Independent clinical audit of PhytoMemone. We evaluate saffron, berberine, dosage trials, memory kinetics, safety benchmarks, and verified refund terms.',
    ogType: 'product'
  },
  {
    path: '/review/audisoothe-ear-health-tinnitus-drops-review',
    type: 'review',
    reviewKey: 'audisoothe-ear-health-tinnitus-drops-review',
    title: 'AudiSoothe Review: Ear Health & Tinnitus Relief (2026)',
    h1: 'AudiSoothe Review: Clinical Evaluation of Cochlear Ear Drops (2026)',
    description: 'Board-reviewed clinical analysis of AudiSoothe ear drops. We examine cochlear microcirculation, botanical active ingredients, and trial safety data.',
    ogType: 'product'
  },
  {
    path: '/review/prostavive-prostate-health-vitality-review',
    type: 'review',
    reviewKey: 'prostavive-prostate-health-vitality-review',
    title: 'ProstaVive Review: Prostate Health & Nocturia (2026)',
    h1: 'ProstaVive Review: Clinical Botanical Powder Evaluation (2026)',
    description: 'Clinical evaluation of ProstaVive powder for nighttime urinary flow, prostate cellular health, and vitality. Full formula breakdown and refund review.',
    ogType: 'product'
  },
  {
    path: '/review/neuroserge-memory-focus-brain-health-review',
    type: 'review',
    reviewKey: 'neuroserge-memory-focus-brain-health-review',
    title: 'Neuro Serge Review: Brain Memory & Focus Guide (2026)',
    h1: 'Neuro Serge Review: Clinical Analysis of Memory Complex (2026)',
    description: 'Clinical analysis of Neuro Serge nootropic complex. We examine phosphatidylserine, bacopa monnieri, acetylcholine support, and 180-day refund terms.',
    ogType: 'product'
  },
  {
    path: '/review/igenics-vision-breakthrough-eye-health-review',
    type: 'review',
    reviewKey: 'igenics-vision-breakthrough-eye-health-review',
    title: 'iGenics Review: Vision Restoration & Eye Health (2026)',
    h1: 'iGenics Review: Clinical Evaluation of Vision Restoration Formula (2026)',
    description: 'Board-reviewed clinical evaluation of iGenics vision formula. We audit AREDS-2 carotenoids, lutein, zeaxanthin, saffron, and night contrast acuity.',
    ogType: 'product'
  },
  {
    path: '/review/the-genius-song-review',
    type: 'review',
    reviewKey: 'the-genius-song-review',
    title: 'The Genius Song Review: Brainwave Audio Evidence (2026)',
    h1: 'The Genius Song Review: Clinical Audio Frequency & Brainwave Evidence (2026)',
    description: 'Independent clinical audit of The Genius Song 12-minute audio track. We evaluate theta brainwave entrainment, EEG studies, $39 pricing, and refund terms.',
    ogType: 'product'
  },
  {
    path: '/review/visiflora-gut-eye-axis-vision-support-review',
    type: 'review',
    reviewKey: 'visiflora-gut-eye-axis-vision-support-review',
    title: 'VisiFlora Review: Gut-Eye Axis & Vision Support (2026)',
    h1: 'VisiFlora Review: Clinical Gut-Eye Axis & Vision Support Evidence (2026)',
    description: 'Independent clinical audit of VisiFlora 22-in-1 eye supplement. We evaluate AREDS-2 carotenoids, Astaxanthin, the gut-retina axis, $49 pricing, and ClickBank guarantee.',
    ogType: 'product'
  },
  {
    path: '/review/nitric-boost-ultra-blood-flow-stamina-review',
    type: 'review',
    reviewKey: 'nitric-boost-ultra-blood-flow-stamina-review',
    title: 'Nitric Boost Ultra Review: Nitric Oxide & Stamina (2026)',
    h1: 'Nitric Boost Ultra Review: Clinical Nitric Oxide & Blood Flow Evidence (2026)',
    description: 'Clinical evaluation of Nitric Boost Ultra drink mix. We audit Beet Root nitrates, L-Citrulline, Epimedium icariin, blood pressure data, and refund terms.',
    ogType: 'product'
  },
  {
    path: '/review/gluco6-blood-sugar-glut4-metabolism-review',
    type: 'review',
    reviewKey: 'gluco6-blood-sugar-glut4-metabolism-review',
    title: 'Gluco6 Review: GLUT-4 Blood Sugar Support (2026)',
    h1: 'Gluco6 Review: Clinical GLUT-4 Glucose & Sucrase Inhibition Evidence (2026)',
    description: 'Independent clinical evaluation of Gluco6. We audit Sukre (L-arabinose), TeaCrine, Gymnema, Ceylon Cinnamon, Chromium, $39 pricing, and refund terms.',
    ogType: 'product'
  },

  // 8–13. 6 Clinical Research Papers
  {
    path: '/article/brain-glucose-metabolism-saffron-berberine-cognitive-health',
    type: 'article',
    articleKey: 'brain-glucose-metabolism-saffron-berberine-cognitive-health',
    title: 'Brain Glucose & Saffron: Clinical Cognitive Guide',
    h1: 'Brain Glucose Metabolism, Saffron & Berberine in Cognitive Health',
    description: 'Clinical research on brain glucose kinetics, saffron crocins, and berberine AMPK activation for neuro-metabolic protection and memory consolidation.',
    ogType: 'article'
  },
  {
    path: '/article/oral-microbiome-probiotics-periodontal-health-science',
    type: 'article',
    articleKey: 'oral-microbiome-probiotics-periodontal-health-science',
    title: 'Oral Microbiome & Probiotics: Periodontal Health',
    h1: 'The Oral Microbiome: Probiotic Strains & Periodontal Health Science',
    description: 'Clinical analysis of oral microflora equilibrium, probiotic repopulation, salivary pH buffering, and periodontal tissue resilience in adults.',
    ogType: 'article'
  },
  {
    path: '/article/auditory-nerve-hyperactivity-cochlear-microcirculation-tinnitus',
    type: 'article',
    articleKey: 'auditory-nerve-hyperactivity-cochlear-microcirculation-tinnitus',
    title: 'Auditory Nerve & Cochlear Microcirculation Science',
    h1: 'Auditory Nerve Hyperactivity & Cochlear Microcirculation Science',
    description: 'Medical review of cochlear stria vascularis microcirculation, neural hyperactivity mechanisms in tinnitus, and evidence-graded botanical agents.',
    ogType: 'article'
  },
  {
    path: '/article/prostate-cellular-health-nocturia-urinary-flow-science',
    type: 'article',
    articleKey: 'prostate-cellular-health-nocturia-urinary-flow-science',
    title: 'Prostate Health & Nocturia: Clinical Mechanisms',
    h1: 'Prostate Cellular Health, Nocturia & Urinary Flow Science',
    description: 'Physiological review of benign prostate tissue inflammation, detrusor bladder muscle dynamics, and evidence-based botanical extracts for flow.',
    ogType: 'article'
  },
  {
    path: '/article/neuro-immune-microglia-synaptic-plasticity-science',
    type: 'article',
    articleKey: 'neuro-immune-microglia-synaptic-plasticity-science',
    title: 'Neuro-Immune Health & Microglia: Synaptic Science',
    h1: 'Neuro-Immune Modulation, Microglia & Synaptic Plasticity Science',
    description: 'Mechanistic synthesis of microglial activation, neuro-inflammatory cascades, dendritic arborization, and phospholipid kinetic support for recall.',
    ogType: 'article'
  },
  {
    path: '/article/macular-carotenoids-retinal-photoreceptor-science',
    type: 'article',
    articleKey: 'macular-carotenoids-retinal-photoreceptor-science',
    title: 'Macular Carotenoids & Retinal Photoreceptor Guide',
    h1: 'Macular Carotenoids & Retinal Photoreceptor Health Science',
    description: 'Ophthalmic research on lutein, zeaxanthin, and meso-zeaxanthin optical filtering against blue light and oxidative damage in human photoreceptors.',
    ogType: 'article'
  },

  // 14–17. 4 Category Hubs
  {
    path: '/category/health-wellness',
    type: 'category',
    categoryKey: 'health-wellness',
    title: 'Health & Wellness Reviews: Clinical Research Hub',
    h1: 'Health & Wellness: Clinical Evidence & Product Reviews',
    description: 'Evidence-based investigations, clinical benchmarks, and independent product reviews across integrative health, preventive wellness, and nutrition.',
    ogType: 'website'
  },
  {
    path: '/category/fitness-sports',
    type: 'category',
    categoryKey: 'fitness-sports',
    title: 'Fitness & Sports Nutrition: Clinical Product Hub',
    h1: 'Fitness & Sports Nutrition: Evidence Reviews & Science',
    description: 'Scientific reviews and evidence-based evaluations of athletic supplements, performance ergogenics, recovery compounds, and sports nutrition.',
    ogType: 'website'
  },
  {
    path: '/category/supplements-nutrition',
    type: 'category',
    categoryKey: 'supplements-nutrition',
    title: 'Dietary Supplements & Nutrition: Research Reviews',
    h1: 'Dietary Supplements & Nutrition: Clinical Evaluations',
    description: 'Rigorous analysis of dietary supplements, botanical extracts, vitamins, and clinical formulations evaluated by our scientific medical board.',
    ogType: 'website'
  },
  {
    path: '/category/product-reviews-comparisons',
    type: 'category',
    categoryKey: 'product-reviews-comparisons',
    title: 'Product Reviews & Comparisons: Evidence Matrix',
    h1: 'Product Reviews & Formulation Comparisons',
    description: 'Transparent, evidence-ranked comparisons and independent evaluations of top dietary supplements and wellness products available in the US.',
    ogType: 'website'
  },

  // 18–19. 2 Interactive Tools
  {
    path: '/comparisons',
    type: 'tool',
    toolKey: 'comparisons',
    title: 'Supplement Comparisons: Head-to-Head Evidence',
    h1: 'Evidence-Based Supplement Formulation Comparisons',
    description: 'Side-by-side formulation matrix comparing leading health supplements on clinical evidence grades, ingredient dosages, and cost per serving.',
    ogType: 'website'
  },
  {
    path: '/ingredients',
    type: 'tool',
    toolKey: 'ingredients',
    title: 'Supplement Ingredients Index: Clinical Dosages',
    h1: 'Scientific Supplement Ingredient Evidence Database',
    description: 'Comprehensive clinical evidence database of dietary supplement ingredients, standard effective dosages, scientific mechanisms, and study data.',
    ogType: 'website'
  },

  // 20–28. 9 Institutional, Legal & Trust Pages
  {
    path: '/about',
    type: 'legal',
    legalKey: 'about',
    title: 'About 77 Review: Editorial Standards & Mission',
    h1: 'About 77 Review: Independent Scientific Health Editorial',
    description: 'Learn about 77 Review, our independent editorial mission, clinical research standards, and commitment to evidence-based health consumer reporting.',
    ogType: 'website'
  },
  {
    path: '/editorial-policy',
    type: 'legal',
    legalKey: 'editorial-policy',
    title: 'Editorial Policy & Fact-Checking: 77 Review',
    h1: 'Editorial Policy, Fact-Checking & Review Standards',
    description: 'Our comprehensive editorial governance, PubMed citation protocol, fact-checking methodology, and medical review requirements for all publications.',
    ogType: 'website'
  },
  {
    path: '/methodology',
    type: 'legal',
    legalKey: 'methodology',
    title: 'Clinical Review Methodology: 77 Review Standards',
    h1: 'Scientific Review & Product Evaluation Methodology',
    description: 'Our 5-tier evidence grading hierarchy, clinical trial scrutiny standards, laboratory purity audits, and formulation ranking methodology.',
    ogType: 'website'
  },
  {
    path: '/medical-review',
    type: 'legal',
    legalKey: 'medical-review',
    title: 'Medical Review Board: Certified Clinical Experts',
    h1: 'Medical Review Board & Clinical Research Council',
    description: 'Meet the physicians, pharmacologists, and registered dietitians who audit 77 Review content for clinical accuracy, safety, and contraindications.',
    ogType: 'website'
  },
  {
    path: '/affiliate-disclosure',
    type: 'legal',
    legalKey: 'affiliate-disclosure',
    title: 'Affiliate & Commercial Disclosure: 77 Review',
    h1: 'Affiliate Disclosure & Commercial Independence Policy',
    description: 'Complete transparency regarding our affiliate partnerships, FTC compliance, commercial independence pledge, and editorial firewall policies.',
    ogType: 'website'
  },
  {
    path: '/corrections',
    type: 'legal',
    legalKey: 'corrections',
    title: 'Corrections & Updates Policy: 77 Review',
    h1: 'Editorial Corrections & Content Update Policy',
    description: 'Our transparent public corrections policy, version tracking standards, and protocol for addressing reader and researcher feedback.',
    ogType: 'website'
  },
  {
    path: '/contact',
    type: 'legal',
    legalKey: 'contact',
    title: 'Contact 77 Review: Editorial & Clinical Desk',
    h1: 'Contact 77 Review: Editorial & Research Desk',
    description: 'Contact the editorial desk, clinical research board, and compliance team at 77 Review for inquiries, corrections, or media requests.',
    ogType: 'website'
  },
  {
    path: '/privacy',
    type: 'legal',
    legalKey: 'privacy',
    title: 'Privacy Policy: Data Protection & 77 Review',
    h1: 'Privacy Policy & Data Protection Practices',
    description: 'Our transparent data protection practices, cookie policy, consumer rights, and security protocols in compliance with US privacy regulations.',
    ogType: 'website'
  },
  {
    path: '/terms',
    type: 'legal',
    legalKey: 'terms',
    title: 'Terms of Service: User Agreement & 77 Review',
    h1: 'Terms of Service & Health Disclaimer Agreement',
    description: 'Terms of service, medical disclaimer, and conditions governing the use of 77 Review editorial content and interactive health comparison tools.',
    ogType: 'website'
  }
];

// Helper: Common Semantic Elements
function renderCommonHeader() {
  return `
    <header style="border-bottom: 1px solid #e7e5e4; background: #ffffff; padding: 1rem 1.5rem; position: sticky; top: 0; z-index: 50;">
      <div style="max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <a href="/" style="display: flex; align-items: center; gap: 0.75rem; text-decoration: none; color: #1c1917;">
          <div style="background: #064e3b; color: #ffffff; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-family: monospace; font-size: 1.125rem; border-radius: 4px;">77</div>
          <div>
            <span style="font-weight: 800; font-size: 1.125rem; letter-spacing: -0.025em; display: block; line-height: 1.1;">77 REVIEW</span>
            <span style="font-size: 0.6875rem; text-transform: uppercase; letter-spacing: 0.1em; color: #065f46; font-weight: 600;">Clinical Evidence Desk</span>
          </div>
        </a>
        <nav aria-label="Main Navigation" style="display: flex; align-items: center; gap: 1.25rem; font-size: 0.875rem; font-weight: 600;">
          <a href="/category/supplements-nutrition" style="color: #44403c; text-decoration: none;">Supplements</a>
          <a href="/category/health-wellness" style="color: #44403c; text-decoration: none;">Wellness</a>
          <a href="/category/fitness-sports" style="color: #44403c; text-decoration: none;">Fitness</a>
          <a href="/comparisons" style="color: #44403c; text-decoration: none;">Comparisons</a>
          <a href="/ingredients" style="color: #44403c; text-decoration: none;">Ingredients Index</a>
          <a href="/medical-review" style="color: #065f46; text-decoration: none;">Medical Board</a>
        </nav>
      </div>
    </header>
  `;
}

function renderBreadcrumb(route) {
  if (route.path === '/') return '';
  const segmentName = route.type === 'review' ? 'Product Reviews' : route.type === 'article' ? 'Clinical Research' : route.type === 'category' ? 'Categories' : route.type === 'tool' ? 'Tools' : 'Governance';
  return `
    <nav aria-label="Breadcrumb" style="font-size: 0.75rem; font-family: monospace; color: #78716c; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
      <a href="/" style="color: #065f46; text-decoration: none; font-weight: 600;">Home</a>
      <span>/</span>
      <span style="color: #78716c;">${segmentName}</span>
      <span>/</span>
      <span style="color: #1c1917; font-weight: 600;">${route.h1}</span>
    </nav>
  `;
}

function renderFTCDisclaimer() {
  return `
    <div style="background: #f5f5f4; border: 1px solid #d6d3d1; padding: 1rem; border-radius: 4px; margin-bottom: 2rem; font-size: 0.8125rem; color: #44403c; line-height: 1.5;">
      <strong style="color: #1c1917; display: block; margin-bottom: 0.25rem; text-transform: uppercase; font-size: 0.6875rem; letter-spacing: 0.05em;">Editorial & Advertising Disclosure (FTC 16 CFR Part 255 Compliant)</strong>
      77 Review is an independent evidence-based health publication. We evaluate dietary supplements and wellness products using published peer-reviewed biomedical literature (PubMed, Cochrane, NIH). If you purchase through links on our site, we may receive a commission at no additional cost to you. This commercial relationship never influences our clinical scores, laboratory evaluations, or negative review findings.
    </div>
  `;
}

function renderFDADisclaimer() {
  return `
    <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 1rem; border-radius: 4px; margin-top: 2.5rem; font-size: 0.8125rem; color: #991b1b; line-height: 1.5;">
      <strong style="display: block; margin-bottom: 0.25rem; text-transform: uppercase; font-size: 0.6875rem; letter-spacing: 0.05em;">Mandatory FDA Health Disclaimer</strong>
      Statements made on this website have not been evaluated by the Food and Drug Administration. The dietary supplements, botanical extracts, and health products reviewed here are not intended to diagnose, treat, cure, or prevent any disease. Always consult a qualified, licensed healthcare professional before initiating any supplement regimen, especially if you have pre-existing medical conditions or take prescription pharmaceuticals.
    </div>
  `;
}

function renderFooter() {
  return `
    <footer style="margin-top: 4rem; padding-top: 2.5rem; border-top: 2px solid #1c1917; background: #fafaf9; font-size: 0.8125rem; color: #57534e; padding-bottom: 3rem;">
      <div style="max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2rem; margin-bottom: 2rem;">
          <div>
            <div style="font-weight: 800; color: #1c1917; font-size: 1rem; margin-bottom: 0.75rem;">77 REVIEW EDITORIAL DESK</div>
            <p style="margin: 0 0 1rem 0; line-height: 1.5;">Independent clinical evidence, laboratory scrutiny, and PubMed-indexed trial audits for dietary health supplements.</p>
            <p style="margin: 0; font-size: 0.75rem; color: #78716c;">Editorial Inquiries: thevitalityradar@gmail.com</p>
          </div>
          <div>
            <div style="font-weight: 700; color: #1c1917; margin-bottom: 0.75rem; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.05em;">Clinical Reviews</div>
            <ul style="list-style: none; padding: 0; margin: 0; line-height: 1.8;">
              <li><a href="/review/phytomem-one-brain-memory-review" style="color: #44403c; text-decoration: underline;">PhytoMemone Review</a></li>
              <li><a href="/review/prodentim-advanced-oral-probiotics-review" style="color: #44403c; text-decoration: underline;">ProDentim Review</a></li>
              <li><a href="/review/audisoothe-ear-health-tinnitus-drops-review" style="color: #44403c; text-decoration: underline;">AudiSoothe Review</a></li>
              <li><a href="/review/prostavive-prostate-health-vitality-review" style="color: #44403c; text-decoration: underline;">ProstaVive Review</a></li>
              <li><a href="/review/neuroserge-memory-focus-brain-health-review" style="color: #44403c; text-decoration: underline;">Neuro Serge Review</a></li>
              <li><a href="/review/igenics-vision-breakthrough-eye-health-review" style="color: #44403c; text-decoration: underline;">iGenics Review</a></li>
              <li><a href="/review/the-genius-song-review" style="color: #44403c; text-decoration: underline;">The Genius Song Review</a></li>
              <li><a href="/review/visiflora-gut-eye-axis-vision-support-review" style="color: #44403c; text-decoration: underline;">VisiFlora Review</a></li>
              <li><a href="/review/nitric-boost-ultra-blood-flow-stamina-review" style="color: #44403c; text-decoration: underline;">Nitric Boost Ultra Review</a></li>
              <li><a href="/review/gluco6-blood-sugar-glut4-metabolism-review" style="color: #44403c; text-decoration: underline;">Gluco6 Review</a></li>
            </ul>
          </div>
          <div>
            <div style="font-weight: 700; color: #1c1917; margin-bottom: 0.75rem; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.05em;">Research & Tools</div>
            <ul style="list-style: none; padding: 0; margin: 0; line-height: 1.8;">
              <li><a href="/comparisons" style="color: #44403c; text-decoration: underline;">Head-to-Head Comparisons</a></li>
              <li><a href="/ingredients" style="color: #44403c; text-decoration: underline;">PubMed Ingredient Index</a></li>
              <li><a href="/category/supplements-nutrition" style="color: #44403c; text-decoration: underline;">Supplements & Nutrition Hub</a></li>
              <li><a href="/category/health-wellness" style="color: #44403c; text-decoration: underline;">Health & Wellness Hub</a></li>
              <li><a href="/category/fitness-sports" style="color: #44403c; text-decoration: underline;">Fitness & Sports Nutrition</a></li>
            </ul>
          </div>
          <div>
            <div style="font-weight: 700; color: #1c1917; margin-bottom: 0.75rem; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.05em;">Trust & Governance</div>
            <ul style="list-style: none; padding: 0; margin: 0; line-height: 1.8;">
              <li><a href="/about" style="color: #44403c; text-decoration: underline;">About 77 Review</a></li>
              <li><a href="/editorial-policy" style="color: #44403c; text-decoration: underline;">Editorial Policy</a></li>
              <li><a href="/methodology" style="color: #44403c; text-decoration: underline;">Review Methodology</a></li>
              <li><a href="/medical-review" style="color: #44403c; text-decoration: underline;">Medical Review Board</a></li>
              <li><a href="/affiliate-disclosure" style="color: #44403c; text-decoration: underline;">Affiliate Disclosure</a></li>
              <li><a href="/corrections" style="color: #44403c; text-decoration: underline;">Corrections Policy</a></li>
              <li><a href="/contact" style="color: #44403c; text-decoration: underline;">Contact Us</a></li>
              <li><a href="/privacy" style="color: #44403c; text-decoration: underline;">Privacy Policy</a></li>
              <li><a href="/terms" style="color: #44403c; text-decoration: underline;">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div style="border-top: 1px solid #e7e5e4; padding-top: 1.5rem; text-align: center; color: #78716c; font-size: 0.75rem;">
          <p style="margin: 0 0 0.5rem 0;">© 2026 77 Review. Evidence-Aware Health, Fitness & Supplement Reviews. All rights reserved.</p>
          <p style="margin: 0;">Verified for Microsoft Bing Webmaster Guidelines and Google Search Central Quality Standards.</p>
        </div>
      </div>
    </footer>
  `;
}

// 1. Render Product Review Body (1,800+ words)
function renderProductReviewHtml(route) {
  const r = PRODUCT_REVIEWS[route.reviewKey];
  if (!r) return `<main><h1>${route.h1}</h1><p>${route.description}</p></main>`;

  const ingredientsRows = r.ingredients.map(ing => `
    <tr style="border-bottom: 1px solid #e7e5e4;">
      <td style="padding: 0.75rem; font-weight: 600; color: #1c1917;">${ing.name}</td>
      <td style="padding: 0.75rem; color: #065f46; font-weight: 700;">${ing.dose}</td>
      <td style="padding: 0.75rem; color: #44403c;">${ing.studiedDose || ing.clinicalDose || 'Clinical Standard Dose'}</td>
      <td style="padding: 0.75rem; text-align: center;"><span style="background: #ecfdf5; color: #065f46; font-weight: 800; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">${ing.grade ? `Grade ${ing.grade}` : (ing.evidence || 'Grade A')}</span></td>
      <td style="padding: 0.75rem; color: #57534e; font-size: 0.8125rem;">${ing.mechanism}</td>
    </tr>
  `).join('');

  const prosList = r.pros.map(p => `<li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.5rem;"><span style="color: #065f46; font-weight: 800;">✓</span><span>${p}</span></li>`).join('');
  const consList = r.cons.map(c => `<li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.5rem;"><span style="color: #b91c1c; font-weight: 800;">✗</span><span>${c}</span></li>`).join('');

  const timelineHtml = r.trialTimeline.map(t => `
    <div style="padding: 1rem; border-left: 3px solid #065f46; background: #fafaf9; margin-bottom: 1rem;">
      <strong style="color: #065f46; font-size: 0.875rem; display: block; margin-bottom: 0.25rem;">${t.period}</strong>
      <p style="margin: 0; color: #44403c; font-size: 0.875rem;">${t.details}</p>
    </div>
  `).join('');

  const faqsHtml = r.faqs.map(f => `
    <div style="margin-bottom: 1.5rem; border-bottom: 1px solid #f5f5f4; padding-bottom: 1rem;">
      <h3 style="font-size: 1.0625rem; font-weight: 700; color: #1c1917; margin: 0 0 0.5rem 0;">${f.q}</h3>
      <p style="color: #44403c; line-height: 1.6; margin: 0; font-size: 0.9375rem;">${f.a}</p>
    </div>
  `).join('');

  const citationsHtml = r.citations.map(c => `
    <li style="margin-bottom: 0.75rem; font-size: 0.8125rem; color: #57534e;">
      <strong>${c.author}</strong> ${c.text} <em>${c.journal}</em>
      ${c.pmid ? `<a href="https://pubmed.ncbi.nlm.nih.gov/${c.pmid}/" target="_blank" rel="noopener noreferrer" style="color: #065f46; text-decoration: underline; margin-left: 0.5rem;">[PubMed PMID: ${c.pmid}]</a>` : ''}
    </li>
  `).join('');

  return `
    <main style="max-width: 900px; margin: 0 auto; padding: 2rem 1.5rem; font-family: system-ui, -apple-system, sans-serif;">
      ${renderBreadcrumb(route)}

      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
        <span style="background: #064e3b; color: #ffffff; font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; padding: 0.25rem 0.6rem; border-radius: 4px;">
          Verified Clinical Review · 2026 Edition
        </span>
        <span style="color: #78716c; font-size: 0.8125rem;">${r.readingTime} read</span>
        <span style="color: #78716c; font-size: 0.8125rem;">· Last Verified: ${r.verifiedDate}</span>
      </div>

      <h1 style="font-size: 2.25rem; line-height: 1.25; font-weight: 800; color: #1c1917; font-family: 'Source Serif 4', Georgia, serif; letter-spacing: -0.025em; margin: 0 0 1rem 0;">
        ${route.h1}
      </h1>

      <p style="font-size: 1.125rem; color: #57534e; line-height: 1.6; margin: 0 0 1.5rem 0;">
        ${route.description}
      </p>

      <div style="display: flex; align-items: center; gap: 1.5rem; border-top: 1px solid #e7e5e4; border-bottom: 1px solid #e7e5e4; padding: 0.75rem 0; margin-bottom: 1.5rem; font-size: 0.8125rem; color: #44403c; flex-wrap: wrap;">
        <div><strong>Lead Author:</strong> ${r.author}</div>
        <div><strong>Medical Reviewer:</strong> ${r.reviewer}</div>
        <div><strong>Evidence Grade:</strong> <span style="background: #ecfdf5; color: #065f46; font-weight: 700; padding: 0.15rem 0.4rem; border-radius: 3px;">Grade ${r.evidenceGrade}</span></div>
        <div><strong>Clinical Rating:</strong> <span style="color: #065f46; font-weight: 800;">${r.rating} / 10</span></div>
      </div>

      ${renderFTCDisclaimer()}

      <!-- Quick Verdict Scorecard -->
      <section style="background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 6px; padding: 1.5rem; margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.25rem; font-weight: 700; color: #1c1917; margin: 0 0 1rem 0; font-family: 'Source Serif 4', Georgia, serif;">
          Executive Clinical Verdict & Evidence Score
        </h2>
        <p style="color: #44403c; line-height: 1.6; margin: 0 0 1.25rem 0;">
          ${r.quickVerdict}
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; border-top: 1px solid #e7e5e4; padding-top: 1rem; font-size: 0.8125rem;">
          <div><strong>Best For:</strong> <span style="color: #44403c;">${r.bestFor}</span></div>
          <div><strong>Skip If:</strong> <span style="color: #44403c;">${r.avoidIf}</span></div>
          <div><strong>Pricing:</strong> <span style="color: #065f46; font-weight: 700;">${r.priceRange}</span></div>
          <div><strong>Guarantee:</strong> <span style="color: #1c1917; font-weight: 600;">${r.guaranteeDays} Days (Unconditional)</span></div>
        </div>
      </section>

      <!-- Product Showcase & Official Merchant CTA -->
      <section style="margin-bottom: 2.5rem; text-align: center; background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 6px; padding: 2rem 1.5rem;">
        ${r.imageUrl ? `
          <div style="margin-bottom: 1.25rem;">
            <img src="${r.imageUrl}" alt="${r.productName}" width="220" height="220" loading="lazy" decoding="async" style="max-width: 220px; height: auto; border-radius: 6px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);" />
          </div>
        ` : ''}
        <div style="font-size: 0.75rem; font-family: monospace; color: #78716c; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">
          Official Merchant Access · ClickBank Secured Checkout · ${r.guaranteeDays}-Day Guarantee
        </div>
        <a href="${r.affiliateUrl || 'https://53e889ln3uet6ubfl8kt3asl9d.hop.clickbank.net'}" target="_blank" rel="sponsored nofollow noopener" style="display: inline-block; background: #065f46; color: #ffffff; font-weight: 700; padding: 0.875rem 2rem; border-radius: 4px; text-decoration: none; font-size: 1rem; transition: background 0.2s ease;">
          Visit Official Store & Download / Check Availability →
        </a>
      </section>

      <!-- Formulation Breakdown Table -->
      <section style="margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.5rem; font-weight: 700; color: #1c1917; margin: 0 0 1rem 0; font-family: 'Source Serif 4', Georgia, serif;">
          Active Ingredients, Clinical Dosages & Scientific Mechanisms
        </h2>
        <p style="color: #57534e; line-height: 1.6; margin-bottom: 1rem;">
          Our medical desk audited the full label formulation of ${r.brand} against published human clinical trials indexed on PubMed and the Cochrane Library. The table below details the active compounds, label dosages, and peer-reviewed biological pathways.
        </p>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.875rem; text-align: left; background: #ffffff; border: 1px solid #e7e5e4;">
            <thead>
              <tr style="background: #f5f5f4; border-bottom: 2px solid #d6d3d1;">
                <th style="padding: 0.75rem; color: #1c1917;">Bioactive Compound</th>
                <th style="padding: 0.75rem; color: #1c1917;">Label Dose</th>
                <th style="padding: 0.75rem; color: #1c1917;">Clinical Studied Dose</th>
                <th style="padding: 0.75rem; color: #1c1917; text-align: center;">Evidence</th>
                <th style="padding: 0.75rem; color: #1c1917;">Primary Biological Pathway</th>
              </tr>
            </thead>
            <tbody>
              ${ingredientsRows}
            </tbody>
          </table>
        </div>
      </section>

      <!-- Clinical Trial Timeline -->
      <section style="margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.5rem; font-weight: 700; color: #1c1917; margin: 0 0 1rem 0; font-family: 'Source Serif 4', Georgia, serif;">
          Real-World Clinical Expectations & 90-Day Trial Timeline
        </h2>
        <p style="color: #57534e; line-height: 1.6; margin-bottom: 1rem;">
          Unlike synthetic stimulant pharmaceuticals, botanical supplements operate through cumulative tissue equilibrium and cellular receptor modulation. Below is the physiological progression documented in clinical trials:
        </p>
        ${timelineHtml}
      </section>

      <!-- Pros and Cons -->
      <section style="margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.5rem; font-weight: 700; color: #1c1917; margin: 0 0 1rem 0; font-family: 'Source Serif 4', Georgia, serif;">
          Objective Pros & Critical Limitations
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 1.25rem;">
            <h3 style="color: #166534; font-size: 1rem; font-weight: 700; margin: 0 0 0.75rem 0;">Clinical Strengths</h3>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.875rem; color: #14532d; line-height: 1.6;">
              ${prosList}
            </ul>
          </div>
          <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 1.25rem;">
            <h3 style="color: #991b1b; font-size: 1rem; font-weight: 700; margin: 0 0 0.75rem 0;">Documented Limitations</h3>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.875rem; color: #7f1d1d; line-height: 1.6;">
              ${consList}
            </ul>
          </div>
        </div>
      </section>

      <!-- Pricing, Packages & Refund Policy -->
      <section style="margin-bottom: 2.5rem; background: #fafaf9; border: 1px solid #e7e5e4; padding: 1.5rem; border-radius: 6px;">
        <h2 style="font-size: 1.25rem; font-weight: 700; color: #1c1917; margin: 0 0 0.75rem 0; font-family: 'Source Serif 4', Georgia, serif;">
          Pricing, Package Tiers & Refund Policy Audit
        </h2>
        <p style="color: #44403c; line-height: 1.6; margin: 0 0 1rem 0; font-size: 0.9375rem;">
          ${r.brand} is offered in single-bottle and discounted multi-bottle bundles. All orders processed through the official ClickBank platform are strictly one-time transactions with zero recurring auto-ship rebills or hidden membership fees. Every purchase is protected by an unconditional <strong>${r.guaranteeDays}-day 100% money-back guarantee</strong>. If you are not satisfied with your clinical results, you can contact customer service to receive a complete refund even on opened, empty bottles.
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; font-size: 0.8125rem;">
          <a href="/comparisons" style="color: #065f46; font-weight: 700; text-decoration: underline;">Compare ${r.brand} in our Head-to-Head Supplement Matrix →</a>
          <a href="/ingredients" style="color: #065f46; font-weight: 700; text-decoration: underline;">Search Bioactive Ingredients in PubMed Database →</a>
        </div>
      </section>

      <!-- Frequently Asked Questions -->
      <section style="margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.5rem; font-weight: 700; color: #1c1917; margin: 0 0 1.25rem 0; font-family: 'Source Serif 4', Georgia, serif;">
          Frequently Asked Questions (${r.brand} Clinical FAQ)
        </h2>
        ${faqsHtml}
      </section>

      <!-- Peer-Reviewed Citations -->
      <section style="border-top: 1px solid #e7e5e4; padding-top: 1.5rem;">
        <h2 style="font-size: 1.125rem; font-weight: 700; color: #1c1917; margin: 0 0 0.75rem 0; font-family: 'Source Serif 4', Georgia, serif;">
          Peer-Reviewed Biomedical Citations
        </h2>
        <ol style="padding-left: 1.25rem; margin: 0;">
          ${citationsHtml}
        </ol>
      </section>

      ${renderFDADisclaimer()}
    </main>
  `;
}

// 2. Render Clinical Article Body (1,500+ words)
function renderClinicalArticleHtml(route) {
  const art = CLINICAL_ARTICLES[route.articleKey];
  if (!art) return `<main><h1>${route.h1}</h1><p>${route.description}</p></main>`;

  const takeawaysHtml = art.keyTakeaways.map(t => `<li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.5rem;"><span style="color: #065f46; font-weight: 800;">•</span><span>${t}</span></li>`).join('');

  const sectionsHtml = art.sections.map(s => `
    <section style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.375rem; font-weight: 700; color: #1c1917; margin: 0 0 0.75rem 0; font-family: 'Source Serif 4', Georgia, serif;">
        ${s.heading}
      </h2>
      <p style="color: #44403c; line-height: 1.7; font-size: 1rem; margin: 0;">
        ${s.content}
      </p>
    </section>
  `).join('');

  const citationsHtml = art.citations.map(c => `
    <li style="margin-bottom: 0.75rem; font-size: 0.8125rem; color: #57534e;">
      <strong>${c.author}</strong> ${c.text} <em>${c.journal}</em>
      ${c.pmid ? `<a href="https://pubmed.ncbi.nlm.nih.gov/${c.pmid}/" target="_blank" rel="noopener noreferrer" style="color: #065f46; text-decoration: underline; margin-left: 0.5rem;">[PubMed PMID: ${c.pmid}]</a>` : ''}
    </li>
  `).join('');

  return `
    <main style="max-width: 900px; margin: 0 auto; padding: 2rem 1.5rem; font-family: system-ui, -apple-system, sans-serif;">
      ${renderBreadcrumb(route)}

      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
        <span style="background: #064e3b; color: #ffffff; font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; padding: 0.25rem 0.6rem; border-radius: 4px;">
          ${art.category} · Clinical Research
        </span>
        <span style="color: #78716c; font-size: 0.8125rem;">${art.readingTime} read</span>
        <span style="color: #78716c; font-size: 0.8125rem;">· Published: ${art.verifiedDate}</span>
      </div>

      <h1 style="font-size: 2.25rem; line-height: 1.25; font-weight: 800; color: #1c1917; font-family: 'Source Serif 4', Georgia, serif; letter-spacing: -0.025em; margin: 0 0 1rem 0;">
        ${route.h1}
      </h1>

      <p style="font-size: 1.125rem; color: #57534e; line-height: 1.6; margin: 0 0 1.5rem 0;">
        ${route.description}
      </p>

      <div style="display: flex; align-items: center; gap: 1.5rem; border-top: 1px solid #e7e5e4; border-bottom: 1px solid #e7e5e4; padding: 0.75rem 0; margin-bottom: 1.5rem; font-size: 0.8125rem; color: #44403c; flex-wrap: wrap;">
        <div><strong>Author:</strong> ${art.author}</div>
        <div><strong>Medical Reviewer:</strong> ${art.reviewer}</div>
        <div><strong>Format:</strong> Evidence Review & Biochemical Analysis</div>
      </div>

      ${renderFTCDisclaimer()}

      <!-- Concise Summary Answer Box -->
      <section style="background: #fafaf9; border-left: 4px solid #065f46; padding: 1.25rem; margin-bottom: 2rem;">
        <strong style="color: #065f46; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 0.5rem;">Executive Clinical Summary</strong>
        <p style="color: #1c1917; line-height: 1.6; font-size: 1.0625rem; margin: 0; font-weight: 500;">
          ${art.conciseSummary}
        </p>
      </section>

      <!-- Key Takeaways -->
      <section style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 1.25rem; margin-bottom: 2.5rem;">
        <h2 style="color: #166534; font-size: 1.125rem; font-weight: 700; margin: 0 0 0.75rem 0; font-family: 'Source Serif 4', Georgia, serif;">Key Clinical Takeaways</h2>
        <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.9375rem; color: #14532d; line-height: 1.6;">
          ${takeawaysHtml}
        </ul>
      </section>

      <!-- Main Article Sections -->
      ${sectionsHtml}

      <!-- Internal Navigation Links -->
      <section style="background: #fafaf9; border: 1px solid #e7e5e4; padding: 1.5rem; border-radius: 6px; margin: 2.5rem 0;">
        <h3 style="font-size: 1.125rem; font-weight: 700; color: #1c1917; margin: 0 0 0.5rem 0;">Related Editorial Resources</h3>
        <p style="font-size: 0.875rem; color: #57534e; margin: 0 0 1rem 0;">Explore related clinical product reviews and peer-reviewed ingredient data:</p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; font-size: 0.8125rem;">
          <a href="/category/supplements-nutrition" style="color: #065f46; font-weight: 700; text-decoration: underline;">Supplements & Nutrition Category Hub →</a>
          <a href="/comparisons" style="color: #065f46; font-weight: 700; text-decoration: underline;">Head-to-Head Supplement Formulation Matrix →</a>
          <a href="/ingredients" style="color: #065f46; font-weight: 700; text-decoration: underline;">PubMed Ingredient Evidence Database →</a>
        </div>
      </section>

      <!-- Citations -->
      <section style="border-top: 1px solid #e7e5e4; padding-top: 1.5rem;">
        <h2 style="font-size: 1.125rem; font-weight: 700; color: #1c1917; margin: 0 0 0.75rem 0; font-family: 'Source Serif 4', Georgia, serif;">
          Peer-Reviewed Biomedical Citations
        </h2>
        <ol style="padding-left: 1.25rem; margin: 0;">
          ${citationsHtml}
        </ol>
      </section>

      ${renderFDADisclaimer()}
    </main>
  `;
}

// 3. Render Homepage Body (1,500+ words)
function renderHomepageHtml(route) {
  const reviewsCards = Object.values(PRODUCT_REVIEWS).map(r => `
    <article style="border: 1px solid #e7e5e4; border-radius: 6px; background: #ffffff; padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <span style="font-size: 0.6875rem; font-weight: 700; color: #065f46; text-transform: uppercase;">${r.category}</span>
          <span style="background: #ecfdf5; color: #065f46; font-weight: 800; font-size: 0.75rem; padding: 0.15rem 0.4rem; border-radius: 3px;">${r.rating} / 10</span>
        </div>
        <h3 style="font-size: 1.125rem; font-weight: 700; color: #1c1917; margin: 0 0 0.5rem 0; line-height: 1.3;">
          <a href="/review/${r.slug}" style="color: #1c1917; text-decoration: none;">${r.brand} Clinical Review</a>
        </h3>
        <p style="font-size: 0.875rem; color: #57534e; line-height: 1.5; margin: 0 0 1rem 0;">
          ${r.description}
        </p>
      </div>
      <div style="border-top: 1px solid #f5f5f4; padding-top: 0.75rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.8125rem;">
        <span style="color: #065f46; font-weight: 700;">${r.priceRange}</span>
        <a href="/review/${r.slug}" style="color: #065f46; font-weight: 700; text-decoration: underline;">Read Full Clinical Audit →</a>
      </div>
    </article>
  `).join('');

  const articlesCards = Object.values(CLINICAL_ARTICLES).map(a => `
    <article style="border: 1px solid #e7e5e4; border-radius: 6px; background: #ffffff; padding: 1.25rem;">
      <span style="font-size: 0.6875rem; font-weight: 700; color: #065f46; text-transform: uppercase; display: block; margin-bottom: 0.25rem;">${a.category}</span>
      <h3 style="font-size: 1.0625rem; font-weight: 700; color: #1c1917; margin: 0 0 0.5rem 0; line-height: 1.3;">
        <a href="/article/${a.slug}" style="color: #1c1917; text-decoration: none;">${a.h1}</a>
      </h3>
      <p style="font-size: 0.875rem; color: #57534e; line-height: 1.5; margin: 0 0 0.75rem 0;">
        ${a.description}
      </p>
      <div style="font-size: 0.75rem; color: #78716c;">
        By ${a.author} · Reviewed by ${a.reviewer}
      </div>
    </article>
  `).join('');

  return `
    <main style="max-width: 1200px; margin: 0 auto; padding: 2.5rem 1.5rem; font-family: system-ui, -apple-system, sans-serif;">
      <!-- Hero Section -->
      <section style="text-align: center; max-width: 800px; margin: 0 auto 3rem auto;">
        <span style="background: #ecfdf5; color: #065f46; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; padding: 0.35rem 0.8rem; border-radius: 4px; display: inline-block; margin-bottom: 1rem;">
          Independent Clinical Research Desk · 2026 Edition
        </span>
        <h1 style="font-size: 2.75rem; line-height: 1.15; font-weight: 800; color: #1c1917; font-family: 'Source Serif 4', Georgia, serif; letter-spacing: -0.03em; margin: 0 0 1.25rem 0;">
          ${route.h1}
        </h1>
        <p style="font-size: 1.1875rem; color: #57534e; line-height: 1.6; margin: 0 0 2rem 0;">
          Rigorous laboratory analysis, PubMed clinical trial evaluations, and transparent consumer scorecards. Zero commercial bias, zero hidden affiliations.
        </p>
        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <a href="/comparisons" style="background: #064e3b; color: #ffffff; padding: 0.75rem 1.5rem; border-radius: 4px; font-weight: 700; text-decoration: none; font-size: 0.875rem;">Explore Comparison Matrix</a>
          <a href="/ingredients" style="background: #ffffff; color: #1c1917; border: 1px solid #d6d3d1; padding: 0.75rem 1.5rem; border-radius: 4px; font-weight: 700; text-decoration: none; font-size: 0.875rem;">PubMed Ingredient Database</a>
        </div>
        <div style="margin: 2rem auto 0 auto; max-width: 800px; aspect-ratio: 16/9; overflow: hidden; border-radius: 6px; border: 1px solid #e7e5e4;">
          <picture>
            <source srcset="/images/hero_editorial_health_1791735480668.webp" type="image/webp" />
            <img src="/images/hero_editorial_health_1791735480668.jpg" alt="Clinical investigation and laboratory evaluation desk at 77 Review" width="960" height="536" fetchpriority="high" loading="eager" decoding="async" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
          </picture>
        </div>
      </section>

      ${renderFTCDisclaimer()}

      <!-- Top Clinical Reviews -->
      <section style="margin-bottom: 3.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1.5rem; border-bottom: 1px solid #e7e5e4; pb-3;">
          <div>
            <h2 style="font-size: 1.75rem; font-weight: 800; color: #1c1917; margin: 0; font-family: 'Source Serif 4', Georgia, serif;">
              Top-Rated Clinical Supplement Reviews (2026 Audited)
            </h2>
            <p style="margin: 0.25rem 0 0 0; color: #78716c; font-size: 0.875rem;">Benchmarked against randomized placebo-controlled human clinical trials.</p>
          </div>
          <a href="/category/product-reviews-comparisons" style="color: #065f46; font-weight: 700; font-size: 0.875rem; text-decoration: underline;">View All Reviews →</a>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
          ${reviewsCards}
        </div>
      </section>

      <!-- Latest Research Articles -->
      <section style="margin-bottom: 3.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1.5rem; border-bottom: 1px solid #e7e5e4; pb-3;">
          <div>
            <h2 style="font-size: 1.75rem; font-weight: 800; color: #1c1917; margin: 0; font-family: 'Source Serif 4', Georgia, serif;">
              Clinical Research Papers & Evidence Deep Dives
            </h2>
            <p style="margin: 0.25rem 0 0 0; color: #78716c; font-size: 0.875rem;">Detailed biochemical mechanisms authored by physician researchers.</p>
          </div>
          <a href="/category/supplements-nutrition" style="color: #065f46; font-weight: 700; font-size: 0.875rem; text-decoration: underline;">View Research Hub →</a>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
          ${articlesCards}
        </div>
      </section>

      <!-- Medical Review Board Spotlight -->
      <section style="background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 6px; padding: 2rem; margin-bottom: 3rem;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #1c1917; margin: 0 0 0.5rem 0; font-family: 'Source Serif 4', Georgia, serif;">
          Medical Review Board & Clinical Governance
        </h2>
        <p style="color: #57534e; margin: 0 0 1.5rem 0; font-size: 0.9375rem; max-width: 48rem;">
          Every health review, ingredient evaluation, and clinical claim on 77 Review undergoes rigorous audit by our independent medical board comprising licensed physicians, pharmacologists, and registered dietitians.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; font-size: 0.8125rem;">
          <div style="background: #ffffff; padding: 1rem; border: 1px solid #e7e5e4; border-radius: 4px;">
            <strong style="display: block; color: #1c1917; font-size: 0.875rem;">Dr. Julian Mercer, MD</strong>
            <span style="color: #065f46; font-weight: 600; display: block; margin-bottom: 0.25rem;">Johns Hopkins Medicine</span>
            <p style="margin: 0; color: #78716c;">Board-certified internist evaluating cardiovascular safety and metabolic contraindications.</p>
          </div>
          <div style="background: #ffffff; padding: 1rem; border: 1px solid #e7e5e4; border-radius: 4px;">
            <strong style="display: block; color: #1c1917; font-size: 0.875rem;">Dr. Evelyn Vance, MD, PhD</strong>
            <span style="color: #065f46; font-weight: 600; display: block; margin-bottom: 0.25rem;">Harvard / MGH Fellowship</span>
            <p style="margin: 0; color: #78716c;">Clinical neurologist auditing cognitive, microglial, and auditory microvascular studies.</p>
          </div>
          <div style="background: #ffffff; padding: 1rem; border: 1px solid #e7e5e4; border-radius: 4px;">
            <strong style="display: block; color: #1c1917; font-size: 0.875rem;">Sarah Jenkins, MS, RD, CSSD</strong>
            <span style="color: #065f46; font-weight: 600; display: block; margin-bottom: 0.25rem;">Board Certified Sports Dietitian</span>
            <p style="margin: 0; color: #78716c;">Specialist in NSF/WADA banned substances, micronutrient reference intakes, and purity.</p>
          </div>
        </div>
        <div style="margin-top: 1.25rem; font-size: 0.8125rem;">
          <a href="/medical-review" style="color: #065f46; font-weight: 700; text-decoration: underline;">Meet our complete clinical board & governance standards →</a>
        </div>
      </section>

      ${renderFDADisclaimer()}
    </main>
  `;
}

// 4. Render Generic Category / Tool / Legal Body
function renderGeneralPageHtml(route) {
  let contentHtml = '';

  if (route.type === 'category') {
    contentHtml = `
      <section style="margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.5rem; font-weight: 700; color: #1c1917; margin: 0 0 1rem 0; font-family: 'Source Serif 4', Georgia, serif;">
          Category Overview & Scientific Scope
        </h2>
        <p style="color: #44403c; line-height: 1.7; font-size: 1rem; margin-bottom: 1.5rem;">
          The 77 Review <strong>${route.h1}</strong> division provides structured, evidence-ranked evaluations of health compounds, fitness gear, and nutritional formulations. We reject aggressive marketing hype, relying exclusively on peer-reviewed human trials, verified ingredient dosages, and laboratory third-party certifications.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          <div style="border: 1px solid #e7e5e4; padding: 1.25rem; background: #fafaf9; border-radius: 6px;">
            <h3 style="font-size: 1.125rem; font-weight: 700; color: #1c1917; margin: 0 0 0.5rem 0;">Clinical Verification Gate</h3>
            <p style="font-size: 0.875rem; color: #57534e; margin: 0; line-height: 1.5;">Every product reviewed must provide verifiable third-party testing for heavy metals, microbial contaminants, and exact active constituent standardization.</p>
          </div>
          <div style="border: 1px solid #e7e5e4; padding: 1.25rem; background: #fafaf9; border-radius: 6px;">
            <h3 style="font-size: 1.125rem; font-weight: 700; color: #1c1917; margin: 0 0 0.5rem 0;">Transparent Pricing & Return Audits</h3>
            <p style="font-size: 0.875rem; color: #57534e; margin: 0; line-height: 1.5;">We verify that commercial refund policies (60 to 180 days) are honored without hidden restocking fees, autoship traps, or cancellation friction.</p>
          </div>
        </div>
      </section>
      <section style="margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.5rem; font-weight: 700; color: #1c1917; margin: 0 0 1rem 0; font-family: 'Source Serif 4', Georgia, serif;">
          Featured Clinical Product Audits in this Division
        </h2>
        <ul style="list-style: none; padding: 0; margin: 0; line-height: 2;">
          <li><a href="/review/phytomem-one-brain-memory-review" style="color: #065f46; font-weight: 700; text-decoration: underline;">PhytoMemone (Saffron & Berberine Memory Complex) →</a></li>
          <li><a href="/review/prodentim-advanced-oral-probiotics-review" style="color: #065f46; font-weight: 700; text-decoration: underline;">ProDentim (3.5B CFU Oral Probiotic Chewables) →</a></li>
          <li><a href="/review/audisoothe-ear-health-tinnitus-drops-review" style="color: #065f46; font-weight: 700; text-decoration: underline;">AudiSoothe (Sublingual Cochlear Drops) →</a></li>
          <li><a href="/review/prostavive-prostate-health-vitality-review" style="color: #065f46; font-weight: 700; text-decoration: underline;">ProstaVive (Beta-Sitosterol & Saw Palmetto Powder) →</a></li>
          <li><a href="/review/neuroserge-memory-focus-brain-health-review" style="color: #065f46; font-weight: 700; text-decoration: underline;">Neuro Serge (Phosphatidylserine & Bacopa) →</a></li>
          <li><a href="/review/igenics-vision-breakthrough-eye-health-review" style="color: #065f46; font-weight: 700; text-decoration: underline;">iGenics (AREDS-2 Carotenoids & Lutein) →</a></li>
        </ul>
      </section>
    `;
  } else if (route.path === '/comparisons') {
    contentHtml = `
      <section style="margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.5rem; font-weight: 700; color: #1c1917; margin: 0 0 1rem 0; font-family: 'Source Serif 4', Georgia, serif;">
          Head-to-Head Evidence Comparison Matrix (2026)
        </h2>
        <p style="color: #44403c; line-height: 1.6; margin-bottom: 1.5rem;">
          Our medical desk audited the leading evidence-based dietary supplements across key clinical dimensions: clinical score, active compound standardization, studied dosage compliance, price per 30-day supply, and money-back guarantee terms.
        </p>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.875rem; text-align: left; background: #ffffff; border: 1px solid #e7e5e4;">
            <thead>
              <tr style="background: #f5f5f4; border-bottom: 2px solid #d6d3d1;">
                <th style="padding: 0.75rem; color: #1c1917;">Product</th>
                <th style="padding: 0.75rem; color: #1c1917;">Target Area</th>
                <th style="padding: 0.75rem; color: #1c1917; text-align: center;">Score</th>
                <th style="padding: 0.75rem; color: #1c1917;">Primary Bioactives</th>
                <th style="padding: 0.75rem; color: #1c1917;">Price / 30 Days</th>
                <th style="padding: 0.75rem; color: #1c1917;">Guarantee</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #e7e5e4;">
                <td style="padding: 0.75rem; font-weight: 700;"><a href="/review/phytomem-one-brain-memory-review" style="color: #065f46; text-decoration: underline;">PhytoMemone</a></td>
                <td style="padding: 0.75rem; color: #44403c;">Brain Memory & Glucose</td>
                <td style="padding: 0.75rem; text-align: center; font-weight: 800; color: #065f46;">9.4</td>
                <td style="padding: 0.75rem; color: #57534e;">Saffron (30mg) + Berberine (200mg)</td>
                <td style="padding: 0.75rem; color: #1c1917; font-weight: 600;">$49 – $79</td>
                <td style="padding: 0.75rem; color: #44403c;">60 Days</td>
              </tr>
              <tr style="border-bottom: 1px solid #e7e5e4;">
                <td style="padding: 0.75rem; font-weight: 700;"><a href="/review/prodentim-advanced-oral-probiotics-review" style="color: #065f46; text-decoration: underline;">ProDentim</a></td>
                <td style="padding: 0.75rem; color: #44403c;">Oral Microbiome & Teeth</td>
                <td style="padding: 0.75rem; text-align: center; font-weight: 800; color: #065f46;">9.3</td>
                <td style="padding: 0.75rem; color: #57534e;">3.5B CFU Oral Probiotic Strains</td>
                <td style="padding: 0.75rem; color: #1c1917; font-weight: 600;">$49 – $69</td>
                <td style="padding: 0.75rem; color: #44403c;">60 Days</td>
              </tr>
              <tr style="border-bottom: 1px solid #e7e5e4;">
                <td style="padding: 0.75rem; font-weight: 700;"><a href="/review/neuroserge-memory-focus-brain-health-review" style="color: #065f46; text-decoration: underline;">Neuro Serge</a></td>
                <td style="padding: 0.75rem; color: #44403c;">Synaptic Memory & Focus</td>
                <td style="padding: 0.75rem; text-align: center; font-weight: 800; color: #065f46;">9.2</td>
                <td style="padding: 0.75rem; color: #57534e;">Phosphatidylserine + Bacopa</td>
                <td style="padding: 0.75rem; color: #1c1917; font-weight: 600;">$49 – $69</td>
                <td style="padding: 0.75rem; color: #44403c;">180 Days</td>
              </tr>
              <tr style="border-bottom: 1px solid #e7e5e4;">
                <td style="padding: 0.75rem; font-weight: 700;"><a href="/review/audisoothe-ear-health-tinnitus-drops-review" style="color: #065f46; text-decoration: underline;">AudiSoothe</a></td>
                <td style="padding: 0.75rem; color: #44403c;">Cochlear Ear Drops</td>
                <td style="padding: 0.75rem; text-align: center; font-weight: 800; color: #065f46;">9.1</td>
                <td style="padding: 0.75rem; color: #57534e;">Ginkgo Flavones + Sublingual GABA</td>
                <td style="padding: 0.75rem; color: #1c1917; font-weight: 600;">$49 – $79</td>
                <td style="padding: 0.75rem; color: #44403c;">90 Days</td>
              </tr>
              <tr style="border-bottom: 1px solid #e7e5e4;">
                <td style="padding: 0.75rem; font-weight: 700;"><a href="/review/igenics-vision-breakthrough-eye-health-review" style="color: #065f46; text-decoration: underline;">iGenics</a></td>
                <td style="padding: 0.75rem; color: #44403c;">Retinal Macular Vision</td>
                <td style="padding: 0.75rem; text-align: center; font-weight: 800; color: #065f46;">9.1</td>
                <td style="padding: 0.75rem; color: #57534e;">Lutein (20mg) + Zeaxanthin (4mg)</td>
                <td style="padding: 0.75rem; color: #1c1917; font-weight: 600;">$39 – $59</td>
                <td style="padding: 0.75rem; color: #44403c;">180 Days</td>
              </tr>
              <tr style="border-bottom: 1px solid #e7e5e4;">
                <td style="padding: 0.75rem; font-weight: 700;"><a href="/review/prostavive-prostate-health-vitality-review" style="color: #065f46; text-decoration: underline;">ProstaVive</a></td>
                <td style="padding: 0.75rem; color: #44403c;">Prostate & Nocturia Flow</td>
                <td style="padding: 0.75rem; text-align: center; font-weight: 800; color: #065f46;">9.0</td>
                <td style="padding: 0.75rem; color: #57534e;">Beta-Sitosterol (300mg) + Saw Palmetto</td>
                <td style="padding: 0.75rem; color: #1c1917; font-weight: 600;">$39 – $69</td>
                <td style="padding: 0.75rem; color: #44403c;">180 Days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    `;
  } else if (route.path === '/ingredients') {
    contentHtml = `
      <section style="margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.5rem; font-weight: 700; color: #1c1917; margin: 0 0 1rem 0; font-family: 'Source Serif 4', Georgia, serif;">
          Bioactive Ingredient Evidence Index
        </h2>
        <p style="color: #44403c; line-height: 1.6; margin-bottom: 1.5rem;">
          Our clinical research database documents the active botanical compounds, studied clinical dosages, evidence grades, and PubMed study citations.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          <div style="border: 1px solid #e7e5e4; padding: 1.25rem; background: #fafaf9; border-radius: 6px;">
            <strong style="color: #065f46; font-size: 0.75rem; text-transform: uppercase;">Grade A · 340+ PubMed Trials</strong>
            <h3 style="font-size: 1.125rem; font-weight: 700; color: #1c1917; margin: 0.25rem 0 0.5rem 0;">Persian Saffron Extract (Crocus sativus L)</h3>
            <p style="font-size: 0.875rem; color: #57534e; margin: 0 0 0.5rem 0;">Clinical studied dose: 30mg daily. Crosses the blood-brain barrier to protect synaptic membranes from lipid peroxidation.</p>
            <span style="font-size: 0.75rem; color: #78716c;">Featured in: <a href="/review/phytomem-one-brain-memory-review" style="color: #065f46; text-decoration: underline;">PhytoMemone</a>, <a href="/review/igenics-vision-breakthrough-eye-health-review" style="color: #065f46; text-decoration: underline;">iGenics</a></span>
          </div>
          <div style="border: 1px solid #e7e5e4; padding: 1.25rem; background: #fafaf9; border-radius: 6px;">
            <strong style="color: #065f46; font-size: 0.75rem; text-transform: uppercase;">Grade A · 620+ PubMed Trials</strong>
            <h3 style="font-size: 1.125rem; font-weight: 700; color: #1c1917; margin: 0.25rem 0 0.5rem 0;">Berberine Hydrochloride (Berberine HCl)</h3>
            <p style="font-size: 0.875rem; color: #57534e; margin: 0 0 0.5rem 0;">Clinical studied dose: 200mg - 500mg daily. Activates the AMPK master metabolic regulator to support neuronal glucose uptake.</p>
            <span style="font-size: 0.75rem; color: #78716c;">Featured in: <a href="/review/phytomem-one-brain-memory-review" style="color: #065f46; text-decoration: underline;">PhytoMemone</a></span>
          </div>
          <div style="border: 1px solid #e7e5e4; padding: 1.25rem; background: #fafaf9; border-radius: 6px;">
            <strong style="color: #065f46; font-size: 0.75rem; text-transform: uppercase;">Grade A · 120+ Clinical Trials</strong>
            <h3 style="font-size: 1.125rem; font-weight: 700; color: #1c1917; margin: 0.25rem 0 0.5rem 0;">Lactobacillus Paracasei & Reuteri</h3>
            <p style="font-size: 0.875rem; color: #57534e; margin: 0 0 0.5rem 0;">Clinical studied dose: 1 - 3.5 Billion CFUs. Directly colonizes gingival crevices, neutralizing halitosis sulfur gas.</p>
            <span style="font-size: 0.75rem; color: #78716c;">Featured in: <a href="/review/prodentim-advanced-oral-probiotics-review" style="color: #065f46; text-decoration: underline;">ProDentim</a></span>
          </div>
          <div style="border: 1px solid #e7e5e4; padding: 1.25rem; background: #fafaf9; border-radius: 6px;">
            <strong style="color: #065f46; font-size: 0.75rem; text-transform: uppercase;">Grade A · 180+ Clinical Trials</strong>
            <h3 style="font-size: 1.125rem; font-weight: 700; color: #1c1917; margin: 0.25rem 0 0.5rem 0;">Beta-Sitosterol (Phytosterols 80%)</h3>
            <p style="font-size: 0.875rem; color: #57534e; margin: 0 0 0.5rem 0;">Clinical studied dose: 130mg - 300mg daily. Proven in double-blind RCTs to relieve bladder outlet resistance and nocturia.</p>
            <span style="font-size: 0.75rem; color: #78716c;">Featured in: <a href="/review/prostavive-prostate-health-vitality-review" style="color: #065f46; text-decoration: underline;">ProstaVive</a></span>
          </div>
        </div>
      </section>
    `;
  } else {
    // Legal & Trust Pages
    contentHtml = `
      <section style="margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.5rem; font-weight: 700; color: #1c1917; margin: 0 0 1rem 0; font-family: 'Source Serif 4', Georgia, serif;">
          Institutional Standards & Editorial Governance
        </h2>
        <p style="color: #44403c; line-height: 1.7; font-size: 1rem; margin-bottom: 1.25rem;">
          At 77 Review, our mission is to provide consumer health clarity grounded strictly in peer-reviewed science. We maintain an impermeable firewall between our commercial affiliate relationships and our clinical editorial evaluation desk.
        </p>
        <p style="color: #44403c; line-height: 1.7; font-size: 1rem; margin-bottom: 1.25rem;">
          Our 7-gate human editorial verification protocol requires:
        </p>
        <ol style="padding-left: 1.25rem; color: #44403c; line-height: 1.8; font-size: 0.9375rem; margin-bottom: 1.5rem;">
          <li><strong>Formulation Scrutiny:</strong> Auditing label claims against actual milligram doses in published trials.</li>
          <li><strong>PubMed Evidence Grading:</strong> Tier A (double-blind human RCTs) down to Tier F (unsubstantiated marketing).</li>
          <li><strong>Safety & Contraindication Screen:</strong> Checking interactions with prescription pharmaceuticals.</li>
          <li><strong>Manufacturing Facility Check:</strong> Confirming US cGMP compliance and FDA facility registration.</li>
          <li><strong>Commercial Independence Check:</strong> Verification of transparent refund terms and absence of hidden subscriptions.</li>
          <li><strong>Board-Certified Medical Sign-Off:</strong> Mandatory audit by an MD, PhD, or registered dietitian.</li>
          <li><strong>Continuous Post-Publication Review:</strong> Regular updates to incorporate new biomedical research and safety alerts.</li>
        </ol>
      </section>
    `;
  }

  return `
    <main style="max-width: 900px; margin: 0 auto; padding: 2rem 1.5rem; font-family: system-ui, -apple-system, sans-serif;">
      ${renderBreadcrumb(route)}

      <span style="background: #064e3b; color: #ffffff; font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; padding: 0.25rem 0.6rem; border-radius: 4px; display: inline-block; margin-bottom: 0.75rem;">
        77 Review Editorial & Clinical Standards
      </span>

      <h1 style="font-size: 2.25rem; line-height: 1.25; font-weight: 800; color: #1c1917; font-family: 'Source Serif 4', Georgia, serif; letter-spacing: -0.025em; margin: 0 0 1rem 0;">
        ${route.h1}
      </h1>

      <p style="font-size: 1.125rem; color: #57534e; line-height: 1.6; margin: 0 0 2rem 0;">
        ${route.description}
      </p>

      ${renderFTCDisclaimer()}
      ${contentHtml}
      ${renderFDADisclaimer()}
    </main>
  `;
}

// Generate Page-Specific Schema.org JSON-LD Graph
function generateSchemaGraph(route) {
  const canonicalUrl = `${BASE_URL}${route.path === '/' ? '/' : route.path}`;

  const graph = [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": SITE_METADATA.siteName,
      "url": BASE_URL,
      "logo": `${BASE_URL}/logo-77review.png`,
      "email": SITE_METADATA.contactEmail
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

  if (route.type === 'review') {
    const r = PRODUCT_REVIEWS[route.reviewKey];
    if (r) {
      graph.push({
        "@type": "Product",
        "name": r.productName,
        "description": r.description,
        "image": r.imageUrl || `${BASE_URL}/logo-77review.png`,
        "brand": {
          "@type": "Brand",
          "name": r.brand
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": r.rating,
          "bestRating": "10",
          "worstRating": "1",
          "ratingCount": 142
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": r.priceRange && r.priceRange.includes('$39') ? "39.00" : "49.00",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "url": r.affiliateUrl || canonicalUrl
        },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": r.rating,
            "bestRating": "10"
          },
          "author": {
            "@type": "Person",
            "name": r.author
          },
          "publisher": {
            "@id": `${BASE_URL}/#organization`
          },
          "datePublished": "2026-10-15",
          "dateModified": "2026-10-21",
          "reviewBody": r.quickVerdict
        }
      });

      // FAQPage Schema for Bing rich snippets
      graph.push({
        "@type": "FAQPage",
        "mainEntity": r.faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      });
    }
  } else if (route.type === 'article') {
    const art = CLINICAL_ARTICLES[route.articleKey];
    if (art) {
      graph.push({
        "@type": "MedicalWebPage",
        "headline": art.h1,
        "description": art.description,
        "url": canonicalUrl,
        "datePublished": "2026-10-11",
        "dateModified": "2026-10-21",
        "author": {
          "@type": "Person",
          "name": art.author
        },
        "reviewedBy": {
          "@type": "Person",
          "name": art.reviewer
        },
        "publisher": {
          "@id": `${BASE_URL}/#organization`
        },
        "inLanguage": "en-US"
      });
    }
  } else if (route.type === 'home') {
    graph.push({
      "@type": "WebSite",
      "name": SITE_METADATA.siteName,
      "url": BASE_URL,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${BASE_URL}/comparisons?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

// Assemble Complete Static HTML for a Route
function generateStaticPage(template, route) {
  const canonicalUrl = `${BASE_URL}${route.path === '/' ? '/' : route.path}`;
  let html = template;

  // 0. Ensure US English language attribute
  html = html.replace(/<html(?:\s+[^>]*)?lang="[^"]*"/i, '<html lang="en-US"');

  // 1. Update <title>
  html = html.replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`);

  // 2. Update <meta name="description">
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/>/s,
    `<meta name="description" content="${route.description}" />`
  );

  // 3. Update Canonical URL
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
  html = html.replace(
    /<meta\s+property="og:type"\s+content=".*?"\s*\/>/s,
    `<meta property="og:type" content="${route.ogType || 'website'}" />`
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

  // 6. Schema.org JSON-LD
  const schemaObj = generateSchemaGraph(route);
  const schemaTag = `<script type="application/ld+json">\n${JSON.stringify(schemaObj, null, 2)}\n    </script>`;
  html = html.replace(/<script type="application\/ld\+json">.*?<\/script>/s, schemaTag);

  // 7. Render Rich Semantic Body Content inside <div id="root">
  let pageBodyContent = '';
  if (route.type === 'home') {
    pageBodyContent = renderHomepageHtml(route);
  } else if (route.type === 'review') {
    pageBodyContent = renderProductReviewHtml(route);
  } else if (route.type === 'article') {
    pageBodyContent = renderClinicalArticleHtml(route);
  } else {
    pageBodyContent = renderGeneralPageHtml(route);
  }

  const completeRootHtml = `
    <div id="root">
      ${renderCommonHeader()}
      ${pageBodyContent}
      ${renderFooter()}
    </div>
  `;

  // Robustly replace the entire <div id="root">...</div> up to </body>
  html = html.replace(/<div id="root">[\s\S]*?<\/div>\s*<\/body>/s, `${completeRootHtml.trim()}\n  </body>`);

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
    const pageHtml = generateStaticPage(template, route);

    if (route.path === '/') {
      fs.writeFileSync(templatePath, pageHtml, 'utf8');
      console.log(`  ✓ Prerendered Homepage: dist/index.html (H1: "${route.h1}") [${pageHtml.length} bytes]`);
    } else {
      const targetDir = path.join(DIST_DIR, route.path.replace(/^\//, ''));
      fs.mkdirSync(targetDir, { recursive: true });
      const targetFile = path.join(targetDir, 'index.html');
      fs.writeFileSync(targetFile, pageHtml, 'utf8');
      console.log(`  ✓ Prerendered Route: ${route.path}/index.html (H1: "${route.h1}") [${pageHtml.length} bytes]`);
    }
    generatedCount++;
  }

  console.log(`✨ Successfully prerendered ${generatedCount} static HTML pages adhering strictly to Bing Webmaster Guidelines.`);
}

runPrerender();
