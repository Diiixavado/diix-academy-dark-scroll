import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, Eye, EyeOff, ChevronRight, ChevronLeft, User, MapPin, Sparkles, LogIn, UserPlus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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

// Signup Step 1 - User Data
const userDataSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres'),
  sobrenome: z.string().min(2, 'Sobrenome deve ter no mínimo 2 caracteres'),
  email: z.string().email('Email inválido'),
  senha: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/, 'CPF inválido'),
  data_nascimento: z.string().min(1, 'Data de nascimento é obrigatória'),
  telefone: z.string().min(10, 'Telefone inválido'),
});

// Signup Step 2 - Address
const addressSchema = z.object({
  endereco: z.string().min(5, 'Endereço deve ter no mínimo 5 caracteres'),
  cidade: z.string().min(2, 'Cidade é obrigatória'),
  estado: z.string().min(2, 'Estado é obrigatório'),
  pais: z.string().min(2, 'País é obrigatório'),
});

// Signup Step 3 - Others
const othersSchema = z.object({
  nivel_conhecimento: z.string().min(1, 'Selecione um nível'),
  interesses: z.string().min(1, 'Informe seus interesses'),
  biografia: z.string().optional(),
  refear_user_id: z.string().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;
type UserDataFormData = z.infer<typeof userDataSchema>;
type AddressFormData = z.infer<typeof addressSchema>;
type OthersFormData = z.infer<typeof othersSchema>;

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [signupStep, setSignupStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Form data storage across steps
  const [userData, setUserData] = useState<UserDataFormData | null>(null);
  const [addressData, setAddressData] = useState<AddressFormData | null>(null);

  // Login Form
  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  // Signup Step 1 Form
  const userDataForm = useForm<UserDataFormData>({
    resolver: zodResolver(userDataSchema),
    defaultValues: {
      nome: '', sobrenome: '', email: '', senha: '',
      cpf: '', data_nascimento: '', telefone: '',
    },
  });

  // Signup Step 2 Form
  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: { endereco: '', cidade: '', estado: '', pais: 'Brasil' },
  });

  // Signup Step 3 Form
  const othersForm = useForm<OthersFormData>({
    resolver: zodResolver(othersSchema),
    defaultValues: { nivel_conhecimento: '', interesses: '', biografia: '', refear_user_id: '' },
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

  const handleStep1Submit = (data: UserDataFormData) => {
    setUserData(data);
    setIsTransitioning(true);
    setTimeout(() => {
      setSignupStep(2);
      setIsTransitioning(false);
    }, 300);
  };

  const handleStep2Submit = (data: AddressFormData) => {
    setAddressData(data);
    setIsTransitioning(true);
    setTimeout(() => {
      setSignupStep(3);
      setIsTransitioning(false);
    }, 300);
  };

  const handleStep3Submit = (data: OthersFormData) => {
    const fullData = { ...userData, ...addressData, ...data };
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

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  const steps = [
    { number: 1, title: 'Dados Pessoais', icon: User },
    { number: 2, title: 'Endereço', icon: MapPin },
    { number: 3, title: 'Outros', icon: Sparkles },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-background/95 backdrop-blur-xl border border-primary/30 shadow-2xl shadow-primary/20 p-0 overflow-hidden">
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
            <div className="flex justify-center gap-4 mb-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    signupStep === step.number
                      ? 'text-primary scale-110'
                      : signupStep > step.number
                      ? 'text-primary/60'
                      : 'text-muted-foreground'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      signupStep === step.number
                        ? 'border-primary bg-primary/20 shadow-lg shadow-primary/30'
                        : signupStep > step.number
                        ? 'border-primary/60 bg-primary/10'
                        : 'border-muted-foreground/30'
                    }`}
                  >
                    <step.icon className="w-4 h-4" />
                  </div>
                  <span className="hidden sm:block text-xs font-rajdhani">{step.title}</span>
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

            {/* Signup Step 1 - User Data */}
            {mode === 'signup' && signupStep === 1 && (
              <Form {...userDataForm}>
                <form onSubmit={userDataForm.handleSubmit(handleStep1Submit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={userDataForm.control}
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
                      control={userDataForm.control}
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

                  <FormField
                    control={userDataForm.control}
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
                    control={userDataForm.control}
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

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={userDataForm.control}
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
                      control={userDataForm.control}
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

                  <FormField
                    control={userDataForm.control}
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

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-cyan-400 hover:from-primary/90 hover:to-cyan-400/90 text-primary-foreground font-cinzel font-bold py-6 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
                  >
                    Avançar <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Form>
            )}

            {/* Signup Step 2 - Address */}
            {mode === 'signup' && signupStep === 2 && (
              <Form {...addressForm}>
                <form onSubmit={addressForm.handleSubmit(handleStep2Submit)} className="space-y-4">
                  <FormField
                    control={addressForm.control}
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
                      control={addressForm.control}
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
                      control={addressForm.control}
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
                    control={addressForm.control}
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

            {/* Signup Step 3 - Others */}
            {mode === 'signup' && signupStep === 3 && (
              <Form {...othersForm}>
                <form onSubmit={othersForm.handleSubmit(handleStep3Submit)} className="space-y-4">
                  <FormField
                    control={othersForm.control}
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
                          <SelectContent className="bg-background border-primary/30">
                            <SelectItem value="iniciante">Iniciante</SelectItem>
                            <SelectItem value="intermediario">Intermediário</SelectItem>
                            <SelectItem value="avancado">Avançado</SelectItem>
                            <SelectItem value="expert">Expert</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-destructive text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={othersForm.control}
                    name="interesses"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-rajdhani">Áreas de Interesse</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex: Programação, Design, Marketing..."
                            className="bg-background/50 border-primary/30 focus:border-primary font-rajdhani"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-destructive text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={othersForm.control}
                    name="biografia"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-rajdhani">Biografia (Opcional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Conte um pouco sobre você..."
                            className="bg-background/50 border-primary/30 focus:border-primary font-rajdhani resize-none"
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-destructive text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={othersForm.control}
                    name="refear_user_id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-rajdhani">Código de Indicação (Opcional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Código do amigo que te indicou"
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
