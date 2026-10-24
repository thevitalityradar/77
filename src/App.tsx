import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SEOHead } from './components/SEOHead';

// Code-split subpages and modals to minimize initial bundle size and eliminate unused JavaScript
const CategoryPage = React.lazy(() => import('./pages/CategoryPage').then(m => ({ default: m.CategoryPage })));
const ArticleDetailPage = React.lazy(() => import('./pages/ArticleDetailPage').then(m => ({ default: m.ArticleDetailPage })));
const ProductReviewPage = React.lazy(() => import('./pages/ProductReviewPage').then(m => ({ default: m.ProductReviewPage })));
const ComparisonToolPage = React.lazy(() => import('./pages/ComparisonToolPage').then(m => ({ default: m.ComparisonToolPage })));
const IngredientsDirectoryPage = React.lazy(() => import('./pages/IngredientsDirectoryPage').then(m => ({ default: m.IngredientsDirectoryPage })));
const TrustAndLegalPages = React.lazy(() => import('./pages/TrustAndLegalPages').then(m => ({ default: m.TrustAndLegalPages })));
const EditorialGovernanceModal = React.lazy(() => import('./components/EditorialGovernanceModal').then(m => ({ default: m.EditorialGovernanceModal })));
const AdComplianceInspectorModal = React.lazy(() => import('./components/AdComplianceInspectorModal').then(m => ({ default: m.AdComplianceInspectorModal })));
const SearchModal = React.lazy(() => import('./components/SearchModal').then(m => ({ default: m.SearchModal })));
import { ARTICLES, getArticleBySlug } from './data/articles';
import { PRODUCTS, getProductBySlug } from './data/products';
import { ProductCategory, ProductRecord, ArticleRecord } from './types';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [isGovernanceOpen, setIsGovernanceOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [complianceProduct, setComplianceProduct] = useState<ProductRecord | null>(null);

  // Synchronize browser history / path
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);
      window.scrollTo(0, 0);
    };

    // Initialize from pathname
    if (window.location.pathname && window.location.pathname !== '/') {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenComplianceAudit = (product: ProductRecord) => {
    setComplianceProduct(product);
  };

  // Route matching logic
  const renderCurrentPage = () => {
    // 1. Article Page: /article/:slug
    if (currentPath.startsWith('/article/')) {
      const slug = currentPath.replace('/article/', '');
      const article = getArticleBySlug(slug) || ARTICLES[0];
      return (
        <ArticleDetailPage
          article={article}
          onNavigate={navigate}
          onOpenComplianceAudit={handleOpenComplianceAudit}
          onOpenGovernance={() => setIsGovernanceOpen(true)}
        />
      );
    }

    // 2. Product Review: /review/:slug
    if (currentPath.startsWith('/review/')) {
      const slug = currentPath.replace('/review/', '');
      const product = getProductBySlug(slug) || PRODUCTS[0];
      return (
        <ProductReviewPage
          product={product}
          onNavigate={navigate}
          onOpenComplianceAudit={handleOpenComplianceAudit}
          onOpenGovernance={() => setIsGovernanceOpen(true)}
        />
      );
    }

    // 3. Category Archive: /category/:id
    if (currentPath.startsWith('/category/')) {
      const categoryId = currentPath.replace('/category/', '') as ProductCategory;
      return (
        <CategoryPage
          categoryId={categoryId}
          onNavigate={navigate}
          onOpenComplianceAudit={handleOpenComplianceAudit}
        />
      );
    }

    // 4. Comparison Tool: /comparisons or /compare
    if (currentPath === '/comparisons' || currentPath === '/compare') {
      return (
        <ComparisonToolPage
          onNavigate={navigate}
          onOpenComplianceAudit={handleOpenComplianceAudit}
        />
      );
    }

    // 5. Ingredient Database: /ingredients
    if (currentPath.startsWith('/ingredients')) {
      return (
        <IngredientsDirectoryPage
          onNavigate={navigate}
        />
      );
    }

    // 6. Trust, Legal & Editorial Governance Pages
    const legalSlugs = [
      'about',
      'editorial-policy',
      'methodology',
      'medical-review',
      'affiliate-disclosure',
      'corrections',
      'contact',
      'privacy',
      'terms'
    ];
    const matchingLegal = legalSlugs.find(s => currentPath === `/${s}`);
    if (matchingLegal) {
      return (
        <TrustAndLegalPages
          initialSlug={matchingLegal}
          onNavigate={navigate}
        />
      );
    }

    // Default: Home Page
    return (
      <HomePage
        onNavigate={navigate}
        onOpenComplianceAudit={handleOpenComplianceAudit}
      />
    );
  };

  // Find currently active item for governance inspector and dynamic SEO
  const currentArticle = currentPath.startsWith('/article/')
    ? getArticleBySlug(currentPath.replace('/article/', ''))
    : undefined;

  const currentProduct = currentPath.startsWith('/review/')
    ? getProductBySlug(currentPath.replace('/review/', ''))
    : undefined;

  const currentCategoryId = currentPath.startsWith('/category/')
    ? currentPath.replace('/category/', '')
    : undefined;

  const legalSlugs = [
    'about',
    'editorial-policy',
    'methodology',
    'medical-review',
    'affiliate-disclosure',
    'corrections',
    'contact',
    'privacy',
    'terms'
  ];
  const matchingLegal = legalSlugs.find(s => currentPath === `/${s}`);

  const currentActiveItem = currentArticle || currentProduct;

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-stone-900 font-sans selection:bg-emerald-100 selection:text-emerald-950">
      {/* Dynamic SEO Meta, OpenGraph, Twitter and Structured Data */}
      <SEOHead
        currentPath={currentPath}
        article={currentArticle}
        product={currentProduct}
        categoryId={currentCategoryId}
        legalSlug={matchingLegal}
      />
      
      {/* Top Navigation Bar with Top Bar Contract */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenGovernance={() => setIsGovernanceOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Editorial Body */}
      <main className="flex-1">
        <React.Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center text-xs font-mono text-stone-400">Loading Clinical Research...</div>}>
          {renderCurrentPage()}
        </React.Suspense>
      </main>

      {/* Institutional Governance Footer */}
      <Footer onNavigate={navigate} />

      {/* Editorial Governance Modal */}
      {isGovernanceOpen && (
        <React.Suspense fallback={null}>
          <EditorialGovernanceModal
            isOpen={isGovernanceOpen}
            onClose={() => setIsGovernanceOpen(false)}
            item={currentActiveItem}
          />
        </React.Suspense>
      )}

      {/* Google Ads & Meta Ads Compliance Modal */}
      {complianceProduct && (
        <React.Suspense fallback={null}>
          <AdComplianceInspectorModal
            isOpen={!!complianceProduct}
            onClose={() => setComplianceProduct(null)}
            product={complianceProduct}
          />
        </React.Suspense>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <React.Suspense fallback={null}>
          <SearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onNavigate={navigate}
          />
        </React.Suspense>
      )}
    </div>
  );
}
