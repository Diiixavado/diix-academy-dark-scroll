import { BookOpen, Code, Palette, TrendingUp, Crown, Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const courses = [
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Domine as tecnologias mais demandadas do mercado. React, Node.js, TypeScript e muito mais.',
    duration: '120 horas',
    students: '2.5K',
    rating: 4.9,
    price: 'R$ 997',
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
    featured: false,
  },
];

const Products = () => {
  return (
    <section id="produtos" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fantasy-purple/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-foreground">Nossos </span>
            <span className="text-primary glow-text">Cursos</span>
          </h2>
          <p className="section-subtitle">
            Cursos desenvolvidos por especialistas da indústria para transformar sua carreira
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className={`fantasy-card rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--cyan-glow)/0.2)] group ${
                course.featured ? 'ring-2 ring-primary/50' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Badge */}
              {course.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  <Crown className="w-3 h-3" />
                  Destaque
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <course.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {course.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {course.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {course.students}
                </div>
                <div className="flex items-center gap-1 text-primary">
                  <Star className="w-3 h-3 fill-current" />
                  {course.rating}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                <span className="font-display text-xl font-bold text-primary">
                  {course.price}
                </span>
                <Button size="sm" className="btn-fantasy text-primary-foreground text-sm px-4">
                  Inscrever
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" className="btn-fantasy-outline px-8 py-3 text-primary font-semibold rounded-xl">
            Ver Todos os Cursos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
