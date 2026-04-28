import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { 
  Calendar, Clock, User, MapPin, Scissors, 
  ChevronRight, Star, Crown, Hexagon, ChevronLeft,
  LayoutGrid, CheckCircle2, Target, TrendingUp
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const colors = [
  { name: 'PRETO/PRETOA', hex: '#0A0A0A' },
  { name: 'GRAFITE', hex: '#1C1C1C' },
  { name: 'CINZA ESCURO', hex: '#2B2B2B' },
  { name: 'CINZA CLARO', hex: '#E5E5E5' },
  { name: 'OFF WHITE', hex: '#F4F4F4' },
  { name: 'PRATA', hex: '#CFCFCF' },
];

const icons = [
  { Icon: Calendar, name: 'Calendar' },
  { Icon: Clock, name: 'Clock' },
  { Icon: User, name: 'User' },
  { Icon: MapPin, name: 'Location' },
  { Icon: Scissors, name: 'Service' },
  { Icon: TrendingUp, name: 'Growth' },
  { Icon: Star, name: 'Star' },
  { Icon: Crown, name: 'Premium' },
  { Icon: Hexagon, name: 'Hexagon' },
  { Icon: ChevronRight, name: 'Arrow Right' },
];

const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <h2 className={cn("text-[10px] tracking-[0.2em] font-medium uppercase mb-8 border-b border-brand-silver/20 pb-2 inline-block", className)}>
    {children}
  </h2>
);

const LogoMark = ({ className }: { className?: string }) => (
  <img 
    src="https://mckqwxyhemyrezwgxmai.supabase.co/storage/v1/object/public/barber-photos/site/logo-1775595727556.png" 
    alt="Step Up Logo" 
    className={cn("w-10 h-10 object-contain", className)}
    referrerPolicy="no-referrer"
  />
);

