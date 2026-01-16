import { ArrowRight, Play, Sparkles, Zap, Shield, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticlesBackground from '@/components/ParticlesBackground';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-28"
    >
      {/* Particles Canvas */}
      <ParticlesBackground />
      {/* Background Layers */}
      <div className="absolute inset-0 bg-dark-void" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-noise" />
      
      {/* Mesh Gradient Background */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, hsl(185 100% 50% / 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, hsl(270 60% 40% / 0.1) 0%, transparent 40%),
            radial-gradient(ellipse at 50% 80%, hsl(185 80% 40% / 0.1) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-[10%] w-48 sm:w-64 lg:w-80 3xl:w-96 aspect-square bg-primary/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 right-[10%] w-64 sm:w-80 lg:w-96 3xl:w-128 aspect-square bg-fantasy-purple/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] 3xl:w-[1000px] aspect-square bg-primary/5 rounded-full blur-3xl animate-pulse-glow-slow" />

      {/* Content */}
      <div className="container-responsive relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl 3xl:max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass-card mb-6 sm:mb-8 lg:mb-10 animate-fade-up">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm lg:text-base 3xl:text-lg text-primary font-tech font-medium tracking-wider">
              PLATAFORMA DE ENSINO PREMIUM
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-hero font-bold mb-4 sm:mb-6 lg:mb-8 leading-[1.1] animate-fade-up delay-100">
            <span className="text-foreground block">Domine o</span>
            <span className="text-primary glow-text inline-block mt-2">Conhecimento</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl 3xl:text-3xl text-muted-foreground max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 font-body font-medium leading-relaxed px-4 animate-fade-up delay-200">
            Uma jornada épica de aprendizado. Cursos exclusivos, mentoria especializada e uma comunidade de elite.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 px-4 animate-fade-up delay-300">
            <Button className="btn-fantasy w-full sm:w-auto px-6 sm:px-8 lg:px-10 3xl:px-12 py-4 sm:py-5 lg:py-6 3xl:py-7 text-base sm:text-lg lg:text-xl 3xl:text-2xl font-bold rounded-2xl text-primary-foreground group">
              <span>Explorar Cursos</span>
              <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-2" />
            </Button>
            <Button variant="outline" className="btn-fantasy-outline w-full sm:w-auto px-6 sm:px-8 lg:px-10 3xl:px-12 py-4 sm:py-5 lg:py-6 3xl:py-7 text-base sm:text-lg lg:text-xl 3xl:text-2xl font-bold rounded-2xl text-primary group">
              <Play className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              <span>Ver Demo</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 3xl:gap-12 mt-16 sm:mt-20 lg:mt-24 3xl:mt-32 max-w-3xl 3xl:max-w-5xl mx-auto animate-fade-up delay-400">
            {[
              { value: '10K+', label: 'Alunos Ativos', icon: Trophy },
              { value: '200+', label: 'Cursos Premium', icon: Zap },
              { value: '98%', label: 'Satisfação', icon: Shield },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="glass-card-hover rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 3xl:p-10 text-center group"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 3xl:w-12 3xl:h-12 text-primary mx-auto mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform" />
                <div className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl font-bold text-primary glow-text-subtle mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm lg:text-base 3xl:text-lg text-muted-foreground font-body font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 lg:h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 animate-fade-in delay-500">
        <span className="text-xs text-muted-foreground font-body tracking-wider">SCROLL</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
