import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'contato@diixacademy.com',
    href: 'mailto:contato@diixacademy.com',
  },
  {
    icon: Phone,
    title: 'Telefone',
    value: '+55 (11) 99999-9999',
    href: 'tel:+5511999999999',
  },
  {
    icon: MapPin,
    title: 'Endereço',
    value: 'São Paulo, Brasil',
    href: '#',
  },
];

const Contact = () => {
  return (
    <section id="contato" className="relative py-20 sm:py-28 lg:py-32 3xl:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] sm:w-[500px] lg:w-[600px] 3xl:w-[800px] aspect-square bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-[300px] sm:w-[400px] lg:w-[500px] aspect-square bg-fantasy-purple/10 rounded-full blur-3xl" />

      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="section-title animate-fade-up">
            <span className="text-foreground">Entre em </span>
            <span className="text-primary glow-text">Contato</span>
          </h2>
          <p className="section-subtitle animate-fade-up delay-100">
            Tem alguma dúvida? Nossa equipe está pronta para ajudar você
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 3xl:gap-16 max-w-6xl 3xl:max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 animate-slide-in-left">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl 3xl:text-4xl font-semibold text-foreground mb-3 sm:mb-4">
                Fale Conosco
              </h3>
              <p className="text-sm sm:text-base lg:text-lg 3xl:text-xl text-muted-foreground font-body leading-relaxed">
                Estamos sempre disponíveis para ouvir você. Entre em contato pelos canais abaixo ou preencha o formulário.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="glass-card-hover flex items-center gap-4 sm:gap-5 p-4 sm:p-5 3xl:p-6 rounded-xl sm:rounded-2xl group animate-fade-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 3xl:w-16 3xl:h-16 rounded-xl sm:rounded-2xl glass-card flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(var(--cyan-glow)/0.3)] transition-all">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 3xl:w-7 3xl:h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm 3xl:text-base text-muted-foreground font-body">{item.title}</div>
                    <div className="font-heading font-medium text-foreground text-sm sm:text-base lg:text-lg 3xl:text-xl">
                      {item.value}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="fantasy-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 3xl:p-12 animate-slide-in-right">
            <form className="space-y-4 sm:space-y-5 lg:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="text-xs sm:text-sm 3xl:text-base text-muted-foreground mb-2 block font-body font-medium">Nome</label>
                  <Input
                    placeholder="Seu nome"
                    className="bg-dark-void/50 border-border/50 focus:border-primary focus:ring-primary/20 h-11 sm:h-12 3xl:h-14 text-sm sm:text-base 3xl:text-lg rounded-xl font-body"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm 3xl:text-base text-muted-foreground mb-2 block font-body font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-dark-void/50 border-border/50 focus:border-primary focus:ring-primary/20 h-11 sm:h-12 3xl:h-14 text-sm sm:text-base 3xl:text-lg rounded-xl font-body"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-xs sm:text-sm 3xl:text-base text-muted-foreground mb-2 block font-body font-medium">Assunto</label>
                <Input
                  placeholder="Como podemos ajudar?"
                  className="bg-dark-void/50 border-border/50 focus:border-primary focus:ring-primary/20 h-11 sm:h-12 3xl:h-14 text-sm sm:text-base 3xl:text-lg rounded-xl font-body"
                />
              </div>

              <div>
                <label className="text-xs sm:text-sm 3xl:text-base text-muted-foreground mb-2 block font-body font-medium">Mensagem</label>
                <Textarea
                  placeholder="Escreva sua mensagem aqui..."
                  rows={5}
                  className="bg-dark-void/50 border-border/50 focus:border-primary focus:ring-primary/20 resize-none text-sm sm:text-base 3xl:text-lg rounded-xl font-body"
                />
              </div>

              <Button className="btn-fantasy w-full py-4 sm:py-5 3xl:py-6 text-primary-foreground font-bold rounded-xl sm:rounded-2xl text-base sm:text-lg 3xl:text-xl group">
                <span>Enviar Mensagem</span>
                <Send className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
