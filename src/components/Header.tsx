import { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-void/90 backdrop-blur-lg border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative">
              <Flame className="w-10 h-10 text-primary animate-pulse-glow" />
              <div className="absolute inset-0 blur-lg bg-primary/30 rounded-full" />
            </div>
            <span className="font-display text-2xl font-bold tracking-wider text-foreground">
              DIIX<span className="text-primary">ACADEMY</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-muted-foreground hover:text-primary transition-colors duration-300 font-medium group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_10px_hsl(var(--primary))]" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-fantasy px-6 py-2 font-semibold rounded-lg text-primary-foreground">
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-dark-void/95 backdrop-blur-lg border-b border-border transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
            >
              {link.name}
            </a>
          ))}
          <Button className="btn-fantasy mt-4 w-full py-3 font-semibold rounded-lg text-primary-foreground">
            Começar Agora
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
