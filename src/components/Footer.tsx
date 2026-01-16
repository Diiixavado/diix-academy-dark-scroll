import { Flame, Github, Twitter, Linkedin, Instagram, Youtube, ArrowUp, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  platform: [
    { name: 'Cursos', href: '#produtos' },
    { name: 'Planos', href: '#' },
    { name: 'Para Empresas', href: '#' },
    { name: 'Certificados', href: '#' },
  ],
  support: [
    { name: 'Central de Ajuda', href: '#suporte' },
    { name: 'FAQ', href: '#suporte' },
    { name: 'Comunidade', href: '#' },
    { name: 'Contato', href: '#contato' },
  ],
  company: [
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Carreiras', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Imprensa', href: '#' },
  ],
  legal: [
    { name: 'Termos de Uso', href: '#' },
    { name: 'Privacidade', href: '#' },
    { name: 'Cookies', href: '#' },
    { name: 'Licenças', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Github, href: '#', label: 'GitHub' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-void border-t border-border/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-responsive relative z-10">
        {/* Newsletter Section */}
        <div className="py-10 sm:py-12 lg:py-16 3xl:py-20 border-b border-border/30">
          <div className="max-w-2xl 3xl:max-w-3xl mx-auto text-center">
            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl 3xl:text-4xl font-bold text-foreground mb-2 sm:mb-3">
              Fique por dentro das <span className="text-primary">novidades</span>
            </h3>
            <p className="text-sm sm:text-base 3xl:text-lg text-muted-foreground font-body mb-5 sm:mb-6">
              Receba atualizações sobre novos cursos, promoções e conteúdos exclusivos.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md 3xl:max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="seu@email.com"
                className="bg-dark-surface border-border/50 focus:border-primary h-11 sm:h-12 3xl:h-14 text-sm sm:text-base 3xl:text-lg rounded-xl font-body flex-1"
              />
              <Button className="btn-fantasy px-6 sm:px-8 h-11 sm:h-12 3xl:h-14 text-primary-foreground font-semibold rounded-xl text-sm sm:text-base 3xl:text-lg">
                <Mail className="w-4 h-4 mr-2" />
                Inscrever
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-10 sm:py-12 lg:py-16 3xl:py-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 3xl:gap-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="relative">
                <Flame className="w-8 h-8 sm:w-10 sm:h-10 3xl:w-12 3xl:h-12 text-primary" />
                <div className="absolute inset-0 blur-lg bg-primary/30 rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl sm:text-2xl 3xl:text-3xl font-bold tracking-wider text-foreground leading-none">
                  DIIX
                </span>
                <span className="font-tech text-[10px] sm:text-xs 3xl:text-sm text-primary tracking-[0.3em] leading-none">
                  ACADEMY
                </span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm sm:text-base 3xl:text-lg font-body mb-5 sm:mb-6 max-w-xs leading-relaxed">
              Transformando vidas através da educação digital de excelência. Junte-se a milhares de alunos.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 3xl:w-12 3xl:h-12 rounded-lg sm:rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-[0_0_15px_hsl(var(--cyan-glow)/0.3)] transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 3xl:w-6 3xl:h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base 3xl:text-lg">Plataforma</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm 3xl:text-base text-muted-foreground hover:text-primary transition-colors font-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base 3xl:text-lg">Suporte</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm 3xl:text-base text-muted-foreground hover:text-primary transition-colors font-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base 3xl:text-lg">Empresa</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm 3xl:text-base text-muted-foreground hover:text-primary transition-colors font-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base 3xl:text-lg">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm 3xl:text-base text-muted-foreground hover:text-primary transition-colors font-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 sm:py-6 3xl:py-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm 3xl:text-base text-muted-foreground font-body flex items-center gap-1">
            © 2024 Diix Academy. Feito com <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary" /> no Brasil
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs sm:text-sm 3xl:text-base text-muted-foreground hover:text-primary transition-colors group font-body"
          >
            <span>Voltar ao topo</span>
            <div className="w-8 h-8 sm:w-9 sm:h-9 3xl:w-10 3xl:h-10 rounded-lg glass-card flex items-center justify-center group-hover:shadow-[0_0_15px_hsl(var(--cyan-glow)/0.3)] transition-all">
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-y-1" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
