import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/hooks/useScrollAnimation';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    id: 1,
    name: 'Lucas Ferreira',
    role: 'Desenvolvedor Full Stack',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'A Diix Academy transformou minha carreira. Os cursos são incrivelmente bem estruturados e os mentores são de primeira linha.',
    rating: 5,
    course: 'Desenvolvimento Web Avançado',
  },
  {
    id: 2,
    name: 'Mariana Costa',
    role: 'UX Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    content: 'Nunca pensei que aprender online pudesse ser tão envolvente. O método de ensino é revolucionário e os resultados são reais.',
    rating: 5,
    course: 'Design de Interfaces',
  },
  {
    id: 3,
    name: 'Pedro Santos',
    role: 'Data Scientist',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    content: 'Os projetos práticos da Diix Academy me prepararam para desafios reais do mercado. Consegui minha promoção após 3 meses!',
    rating: 5,
    course: 'Ciência de Dados',
  },
  {
    id: 4,
    name: 'Ana Oliveira',
    role: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'A comunidade é incrível! Fiz conexões valiosas e aprendi tanto com outros alunos quanto com os instrutores.',
    rating: 5,
    course: 'Gestão de Produtos Digitais',
  },
  {
    id: 5,
    name: 'Rafael Lima',
    role: 'DevOps Engineer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'O suporte é excepcional. Qualquer dúvida é respondida rapidamente e os materiais extras são um diferencial enorme.',
    rating: 5,
    course: 'DevOps & Cloud Computing',
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="glass-card-hover rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 h-full flex flex-col relative group">
    {/* Quote Icon */}
    <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6">
      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
        <Quote className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
      </div>
    </div>

    {/* Avatar */}
    <div className="flex items-center gap-4 mb-6">
      <div className="relative">
        <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all duration-500">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        {/* Glow effect behind avatar */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-lg -z-10 group-hover:bg-primary/40 transition-colors duration-500" />
      </div>
      <div>
        <h4 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
          {testimonial.name}
        </h4>
        <p className="text-sm sm:text-base text-muted-foreground font-body">
          {testimonial.role}
        </p>
      </div>
    </div>

    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-primary animate-pulse"
          style={{ animationDelay: `${i * 100}ms` }}
        />
      ))}
    </div>

    {/* Content */}
    <p className="text-base sm:text-lg lg:text-xl text-foreground/90 font-body leading-relaxed flex-grow mb-6">
      "{testimonial.content}"
    </p>

    {/* Course Badge */}
    <div className="mt-auto">
      <span className="inline-block px-4 py-2 rounded-full text-xs sm:text-sm font-tech font-medium bg-primary/10 text-primary border border-primary/20">
        {testimonial.course}
      </span>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="depoimentos" className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-void" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Mesh Gradient */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            radial-gradient(ellipse at 30% 50%, hsl(185 100% 50% / 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 30%, hsl(270 60% 40% / 0.08) 0%, transparent 40%)
          `
        }}
      />

      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-primary font-tech text-xs sm:text-sm tracking-wider mb-4 sm:mb-6">
              DEPOIMENTOS
            </span>
            <h2 className="section-title">
              <span className="text-foreground">Histórias de</span>{' '}
              <span className="text-primary glow-text">Sucesso</span>
            </h2>
            <p className="section-subtitle mt-4">
              Veja o que nossos alunos dizem sobre a experiência transformadora na Diix Academy
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal animation="zoom-in" delay={200}>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={testimonial.id} 
                  className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full py-4">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8 sm:mt-12">
              <CarouselPrevious className="static translate-y-0 glass-card border-primary/30 hover:border-primary hover:bg-primary/10 h-12 w-12 sm:h-14 sm:w-14">
                <ChevronLeft className="h-6 w-6 text-primary" />
              </CarouselPrevious>
              <CarouselNext className="static translate-y-0 glass-card border-primary/30 hover:border-primary hover:bg-primary/10 h-12 w-12 sm:h-14 sm:w-14">
                <ChevronRight className="h-6 w-6 text-primary" />
              </CarouselNext>
            </div>
          </Carousel>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-16 sm:mt-20 lg:mt-24 max-w-4xl mx-auto">
            {[
              { value: '4.9', label: 'Avaliação Média' },
              { value: '15K+', label: 'Avaliações' },
              { value: '98%', label: 'Recomendam' },
              { value: '50K+', label: 'Formados' },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center group hover:border-primary/30 transition-all duration-500"
              >
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary glow-text-subtle mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground font-body">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
