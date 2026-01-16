import { Target, Users, Award, Zap } from 'lucide-react';

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

const About = () => {
  return (
    <section id="sobre" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-surface" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 -translate-x-1/2 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Sobre a </span>
              <span className="text-primary glow-text">Diix Academy</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Fundada em 2020, a Diix Academy nasceu com um propósito claro: revolucionar a educação online no Brasil. Acreditamos que todos merecem acesso a um ensino de excelência.
            </p>
            <p className="text-muted-foreground mb-8">
              Nossa plataforma combina tecnologia avançada com metodologias pedagógicas inovadoras, criando uma experiência de aprendizado única. Cada curso é cuidadosamente desenvolvido para garantir que nossos alunos alcancem seus objetivos.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '5+', label: 'Anos de Experiência' },
                { value: '50+', label: 'Instrutores Especialistas' },
                { value: '95%', label: 'Taxa de Conclusão' },
                { value: '24/7', label: 'Suporte Disponível' },
              ].map((stat) => (
                <div key={stat.label} className="fantasy-card rounded-xl p-4">
                  <div className="font-display text-2xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="fantasy-card rounded-2xl p-6 hover:shadow-[0_0_30px_hsl(var(--cyan-glow)/0.15)] transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
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
