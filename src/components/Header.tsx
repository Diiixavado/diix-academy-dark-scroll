import { useState, useEffect } from 'react';
import { Menu, X, Flame, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Produtos', href: '#produtos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Contato', href: '#contato' },
  { name: 'Suporte', href: '#suporte' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'glass-header shadow-lg py-2 sm:py-3'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="container-responsive">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18 3xl:h-22">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative">
              <Flame className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 3xl:w-14 3xl:h-14 text-primary animate-pulse-glow" />
              <div className="absolute inset-0 blur-xl bg-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl lg:text-2xl 3xl:text-3xl font-bold tracking-wider text-foreground leading-none">
                DIIX
              </span>
              <span className="font-tech text-[10px] sm:text-xs lg:text-sm 3xl:text-base text-primary tracking-[0.3em] leading-none">
                ACADEMY
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 3xl:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="animated-underline text-muted-foreground hover:text-primary transition-colors duration-300 font-body font-semibold text-base xl:text-lg 3xl:text-xl tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button className="btn-fantasy px-4 xl:px-6 3xl:px-8 py-2 xl:py-2.5 3xl:py-3 font-semibold rounded-xl text-primary-foreground text-sm xl:text-base 3xl:text-lg group">
              <Sparkles className="w-4 h-4 xl:w-5 xl:h-5 mr-2 group-hover:animate-pulse" />
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass-card border-t border-border/50 transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <nav className="container-responsive py-6 flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 font-body font-semibold py-3 px-4 rounded-xl text-lg"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {link.name}
            </a>
          ))}
          <Button className="btn-fantasy mt-4 w-full py-4 font-semibold rounded-xl text-primary-foreground text-lg">
            <Sparkles className="w-5 h-5 mr-2" />
            Começar Agora
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
