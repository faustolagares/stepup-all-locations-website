import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Calendar, Clock, User, MapPin, Scissors, 
  ChevronRight, Star, Crown, TrendingUp, CheckCircle2,
  Users, Award, ShieldCheck, Mail, Map as MapIcon, Menu, X, Target,
  PenLine, Pipette, Phone,
  Instagram, Youtube, Facebook, Twitter, Linkedin
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useState, useEffect } from 'react';

const LogoMark = ({ className }: { className?: string }) => (
  <img 
    src="https://mckqwxyhemyrezwgxmai.supabase.co/storage/v1/object/public/barber-photos/site/logo-1775595727556.png" 
    alt="Step Up Logo" 
    className={cn("w-10 h-10 object-contain", className)}
    referrerPolicy="no-referrer"
  />
);

const SectionTag = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={cn("text-[10px] tracking-[0.4em] uppercase text-brand-silver/60 font-medium block mb-4", className)}>
    {children}
  </span>
);

export default function Home() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-brand-off-white font-sans selection:bg-brand-silver selection:text-brand-black">
      
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 inset-x-0 z-[100] transition-all duration-500 border-b",
        scrolled ? "bg-brand-black border-brand-silver/10 py-3 shadow-2xl" : "bg-transparent border-transparent py-6"
      )}>
        <div className="max-w-[1350px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <LogoMark className="w-8 h-8" />
            <div className="hidden sm:block">
              <span className="text-xl font-display font-medium tracking-tighter leading-none block">STEP UP</span>
              <span className="text-[6px] tracking-[0.4em] uppercase font-light opacity-50 block">BARBERSHOP</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {['services', 'units', 'academy', 'my_account'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60 hover:opacity-100 transition-opacity"
              >
                {t(`nav.${item}`)}
              </a>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center gap-4 border-l border-brand-silver/20 pl-10 ml-0 italic">
              {['en', 'pt', 'es'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className={cn(
                    "text-[9px] uppercase tracking-widest transition-all hover:opacity-100 cursor-pointer",
                    i18n.language.startsWith(lang) ? "opacity-100 font-bold" : "opacity-30"
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button className="px-6 py-2.5 border border-brand-silver/40 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-off-white hover:text-brand-black transition-all cursor-pointer">
              {t('nav.book_now')}
            </button>
          </div>

          <button 
            className="lg:hidden text-brand-off-white cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={cn(
          "fixed inset-0 bg-brand-black z-[90] flex flex-col items-center justify-center space-y-8 transition-all duration-500 lg:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          {['services', 'units', 'academy', 'my_account'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl uppercase tracking-[0.5em] font-display font-medium"
            >
              {t(`nav.${item}`)}
            </a>
          ))}

          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-8 pt-8 border-t border-brand-silver/10 italic">
            {['en', 'pt', 'es'].map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  changeLanguage(lang);
                  setMobileMenuOpen(false);
                }}
                className={cn(
                  "text-xs uppercase tracking-[0.3em] transition-all",
                  i18n.language.startsWith(lang) ? "opacity-100 font-bold" : "opacity-30"
                )}
              >
                {lang}
              </button>
            ))}
          </div>
          <button className="px-10 py-4 border border-brand-silver text-[12px] uppercase tracking-widest font-bold">
            {t('nav.book_now')}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen h-[100dvh] flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-40 transition-opacity duration-1000"
          >
            <source 
              src="https://cdn.prod.website-files.com/677c2320fa064fa6827d5fd5%2F67934cde9ba65791ec8ddb0e_3998518-hd_2048_1080_25fps-transcode.mp4" 
              type="video/mp4" 
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1350px] mx-auto px-6 md:px-12 w-full h-full flex flex-col">
          <div className="flex-1 flex flex-col justify-center pt-32 pb-12 lg:pb-0">
            <div className="max-w-4xl">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-5xl md:text-8xl lg:text-[110px] font-display leading-[0.9] tracking-tighter mb-8 md:mb-10"
                >
                  {t('hero.title').split('|').map((part, i) => (
                    <span key={i} className="block">
                      {part.trim()}
                    </span>
                  ))}
                </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-base sm:text-lg md:text-xl font-light opacity-80 leading-relaxed mb-8 md:mb-10 max-w-lg"
              >
                {t('hero.subtitle')}
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="px-10 py-5 bg-brand-off-white text-brand-black text-[12px] uppercase tracking-widest font-bold hover:bg-brand-silver transition-all flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto">
                  {t('hero.cta_book')}
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 border border-brand-silver/40 text-[12px] uppercase tracking-widest font-bold hover:bg-brand-off-white/10 transition-all cursor-pointer w-full sm:w-auto">
                  {t('hero.cta_memberships')}
                </button>
              </motion.div>
            </div>
          </div>

          {/* Hero Features - Desktop Only */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-12 pb-12 pt-12 border-t border-brand-silver/10 mt-auto">
            {[
              { icon: Scissors, label: t('hero.feature1') },
              { icon: Crown, label: t('hero.feature2') },
              { icon: Calendar, label: t('hero.feature3') },
              { icon: Award, label: t('hero.feature4') }
            ].map((f, i) => (
              <div key={i} className="flex flex-col gap-4 group">
                <f.icon strokeWidth={1} size={32} className="text-brand-silver group-hover:scale-110 transition-transform duration-500" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-60 leading-tight">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Features - Mobile Only Section */}
      <section className="lg:hidden py-20 px-8 bg-brand-black border-b border-brand-silver/5">
        <div className="max-w-[1350px] mx-auto">
          <div className="grid grid-cols-2 gap-y-12 gap-x-10">
            {[
              { icon: Scissors, label: t('hero.feature1') },
              { icon: Crown, label: t('hero.feature2') },
              { icon: Calendar, label: t('hero.feature3') },
              { icon: Award, label: t('hero.feature4') }
            ].map((f, i) => (
              <div key={i} className="flex flex-col gap-5">
                <div className="w-12 h-12 rounded-full border border-brand-silver/10 flex items-center justify-center">
                  <f.icon strokeWidth={1} size={24} className="text-brand-silver" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-brand-silver opacity-60 leading-tight">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-24 bg-brand-off-white text-brand-black overflow-hidden">
        <div className="max-w-[1350px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[16/10] relative overflow-hidden group"
            >
              <img 
                src="/regenerated_image_1777413541670.png" 
                alt="Step Up Storefront" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <div className="max-w-xl">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[10px] tracking-[0.4em] uppercase text-brand-graphite/40 font-bold block mb-6"
              >
                {t('manifesto.tag')}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-6xl font-display leading-[1.1] tracking-tighter mb-10 text-brand-black"
              >
                {t('manifesto.title')}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base md:text-lg font-light text-brand-graphite/80 leading-relaxed"
              >
                {t('manifesto.text')}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#EBEBEB] text-brand-black overflow-hidden">
        <div className="max-w-[1350px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-display leading-[1.1] tracking-tighter max-w-xl text-brand-black"
            >
              {t('services.title')}
            </motion.h2>
            <motion.button 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="px-8 py-3 border border-brand-black/20 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-off-white transition-all duration-300"
            >
              {t('services.view_all')}
            </motion.button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-0 border-l border-t border-brand-black/5">
            {[
              { icon: Scissors, title: t('services.corte'), desc: t('services.corte_desc') },
              { icon: User, title: t('services.barba'), desc: t('services.barba_desc') },
              { icon: Scissors, title: t('services.combo'), desc: t('services.combo_desc') },
              { icon: PenLine, title: t('services.acabamento'), desc: t('services.acabamento_desc') },
              { icon: Pipette, title: t('services.tratamentos'), desc: t('services.tratamentos_desc') },
              { icon: Star, title: t('services.premium'), desc: t('services.premium_desc') }
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="bg-[#F7F7F7] p-10 flex flex-col gap-10 hover:bg-white transition-all duration-300 group border-r border-b border-brand-black/5"
              >
                <s.icon strokeWidth={1} size={32} className="text-brand-graphite group-hover:scale-110 transition-transform" />
                <div className="flex-1">
                  <h3 className="text-xl tracking-tight mb-4 text-brand-black">{s.title}</h3>
                  <p className="text-[12px] opacity-60 font-light leading-relaxed">{s.desc}</p>
                </div>
                <div className="pt-2">
                  <span className="text-xl opacity-40 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Membership Section (Image Reference) */}
      <section id="memberships-premium" className="py-32 bg-brand-black text-brand-off-white overflow-hidden relative border-y border-brand-silver/5">
        <div className="max-w-[1350px] mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-6 mb-12"
            >
              <div className="w-12 h-[1px] bg-brand-silver/30" />
              <span className="text-[11px] tracking-[0.5em] uppercase text-brand-silver/50 font-bold">
                {t('membership_premium.tag')}
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-display leading-[1.1] tracking-tighter text-brand-off-white max-w-3xl"
            >
              {t('membership_premium.title')}
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-end">
            {/* Left Content */}
            <div className="lg:col-span-4 flex flex-col">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[15px] text-brand-silver/50 leading-relaxed mb-16 max-w-sm font-light"
              >
                {t('membership_premium.desc')}
              </motion.p>

              <div className="flex flex-col gap-8 mb-20">
                {(t('membership_premium.features_left', { returnObjects: true }) as any[]).map((feature, i) => {
                  const icons = [Calendar, Star, Crown, Clock];
                  const Icon = icons[i];
                  return (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
                      className="flex gap-6 group"
                    >
                      <div className="w-[30px] h-[30px] flex items-center justify-center shrink-0 transition-all">
                        <Icon size={20} strokeWidth={1.2} className="text-brand-silver/60 group-hover:text-brand-off-white transition-colors" />
                      </div>
                      <div className="flex flex-col gap-1 justify-center">
                        <span className="text-[13px] uppercase tracking-widest font-bold text-brand-off-white">
                          {feature.title}
                        </span>
                        <span className="text-[12px] text-brand-silver/40 tracking-wider">
                          {feature.desc}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="self-start px-8 py-5 border border-brand-silver/10 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-brand-off-white hover:text-brand-black transition-all flex items-center gap-4 group"
              >
                {t('membership_premium.cta_compare')}
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            {/* Right Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
              {(t('membership_premium.plans', { returnObjects: true }) as any[]).map((plan, i) => (
                <motion.div 
                  key={plan.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + (i * 0.1) }}
                  className={cn(
                    "relative flex flex-col p-5 border transition-all duration-500 h-full",
                    plan.highlight 
                      ? "bg-[#0c0c0c] border-brand-silver/30 z-10 shadow-2xl" 
                      : "bg-transparent border-brand-silver/5 hover:border-brand-silver/20"
                  )}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-off-white text-brand-black px-4 py-1 text-[9px] uppercase tracking-[0.4em] font-bold whitespace-nowrap z-20">
                      {plan.highlight}
                    </div>
                  )}

                  <div className="mb-10 pt-[27px]">
                    <h4 className="text-xl md:text-2xl font-display tracking-tight text-brand-off-white mb-2 uppercase italic shrink-0">
                      {plan.name}
                    </h4>
                    <span className="text-[9px] tracking-[0.4em] uppercase text-brand-silver/30 font-bold block mb-5">
                      {plan.subtitle}
                    </span>
                    <div className="w-full h-[1px] bg-brand-silver/5 mb-5" />
                    <p className="text-[12px] text-brand-silver/50 leading-relaxed tracking-wider font-light italic min-h-[48px]">
                      {plan.desc}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2 mb-10">
                    <span className="text-lg font-display text-brand-silver/30">R$</span>
                    <span className="text-5xl md:text-6xl font-display tracking-tighter text-brand-off-white">{plan.price}</span>
                    <span className="text-[10px] tracking-widest text-brand-silver/30 uppercase">/MÊS</span>
                  </div>

                  <div className="flex flex-col gap-3 mb-10 flex-grow">
                    {plan.features.map((feat: any, idx: number) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className={cn(
                          "w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all mt-0.5",
                          feat.included 
                            ? "border-brand-off-white/20" 
                            : "border-brand-silver/10 opacity-30"
                        )}>
                          {feat.included ? (
                            <CheckCircle2 size={10} className="text-brand-off-white" />
                          ) : (
                            <div className="w-1 h-1 rounded-full bg-brand-silver/40" />
                          )}
                        </div>
                        <span className={cn(
                          "text-[11px] tracking-wider transition-colors uppercase font-light italic",
                          feat.included ? "text-brand-off-white/80" : "text-brand-silver/40"
                        )}>
                          {feat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className={cn(
                    "w-full py-5 px-8 text-[10px] uppercase tracking-[0.3em] font-bold transition-all flex items-center justify-center gap-4 group/btn mt-auto",
                    plan.highlight
                      ? "bg-brand-off-white text-brand-black hover:bg-brand-silver"
                      : "bg-transparent border border-brand-silver/10 hover:border-brand-off-white"
                  )}>
                    <span>{plan.cta}</span>
                    <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                      <ChevronRight size={16} />
                    </motion.div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section Footer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-32 pt-24 border-t border-brand-silver/5 flex flex-col items-center gap-10"
          >
             <div className="flex items-center gap-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-full">
                  <Star size={18} className="text-brand-off-white" />
                </div>
                <p className="text-[11px] md:text-[13px] uppercase tracking-[0.5em] text-brand-off-white font-medium text-center max-w-4xl leading-relaxed italic">
                  {t('membership_premium.footer_text')}
                </p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-[#F7F7F7] border-y border-brand-black/5 overflow-hidden">
        <div className="max-w-[1350px] mx-auto px-6 md:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-display leading-[1.1] tracking-tighter text-center max-w-4xl mx-auto mb-24 text-brand-black"
          >
             {t('process.title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { icon: Calendar, title: t('process.step1'), desc: t('process.step1_desc') },
              { icon: Clock, title: t('process.step2'), desc: t('process.step2_desc') },
              { icon: User, title: t('process.step3'), desc: t('process.step3_desc') },
              { icon: CheckCircle2, title: t('process.step4'), desc: t('process.step4_desc') }
            ].map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className={cn(
                  "flex flex-col items-center md:items-start text-left p-10 md:p-12 group transition-all duration-300",
                  i < 3 && "md:border-r border-brand-black/5"
                )}
              >
                <div className="mb-10 w-full flex justify-center md:justify-start">
                  <p.icon strokeWidth={1.5} size={36} className="text-brand-black transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="flex items-start gap-6">
                  <span className="text-5xl md:text-6xl font-display italic leading-none text-brand-black/20 group-hover:text-brand-black/40 transition-colors">
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-[13px] font-bold uppercase tracking-widest text-brand-black mb-3 leading-tight">{p.title}</h3>
                    <p className="text-[12px] font-light text-brand-black/60 leading-relaxed max-w-[200px]">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Units Section */}
      <section id="units" className="py-32">
        <div className="max-w-[1350px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <SectionTag>{t('units_section.tag')}</SectionTag>
              <h2 className="text-4xl md:text-6xl font-display leading-[1.1] tracking-tighter max-w-2xl">
                {t('units_section.title').split('|').map((part, i) => (
                  <span key={i} className="block">{part.trim()}</span>
                ))}
              </h2>
            </div>
            <button className="px-8 py-3 border border-brand-silver/20 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-silver hover:text-brand-black transition-all cursor-pointer">
              {t('units_section.view_all')}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: 'Step Up — Union', addr: '1564 US-22, Union, NJ 07083', phone: '(908) 404-2816', img: 'https://images.unsplash.com/photo-1541572230671-88195243c80f?q=80&w=1000' },
              { name: 'Step Up — Wilson', addr: '134 Wilson Avenue, Newark, NJ 07105', phone: '(973) 578-2787', img: 'https://images.unsplash.com/photo-1512690199101-83749a744214?q=80&w=1000' },
              { name: 'Step Up — Hillside', addr: '410 Bloy Street, Hillside, NJ 07205', phone: '(908) 686-1963', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000' },
              { name: 'Step Up — Kearny', addr: '858 Kearny Avenue, Kearny, NJ 07032', phone: '(551) 600-2046', img: 'https://images.unsplash.com/photo-1532710093739-9470acff005f?q=80&w=1000' },
              { name: 'Step Up — Jefferson', addr: '220 Jefferson Street, Newark, NJ 07102', phone: '(973) 230-3134', img: 'https://images.unsplash.com/photo-1493246318656-5bb04a8a861c?q=80&w=1000' }
            ].map((u, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[450px] border border-brand-silver/10 overflow-hidden"
              >
                <img 
                  src={u.img} 
                  alt={u.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
                
                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col gap-6">
                  <div>
                    <h3 className="text-xl font-display tracking-tight mb-4 leading-tight">{u.name}</h3>
                    <div className="space-y-2">
                       <p className="text-[10px] opacity-60 flex items-start gap-2 leading-relaxed">
                          <MapPin size={12} className="shrink-0 mt-0.5" /> {u.addr}
                       </p>
                       <p className="text-[10px] opacity-60 flex items-center gap-2">
                          <Phone size={12} className="shrink-0" /> {u.phone}
                       </p>
                    </div>
                  </div>
                  <button className="w-full py-4 border border-brand-silver/20 text-[9px] font-bold uppercase tracking-widest hover:bg-brand-off-white hover:text-brand-black transition-all cursor-pointer">
                    {t('units_section.book_here')}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Barbers Section */}
      <section id="barbers" className="py-24 bg-[#EBEBEB] text-brand-black">
        <div className="max-w-[1350px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <SectionTag className="text-brand-graphite/40">{t('barbers_section.tag')}</SectionTag>
              <h2 className="text-4xl md:text-6xl font-display leading-[1.1] tracking-tighter max-w-2xl text-brand-black">
                {t('barbers_section.title')}
              </h2>
            </div>
            <button className="px-8 py-3 border border-brand-black/20 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-black hover:text-brand-off-white transition-all duration-300">
              {t('barbers_section.view_all')}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                name: 'Rafael Almeida', 
                specialties: t('barbers_section.rafael_specialties').split(' • '),
                img: '/regenerated_image_1777413533711.png'
              },
              { 
                name: 'Bruno Santos', 
                specialties: t('barbers_section.bruno_specialties').split(' • '),
                img: '/regenerated_image_1777413536250.png'
              },
              { 
                name: 'Thiago Lima', 
                specialties: t('barbers_section.thiago_specialties').split(' • '),
                img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1000&auto=format&fit=crop'
              },
              { 
                name: 'Carlos Eduardo', 
                specialties: t('barbers_section.carlos_specialties').split(' • '),
                img: '/regenerated_image_1777413539493.png'
              }
            ].map((b, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F7F7F7] p-2 flex flex-col group border border-brand-black/5"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6">
                  <img 
                    src={b.img} 
                    alt={b.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-6 pb-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-display mb-6 text-brand-black">{b.name}</h3>
                  <div className="grid grid-cols-2 gap-y-3 mb-8">
                    {b.specialties.map((s, si) => (
                      <div key={si} className="flex items-center gap-2">
                        <div className="w-3 h-3 border border-brand-black/10 flex items-center justify-center rotate-45">
                          <div className="w-1 h-1 bg-brand-black/40" />
                        </div>
                        <span className="text-[10px] text-brand-graphite/60 font-light truncate">{s}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full py-4 mt-auto border border-brand-black/10 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-black hover:text-white transition-all duration-300">
                    {t('barbers_section.book_with')}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section id="academy" className="relative min-h-[900px] flex items-center overflow-hidden bg-brand-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 0.3, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/regenerated_image_1777413532045.png" 
            alt="Academy Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1350px] mx-auto px-6 md:px-12 w-full py-32">
          <div className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-6 mb-8"
            >
              <div className="w-16 h-[1px] bg-brand-silver/30" />
              <span className="text-[12px] tracking-[0.6em] uppercase text-brand-silver/50 font-medium">
                {t('academy_section.tag')}
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-display leading-[1.1] tracking-tighter mb-10 text-brand-off-white"
            >
              {t('academy_section.title').split('.').filter(Boolean).map((word, i) => (
                <span key={i} className="block">
                  {word.trim()}.
                </span>
              ))}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-lg font-light text-brand-silver/50 leading-relaxed mb-20 max-w-2xl"
            >
              {t('academy_section.desc')}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-12 mb-24 items-start">
              {(t('academy_section.features', { returnObjects: true }) as any[]).map((f, i) => {
                const icons = [Scissors, User, TrendingUp, Award, Users];
                const Icon = icons[i];
                
                return (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
                    className="flex flex-col gap-8 relative group"
                  >
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center justify-start group-hover:scale-110 transition-transform origin-left duration-500">
                        <Icon strokeWidth={1} size={32} className="text-brand-silver/40 group-hover:text-brand-silver transition-colors" />
                      </div>
                      
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-silver/20 rotate-45" />
                          <span className="text-[9px] tracking-[0.3em] font-bold text-brand-silver/30 uppercase">
                            {f.tag}
                          </span>
                        </div>
                        <span className="text-[13px] tracking-[0.2em] font-bold text-brand-off-white uppercase leading-tight">
                          {f.label}
                        </span>
                        <p className="text-[11px] font-light text-brand-silver/40 leading-relaxed max-w-[180px]">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                    {i < 4 && <div className="hidden lg:block absolute right-[-24px] top-4 bottom-4 w-[1px] bg-brand-silver/5" />}
                  </motion.div>
                );
              })}
            </div>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="px-10 py-5 border border-brand-silver/30 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-brand-off-white hover:text-brand-black transition-all flex items-center justify-center gap-3 group"
            >
              {t('academy_section.cta')}
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-brand-off-white text-brand-black overflow-hidden">
        <div className="max-w-[1350px] mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTag className="text-brand-graphite/40 text-center">{t('testimonials_section.tag')}</SectionTag>
            <h2 className="text-4xl md:text-6xl font-display leading-[1.1] tracking-tighter text-center mb-24 max-w-4xl mx-auto text-brand-black">
              {t('testimonials_section.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="flex flex-col gap-6"
              >
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, star) => (
                    <Star key={star} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-lg font-light leading-relaxed opacity-80 italic">
                  "{t(`testimonials_section.t${i}_text`)}"
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="w-10 h-10 rounded-full bg-brand-black/5" />
                  <span className="text-xs uppercase tracking-widest font-bold">{t(`testimonials_section.t${i}_author`)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Stamps Section */}
      <section className="py-24 bg-[#F2F2F2] text-brand-black border-t border-brand-black/5 overflow-hidden">
        <div className="max-w-[1350px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-20 gap-x-12">
            {[
              { icon: MapPin, val: t('stats_section.units_val'), label: t('stats_section.units_label') },
              { icon: Users, val: t('stats_section.services_val'), label: t('stats_section.services_label') },
              { icon: Scissors, val: t('stats_section.barbers_val'), label: t('stats_section.barbers_label') },
              { icon: Calendar, val: t('stats_section.booking_val'), label: t('stats_section.booking_label') },
              { icon: Crown, val: t('stats_section.plans_val'), label: t('stats_section.plans_label') }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={cn(
                  "flex flex-col items-start relative group",
                  i < 4 ? "lg:after:content-[''] lg:after:absolute lg:after:right-[-24px] lg:after:top-0 lg:after:bottom-0 lg:after:w-[1px] lg:after:bg-brand-black/5" : ""
                )}
              >
                <motion.h4 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (i * 0.1) + 0.2 }}
                  className="text-5xl md:text-7xl font-display leading-none tracking-tight mb-8"
                >
                  {s.val}
                </motion.h4>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (i * 0.1) + 0.3 }}
                  className="flex items-center gap-4"
                >
                  <s.icon strokeWidth={1.2} size={24} className="text-brand-black/20 group-hover:text-brand-black transition-colors duration-500" />
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-brand-black/40 leading-snug block">
                    {s.label}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-48 bg-brand-black text-brand-off-white overflow-hidden relative border-y border-brand-silver/5">
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-silver/10 via-transparent to-transparent" 
          />
        </div>
        
        <div className="max-w-[1350px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8 items-center flex flex-col"
              >
                <span className="text-[11px] tracking-[0.5em] uppercase text-brand-silver/40 font-medium block mb-4">
                  {t('cta_section.tag')}
                </span>
                <div className="w-12 h-[1px] bg-brand-silver/20" />
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-8xl font-display leading-[1.1] tracking-tighter mb-16"
              >
                {t('cta_section.title')}
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto px-12 py-5 bg-brand-off-white text-brand-black text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-brand-silver transition-all flex items-center justify-center gap-3 cursor-pointer">
                  {t('cta_section.primary')}
                </button>
                <button className="w-full sm:w-auto px-12 py-5 border border-brand-silver/30 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-brand-off-white hover:text-brand-black transition-all flex items-center justify-center gap-3 cursor-pointer">
                  {t('cta_section.secondary')}
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Generic Footer Section from Design System */}
      <footer className="bg-brand-black text-brand-off-white pt-48 pb-20 relative overflow-hidden">
        {/* Subtle background texture/glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-silver/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1350px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-32 text-left">
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="flex items-center gap-4 mb-8">
                <LogoMark className="w-12 h-12" />
                <span className="text-3xl font-display font-medium tracking-tighter">STEP UP</span>
              </div>
              <p className="text-[13px] text-brand-silver/40 leading-loose max-w-xs uppercase tracking-[0.15em] font-light font-sans italic mb-12">
                {t('brand_summary_short')}
              </p>
              
              <div className="flex flex-wrap items-center justify-start gap-8">
                {[
                  { name: 'Instagram', icon: Instagram },
                  { name: 'YouTube', icon: Youtube },
                  { name: 'Facebook', icon: Facebook },
                  { name: 'Twitter', icon: Twitter },
                  { name: 'LinkedIn', icon: Linkedin }
                ].map((social) => (
                  <a 
                    key={social.name} 
                    href="#" 
                    className="text-brand-off-white/20 hover:text-brand-off-white transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon size={18} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-3 flex flex-col items-start">
              <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold mb-12 text-brand-silver/30 font-display italic">{t('footer.navigation')}</h4>
              <ul className="flex flex-col gap-6 items-start">
                {['services', 'memberships', 'units', 'academy'].map(link => (
                  <li key={link}>
                    <a href={`#${link}`} className="text-[11px] uppercase tracking-[0.25em] font-medium text-brand-off-white/40 hover:text-brand-off-white transition-all duration-300">
                      {t(`nav.${link}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start">
              <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold mb-12 text-brand-silver/30 font-display italic">{t('footer.legal')}</h4>
              <ul className="flex flex-col gap-6 items-start">
                {[
                  { id: 'privacy', path: '/privacypolicy' },
                  { id: 'terms', path: '/termsofservice' },
                  { id: 'cookies', path: '#' },
                  { id: 'ethics', path: '#' }
                ].map(item => (
                  <li key={item.id}>
                    <Link to={item.path} className="text-[11px] uppercase tracking-[0.25em] font-medium text-brand-off-white/40 hover:text-brand-off-white transition-all duration-300">
                      {t(`footer.${item.id}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-16 border-t border-brand-silver/5 gap-8">
            <span className="text-[10px] uppercase tracking-[0.5em] text-brand-silver/20 flex items-center gap-3">
              Step Up © 2026 • Built with Precision
            </span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500/40 animate-pulse" />
              <span className="text-[9px] uppercase tracking-[0.4em] text-brand-silver/30">System Operational</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
