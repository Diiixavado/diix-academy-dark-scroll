import { HelpCircle, MessageCircle, FileText, Video, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const supportChannels = [
  {
    icon: MessageCircle,
    title: 'Chat ao Vivo',
    description: 'Converse com nossa equipe em tempo real',
    action: 'Iniciar Chat',
    available: true,
  },
  {
    icon: FileText,
    title: 'Central de Ajuda',
    description: 'Artigos e tutoriais detalhados',
    action: 'Acessar',
    available: true,
  },
  {
    icon: Video,
    title: 'Tutoriais em Vídeo',
    description: 'Aprenda passo a passo em vídeo',
    action: 'Assistir',
    available: true,
  },
  {
    icon: Headphones,
    title: 'Suporte por Telefone',
    description: 'Fale diretamente com um especialista',
    action: 'Ligar',
    available: false,
  },
];

const faqs = [
  {
    question: 'Como faço para acessar meus cursos?',
    answer: 'Após a compra, você receberá um email com suas credenciais de acesso. Basta fazer login na plataforma e todos os seus cursos estarão disponíveis na área do aluno.',
  },
  {
    question: 'Qual é a política de reembolso?',
    answer: 'Oferecemos garantia de 7 dias. Se você não estiver satisfeito com o conteúdo, pode solicitar o reembolso integral sem questionamentos.',
  },
  {
    question: 'Os cursos têm certificado?',
    answer: 'Sim! Todos os cursos oferecem certificado de conclusão digital que pode ser compartilhado no LinkedIn e incluído no seu currículo.',
  },
  {
    question: 'Posso acessar os cursos pelo celular?',
    answer: 'Absolutamente! Nossa plataforma é 100% responsiva e também oferecemos um aplicativo dedicado para iOS e Android.',
  },
  {
    question: 'Por quanto tempo tenho acesso ao conteúdo?',
    answer: 'Você terá acesso vitalício a todos os cursos adquiridos, incluindo futuras atualizações de conteúdo.',
  },
];

const Support = () => {
  return (
    <section id="suporte" className="relative py-20 sm:py-28 lg:py-32 3xl:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-surface" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[600px] lg:w-[800px] 3xl:w-[1000px] h-[300px] sm:h-[400px] bg-primary/8 rounded-full blur-3xl" />

      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="section-title animate-fade-up">
            <span className="text-foreground">Central de </span>
            <span className="text-primary glow-text">Suporte</span>
          </h2>
          <p className="section-subtitle animate-fade-up delay-100">
            Estamos aqui para ajudar. Escolha o canal de suporte que preferir
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 3xl:gap-8 mb-16 sm:mb-20 lg:mb-24 max-w-5xl 3xl:max-w-6xl mx-auto">
          {supportChannels.map((channel, index) => (
            <div
              key={channel.title}
              className="fantasy-card rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-6 3xl:p-8 text-center glass-card-hover animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 3xl:w-20 3xl:h-20 rounded-xl sm:rounded-2xl glass-card flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-5">
                <channel.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 3xl:w-9 3xl:h-9 text-primary" />
              </div>
              <h3 className="font-heading text-sm sm:text-base lg:text-lg 3xl:text-xl font-semibold text-foreground mb-1 sm:mb-2">
                {channel.title}
              </h3>
              <p className="text-xs sm:text-sm 3xl:text-base text-muted-foreground font-body mb-3 sm:mb-4 line-clamp-2">
                {channel.description}
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className={`btn-fantasy-outline text-primary text-xs sm:text-sm 3xl:text-base w-full rounded-lg sm:rounded-xl py-2 sm:py-2.5 ${
                  !channel.available ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={!channel.available}
              >
                {channel.action}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl 3xl:max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12 animate-fade-up delay-300">
            <div className="inline-flex items-center gap-2 text-primary mb-3 sm:mb-4">
              <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="font-tech font-medium text-sm sm:text-base 3xl:text-lg tracking-wider">PERGUNTAS FREQUENTES</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl font-bold text-foreground">
              Dúvidas Comuns
            </h3>
          </div>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="fantasy-card rounded-xl sm:rounded-2xl px-4 sm:px-6 3xl:px-8 border-none animate-fade-up"
                style={{ animationDelay: `${0.4 + index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left font-heading font-medium text-foreground hover:text-primary transition-colors py-4 sm:py-5 3xl:py-6 hover:no-underline text-sm sm:text-base lg:text-lg 3xl:text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 sm:pb-5 font-body text-sm sm:text-base 3xl:text-lg leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Support;
