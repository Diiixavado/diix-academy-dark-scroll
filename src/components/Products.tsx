import { BookOpen, Code, Palette, TrendingUp, Crown, Clock, Users, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/hooks/useScrollAnimation';

const courses = [
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Domine as tecnologias mais demandadas do mercado. React, Node.js, TypeScript e muito mais.',
    duration: '120 horas',
    students: '2.5K',
    rating: 4.9,
    price: 'R$ 997',
    originalPrice: 'R$ 1.497',
    featured: true,
  },
  {
    icon: Palette,
    title: 'Design UI/UX',
    description: 'Crie interfaces memoráveis. Figma, princípios de design, prototipagem e pesquisa.',
    duration: '80 horas',
    students: '1.8K',
    rating: 4.8,
    price: 'R$ 797',
    originalPrice: 'R$ 1.197',
    featured: false,
  },
  {
    icon: TrendingUp,
    title: 'Marketing Digital',
    description: 'Estratégias avançadas de growth. SEO, Ads, Analytics e automação de marketing.',
    duration: '60 horas',
    students: '3.2K',
    rating: 4.9,
    price: 'R$ 697',
    originalPrice: 'R$ 997',
    featured: false,
  },
  {
    icon: BookOpen,
    title: 'Business & Gestão',
    description: 'Liderança, estratégia e gestão de projetos para profissionais em ascensão.',
    duration: '50 horas',
    students: '1.5K',
    rating: 4.7,
    price: 'R$ 597',
    originalPrice: 'R$ 897',
    featured: false,
  },
];

const Products = () => {
  return (
    <section id="produtos" className="relative py-20 sm:py-28 lg:py-32 3xl:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] lg:w-[600px] 3xl:w-[800px] aspect-square bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] lg:w-[500px] 3xl:w-[600px] aspect-square bg-fantasy-purple/8 rounded-full blur-3xl" />

      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 3xl:mb-24">
            <h2 className="section-title">
              <span className="text-foreground">Nossos </span>
              <span className="text-primary glow-text">Cursos</span>
            </h2>
            <p className="section-subtitle">
              Cursos desenvolvidos por especialistas da indústria para transformar sua carreira
            </p>
          </div>
        </ScrollReveal>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-6 3xl:gap-8">
          {courses.map((course, index) => (
            <ScrollReveal
              key={course.title}
              animation="zoom-in"
              delay={index * 100}
            >
              <div
                className={`fantasy-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-6 3xl:p-8 transition-all duration-500 hover:scale-[1.02] group h-full ${
                  course.featured ? 'ring-2 ring-primary/40 shadow-[0_0_40px_hsl(var(--cyan-glow)/0.2)]' : ''
                }`}
              >
                {/* Featured Badge */}
                {course.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-primary to-cyan-dark text-primary-foreground text-xs sm:text-sm font-bold rounded-full shadow-lg">
                    <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="font-tech tracking-wider">DESTAQUE</span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-14 lg:h-14 3xl:w-18 3xl:h-18 rounded-xl sm:rounded-2xl glass-card flex items-center justify-center mb-4 sm:mb-5 group-hover:shadow-[0_0_20px_hsl(var(--cyan-glow)/0.3)] transition-all duration-300">
                  <course.icon className="w-6 h-6 sm:w-7 sm:h-7 3xl:w-9 3xl:h-9 text-primary group-hover:scale-110 transition-transform" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg sm:text-xl lg:text-xl 3xl:text-2xl font-semibold text-foreground mb-2 sm:mb-3">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base 3xl:text-lg font-body mb-4 sm:mb-5 line-clamp-3 leading-relaxed">
                  {course.description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm 3xl:text-base text-muted-foreground mb-4 sm:mb-5">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary/70" />
                    <span className="font-body">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary/70" />
                    <span className="font-body">{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary">
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                    <span className="font-bold">{course.rating}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between mt-auto pt-4 sm:pt-5 border-t border-border/50">
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm text-muted-foreground line-through font-body">
                      {course.originalPrice}
                    </span>
                    <span className="font-display text-xl sm:text-2xl 3xl:text-3xl font-bold text-primary">
                      {course.price}
                    </span>
                  </div>
                  <Button size="sm" className="btn-fantasy text-primary-foreground text-xs sm:text-sm 3xl:text-base px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl group/btn">
                    <span>Inscrever</span>
                    <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All CTA */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="text-center mt-10 sm:mt-14 lg:mt-16 3xl:mt-20">
            <Button variant="outline" className="btn-fantasy-outline px-8 sm:px-10 lg:px-12 py-4 sm:py-5 text-primary font-bold rounded-2xl text-base sm:text-lg 3xl:text-xl group">
              <span>Ver Todos os Cursos</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Products;
