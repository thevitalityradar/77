import React, { useState } from 'react';
import { Menu, X, Search, ShieldCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenGovernance?: () => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenGovernance,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'PhytoMemone Review', path: '/review/phytomem-one-brain-memory-review' },
    { label: 'ProDentim Review', path: '/review/prodentim-advanced-oral-probiotics-review' },
    { label: 'AudiSoothe Review', path: '/review/audisoothe-ear-health-tinnitus-drops-review' },
    { label: 'Comparisons', path: '/comparisons' },
    { label: 'Evidence Index', path: '/ingredients' }
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      {/* Top Bar Contract: 3 Zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark / Logo */}
        <div className="shrink-0 flex items-center">
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center focus:outline-none"
            aria-label="77 Review Home"
          >
            <BrandLogo size="md" showTagline={false} />
          </button>
        </div>

        {/* Zone 2: 4-5 Concise Single-Line Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600"
          aria-label="Main Navigation"
        >
          {navLinks.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 ${
                  isActive
                    ? 'text-emerald-900 font-semibold border-b-2 border-emerald-700'
                    : 'hover:text-stone-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Quick Utilities */}
        <div className="flex items-center gap-3 shrink-0">
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="p-2 text-stone-500 hover:text-stone-900 transition-colors"
              title="Search Reviews & Studies"
              aria-label="Open Search"
            >
              <Search className="w-4 h-4" />
            </button>
          )}

          {onOpenGovernance && (
            <button
              onClick={onOpenGovernance}
              className="hidden lg:inline-flex items-center gap-1.5 py-1.5 px-3 text-xs font-medium text-stone-600 bg-stone-100 hover:bg-stone-200 transition-colors whitespace-nowrap shrink-0 border border-stone-200"
              title="Inspect Editorial Governance & Verification Trail"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Editorial Governance</span>
            </button>
          )}

          <button
            onClick={() => handleNavClick('/methodology')}
            className="hidden sm:inline-block py-2 px-4 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 transition-colors whitespace-nowrap shrink-0"
          >
            Our Methodology
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-stone-900"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-white px-4 pt-2 pb-6 space-y-3">
          <div className="space-y-1">
            {navLinks.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block w-full text-left py-2.5 px-3 text-sm font-medium ${
                  currentPath === item.path
                    ? 'bg-emerald-50 text-emerald-900 font-semibold'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('/methodology')}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900"
            >
              Our Methodology & Evidence Hierarchy
            </button>
            {onOpenGovernance && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGovernance();
                }}
                className="w-full py-2 text-center text-xs font-medium text-stone-600 bg-stone-100 hover:bg-stone-200 border border-stone-200"
              >
                Inspect Editorial Governance
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
