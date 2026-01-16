import { Target, Users, Award, Zap, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Missão',
    description: 'Democratizar o acesso ao conhecimento de alta qualidade, transformando vidas através da educação digital.',
  },
  {
    icon: Users,
    title: 'Comunidade',
    description: 'Uma rede exclusiva de profissionais e mentores prontos para apoiar sua jornada de crescimento.',
  },
  {
    icon: Award,
    title: 'Excelência',
    description: 'Conteúdo criado pelos melhores especialistas do mercado, com metodologia comprovada.',
  },
  {
    icon: Zap,
    title: 'Inovação',
    description: 'Tecnologia de ponta para uma experiência de aprendizado imersiva e personalizada.',
  },
];

const stats = [
  { value: '5+', label: 'Anos de Experiência' },
  { value: '50+', label: 'Instrutores Especialistas' },
  { value: '95%', label: 'Taxa de Conclusão' },
  { value: '24/7', label: 'Suporte Disponível' },
];

const benefits = [
  'Acesso vitalício aos cursos',
  'Certificados reconhecidos',
  'Projetos práticos reais',
  'Mentoria personalizada',
];

const About = () => {
  return (
    <section id="sobre" className="relative py-20 sm:py-28 lg:py-32 3xl:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-surface" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-[400px] sm:w-[500px] lg:w-[600px] 3xl:w-[800px] aspect-square -translate-y-1/2 -translate-x-1/2 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] lg:w-[500px] 3xl:w-[600px] aspect-square bg-fantasy-purple/5 rounded-full blur-3xl" />

      <div className="container-responsive relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 3xl:gap-24 items-center">
          {/* Content Side */}
          <div className="animate-slide-in-left">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl 3xl:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-foreground">Sobre a </span>
              <span className="text-primary glow-text">Diix Academy</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl 3xl:text-2xl text-muted-foreground mb-4 sm:mb-6 font-body leading-relaxed">
              Fundada em 2020, a Diix Academy nasceu com um propósito claro: revolucionar a educação online no Brasil. Acreditamos que todos merecem acesso a um ensino de excelência.
            </p>
            <p className="text-sm sm:text-base lg:text-lg 3xl:text-xl text-muted-foreground mb-6 sm:mb-8 font-body leading-relaxed">
              Nossa plataforma combina tecnologia avançada com metodologias pedagógicas inovadoras, criando uma experiência de aprendizado única.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base 3xl:text-lg text-foreground font-body font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 3xl:p-6 text-center">
                  <div className="font-display text-xl sm:text-2xl lg:text-2xl 3xl:text-3xl font-bold text-primary mb-0.5 sm:mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm 3xl:text-base text-muted-foreground font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 3xl:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="fantasy-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-6 3xl:p-8 glass-card-hover animate-fade-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 3xl:w-18 3xl:h-18 rounded-xl sm:rounded-2xl glass-card flex items-center justify-center mb-4 sm:mb-5 group-hover:shadow-[0_0_20px_hsl(var(--cyan-glow)/0.3)] transition-all">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 3xl:w-9 3xl:h-9 text-primary" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl 3xl:text-2xl font-semibold text-foreground mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base 3xl:text-lg text-muted-foreground font-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
