import React, { useState, useMemo } from 'react';
import { Search, X, FileText, Package, Sparkles, ArrowRight } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { PRODUCTS } from '../data/products';
import { INGREDIENTS_DATABASE } from '../data/ingredients';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');

  const filteredResults = useMemo(() => {
    if (!query.trim()) {
      return {
        articles: ARTICLES.slice(0, 3),
        products: PRODUCTS.slice(0, 2),
        ingredients: INGREDIENTS_DATABASE.slice(0, 3)
      };
    }
    const q = query.toLowerCase();

    const articles = ARTICLES.filter(
      a =>
        a.title.toLowerCase().includes(q) ||
        a.subtitle.toLowerCase().includes(q) ||
        a.conciseSummaryAnswer.toLowerCase().includes(q)
    );

    const products = PRODUCTS.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q)
    );

    const ingredients = INGREDIENTS_DATABASE.filter(
      i =>
        i.name.toLowerCase().includes(q) ||
        i.primaryCategory.toLowerCase().includes(q) ||
        i.aliases.some(a => a.toLowerCase().includes(q))
    );

    return { articles, products, ingredients };
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-white max-w-2xl w-full border border-stone-200 shadow-2xl p-6 space-y-4">
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-stone-200 pb-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search clinical reviews, products, ingredients, or studies..."
            className="w-full text-base font-sans text-stone-900 placeholder:text-stone-400 focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-900"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto space-y-6 pt-2 divide-y divide-stone-100">
          
          {/* Articles Section */}
          {filteredResults.articles.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-mono text-stone-400 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Editorial Research Guides</span>
              </span>
              <div className="space-y-1">
                {filteredResults.articles.map(article => (
                  <button
                    key={article.id}
                    onClick={() => handleSelect(`/article/${article.slug}`)}
                    className="w-full text-left p-2.5 hover:bg-stone-50 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-stone-900 group-hover:text-emerald-800 transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                        {article.subtitle}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-800 transition-colors shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Products Section */}
          {filteredResults.products.length > 0 && (
            <div className="pt-4 space-y-2">
              <span className="text-xs uppercase tracking-wider font-mono text-stone-400 flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5" />
                <span>Verified Product Reviews</span>
              </span>
              <div className="space-y-1">
                {filteredResults.products.map(prod => (
                  <button
                    key={prod.id}
                    onClick={() => handleSelect(`/review/${prod.slug}`)}
                    className="w-full text-left p-2.5 hover:bg-stone-50 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-stone-900 group-hover:text-emerald-800 transition-colors">
                          {prod.name}
                        </h4>
                        <span className="text-xs text-stone-500">({prod.brand})</span>
                      </div>
                      <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                        {prod.shortDescription}
                      </p>
                    </div>
                    <div className="text-right shrink-0 ml-3">
                      <span className="text-xs font-mono font-bold text-stone-800 block">
                        {prod.rating.overall} / 10
                      </span>
                      <span className="text-[11px] text-stone-400">${prod.price}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Active Ingredients Section */}
          {filteredResults.ingredients.length > 0 && (
            <div className="pt-4 space-y-2">
              <span className="text-xs uppercase tracking-wider font-mono text-stone-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Scientific Ingredient Index</span>
              </span>
              <div className="space-y-1">
                {filteredResults.ingredients.map(ing => (
                  <button
                    key={ing.id}
                    onClick={() => handleSelect(`/ingredients#${ing.id}`)}
                    className="w-full text-left p-2.5 hover:bg-stone-50 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-stone-900 group-hover:text-emerald-800 transition-colors">
                        {ing.name}
                      </h4>
                      <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                        Standard Dose: {ing.clinicallyStudiedDose}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 border border-stone-200 text-stone-700 bg-stone-50 shrink-0 ml-3">
                      Grade {ing.evidenceGrade}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredResults.articles.length === 0 &&
            filteredResults.products.length === 0 &&
            filteredResults.ingredients.length === 0 && (
              <div className="py-8 text-center text-stone-500 text-sm">
                No matching clinical guides or products found for "{query}".
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
