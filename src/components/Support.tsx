import { HelpCircle, MessageCircle, FileText, Video, ChevronDown } from 'lucide-react';
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
  },
  {
    icon: FileText,
    title: 'Central de Ajuda',
    description: 'Artigos e tutoriais detalhados',
    action: 'Acessar',
  },
  {
    icon: Video,
    title: 'Tutoriais em Vídeo',
    description: 'Aprenda passo a passo em vídeo',
    action: 'Assistir',
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
    <section id="suporte" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-surface" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-foreground">Central de </span>
            <span className="text-primary glow-text">Suporte</span>
          </h2>
          <p className="section-subtitle">
            Estamos aqui para ajudar. Escolha o canal de suporte que preferir
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto">
          {supportChannels.map((channel) => (
            <div
              key={channel.title}
              className="fantasy-card rounded-2xl p-6 text-center hover:shadow-[0_0_30px_hsl(var(--cyan-glow)/0.2)] transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <channel.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {channel.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {channel.description}
              </p>
              <Button variant="outline" className="btn-fantasy-outline text-primary text-sm">
                {channel.action}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <HelpCircle className="w-5 h-5" />
              <span className="font-medium">Perguntas Frequentes</span>
            </div>
            <h3 className="font-display text-3xl font-bold text-foreground">
              Dúvidas Comuns
            </h3>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="fantasy-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary transition-colors py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
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