export default function DesignSystemPage() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-off-white pb-20 selection:bg-brand-silver selection:text-brand-black">
      {/* Header - Refined padding & width */}
      <header className="border-b border-brand-silver/10 sticky top-0 bg-brand-black/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <LogoMark className="w-8 h-8" />
            <div>
            <motion.h1 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-display font-medium tracking-tighter"
            >
              STEP UP
            </motion.h1>
              <p className="text-[7px] tracking-[0.5em] uppercase font-light opacity-60">
                BRAND DESIGN SYSTEM
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            {['en', 'pt', 'es'].map((l) => (
              <button
                key={l}
                onClick={() => changeLanguage(l)}
                className={cn(
                  "px-2 py-1 text-[9px] uppercase tracking-widest border transition-all cursor-pointer",
                  lang.startsWith(l) ? "border-brand-silver bg-brand-silver text-brand-black" : "border-brand-silver/20 hover:border-brand-silver/50"
                )}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 space-y-32">
        
        {/* Intro Section */}
        <section className="flex flex-col items-center text-center py-10">
          <LogoMark className="w-24 h-24 mb-8" />
          <h2 className="text-5xl md:text-7xl font-display font-normal tracking-tight mb-4">STEP UP</h2>
          <p className="text-xs tracking-[0.8em] uppercase font-light opacity-60 mb-10">BARBERSHOP</p>
          <div className="max-w-xl">
            <p className="text-base md:text-lg font-light leading-relaxed opacity-80 italic">
              "{t('brand_summary')}"
            </p>
          </div>
        </section>

        {/* Logo Variations */}
        <section>
          <SectionTitle>{t('logo_variations')}</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             <div className="aspect-video bg-brand-graphite border border-brand-silver/10 flex flex-col items-center justify-center p-8 group">
                <LogoMark className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-[12px] font-display font-medium tracking-tight">STEP UP</span>
             </div>
             <div className="aspect-video bg-brand-off-white flex flex-col items-center justify-center p-8 group">
                <LogoMark className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform brightness-0" />
                <span className="text-[12px] font-display font-medium tracking-tight text-brand-black">STEP UP</span>
             </div>
             <div className="aspect-video bg-brand-black border border-brand-silver/10 flex items-center gap-4 p-8 group">
                <LogoMark className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[12px] font-display font-medium tracking-tight">STEP UP</span>
                  <span className="text-[6px] tracking-[0.3em] opacity-40 uppercase">Academy</span>
                </div>
             </div>
             <div className="aspect-video flex items-center justify-center relative p-8 group overflow-hidden border border-brand-silver/10">
                <div className="w-14 h-14 border border-brand-silver rounded-full flex items-center justify-center group-hover:scale-110 transition-all">
                  <LogoMark className="w-6 h-6" />
                </div>
             </div>
          </div>
        </section>


        {/* Colors & Typography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <section>
            <SectionTitle>{t('colors')}</SectionTitle>
            <div className="flex flex-col">
              {colors.map((color) => (
                <div key={color.hex} className="flex border-b border-brand-silver/10 group cursor-pointer overflow-hidden">
                  <div 
                    className="w-24 h-16 transition-transform group-hover:scale-110 duration-500" 
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="flex-1 flex justify-between items-center px-6 text-[10px] tracking-widest font-medium uppercase italic">
                    <span>{color.name}</span>
                    <span>{color.hex}</span>
                  </div>
                </div>
              ))}
              <p className="mt-4 text-[9px] uppercase tracking-widest opacity-50 max-w-xs leading-normal">
                Prata: Uso em detalhes, ícones e acabamentos premium
              </p>
            </div>
          </section>

          <section className="space-y-12">
            <div>
              <SectionTitle>{t('typography')}</SectionTitle>
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Títulos / Headlines</p>
                  <div className="flex items-baseline gap-6 border-b border-brand-silver/10 pb-4">
                    <span className="text-5xl font-display">Aa</span>
                    <div className="flex-1">
                      <p className="text-lg font-display tracking-wide">Libre Baskerville (Display Font)</p>
                      <p className="text-[10px] tracking-widest opacity-40">ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Subtítulos / Destaques</p>
                  <div className="flex items-baseline gap-6 border-b border-brand-silver/10 pb-4">
                    <span className="text-5xl font-display font-light">Aa</span>
                    <div className="flex-1">
                      <p className="text-lg font-display font-normal tracking-wide">Libre Baskerville</p>
                      <p className="text-[10px] tracking-widest opacity-40">ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Textos / Parágrafos</p>
                  <div className="flex items-baseline gap-6 border-b border-brand-silver/10 pb-4">
                    <span className="text-4xl font-sans">Aa</span>
                    <div className="flex-1">
                      <p className="text-lg font-sans">Inter Regular</p>
                      <p className="text-[10px] tracking-widest opacity-40">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Academy Section (Submarca) */}
        <section className="border-t border-brand-silver/20 pt-20">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
               <span className="text-[10px] tracking-[0.4em] uppercase text-brand-silver mb-4 block">SUBMARCA</span>
               <h3 className="text-4xl font-display font-normal tracking-tight mb-8">STEP UP ACADEMY</h3>
               <p className="text-sm opacity-60 leading-relaxed font-light mb-12">
                 A Academy forma barbeiros que entendem de técnica, atendimento e experiência. Conteúdos claros, objetivos e práticos que preparam o aluno para o mercado e o padrão Step Up.
               </p>
               <div className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-silver" title="Accent Silver" />
                  <div className="w-10 h-10 bg-brand-graphite border border-brand-silver/20" title="Primary Graphite" />
               </div>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-brand-graphite/40 p-12 border border-brand-silver/5">
                  <SectionTitle className="mb-8">{t('typography')} Academy</SectionTitle>
                  <p className="text-2xl font-display font-normal mb-4">Headline Libre Baskerville</p>
                  <p className="text-sm font-sans opacity-60">Used for technical training and career calls.</p>
               </div>
               <div className="bg-brand-graphite/40 p-12 border border-brand-silver/5">
                  <SectionTitle className="mb-8">Hierarquia</SectionTitle>
                  <div className="space-y-4">
                    <p className="text-[10px] tracking-widest opacity-60">BODY TEXT (INTER REGULAR)</p>
                    <p className="text-[10px] tracking-widest opacity-60">SUBHEAD (LIBRE BASKERVILLE)</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Icons, Buttons, Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          <section>
            <SectionTitle>{t('icons')}</SectionTitle>
            <div className="mb-4">
              <p className="text-[10px] font-medium text-brand-silver opacity-80 uppercase tracking-widest italic mb-2">
                Rule: No borders or backgrounds behind icons.
              </p>
              <p className="text-[8px] opacity-40 uppercase tracking-widest">
                Keep it minimalist with thin lines and mono chrome style.
              </p>
            </div>
            {/* 
              DESIGN RULE: Ícones devem ser apresentados de forma limpa. 
              NUNCA usar backgrounds ou bordas circulares/quadradas ao redor deles.
            */}
            <div className="grid grid-cols-5 gap-y-8 gap-x-4 pt-4">
              {icons.map(({ Icon, name }, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group cursor-help">
                  <Icon strokeWidth={1} size={24} className="text-brand-silver group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[7px] uppercase tracking-tighter opacity-0 group-hover:opacity-40 transition-opacity whitespace-nowrap">{name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-12">
            <SectionTitle>{t('buttons')}</SectionTitle>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest opacity-40">Primário</p>
                <button className="w-full flex items-center justify-between px-6 py-3 border border-brand-light-gray group hover:bg-brand-light-gray hover:text-brand-black transition-all cursor-pointer">
                  <span className="text-[10px] uppercase tracking-widest font-medium">Agendar Horário</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest opacity-40">Secundário</p>
                <button className="w-full flex items-center justify-between px-6 py-3 bg-brand-black border border-brand-silver/20 group hover:border-brand-silver transition-all cursor-pointer">
                  <span className="text-[10px] uppercase tracking-widest font-medium">Ver Serviços</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest opacity-40">Tercíário (Texto)</p>
                <button className="flex items-center gap-2 group transition-all cursor-pointer">
                  <span className="text-[10px] uppercase tracking-widest font-medium border-b border-transparent group-hover:border-brand-silver">Saiba Mais</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <SectionTitle>{t('elements')}</SectionTitle>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest opacity-40">Divisor</p>
                <div className="h-px bg-brand-silver/20 w-full" />
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest opacity-40">Badge</p>
                <div className="inline-block px-3 py-1 bg-brand-silver text-brand-black text-[9px] font-bold uppercase tracking-widest">
                  Premium
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest opacity-40">Paginação</p>
                <div className="flex items-center gap-4">
                  <ChevronLeft size={16} className="opacity-40 cursor-not-allowed" />
                  <div className="flex gap-4 text-[10px] font-medium tracking-widest">
                    <span className="w-6 h-6 border border-brand-silver flex items-center justify-center">1</span>
                    <span className="w-6 h-6 flex items-center justify-center opacity-40 cursor-pointer hover:opacity-100">2</span>
                    <span className="w-6 h-6 flex items-center justify-center opacity-40 cursor-pointer hover:opacity-100">3</span>
                  </div>
                  <ChevronRight size={16} className="cursor-pointer hover:text-brand-silver" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest opacity-40">Indicador</p>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-silver" />
                  <div className="w-2 h-2 rounded-full border border-brand-silver/40" />
                  <div className="w-2 h-2 rounded-full border border-brand-silver/40" />
                  <div className="w-2 h-2 rounded-full border border-brand-silver/40" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Images & Direction Section */}
        <section>
          <SectionTitle>IMAGENS E DIREÇÃO VISUAL</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="aspect-square bg-brand-graphite group overflow-hidden relative">
                 <div className="absolute inset-0 bg-brand-silver/5 group-hover:bg-transparent transition-all duration-700" />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[8px] uppercase tracking-[0.4em] font-medium border border-brand-silver/40 px-4 py-2">Visual Direction {i}</span>
                 </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tone of Voice */}
        <section className="bg-brand-graphite/40 p-12 md:p-20 relative overflow-hidden">
          <div className="absolute right-0 top-0 text-[120px] font-display font-bold opacity-[0.03] translate-x-1/4 -translate-y-1/4 select-none">
            VOICE
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <SectionTitle className="mb-12 border-brand-silver/40">{t('tone_of_voice')}</SectionTitle>
              <p className="text-3xl font-display font-normal mb-8 text-brand-silver">
                Confiante, direto e inspirador.
              </p>
              <ul className="space-y-4 text-sm opacity-60 font-light">
                <li>• Focado em evolução e presença.</li>
                <li>• Linguagem masculina, madura e sofisticada.</li>
                <li>• Frases curtas. Impacto visual. Clareza.</li>
                <li>• Não é sobre vaidade. É sobre padrão.</li>
              </ul>
            </div>
            <div className="space-y-8">
              <p className="text-[10px] uppercase tracking-widest opacity-40">Exemplos</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                   <p className="text-[10px] uppercase tracking-widest text-brand-silver">Como Falamos</p>
                   <ul className="text-[11px] space-y-2 opacity-60">
                      <li>• Direto e confiante</li>
                      <li>• Curto e objetivo</li>
                      <li>• Inspirador e motivador</li>
                      <li>• Masculino e maduro</li>
                   </ul>
                </div>
                <div className="space-y-4">
                   <p className="text-[10px] uppercase tracking-widest text-[#FF4444]">Como NÃO Falamos</p>
                   <ul className="text-[11px] space-y-2 opacity-60">
                      <li>• Muito informal</li>
                      <li>• Cheio de gírias</li>
                      <li>• Exagerado ou apelativo</li>
                      <li>• Promessas vazias</li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Principles */}
        <section>
          <SectionTitle>{t('brand_principles')}</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
             {[
               { icon: Target, title: 'PRESENÇA', desc: 'Elevamos a imagem e a confiança do homem.' },
               { icon: CheckCircle2, title: 'PRECISÃO', desc: 'Técnica, cuidado e atenção aos detalhes.' },
               { icon: LayoutGrid, title: 'PADRÃO', desc: 'Consistência em todas as unidades e experiências.' },
               { icon: TrendingUp, title: 'EVOLUÇÃO', desc: 'Sempre um passo à frente na técnica e no atendimento.' }
             ].map((principle, i) => (
               <div key={i} className="group">
                  <principle.icon strokeWidth={1} size={32} className="mb-6 text-brand-silver group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-sm font-bold tracking-widest mb-3">{principle.title}</h3>
                  <p className="text-xs opacity-50 leading-relaxed font-light">{principle.desc}</p>
               </div>
             ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-brand-silver/10 pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-[9px] uppercase tracking-[0.5em] opacity-30">
          Step Up © 2024 • All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
