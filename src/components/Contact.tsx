import { Mail, Phone, MapPin, Send } from 'lucide-react';
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
    <section id="contato" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-foreground">Entre em </span>
            <span className="text-primary glow-text">Contato</span>
          </h2>
          <p className="section-subtitle">
            Tem alguma dúvida? Nossa equipe está pronta para ajudar você
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Fale Conosco
              </h3>
              <p className="text-muted-foreground">
                Estamos sempre disponíveis para ouvir você. Entre em contato pelos canais abaixo ou preencha o formulário.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="fantasy-card flex items-center gap-4 p-4 rounded-xl hover:shadow-[0_0_20px_hsl(var(--cyan-glow)/0.2)] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.title}</div>
                    <div className="font-medium text-foreground">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="fantasy-card rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Nome</label>
                  <Input
                    placeholder="Seu nome"
                    className="bg-dark-void border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-dark-void border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Assunto</label>
                <Input
                  placeholder="Como podemos ajudar?"
                  className="bg-dark-void border-border focus:border-primary focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Mensagem</label>
                <Textarea
                  placeholder="Escreva sua mensagem aqui..."
                  rows={5}
                  className="bg-dark-void border-border focus:border-primary focus:ring-primary/20 resize-none"
                />
              </div>

              <Button className="btn-fantasy w-full py-3 text-primary-foreground font-semibold rounded-xl group">
                Enviar Mensagem
                <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
