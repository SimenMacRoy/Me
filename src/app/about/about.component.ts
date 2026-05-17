import { Component, AfterViewInit, inject } from '@angular/core';
import { LangService, BiLang } from '../services/language.service';

interface Skill { name: string; level: number; color: string; }

interface ExpItem {
  role: BiLang; company: string; period: string; location: string;
  project: BiLang; bullets: BiLang<string[]>;
  tech: string[]; icon: string; professional: boolean;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {

  langSvc = inject(LangService);

  get lang() { return this.langSvc.lang(); }

  get ui() {
    const fr = this.lang === 'fr';
    return {
      whoLabel:    fr ? 'Qui suis-je'     : 'Who Am I',
      aboutTitle1: fr ? 'À Propos de'     : 'About',
      aboutTitle2: fr ? 'Moi'             : 'Me',
      bioDesc:     fr ? 'Développeur · Scientifique · Champion National · Apprenant Perpétuel'
                      : 'Developer · Scientist · National Champion · Lifelong Learner',
      stat1Lbl:    fr ? 'Expérience Pro'  : 'Pro Experience',
      stat2Lbl:    fr ? 'Meilleur au Canada' : 'Top in Canada',
      stat3Lbl:    fr ? 'Projets Déployés' : 'Projects Deployed',
      stat4Lbl:    fr ? 'GPA / 4,30'     : 'GPA / 4.30',
      bioH2:       fr ? 'Bonjour, je suis <span>Mac Roy Simen</span>'
                      : 'Hello, I\'m <span>Mac Roy Simen</span>',
      bio1:        fr ? 'Développeur full-stack passionné à la croisée de l\'Intelligence Artificielle et du Génie Logiciel. En 2026, j\'ai intégré CGI pour développer un système IA d\'extraction de documents PDF, après avoir contribué à une plateforme SaaS GRC d\'entreprise chez Octosafes.'
                      : 'A passionate full-stack developer at the intersection of Artificial Intelligence and Software Engineering. In 2026, I joined CGI to build an AI-powered PDF extraction system, after contributing to an enterprise GRC SaaS platform at Octosafes.',
      bio2:        fr ? 'J\'ai remporté la 1re place au Canada à la Compétition Internationale d\'Astrophysique (2024) et la 2e place en Mathématiques (2025) — une rigueur analytique que j\'apporte à chaque défi technique.'
                      : 'I won 1st place in Canada at the International Astrophysics Competition (2024) and 2nd place in Mathematics (2025) — analytical rigor I bring to every technical challenge.',
      bio3:        fr ? 'Diplômé CS printemps 2026 de l\'UQTR avec une moyenne cumulative de 4,15/4,30, trilingue (Français/Anglais/Espagnol), je cherche toujours le prochain problème difficile à résoudre.'
                      : 'Graduating CS Spring 2026 from UQTR with a 4.15/4.30 cumulative GPA, trilingual (French/English/Spanish), always hunting the next hard problem to solve.',
      chips:       fr ? ['🇨🇦 Canada', '🎓 UQTR 2026', '🌍 Cameroun', '🏆 Champion National', '🤖 Passionné IA']
                      : ['🇨🇦 Based in Canada', '🎓 UQTR 2026', '🌍 Cameroon roots', '🏆 National Champion', '🤖 AI Enthusiast'],
      skillsLabel: fr ? 'Compétences'    : 'Capabilities',
      skillsTitle1: fr ? 'Compétences'   : 'Technical',
      skillsTitle2: fr ? 'Techniques'    : 'Skills',
      toolsLbl:    fr ? 'Outils & Environnements' : 'Tools & Environments',
      eduLabel:    fr ? 'Académique'     : 'Academia',
      eduTitle:    fr ? 'Éducation'      : 'Education',
      expLabel:    fr ? 'Carrière'       : 'Career',
      expTitle:    fr ? 'Expérience'     : 'Experience',
      certsLabel:  fr ? 'Réalisations'   : 'Achievements',
      certsTitle1: fr ? 'Certifications' : 'Certifications',
      certsTitle2: fr ? '& Prix'         : '& Awards',
      langsLabel:  fr ? 'Communication'  : 'Communication',
      langsTitle1: fr ? 'Langues'        : 'Languages',
      langsTitle2: fr ? 'Parlées'        : 'Spoken',
    };
  }

  skills: Skill[] = [
    { name: 'Python',                     level: 92, color: '#38bdf8' },
    { name: 'JavaScript / TypeScript',    level: 88, color: '#818cf8' },
    { name: 'Java',                       level: 87, color: '#38bdf8' },
    { name: 'Django REST Framework',      level: 85, color: '#a78bfa' },
    { name: 'React / React Native',       level: 85, color: '#818cf8' },
    { name: 'Spring Boot',               level: 82, color: '#38bdf8' },
    { name: 'Node.js / Express',          level: 82, color: '#a78bfa' },
    { name: 'PostgreSQL / MySQL',         level: 82, color: '#38bdf8' },
    { name: 'SvelteKit',                  level: 80, color: '#818cf8' },
    { name: 'Docker',                     level: 78, color: '#a78bfa' },
    { name: 'Machine Learning (Scikit-learn)', level: 82, color: '#38bdf8' },
    { name: 'C# / C++',                   level: 75, color: '#818cf8' },
  ];

  tools = [
    'Git / GitHub / GitLab', 'Docker', 'Railway', 'Netlify', 'Cloudinary',
    'Google Cloud', 'Firebase', 'pytest', 'Maven / Gradle',
    'IntelliJ IDEA', 'VS Code', 'Agile / Scrum',
  ];

  education = [
    {
      degree: { en: "Bachelor's in Computer Science — Software Development", fr: 'Baccalauréat en Informatique — Développement Logiciel' },
      school: 'Université du Québec à Trois-Rivières (UQTR)',
      period: '2023 – 2026',
      location: 'Trois-Rivières, QC, Canada',
      note: { en: 'High Distinction  ·  GPA 4.15 / 4.30', fr: 'Grande Distinction  ·  Moy. 4,15 / 4,30' },
      icon: '🎓',
    },
    {
      degree: { en: "Certificate — Web & Mobile Application Development", fr: 'Certificat — Développement Web & Mobile' },
      school: 'Meta / Coursera',
      period: '2023 – 2024',
      location: 'Online',
      note: { en: 'Very Good', fr: 'Très Bien' },
      icon: '📜',
    },
    {
      degree: { en: "Bachelor's — Mathematics & Physical Sciences", fr: 'Baccalauréat — Mathématiques & Sciences Physiques' },
      school: 'École Nationale Supérieure Polytechnique, Yaoundé',
      period: '2021 – 2022',
      location: 'Yaoundé, Cameroun',
      note: { en: 'Distinction', fr: 'Distinction' },
      icon: '🔭',
    },
  ];

  experience: ExpItem[] = [
    {
      role:     { en: 'Full-Stack Developer', fr: 'Développeur Full-Stack' },
      company:  'CGI',
      period:   'Jan 2026 – May 2026',
      location: 'Shawinigan, QC',
      project:  { en: 'AI-Powered PDF Data Extraction System', fr: 'Système IA d\'Extraction de Données PDF' },
      bullets:  {
        en: [
          'Engineered automated PDF extraction pipeline achieving 80%+ accuracy across diverse document formats',
          'Implemented comprehensive pytest suite validating extraction precision',
          'Designed modular, testable backend architecture for payroll & project management integration',
          'Established multi-level validation pipeline with quality control mechanisms',
        ],
        fr: [
          'Développé un pipeline d\'extraction PDF automatisé atteignant 80%+ de précision sur formats variés',
          'Implémenté une suite pytest complète pour valider la précision d\'extraction',
          'Conçu une architecture backend modulaire intégrable aux systèmes de paie et gestion de projets',
          'Établi un pipeline de validation multi-niveaux avec mécanismes de contrôle qualité',
        ],
      },
      tech: ['Python', 'pytest', 'PDF Parsing', 'Machine Learning', 'Git'],
      icon: '🤖',
      professional: true,
    },
    {
      role:     { en: 'Full-Stack Developer', fr: 'Développeur Full-Stack' },
      company:  'Octosafes — Safesguard',
      period:   'May 2025 – Jan 2026',
      location: 'Lévis, QC',
      project:  { en: 'Enterprise GRC SaaS Platform — Multi-Tenant', fr: 'Plateforme SaaS GRC Entreprise — Multi-Locataire' },
      bullets:  {
        en: [
          'Architected three-tier hierarchical permission system (Super Admin, Org Admin, User)',
          'Developed intelligent notification system using Django Signals for real-time assignments',
          'Crafted responsive SvelteKit components with Tailwind CSS for mobile/tablet/desktop',
          'Implemented full i18n with Paraglide (FR/EN) and managed Docker infrastructure',
        ],
        fr: [
          'Architecturé un système de permissions hiérarchique à trois niveaux (Super Admin, Org Admin, User)',
          'Développé un système de notifications intelligent avec Django Signals pour assignations temps réel',
          'Créé des composants SvelteKit responsifs avec Tailwind CSS pour mobile/tablette/bureau',
          'Implémenté l\'i18n complet avec Paraglide (FR/EN) et géré l\'infrastructure Docker',
        ],
      },
      tech: ['Django REST', 'SvelteKit', 'TypeScript', 'PostgreSQL', 'Docker', 'Tailwind CSS', 'Django Signals'],
      icon: '🏢',
      professional: true,
    },
    {
      role:     { en: 'Full-Stack Developer', fr: 'Développeur Full-Stack' },
      company:  "Shek's House",
      period:   'Jan 2025 – Jan 2026',
      location: 'Montréal, QC',
      project:  { en: 'E-commerce Platform — Multi-Category Retail', fr: 'Plateforme E-commerce — Commerce Multi-Catégories' },
      bullets:  {
        en: [
          'Built full authentication, product catalog, shopping cart, and order lifecycle',
          'Integrated Stripe payment processing with automated order confirmation',
          'Developed promotional engine (discounts, free shipping, Buy X Get Y)',
          'Deployed with Railway and Netlify; contributed to CI/CD pipelines',
        ],
        fr: [
          'Développé l\'authentification, catalogue produits, panier et cycle de vie des commandes',
          'Intégré Stripe avec confirmation automatique de commande',
          'Développé un moteur promotionnel (rabais, livraison gratuite, Buy X Get Y)',
          'Déployé avec Railway et Netlify; contribué aux pipelines CI/CD',
        ],
      },
      tech: ['Node.js', 'Express.js', 'JavaScript', 'Stripe API', 'Railway', 'Netlify'],
      icon: '🛍️',
      professional: true,
    },
    {
      role:     { en: 'Full-Stack Mobile Developer', fr: 'Développeur Mobile Full-Stack' },
      company:  'BluM — Recipe & Meal App',
      period:   'May 2024 – Sep 2024',
      location: 'Trois-Rivières, QC',
      project:  { en: 'Cross-Platform Mobile Application', fr: 'Application Mobile Multiplateforme' },
      bullets:  {
        en: [
          'Architected full-stack solution with React Native/Expo frontend and Node.js backend',
          'Implemented secure auth with email-based password reset and user profiles',
          'Developed recipe catalog with multi-country filtering, video tutorials, and meal ordering',
          'Ensured iOS/Android cross-platform compatibility through rigorous testing',
        ],
        fr: [
          'Architecturé une solution full-stack avec React Native/Expo et backend Node.js',
          'Implémenté l\'authentification sécurisée avec réinitialisation par courriel',
          'Développé un catalogue de recettes avec filtrage multi-pays, tutoriels vidéo et commande de repas',
          'Assuré la compatibilité iOS/Android par des tests rigoureux',
        ],
      },
      tech: ['React Native', 'Expo', 'Node.js', 'Express.js', 'React Navigation', 'EAS'],
      icon: '📱',
      professional: true,
    },
    {
      role:     { en: 'Programmer Analyst', fr: 'Analyste Programmeur' },
      company:  'Data Annotation',
      period:   'Jan 2025 – May 2025',
      location: 'Trois-Rivières, QC',
      project:  { en: 'AI System Development & Optimization', fr: 'Développement et Optimisation de Systèmes IA' },
      bullets:  {
        en: [
          'Played instrumental role in AI system development lifecycle from conception through optimization',
          'Ensured high-quality training data and model performance metrics',
        ],
        fr: [
          'Rôle instrumental dans le cycle de vie des systèmes IA, de la conception à l\'optimisation',
          'Assuré la qualité des données d\'entraînement et les métriques de performance des modèles',
        ],
      },
      tech: ['AI Development', 'Data Analysis', 'System Optimization'],
      icon: '🔬',
      professional: true,
    },
  ];

  certifications = [
    { title: { en: '1st in Canada — International Astrophysics Competition', fr: '1er au Canada — Compétition Internationale d\'Astrophysique' }, year: '2024', icon: '🏆', highlight: true },
    { title: { en: '2nd in Canada — International Youth Mathematics Competition (IYMC)', fr: '2e au Canada — Compétition Internationale de Mathématiques (IYMC)' }, year: '2025', icon: '🥈', highlight: true },
    { title: { en: 'Meta Front-End Developer Professional Certificate (UX/UI · React · React Native · Mobile)', fr: 'Certificat Pro Meta Développeur Front-End (UX/UI · React · React Native · Mobile)' }, year: '2024', icon: '📱', highlight: false },
    { title: { en: 'Artificial Intelligence Certificate — EdX', fr: 'Certificat Intelligence Artificielle — EdX' }, year: '2024', icon: '🤖', highlight: false },
    { title: { en: 'Version Control & Programming with JavaScript — Coursera', fr: 'Contrôle de Version & Programmation JS — Coursera' }, year: '2024', icon: '📜', highlight: false },
  ];

  languages = [
    { name: 'Français',  level: { en: 'Bilingual / Native', fr: 'Bilingue / Natif' }, pct: 100 },
    { name: 'English',   level: { en: 'Bilingual / Fluent',  fr: 'Bilingue / Courant' }, pct: 95 },
    { name: 'Español',   level: { en: 'Professional Working Proficiency', fr: 'Compétence Professionnelle' }, pct: 60 },
  ];

  ngAfterViewInit() {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.skill-row, .stat-card, .timeline-item, .cert-card, .lang-card')
      .forEach(el => io.observe(el));
  }
}
