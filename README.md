# 77 Review — Evidence-Aware Health, Fitness & Supplement Editorial Platform

**Version:** 2.0  
**Target Market:** United States (American English)  
**Architecture:** Modern React + TypeScript + Vite + Tailwind CSS  
**Target Hosting:** Vercel / GitHub  

---

## 1. Overview & Brand Mission

**77 Review** is an independent health, fitness, and dietary supplement editorial publication. It provides consumers with evidence-grounded research syntheses, ingredient purity audits, side-by-side product comparisons, and FTC-compliant buying guides.

### Editorial & Medical Boundaries
- **No Disease Cures:** We strictly prohibit claims that supplements diagnose, treat, prevent, or cure any pathology or chronic medical condition.
- **Evidence Hierarchy:** Claims are substantiated by systematic reviews and randomized controlled trials (RCTs) indexed in the US National Library of Medicine (PubMed / Cochrane).
- **Commercial Independence:** Ratings, product scores, and ranking orders are determined solely by documented clinical data and lab certificates of analysis—never by affiliate commission rates.

---

## 2. Taxonomy & Information Architecture

The website implements four core categories:
1. **Health & Wellness (`/category/health-wellness`)**: Circadian sleep biology, recovery protocols, hydration, and stress physiology.
2. **Fitness & Sports (`/category/fitness-sports`)**: Biomechanics, percussive therapy, resistance tools, and biometric recovery wearables.
3. **Supplements & Nutrition (`/category/supplements-nutrition`)**: Active compound analysis, clinical dosing standards, label transparency, and contraindications.
4. **Product Reviews & Comparisons (`/category/product-reviews-comparisons`)**: Head-to-head laboratory label breakdowns, cost-per-serving benchmarks, and objective scorecards.

---

## 3. Key Features

- **Documented Research Trail**: Every article and product evaluation embeds a verifiable research citations table with journal citations, publication year, PubMed PMIDs, study types, and documented limitations.
- **Top Bar Contract**: Follows strict 3-zone navigation layout with single-line typography.
- **FTC-Compliant Commercial Transparency**: Prominent affiliate disclosures on all commercial pages with interactive explanations of zero-commission bias.
- **Interactive Head-to-Head Comparison Tool (`/comparisons`)**: Allows visitors to compare any two products side-by-side with automatic spec and cost calculations.
- **Scientific Ingredient Evidence Database (`/ingredients`)**: Searchable index of active compounds benchmarked against NIH Office of Dietary Supplements standards.
- **Built-in Compliance & Governance Inspectors**:
  - **Editorial Governance Inspector**: Audits the 7-step publishing gate workflow, author credentials, medical reviewer sign-off, and risk levels.
  - **Google & Meta Ads Policy Auditor**: Verifies landing page copy against healthcare restrictions, unsubstantiated claim bans, and personal health attribute rules.
- **Technical SEO Ready**: Configured `sitemap.xml`, `robots.txt`, Schema.org Organization/WebSite JSON-LD, OpenGraph, and Twitter cards.

---

## 4. Local Development & Build

### Prerequisites
- Node.js $\ge$ 18 or 20
- npm, yarn, or bun

### Commands
```bash
# 1. Install dependencies
npm install

# 2. Start local development server (port 3000)
npm run dev

# 3. Type-check and lint
npm run lint

# 4. Generate production build
npm run build
```

---

## 5. Adding New Content & Products

### Registering a New Product
Open `src/data/products.ts` and append a new `ProductRecord` object:
```typescript
{
  id: 'prod-my-supplement',
  slug: 'my-supplement-brand',
  name: 'Brand 100% Pure Formula',
  brand: 'Brand Labs',
  category: 'supplements-nutrition',
  classification: 'supplement',
  rating: { overall: 9.1, evidenceSupport: 9.3, ingredientQuality: 9.2, priceTransparency: 9.0, safetyProfile: 9.5 },
  reviewMethodologyType: 'research_based_analysis', // or 'hands_on_testing'
  price: 29.99,
  servingCount: 60,
  costPerServing: 0.50,
  affiliateUrl: 'https://...',
  affiliateNetwork: 'ShareASale',
  citations: [ /* PubMed verified studies */ ],
  googleAdsCompliant: true,
  metaAdsCompliant: true
}
```

### Adding a New Clinical Article
Open `src/data/articles.ts` and append a new `ArticleRecord` object:
- Provide concise 1-2 sentence direct answer in `conciseSummaryAnswer` for search intent.
- Assign an author from `src/data/authors.ts` and a credentialed medical reviewer.
- Attach clinical citations with genuine PubMed IDs and study limitation disclosures.

---

## 6. GitHub & Vercel Deployment Workflow

1. **Initialize Git Repository**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of 77 Review platform"
   ```
2. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/77-review.git
   git branch -M main
   git push -u origin main
   ```
3. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com) and click **Add New Project**.
   - Import your `77-review` repository.
   - Framework Preset: **Vite**.
   - Build Command: `npm run build` (outputs to `dist`).
   - Add environment variables from `.env.example` (`VITE_SITE_URL="https://77review.com"`).
   - Click **Deploy**.
4. **Connect Custom Domain**:
   - In Vercel Project Settings $\to$ **Domains**, add `77review.com` and `www.77review.com`.
   - Configure DNS CNAME / A records according to Vercel's instructions.
5. **Post-Launch Verification**:
   - Verify HTTPS certificate resolution.
   - Submit `https://77review.com/sitemap.xml` to Google Search Console and Bing Webmaster Tools.
