import { useEffect } from 'react';
import { ArticleRecord, ProductRecord } from '../types';
import { getCategoryById } from '../data/categories';
import { AUTHORS, getAuthorById, getReviewerById } from '../data/authors';

interface SEOHeadProps {
  currentPath: string;
  article?: ArticleRecord;
  product?: ProductRecord;
  categoryId?: string;
  legalSlug?: string;
}

const BASE_URL = 'https://77-review.vercel.app';
const DEFAULT_TITLE = '77 Review – Evidence-Aware Health, Fitness & Supplement Reviews';
const DEFAULT_DESC =
  'Independent health, fitness, and supplement editorial publication delivering evidence-backed reviews, transparent comparisons, and scientific buying guides.';
const DEFAULT_IMAGE = `${BASE_URL}/logo-77review.png`;

export function SEOHead({ currentPath, article, product, categoryId, legalSlug }: SEOHeadProps) {
  useEffect(() => {
    let title = DEFAULT_TITLE;
    let description = DEFAULT_DESC;
    const cleanPath = currentPath === '/' ? '' : currentPath;
    const canonicalUrl = `${BASE_URL}${cleanPath || '/'}`;
    let ogType = 'website';
    let imageUrl = DEFAULT_IMAGE;
    let graphItems: object[] = [];

    // Base breadcrumb: Homepage
    const breadcrumbItemList: Array<{ name: string; item: string }> = [
      { name: 'Home', item: `${BASE_URL}/` }
    ];

    if (article) {
      title = `${article.title} – 77 Review Clinical Analysis`;
      description = article.subtitle || article.conciseSummaryAnswer || DEFAULT_DESC;
      imageUrl = article.heroImageUrl?.startsWith('http') ? article.heroImageUrl : `${BASE_URL}${article.heroImageUrl}`;
      ogType = 'article';

      const author = getAuthorById(article.authorId) || AUTHORS[0];
      const reviewer = getReviewerById(article.reviewerId);

      breadcrumbItemList.push(
        { name: 'Research Articles', item: `${BASE_URL}/#articles` },
        { name: article.title, item: canonicalUrl }
      );

      graphItems.push({
        '@type': 'Article',
        '@id': `${canonicalUrl}#article`,
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${BASE_URL}/#website`
        },
        headline: article.title,
        alternativeHeadline: article.subtitle,
        description: description,
        image: [imageUrl],
        datePublished: article.publishDate || '2026-10-18',
        dateModified: article.lastUpdatedDate || '2026-10-18',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl
        },
        author: {
          '@type': 'Person',
          name: author.name,
          jobTitle: author.title,
          description: author.credentials
        },
        contributor: reviewer
          ? {
              '@type': 'Person',
              name: reviewer.name,
              jobTitle: reviewer.title,
              description: reviewer.credentials
            }
          : undefined,
        publisher: {
          '@type': 'Organization',
          '@id': `${BASE_URL}/#organization`,
          name: '77 Review',
          logo: {
            '@type': 'ImageObject',
            url: `${BASE_URL}/logo-77review.png`
          }
        }
      });
    } else if (product) {
      title = `${product.name} Review (${product.brand}) – 77 Review`;
      description = product.shortDescription || DEFAULT_DESC;
      imageUrl = product.imageUrl?.startsWith('http') ? product.imageUrl : `${BASE_URL}${product.imageUrl}`;
      ogType = 'product';

      const author = getAuthorById(product.authorId) || AUTHORS[0];

      breadcrumbItemList.push(
        { name: 'Supplement Reviews', item: `${BASE_URL}/#reviews` },
        { name: product.name, item: canonicalUrl }
      );

      graphItems.push({
        '@type': 'Product',
        '@id': `${canonicalUrl}#product`,
        name: product.name,
        image: [imageUrl],
        description: product.shortDescription,
        brand: {
          '@type': 'Brand',
          name: product.brand
        },
        review: {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: product.rating.overall,
            bestRating: 10,
            worstRating: 1
          },
          author: {
            '@type': 'Person',
            name: author.name
          },
          publisher: {
            '@type': 'Organization',
            name: '77 Review'
          }
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: product.rating.overall,
          bestRating: 10,
          worstRating: 1,
          ratingCount: 64,
          reviewCount: 64
        },
        offers: {
          '@type': 'Offer',
          url: canonicalUrl,
          priceCurrency: product.currency || 'USD',
          price: product.price || 49,
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          seller: {
            '@type': 'Organization',
            name: product.merchantName || product.brand
          }
        }
      });
    } else if (categoryId) {
      const cat = getCategoryById(categoryId as any);
      if (cat) {
        title = `${cat.title} – Evidence-Based Reviews & Science – 77 Review`;
        description = cat.description;

        breadcrumbItemList.push({
          name: cat.title,
          item: canonicalUrl
        });

        graphItems.push({
          '@type': 'CollectionPage',
          '@id': `${canonicalUrl}#category`,
          name: cat.title,
          description: cat.description,
          url: canonicalUrl
        });
      }
    } else if (currentPath === '/comparisons' || currentPath === '/compare') {
      title = 'Clinical Health & Supplement Comparisons – 77 Review';
      description = 'Head-to-head clinical formulation comparisons, ingredient benchmark grading, and cost-per-serving calculations.';

      breadcrumbItemList.push({
        name: 'Comparisons',
        item: canonicalUrl
      });

      graphItems.push({
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#page`,
        name: 'Clinical Health & Supplement Comparisons',
        description: description,
        url: canonicalUrl
      });
    } else if (currentPath.startsWith('/ingredients')) {
      title = 'Evidence-Graded Supplement Ingredient Directory – 77 Review';
      description = 'Explore human clinical trials, dosage standards, biological mechanisms, and scientific grades for key dietary compounds.';

      breadcrumbItemList.push({
        name: 'Ingredients Directory',
        item: canonicalUrl
      });

      graphItems.push({
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#page`,
        name: 'Evidence-Graded Supplement Ingredient Directory',
        description: description,
        url: canonicalUrl
      });
    } else if (legalSlug) {
      const formattedTitle = legalSlug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
      title = `${formattedTitle} – 77 Review Institutional Governance`;
      description = `Official 77 Review institutional governance: ${formattedTitle}. Read our clinical verification, transparency standards, and compliance rules.`;

      breadcrumbItemList.push({
        name: formattedTitle,
        item: canonicalUrl
      });

      graphItems.push({
        '@type': legalSlug === 'contact' ? 'ContactPage' : legalSlug === 'about' ? 'AboutPage' : 'WebPage',
        '@id': `${canonicalUrl}#page`,
        name: formattedTitle,
        description: description,
        url: canonicalUrl
      });
    } else {
      // Homepage
      graphItems.push({
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: '77 Review',
        description: DEFAULT_DESC,
        publisher: {
          '@type': 'Organization',
          '@id': `${BASE_URL}/#organization`,
          name: '77 Review',
          url: BASE_URL,
          logo: {
            '@type': 'ImageObject',
            url: `${BASE_URL}/logo-77review.png`
          }
        }
      });
    }

    // Add BreadcrumbList Schema for all pages
    if (breadcrumbItemList.length > 1) {
      graphItems.push({
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumbs`,
        itemListElement: breadcrumbItemList.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: b.name,
          item: b.item
        }))
      });
    }

    // 1. Update Document Title
    document.title = title;

    // Helper to safely set meta attribute
    const setMetaTag = (selector: string, attr: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.startsWith('meta[name=')) {
          const name = selector.match(/meta\[name="([^"]+)"\]/)?.[1];
          if (name) element.setAttribute('name', name);
        } else if (selector.startsWith('meta[property=')) {
          const prop = selector.match(/meta\[property="([^"]+)"\]/)?.[1];
          if (prop) element.setAttribute('property', prop);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attr, value);
    };

    // 2. Meta description & robots
    setMetaTag('meta[name="description"]', 'content', description);
    setMetaTag('meta[name="robots"]', 'content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('meta[name="bingbot"]', 'content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // 3. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 4. OpenGraph Tags
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    setMetaTag('meta[property="og:image"]', 'content', imageUrl);
    setMetaTag('meta[property="og:site_name"]', 'content', '77 Review');

    // 5. Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[name="twitter:image"]', 'content', imageUrl);

    // 6. Dynamic Page Schema JSON-LD Graph
    const dynamicSchemaId = 'dynamic-page-schema';
    let scriptTag = document.getElementById(dynamicSchemaId);
    if (graphItems.length > 0) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = dynamicSchemaId;
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': graphItems
      });
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [currentPath, article, product, categoryId, legalSlug]);

  return null;
}
