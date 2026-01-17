import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, ChevronRight, ChevronLeft, User, MapPin, Lock, Sparkles, LogIn, UserPlus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// Login Schema
const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

// Signup Step 1 - Dados Básicos
const dadosBasicosSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres'),
  sobrenome: z.string().min(2, 'Sobrenome deve ter no mínimo 2 caracteres'),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/, 'CPF inválido'),
  data_nascimento: z.string().min(1, 'Data de nascimento é obrigatória'),
});

// Signup Step 2 - Informações
const informacoesSchema = z.object({
  cep: z.string().regex(/^\d{5}-?\d{3}$|^\d{8}$/, 'CEP inválido'),
  endereco: z.string().min(5, 'Endereço deve ter no mínimo 5 caracteres'),
  cidade: z.string().min(2, 'Cidade é obrigatória'),
  estado: z.string().min(2, 'Estado é obrigatório'),
  pais: z.string().min(2, 'País é obrigatório'),
  telefone: z.string().min(10, 'Telefone inválido'),
});

// Signup Step 3 - Acesso
const acessoSchema = z.object({
  usuario: z.string().min(3, 'Usuário deve ter no mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  senha: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
  confirmar_senha: z.string().min(6, 'Confirme sua senha'),
}).refine((data) => data.senha === data.confirmar_senha, {
  message: "As senhas não coincidem",
  path: ["confirmar_senha"],
});

// Signup Step 4 - Preferências
const preferenciasSchema = z.object({
  referencia: z.string().optional(),
  cupom: z.string().optional(),
  nivel_conhecimento: z.string().min(1, 'Selecione um nível'),
  interesses: z.array(z.string()).min(1, 'Selecione pelo menos um interesse'),
});

type LoginFormData = z.infer<typeof loginSchema>;
type DadosBasicosFormData = z.infer<typeof dadosBasicosSchema>;
type InformacoesFormData = z.infer<typeof informacoesSchema>;
type AcessoFormData = z.infer<typeof acessoSchema>;
type PreferenciasFormData = z.infer<typeof preferenciasSchema>;

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const niveisConhecimento = [
  { value: 'iniciante', label: 'Iniciante' },
  { value: 'basico', label: 'Básico' },
  { value: 'intermediario', label: 'Intermediário' },
  { value: 'avancado', label: 'Avançado' },
  { value: 'profissional', label: 'Profissional' },
];

const interessesOptions = [
  { value: 'informatica', label: 'Informática' },
  { value: 'programacao', label: 'Programação' },
  { value: 'eletrica', label: 'Elétrica' },
  { value: 'cyber_seguranca', label: 'Cyber Segurança' },
];

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [signupStep, setSignupStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Form data storage across steps
  const [dadosBasicos, setDadosBasicos] = useState<DadosBasicosFormData | null>(null);
  const [informacoes, setInformacoes] = useState<InformacoesFormData | null>(null);
  const [acesso, setAcesso] = useState<AcessoFormData | null>(null);

  // Login Form
  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  // Signup Step 1 Form
  const dadosBasicosForm = useForm<DadosBasicosFormData>({
    resolver: zodResolver(dadosBasicosSchema),
    defaultValues: { nome: '', sobrenome: '', cpf: '', data_nascimento: '' },
  });

  // Signup Step 2 Form
  const informacoesForm = useForm<InformacoesFormData>({
    resolver: zodResolver(informacoesSchema),
    defaultValues: { cep: '', endereco: '', cidade: '', estado: '', pais: 'Brasil', telefone: '' },
  });

  // Signup Step 3 Form
  const acessoForm = useForm<AcessoFormData>({
    resolver: zodResolver(acessoSchema),
    defaultValues: { usuario: '', email: '', senha: '', confirmar_senha: '' },
  });

  // Signup Step 4 Form
  const preferenciasForm = useForm<PreferenciasFormData>({
    resolver: zodResolver(preferenciasSchema),
    defaultValues: { referencia: '', cupom: '', nivel_conhecimento: '', interesses: [] },
  });

  const handleModeSwitch = (newMode: 'login' | 'signup') => {
    setIsTransitioning(true);
    setTimeout(() => {
      setMode(newMode);
      setSignupStep(1);
      setIsTransitioning(false);
    }, 300);
  };

  const handleLoginSubmit = (data: LoginFormData) => {
    console.log('Login:', data);
    onClose();
  };

  const handleStep1Submit = (data: DadosBasicosFormData) => {
    setDadosBasicos(data);
    setIsTransitioning(true);
    setTimeout(() => {
      setSignupStep(2);
      setIsTransitioning(false);
    }, 300);
  };

  const handleStep2Submit = (data: InformacoesFormData) => {
    setInformacoes(data);
    setIsTransitioning(true);
    setTimeout(() => {
      setSignupStep(3);
      setIsTransitioning(false);
    }, 300);
  };

  const handleStep3Submit = (data: AcessoFormData) => {
    setAcesso(data);
    setIsTransitioning(true);
    setTimeout(() => {
      setSignupStep(4);
      setIsTransitioning(false);
    }, 300);
  };

  const handleStep4Submit = (data: PreferenciasFormData) => {
    const fullData = { ...dadosBasicos, ...informacoes, ...acesso, ...data };
    console.log('Signup Complete:', fullData);
    onClose();
  };

  const handleBack = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSignupStep(prev => prev - 1);
      setIsTransitioning(false);
    }, 300);
  };

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    return value;
  };

  const formatCEP = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 8) {
      return numbers.replace(/(\d{5})(\d{3})/, '$1-$2');
    }
    return value;
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  const steps = [
    { number: 1, title: 'Dados Básicos', icon: User },
    { number: 2, title: 'Informações', icon: MapPin },
    { number: 3, title: 'Acesso', icon: Lock },
    { number: 4, title: 'Preferências', icon: Sparkles },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[520px] max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border border-primary/30 shadow-2xl shadow-primary/20 p-0">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 p-6">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl font-cinzel-decorative text-center text-foreground">
              <span className="bg-gradient-to-r from-primary via-cyan-300 to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                {mode === 'login' ? 'Entrar' : 'Criar Conta'}
              </span>
            </DialogTitle>
            
            {/* Mode Toggle */}
            <div className="flex justify-center gap-2 mt-4">
              <Button
                variant="ghost"
                onClick={() => handleModeSwitch('login')}
                className={`relative px-6 py-2 font-rajdhani transition-all duration-300 ${
                  mode === 'login' 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Entrar
                {mode === 'login' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleModeSwitch('signup')}
                className={`relative px-6 py-2 font-rajdhani transition-all duration-300 ${
                  mode === 'signup' 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Cadastrar
                {mode === 'signup' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}
              </Button>
            </div>
          </DialogHeader>

          {/* Signup Steps Indicator */}
          {mode === 'signup' && (
            <div className="flex justify-center gap-2 sm:gap-4 mb-6">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center gap-1 sm:gap-2 transition-all duration-300 ${
                      signupStep === step.number
                        ? 'text-primary scale-105'
                        : signupStep > step.number
                        ? 'text-primary/60'
                        : 'text-muted-foreground'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        signupStep === step.number
                          ? 'border-primary bg-primary/20 shadow-lg shadow-primary/30'
                          : signupStep > step.number
                          ? 'border-primary/60 bg-primary/10'
                          : 'border-muted-foreground/30'
                      }`}
                    >
                      <step.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                    <span className="hidden md:block text-xs font-rajdhani">{step.title}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-4 sm:w-6 h-0.5 mx-1 transition-colors duration-300 ${
                      signupStep > step.number ? 'bg-primary/60' : 'bg-muted-foreground/30'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Form Container with Transition */}
          <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
            {/* Login Form */}
            {mode === 'login' && (
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(handleLoginSubmit)} className="space-y-4">
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-rajdhani">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="seu@email.com"
                            className="bg-background/50 border-primary/30 focus:border-primary focus:ring-primary/20 font-rajdhani"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-destructive text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-rajdhani">Senha</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? 'text' : 'password'}
                              placeholder="••••••••"
                              className="bg-background/50 border-primary/30 focus:border-primary focus:ring-primary/20 font-rajdhani pr-10"
                              {...field}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                            >
                              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-destructive text-xs" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-cyan-400 hover:from-primary/90 hover:to-cyan-400/90 text-primary-foreground font-cinzel font-bold py-6 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
                  >
                    Entrar na Academia
                  </Button>
                </form>
              </Form>
            )}

            {/* Signup Step 1 - Dados Básicos */}
            {mode === 'signup' && signupStep === 1 && (
              <Form {...dadosBasicosForm}>
                <form onSubmit={dadosBasicosForm.handleSubmit(handleStep1Submit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={dadosBasicosForm.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-rajdhani">Nome</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Seu nome"
                              className="bg-background/50 border-primary/30 focus:border-primary font-rajdhani"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-destructive text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={dadosBasicosForm.control}
                      name="sobrenome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-rajdhani">Sobrenome</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Seu sobrenome"
                              className="bg-background/50 border-primary/30 focus:border-primary font-rajdhani"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-destructive text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={dadosBasicosForm.control}
                      name="cpf"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-rajdhani">CPF</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="000.000.000-00"
                              className="bg-background/50 border-primary/30 focus:border-primary font-rajdhani"
                              {...field}
                              onChange={(e) => field.onChange(formatCPF(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage className="text-destructive text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={dadosBasicosForm.control}
                      name="data_nascimento"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-rajdhani">Nascimento</FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              className="bg-background/50 border-primary/30 focus:border-primary font-rajdhani"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-destructive text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-cyan-400 hover:from-primary/90 hover:to-cyan-400/90 text-primary-foreground font-cinzel font-bold py-6 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
                  >
                    Avançar <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Form>
            )}

            {/* Signup Step 2 - Informações */}
            {mode === 'signup' && signupStep === 2 && (
              <Form {...informacoesForm}>
                <form onSubmit={informacoesForm.handleSubmit(handleStep2Submit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={informacoesForm.control}
                      name="cep"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-rajdhani">CEP</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="00000-000"
                              className="bg-background/50 border-primary/30 focus:border-primary font-rajdhani"
                              {...field}
                              onChange={(e) => field.onChange(formatCEP(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage className="text-destructive text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={informacoesForm.control}
                      name="telefone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-rajdhani">Telefone</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="(00) 00000-0000"
                              className="bg-background/50 border-primary/30 focus:border-primary font-rajdhani"
                              {...field}
                              onChange={(e) => field.onChange(formatPhone(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage className="text-destructive text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={informacoesForm.control}
                    name="endereco"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-rajdhani">Endereço Completo</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Rua, número, complemento"
                            className="bg-background/50 border-primary/30 focus:border-primary font-rajdhani"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-destructive text-xs" />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={informacoesForm.control}
                      name="cidade"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-rajdhani">Cidade</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Sua cidade"
                              className="bg-background/50 border-primary/30 focus:border-primary font-rajdhani"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-destructive text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={informacoesForm.control}
                      name="estado"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-rajdhani">Estado</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="UF"
                              className="bg-background/50 border-primary/30 focus:border-primary font-rajdhani"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-destructive text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={informacoesForm.control}
                    name="pais"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-rajdhani">País</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="País"
                            className="bg-background/50 border-primary/30 focus:border-primary font-rajdhani"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-destructive text-xs" />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      className="flex-1 border-primary/30 hover:bg-primary/10 font-cinzel"
                    >
                      <ChevronLeft className="mr-2 w-5 h-5" /> Voltar
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-primary to-cyan-400 hover:from-primary/90 hover:to-cyan-400/90 text-primary-foreground font-cinzel font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
                    >
                      Avançar <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </form>
              </Form>
            )}

            {/* Signup Step 3 - Acesso */}
            {mode === 'signup' && signupStep === 3 && (
              <Form {...acessoForm}>
                <form onSubmit={acessoForm.handleSubmit(handleStep3Submit)} className="space-y-4">
                  <FormField
                    control={acessoForm.control}
                    name="usuario"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-rajdhani">Nome de Usuário</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="seu_usuario"
                            className="bg-background/50 border-primary/30 focus:border-primary font-rajdhani"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-destructive text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={acessoForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-rajdhani">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="seu@email.com"
                            className="bg-background/50 border-primary/30 focus:border-primary font-rajdhani"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-destructive text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={acessoForm.control}
                    name="senha"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-rajdhani">Senha</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? 'text' : 'password'}
                              placeholder="••••••••"
                              className="bg-background/50 border-primary/30 focus:border-primary font-rajdhani pr-10"
                              {...field}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                            >
                              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-destructive text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={acessoForm.control}
                    name="confirmar_senha"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-rajdhani">Confirmar Senha</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showConfirmPassword ? 'text' : 'password'}
                              placeholder="••••••••"
                              className="bg-background/50 border-primary/30 focus:border-primary font-rajdhani pr-10"
                              {...field}
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                            >
                              {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage className="text-destructive text-xs" />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      className="flex-1 border-primary/30 hover:bg-primary/10 font-cinzel"
                    >
                      <ChevronLeft className="mr-2 w-5 h-5" /> Voltar
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-primary to-cyan-400 hover:from-primary/90 hover:to-cyan-400/90 text-primary-foreground font-cinzel font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
                    >
                      Avançar <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </form>
              </Form>
            )}

            {/* Signup Step 4 - Preferências */}
            {mode === 'signup' && signupStep === 4 && (
              <Form {...preferenciasForm}>
                <form onSubmit={preferenciasForm.handleSubmit(handleStep4Submit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={preferenciasForm.control}
                      name="referencia"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-rajdhani">Código de Referência</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Código do amigo"
                              className="bg-background/50 border-primary/30 focus:border-primary font-rajdhani"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-destructive text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={preferenciasForm.control}
                      name="cupom"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-rajdhani">Cupom de Desconto</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="CUPOM10"
                              className="bg-background/50 border-primary/30 focus:border-primary font-rajdhani"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-destructive text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={preferenciasForm.control}
                    name="nivel_conhecimento"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-rajdhani">Nível de Conhecimento</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background/50 border-primary/30 focus:border-primary font-rajdhani">
                              <SelectValue placeholder="Selecione seu nível" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-background/95 backdrop-blur-xl border-primary/30 z-[100]">
                            {niveisConhecimento.map((nivel) => (
                              <SelectItem 
                                key={nivel.value} 
                                value={nivel.value}
                                className="font-rajdhani hover:bg-primary/20 focus:bg-primary/20"
                              >
                                {nivel.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-destructive text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={preferenciasForm.control}
                    name="interesses"
                    render={() => (
                      <FormItem>
                        <FormLabel className="text-foreground font-rajdhani">Áreas de Interesse</FormLabel>
                        <div className="grid grid-cols-2 gap-3 mt-2">
                          {interessesOptions.map((interesse) => (
                            <FormField
                              key={interesse.value}
                              control={preferenciasForm.control}
                              name="interesses"
                              render={({ field }) => (
                                <FormItem
                                  className="flex items-center space-x-3 space-y-0 p-3 rounded-lg border border-primary/20 bg-background/30 hover:bg-primary/10 hover:border-primary/40 transition-all duration-200 cursor-pointer"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(interesse.value)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, interesse.value])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== interesse.value
                                              )
                                            );
                                      }}
                                      className="border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-rajdhani text-foreground cursor-pointer">
                                    {interesse.label}
                                  </FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                        <FormMessage className="text-destructive text-xs" />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-4 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      className="flex-1 border-primary/30 hover:bg-primary/10 font-cinzel"
                    >
                      <ChevronLeft className="mr-2 w-5 h-5" /> Voltar
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-primary to-cyan-400 hover:from-primary/90 hover:to-cyan-400/90 text-primary-foreground font-cinzel font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
                    >
                      <Sparkles className="mr-2 w-5 h-5" /> Criar Conta
                    </Button>
                  </div>
                </form>
              </Form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
