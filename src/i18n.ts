import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      design_system: "Design System",
      brand_summary_short: "Step Up represents our essence: premium, masculine, and consistent.",
      footer: {
        navigation: "Navigation",
        social: "Social",
        legal: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookies",
        ethics: "Ethics"
      },
      nav: {
        services: "Services",
        memberships: "Memberships",
        units: "Units",
        academy: "Academy",
        my_account: "My Account",
        book_now: "Book Now",
        back_to_home: "Back to Home"
      },
      membership_premium: {
        tag: "Membership",
        title: "Consistency is what elevates your standard.",
        desc: "With Step Up Membership, you keep your image aligned with exclusive benefits, priority and much more convenience in your daily life.",
        cta_compare: "View Full Comparison",
        footer_text: "Memberships made for men who value consistency, convenience and presence.",
        features_left: [
          { title: "Easy Scheduling", desc: "More practicality and priority." },
          { title: "Exclusive Benefits", desc: "Special discounts and advantages." },
          { title: "Premium Experience", desc: "Step Up standard in every detail." },
          { title: "History & Preferences", desc: "Your cut, your way, always." }
        ],
        plans: [
          {
            id: "essential",
            name: "Essential",
            subtitle: "Membership",
            desc: "For those who want to keep their cut up to date with consistency.",
            price: "79",
            cta: "Subscribe",
            features: [
              { label: "1 cut per month", included: true },
              { label: "Easy scheduling", included: true },
              { label: "Exclusive benefits", included: true },
              { label: "Preference history", included: true },
              { label: "Service discounts", included: false },
              { label: "Booking priority", included: false }
            ]
          },
          {
            id: "signature",
            name: "Signature",
            subtitle: "Membership",
            highlight: "Most Chosen",
            desc: "For those who want hair, beard and appearance always aligned.",
            price: "129",
            cta: "Subscribe",
            features: [
              { label: "Monthly cut", included: true },
              { label: "Monthly beard", included: true },
              { label: "Time priority", included: true },
              { label: "Extra service discounts", included: true },
              { label: "Birthday benefits", included: true },
              { label: "Personalized service", included: false }
            ]
          },
          {
            id: "elite",
            name: "Elite",
            subtitle: "Membership",
            desc: "For those who want the Step Up experience at the highest level.",
            price: "199",
            cta: "Subscribe",
            features: [
              { label: "Recurring appointments", included: true },
              { label: "Premium priority", included: true },
              { label: "Exclusive benefits", included: true },
              { label: "Special offers", included: true },
              { label: "Preference tracking", included: true },
              { label: "Personalized experience", included: true }
            ]
          }
        ]
      },
      hero: {
        title: "Elevate your | presence.",
        subtitle: "Premium cuts, beard and care for men who understand that image is not a detail. It's a standard.",
        cta_book: "Book Now",
        cta_memberships: "View Memberships",
        feature1: "Precise Cut",
        feature2: "Premium Service",
        feature3: "Online Booking",
        feature4: "Exclusive Memberships"
      },
      manifesto: {
        tag: "OUR MANIFESTO",
        title: "More than a cut. A standard.",
        text: "At Step Up, every detail matters. We combine technical precision, premium service and impeccable finishing to deliver more than just a cut: we deliver presence, confidence and consistency. Because standard is not luck. It's a daily choice."
      },
      services: {
        title: "Services made to keep you in standard.",
        view_all: "View all services",
        corte: "Men's Cut",
        corte_desc: "Technique, style and precision for your best look.",
        barba: "Beard",
        barba_desc: "Modeling and finishing for an aligned and striking beard.",
        combo: "Cut and Beard",
        combo_desc: "The perfect combination for a complete and balanced visual.",
        acabamento: "Finishing",
        acabamento_desc: "Precise contours and impeccable finishing for every detail of the look.",
        tratamentos: "Treatments",
        tratamentos_desc: "Professional care for hair, beard and scalp.",
        premium: "Premium Experience",
        premium_desc: "More time, comfort and attention at every stage of your service."
      },
      memberships_section: {
        tag: "MEMBERSHIPS",
        title: "Your standard shouldn't depend on luck.",
        subtitle: "Consistency creates presence. Our plans were made for those who take their own image seriously and value convenience, priority and exclusive benefits.",
        most_chosen: "MOST CHOSEN",
        buy_plan: "Choose this plan",
        essential: "Essential",
        signature: "Signature",
        elite: "Elite"
      },
      process: {
        title: "From booking to mirror, everything needs to look easy.",
        step1: "Book online",
        step1_desc: "Choose the service, the professional and the best time.",
        step2: "Arrive on time",
        step2_desc: "Your time is respected. We are ready.",
        step3: "Receive precise service",
        step3_desc: "Technique, attention and finishing in every detail.",
        step4: "Come back with consistency",
        step4_desc: "Maintain your standard easily with exclusive benefits."
      },
      units_section: {
        tag: "OUR UNITS",
        title: "Find the nearest | Step Up.",
        view_all: "View all units",
        book_here: "Book at this unit"
      },
      barbers_section: {
        tag: "OUR BARBERS",
        title: "Professionals who understand precision.",
        view_all: "View all barbers",
        book_with: "Book with this barber",
        rafael_specialties: "Classic cuts • Fades • Beard • Shave",
        bruno_specialties: "Fades • Beard • Pigmentation • Finishing",
        thiago_specialties: "Modern cuts • Fades • Beard design",
        carlos_specialties: "Classic cuts • Beard • Shave • Finishing"
      },
      testimonials_section: {
        tag: "OUR CLIENTS",
        title: "Those who sit in the chair understand",
        t1_text: "The best barbershop in New Jersey. Precision and environment are on another level.",
        t1_author: "John Doe",
        t2_text: "Step Up is my go-to place. Consistency is key for me, and they never miss.",
        t2_author: "Michael Smith",
        t3_text: "Professional, fast, and high quality. The online booking is seamless.",
        t3_author: "Robert Wilson"
      },
      stats_section: {
        units_val: "5",
        units_label: "Units",
        services_val: "+50k",
        services_label: "Services performed",
        barbers_val: "30+",
        barbers_label: "Specialized barbers",
        booking_val: "100%",
        booking_label: "Online booking",
        plans_val: "3",
        plans_label: "Membership plans"
      },
      academy_section: {
        tag: "ACADEMY",
        title: "Training. Technique. Career.",
        desc: "Step Up Academy trains barbers who master technique, service, and mindset to stand out in the market and build a solid, recognized career.",
        features: [
          { tag: "THEORY", label: "TECHNIQUE", desc: "Master cuts, beard, fades, and finishes with precision and consistency." },
          { tag: "COURSE", label: "SERVICE", desc: "Learn to create experiences that build loyalty and generate recognition." },
          { tag: "COURSE", label: "CAREER", desc: "Develop a mindset, positioning, and strategy to truly grow." },
          { tag: "COURSE", label: "CERTIFICATION", desc: "Experience Step Up Academy to boost your credibility and open new opportunities." },
          { tag: "COURSE", label: "COMMUNITY", desc: "Be part of a network of barbers who evolve together every day." }
        ],
        cta: "DISCOVER THE ACADEMY"
      },
      cta_section: {
        tag: "NEXT STEP",
        title: "Your next cut can be the beginning of a new standard.",
        primary: "Book appointment",
        secondary: "View memberships"
      }
    }
  },
  pt: {
    translation: {
      design_system: "Design System",
      brand_summary_short: "A Step Up representa nossa essência: premium, masculina e consistente.",
      footer: {
        navigation: "Navegação",
        social: "Social",
        legal: "Jurídico",
        privacy: "Privacidade",
        terms: "Termos de Uso",
        cookies: "Cookies",
        ethics: "Ética"
      },
      nav: {
        services: "Serviços",
        memberships: "Memberships",
        units: "Unidades",
        academy: "Academy",
        my_account: "Minha conta",
        book_now: "Agendar horário",
        back_to_home: "Voltar para Início"
      },
      membership_premium: {
        tag: "Membership",
        title: "Consistência é o que eleva seu padrão.",
        desc: "Com o Step Up Membership, você mantém sua imagem sempre alinhada, com benefícios exclusivos, prioridade e muito mais conveniência no seu dia a dia.",
        cta_compare: "Ver comparativo completo",
        footer_text: "Memberships feitos para homens que valorizam consistência, conveniência e presença.",
        features_left: [
          { title: "Agendamento facilitado", desc: "Mais praticidade e prioridade." },
          { title: "Benefícios exclusivos", desc: "Descontos e vantagens especiais." },
          { title: "Experiência premium", desc: "Padrão Step Up em cada detalhe." },
          { title: "Histórico e preferências", desc: "Seu corte, do seu jeito, sempre." }
        ],
        plans: [
          {
            id: "essential",
            name: "Essential",
            subtitle: "Membership",
            desc: "Para quem quer manter o corte em dia com consistência.",
            price: "79",
            cta: "Assinar",
            features: [
              { label: "1 corte por mês", included: true },
              { label: "Agendamento facilitado", included: true },
              { label: "Benefícios exclusivos", included: true },
              { label: "Histórico de preferências", included: true },
              { label: "Descontos em serviços", included: false },
              { label: "Prioridade em horários", included: false }
            ]
          },
          {
            id: "signature",
            name: "Signature",
            subtitle: "Membership",
            highlight: "Mais Escolhido",
            desc: "Para quem quer corte, barba e presença sempre alinhados.",
            price: "129",
            cta: "Assinar",
            features: [
              { label: "Corte mensal", included: true },
              { label: "Barba mensal", included: true },
              { label: "Prioridade em horários", included: true },
              { label: "Descontos em serviços extras", included: true },
              { label: "Benefícios de aniversário", included: true },
              { label: "Atendimento personalizado", included: false }
            ]
          },
          {
            id: "elite",
            name: "Elite",
            subtitle: "Membership",
            desc: "Para quem quer a experiência Step Up no mais alto nível.",
            price: "199",
            cta: "Assinar",
            features: [
              { label: "Atendimentos recorrentes", included: true },
              { label: "Prioridade premium", included: true },
              { label: "Benefícios exclusivos", included: true },
              { label: "Ofertas especiais", included: true },
              { label: "Acompanhamento de preferências", included: true },
              { label: "Experiência personalizada", included: true }
            ]
          }
        ]
      },
      hero: {
        title: "Eleve sua | presença.",
        subtitle: "Cortes, barba e cuidados premium para homens que entendem que imagem não é detalhe. É padrão.",
        cta_book: "Agendar horário",
        cta_memberships: "Ver memberships",
        feature1: "Corte preciso",
        feature2: "Atendimento premium",
        feature3: "Agendamento online",
        feature4: "Memberships exclusivos"
      },
      manifesto: {
        tag: "NOSSO MANIFESTO",
        title: "Mais que um corte. Um padrão.",
        text: "Na Step Up, cada detalhe importa. Unimos precisão técnica, atendimento premium e acabamento impecável para entregar mais do que um corte: entregamos presença, confiança e consistência. Porque padrão não é sorte. É escolha diária."
      },
      services: {
        title: "Serviços feitos para manter você no padrão.",
        view_all: "Ver todos os serviços",
        corte: "Corte Masculino",
        corte_desc: "Técnica, estilo e precisão para o seu melhor visual.",
        barba: "Barba",
        barba_desc: "Modelagem e acabamento para uma barba alinhada e marcante.",
        combo: "Corte e Barba",
        combo_desc: "A combinação perfeita para um visual completo e equilibrado.",
        acabamento: "Acabamento",
        acabamento_desc: "Contornos precisos e finalização impecável para cada detalhe do visual.",
        tratamentos: "Tratamentos",
        tratamentos_desc: "Cuidados profissionais para cabelo, barba e couro cabeludo.",
        premium: "Experiência Premium",
        premium_desc: "Mais tempo, conforto e atenção em cada etapa do seu atendimento."
      },
      memberships_section: {
        tag: "MEMBERSHIPS",
        title: "Seu padrão não deveria depender da sorte.",
        subtitle: "Consistência cria presença. Nossos planos foram feitos para quem leva o próprio visual a sério e valoriza conveniência, prioridade e benefícios exclusivos.",
        most_chosen: "MAIS ESCOLHIDO",
        buy_plan: "Quero este plano",
        essential: "Essential",
        signature: "Signature",
        elite: "Elite"
      },
      process: {
        title: "Do agendamento ao espelho, tudo precisa parecer fácil.",
        step1: "Agende online",
        step1_desc: "Escolha o serviço, o profissional e o melhor horário.",
        step2: "Chegue no horário",
        step2_desc: "Seu tempo é respeitado. Nós estamos prontos.",
        step3: "Receba um atendimento preciso",
        step3_desc: "Técnica, atenção e acabamento em cada detalhe.",
        step4: "Volte com consistência",
        step4_desc: "Mantenha seu padrão com facilidade e benefícios exclusivos."
      },
      units_section: {
        tag: "NOSSAS UNIDADES",
        title: "Encontre a mais próxima | Step Up.",
        view_all: "Ver todas as unidades",
        book_here: "Agendar nesta unidade"
      },
      barbers_section: {
        tag: "NOSSOS BARBEIROS",
        title: "Profissionais que entendem de precisão.",
        view_all: "Ver todos os barbeiros",
        book_with: "Agendar com este barbeiro",
        rafael_specialties: "Cortes clássicos • Degradês • Barba • Navalha",
        bruno_specialties: "Degradês • Barba • Pigmentação • Finalização",
        thiago_specialties: "Cortes modernos • Degradês • Design de barba",
        carlos_specialties: "Cortes clássicos • Barba • Navalha • Acabamento"
      },
      testimonials_section: {
        tag: "NOSSOS CLIENTES",
        title: "Quem senta na cadeira entende",
        t1_text: "A melhor barbearia de New Jersey. Precisão e ambiente em outro nível.",
        t1_author: "João Silva",
        t2_text: "Step Up é meu lugar de confiança. Consistência é fundamental para mim, e eles nunca falham.",
        t2_author: "Ricardo Santos",
        t3_text: "Profissional, rápido e de alta qualidade. O agendamento online é perfeito.",
        t3_author: "Bruno oliveira"
      },
      stats_section: {
        units_val: "5",
        units_label: "Unidades",
        services_val: "+50 mil",
        services_label: "Atendimentos realizados",
        barbers_val: "30+",
        barbers_label: "Barbeiros especializados",
        booking_val: "100%",
        booking_label: "Agendamento online",
        plans_val: "3",
        plans_label: "Planos de memberships"
      },
      academy_section: {
        tag: "ACADEMY",
        title: "Formação. Técnica. Carreira.",
        desc: "A Step Up Academy forma barbeiros que dominam técnica, atendimento e mentalidade para se destacarem no mercado e construírem uma carreira sólida e reconhecida.",
        features: [
          { tag: "TEÓRICA", label: "TÉCNICA", desc: "Domine cortes, barba, degradês e acabamentos com precisão e consistência." },
          { tag: "CURSO", label: "ATENDIMENTO", desc: "Aprenda a criar experiências que fidelizam e geram reconhecimento." },
          { tag: "CURSO", label: "CARREIRA", desc: "Desenvolva mentalidade, posicionamento e estratégia para crescer de verdade." },
          { tag: "CURSO", label: "CERTIFICAÇÃO", desc: "Desenvolva Step Up Academy para impulsionar sua credibilidade e abrir novas oportunidades." },
          { tag: "CURSO", label: "COMUNIDADE", desc: "Faça parte de uma rede de barbeiros que evoluem juntos todos os dias." }
        ],
        cta: "CONHECER A ACADEMY"
      },
      cta_section: {
        tag: "PRÓXIMO PASSO",
        title: "Seu próximo corte pode ser o começo de um novo padrão.",
        primary: "Agendar horário",
        secondary: "Ver memberships"
      }
    }
  },
  es: {
    translation: {
      design_system: "Sistema de Diseño",
      brand_summary_short: "Step Up representa nuestra esencia: premium, masculina y consistente.",
      footer: {
        navigation: "Navegación",
        social: "Social",
        legal: "Legal",
        privacy: "Privacidad",
        terms: "Términos",
        cookies: "Cookies",
        ethics: "Ética"
      },
      nav: {
        services: "Servicios",
        memberships: "Membresías",
        units: "Unidades",
        academy: "Academy",
        my_account: "Mi cuenta",
        book_now: "Agendar cita",
        back_to_home: "Volver al Inicio"
      },
      membership_premium: {
        tag: "Membership",
        title: "La consistencia es lo que eleva tu estándar.",
        desc: "Con Step Up Membership, mantienes tu imagen siempre alineada, con beneficios exclusivos, prioridad y mucha más comodidad en tu día a día.",
        cta_compare: "Ver comparativa completa",
        footer_text: "Membresías hechas para hombres que valoran la consistencia, comodidad y presencia.",
        features_left: [
          { title: "Programación fácil", desc: "Más practicidad y prioridad." },
          { title: "Beneficios exclusivos", desc: "Descuentos y ventajas especiales." },
          { title: "Experiencia premium", desc: "Estándar Step Up en cada detalle." },
          { title: "Historial y preferencias", desc: "Tu corte, a tu manera, siempre." }
        ],
        plans: [
          {
            id: "essential",
            name: "Essential",
            subtitle: "Membership",
            desc: "Para quienes quieren mantener su corte al día con consistencia.",
            price: "79",
            cta: "Suscribirse",
            features: [
              { label: "1 corte al mes", included: true },
              { label: "Programación fácil", included: true },
              { label: "Beneficios exclusivos", included: true },
              { label: "Historial de preferencias", included: true },
              { label: "Descuentos en servicios", included: false },
              { label: "Prioridad en horarios", included: false }
            ]
          },
          {
            id: "signature",
            name: "Signature",
            subtitle: "Membership",
            highlight: "Más Elegido",
            desc: "Para quienes quieren corte, barba y presencia siempre alineados.",
            price: "129",
            cta: "Suscribirse",
            features: [
              { label: "Corte mensual", included: true },
              { label: "Barba mensual", included: true },
              { label: "Prioridad en horarios", included: true },
              { label: "Descuentos en servicios extras", included: true },
              { label: "Beneficios de cumpleaños", included: true },
              { label: "Atención personalizada", included: false }
            ]
          },
          {
            id: "elite",
            name: "Elite",
            subtitle: "Membership",
            desc: "Para quienes quieren la experiencia Step Up al más alto nivel.",
            price: "199",
            cta: "Suscribirse",
            features: [
              { label: "Atención recurrente", included: true },
              { label: "Prioridad premium", included: true },
              { label: "Beneficios exclusivos", included: true },
              { label: "Ofertas especiales", included: true },
              { label: "Seguimiento de preferencias", included: true },
              { label: "Experiencia personalizada", included: true }
            ]
          }
        ]
      },
      hero: {
        title: "Eleve su | presencia.",
        subtitle: "Cortes, barba y cuidados premium para hombres que entienden que la imagen no es un detalle. Es un estándar.",
        cta_book: "Agendar cita",
        cta_memberships: "Ver membresías",
        feature1: "Corte preciso",
        feature2: "Atención premium",
        feature3: "Reserva online",
        feature4: "Membresías exclusivas"
      },
      manifesto: {
        tag: "NUESTRO MANIFIESTO",
        title: "Más que un corte. Un estándar.",
        text: "En Step Up, cada detalle importa. Combinamos precisión técnica, atención premium y acabados impecables para ofrecer más que un corte: ofrecemos presencia, confianza y consistencia. Porque el estándar no es suerte. Es una elección diaria."
      },
      services: {
        title: "Servicios hechos para mantenerte en el estándar.",
        view_all: "Ver todos los servicios",
        corte: "Corte Masculino",
        corte_desc: "Técnica, estilo y precisión para tu mejor look.",
        barba: "Barba",
        barba_desc: "Modelado y acabado para una barba alineada y marcada.",
        combo: "Corte y Barba",
        combo_desc: "La combinación perfecta para un visual completo y equilibrado.",
        acabamento: "Acabado",
        acabamento_desc: "Contornos precisos y finalización impecable para cada detalle del visual.",
        tratamentos: "Tratamientos",
        tratamentos_desc: "Cuidados profesionales para cabello, barba y cuero cabelludo.",
        premium: "Experiencia Premium",
        premium_desc: "Más tiempo, comodidad y atención en cada etapa de su servicio."
      },
      memberships_section: {
        tag: "MEMBRESÍAS",
        title: "Tu estándar no debería depender de la suerte.",
        subtitle: "La consistencia crea presencia. Nuestros planes fueron hechos para quienes se toman en serio su propia imagen y valoran la conveniencia, prioridad y beneficios exclusivos.",
        most_chosen: "MÁS ELEGIDO",
        buy_plan: "Quiero este plan",
        essential: "Essential",
        signature: "Signature",
        elite: "Elite"
      },
      process: {
        title: "Desde la reserva hasta el espejo, todo debe parecer fácil.",
        step1: "Reserva online",
        step1_desc: "Elige el servicio, el profesional y el mejor horario.",
        step2: "Llega a tiempo",
        step2_desc: "Se respeta tu tiempo. Estamos listos.",
        step3: "Recibe atención precisa",
        step3_desc: "Técnica, atención y acabado en cada detalle.",
        step4: "Vuelve con consistencia",
        step4_desc: "Mantén tu estándar con facilidad y beneficios exclusivos."
      },
      units_section: {
        tag: "NUESTRAS UNIDADES",
        title: "Encuentra la más cercana | Step Up.",
        view_all: "Ver todas las unidades",
        book_here: "Agendar en esta unidad"
      },
      barbers_section: {
        tag: "NUESTROS BARBEROS",
        title: "Profesionales que entienden de precisión.",
        view_all: "Ver todos los barberos",
        book_with: "Agendar con este barbero",
        rafael_specialties: "Cortes clásicos • Degradados • Barba • Navaja",
        bruno_specialties: "Degradados • Barba • Pigmentación • Finalización",
        thiago_specialties: "Cortes modernos • Degradados • Diseño de barba",
        carlos_specialties: "Cortes clásicos • Barba • Navaja • Acabado"
      },
      testimonials_section: {
        tag: "NUESTROS CLIENTES",
        title: "Quien se sienta en la silla entiende",
        t1_text: "La mejor barbería de New Jersey. Precisión y ambiente en otro nivel.",
        t1_author: "Juan López",
        t2_text: "Step Up es mi lugar de confianza. La consistencia es clave para mí, y nunca fallan.",
        t2_author: "Miguel García",
        t3_text: "Profesional, rápido y de alta calidad. La reserva online es perfecta.",
        t3_author: "Carlos Rodríguez"
      },
      stats_section: {
        units_val: "5",
        units_label: "Unidades",
        services_val: "+50 mil",
        services_label: "Servicios realizados",
        barbers_val: "30+",
        barbers_label: "Barberos especializados",
        booking_val: "100%",
        booking_label: "Reserva online",
        plans_val: "3",
        plans_label: "Planes de membresías"
      },
      academy_section: {
        tag: "ACADEMY",
        title: "Formación. Técnica. Carrera.",
        desc: "Step Up Academy forma barberos que dominan técnica, atención y mentalidad para destacar en el mercado y construir una carrera sólida y reconocida.",
        features: [
          { tag: "TEORÍA", label: "TÉCNICA", desc: "Domina cortes, barba, degradados y acabados con precisión y consistencia." },
          { tag: "CURSO", label: "ATENCIÓN", desc: "Aprende a crear experiencias que fidelicen y generen reconocimiento." },
          { tag: "CURSO", label: "CARRERA", desc: "Desarrolla mentalidad, posicionamiento y estrategia para crecer de verdad." },
          { tag: "CURSO", label: "CERTIFICACIÓN", desc: "Experimenta Step Up Academy para impulsar tu credibilidad y abrir nuevas oportunidades." },
          { tag: "CURSO", label: "COMUNIDAD", desc: "Forma parte de una red de barberos que evolucionan juntos cada día." }
        ],
        cta: "CONOCER LA ACADEMY"
      },
      cta_section: {
        tag: "PRÓXIMO PASO",
        title: "Tu próximo corte puede ser el comienzo de un nuevo estándar.",
        primary: "Agendar cita",
        secondary: "Ver membresías"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
