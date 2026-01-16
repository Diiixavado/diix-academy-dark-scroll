import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dark-void" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-noise" />
      
      {/* Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fantasy-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Plataforma de Ensino Premium</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Domine o</span>
            <br />
            <span className="text-primary glow-text">Conhecimento</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Uma jornada épica de aprendizado. Cursos exclusivos, mentoria especializada e uma comunidade de elite.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button className="btn-fantasy px-8 py-6 text-lg font-semibold rounded-xl text-primary-foreground group">
              Explorar Cursos
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="btn-fantasy-outline px-8 py-6 text-lg font-semibold rounded-xl text-primary group">
              <Play className="mr-2 w-5 h-5" />
              Ver Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '10K+', label: 'Alunos Ativos' },
              { value: '200+', label: 'Cursos Premium' },
              { value: '98%', label: 'Satisfação' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary glow-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
