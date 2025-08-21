import React, { useEffect, useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

/** Inline Alloc logo (white text, gradient icon) */
const AllocLogo: React.FC<{ height?: number }> = ({ height = 28 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 120"
    height={height}
    aria-label="Alloc"
    role="img"
  >
    <defs>
      <linearGradient id="allocGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00E5FF" />
        <stop offset="100%" stopColor="#2979FF" />
      </linearGradient>
    </defs>
    {/* Icon */}
    <path
      d="M60 20 A40 40 0 0 1 60 100 M100 20 A40 40 0 0 0 100 100"
      stroke="url(#allocGrad)"
      strokeWidth="15"
      strokeLinecap="round"
      fill="none"
    />
    {/* Wordmark */}
    <text
      x="140"
      y="78"
      fontFamily="Inter, Poppins, Segoe UI, Arial, Helvetica, sans-serif"
      fontSize="60"
      fontWeight="800"
      fill="#FFFFFF"
    >
      Alloc
    </text>
  </svg>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string>('#home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ] as const;

  // Smooth scroll + close mobile
  const handleNavClick = useCallback((href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // On scroll, toggle glass background and update active section
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight active section via IntersectionObserver
  useEffect(() => {
    const sections = navItems
      .map(n => document.querySelector(n.href))
      .filter(Boolean) as Element[];

    if (!('IntersectionObserver' in window) || sections.length === 0) return;

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            setActive(id);
            // update URL hash without jump
            history.replaceState(null, '', id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 }
    );

    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // Lock scroll when mobile menu open + close on Escape
  useEffect(() => {
    const root = document.documentElement;
    if (isMobileMenuOpen) root.classList.add('overflow-hidden');
    else root.classList.remove('overflow-hidden');

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      root.classList.remove('overflow-hidden');
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card border-b border-electric-blue/20' : 'bg-transparent'
      }`}
      aria-label="Primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            className="flex items-center space-x-2 focus-visible:outline-2 focus-visible:outline-teal focus-visible:outline-offset-2"
            onClick={() => handleNavClick('#home')}
            aria-label="Go to home"
          >
            <AllocLogo height={28} />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="ml-8 flex items-center space-x-6">
              {navItems.map(item => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-teal focus-visible:outline-offset-2 ${
                    active === item.href ? 'text-white' : 'text-white/70 hover:text-teal'
                  }`}
                  aria-current={active === item.href ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(v => !v)}
              className="glass-button p-2"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-[max-height,opacity] duration-300 ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="glass-card mx-4 mb-4 px-2 pt-2 pb-3 space-y-1">
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-teal focus-visible:outline-offset-2 ${
                active === item.href ? 'text-white' : 'text-white/80 hover:text-teal'
              }`}
              aria-current={active === item.href ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
