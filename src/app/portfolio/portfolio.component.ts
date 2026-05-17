import { Component, inject } from '@angular/core';
import { LangService, BiLang } from '../services/language.service';

interface Project {
  title: string;
  desc: BiLang;
  tech: string[];
  categories: string[];
  icon: string;
  githubLink: string;
  type: 'professional' | 'personal';
  featured?: boolean;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  langSvc = inject(LangService);

  get lang() { return this.langSvc.lang(); }

  categoryKeys = ['All', 'AI/ML', 'Web', 'Mobile', 'Systems', 'Game'] as const;

  get categories() {
    return this.lang === 'fr'
      ? ['Tout', 'IA/ML', 'Web', 'Mobile', 'Systèmes', 'Jeux']
      : [...this.categoryKeys];
  }

  selected = 'All';

  get ui() {
    const fr = this.lang === 'fr';
    return {
      label:       fr ? 'Mon Travail'         : 'My Work',
      title1:      fr ? 'Projets'             : 'Featured',
      title2:      fr ? 'en Vedette'          : 'Projects',
      desc:        fr ? 'Des systèmes IA à des plateformes SaaS d\'entreprise — voici ce que j\'ai construit.'
                      : 'From AI systems to enterprise SaaS platforms — here\'s what I\'ve built.',
      proLabel:    fr ? 'Professionnel'       : 'Professional',
      viewGH:      fr ? 'Voir sur GitHub'     : 'View on GitHub',
      ctaText:     fr ? 'Vous voulez voir plus ? Tout mon code est sur GitHub.' : 'Want to see more? All my code lives on GitHub.',
      ctaBtn:      fr ? 'Tout voir sur GitHub' : 'View All on GitHub',
    };
  }

  projects: Project[] = [
    {
      title: 'CGI — Intelligent Timesheet System',
      desc: {
        en: 'AI-powered PDF data extraction system that transforms unstructured timesheet documents into actionable data. Achieved 80%+ extraction accuracy with a comprehensive pytest validation suite.',
        fr: 'Système IA d\'extraction de données PDF qui transforme des feuilles de temps non structurées en données exploitables. Atteint 80%+ de précision avec une suite pytest complète.',
      },
      tech: ['Python', 'pytest', 'PDF Parsing', 'Machine Learning', 'Git'],
      categories: ['AI/ML'],
      icon: '🤖',
      githubLink: 'https://github.com/SimenMacRoy',
      type: 'professional',
      featured: true,
    },
    {
      title: 'Safesguard — GRC SaaS Platform',
      desc: {
        en: 'Enterprise-grade Governance, Risk & Compliance SaaS platform. Architected a three-tier permission system, real-time notification engine via Django Signals, and full FR/EN i18n.',
        fr: 'Plateforme SaaS GRC de niveau entreprise. Architecturé un système de permissions à trois niveaux, moteur de notifications temps réel avec Django Signals et i18n FR/EN complet.',
      },
      tech: ['Django REST', 'SvelteKit', 'TypeScript', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
      categories: ['Web', 'AI/ML'],
      icon: '🏢',
      githubLink: 'https://github.com/SimenMacRoy',
      type: 'professional',
      featured: true,
    },
    {
      title: "Shek's House — E-commerce Platform",
      desc: {
        en: 'Full-featured multi-category e-commerce platform covering authentication, product catalog, shopping cart, Stripe payments, promotional engine, and order lifecycle management.',
        fr: 'Plateforme e-commerce multi-catégories complète couvrant authentification, catalogue, panier, paiements Stripe, moteur promotionnel et cycle de vie des commandes.',
      },
      tech: ['Node.js', 'Express.js', 'JavaScript', 'Stripe API', 'Railway', 'Netlify'],
      categories: ['Web'],
      icon: '🛍️',
      githubLink: 'https://github.com/SimenMacRoy',
      type: 'professional',
      featured: true,
    },
    {
      title: 'BluM — Recipe & Meal App',
      desc: {
        en: 'Cross-platform mobile app combining recipe discovery, step-by-step video cooking tutorials, ingredient ordering, and meal delivery. Full-stack from React Native frontend to Node.js REST backend.',
        fr: 'Application mobile multiplateforme combinant découverte de recettes, tutoriels vidéo, commande d\'ingrédients et livraison de repas. Full-stack de React Native à un backend REST Node.js.',
      },
      tech: ['React Native', 'Expo', 'Node.js', 'Express.js', 'React Navigation', 'EAS'],
      categories: ['Mobile'],
      icon: '📱',
      githubLink: 'https://github.com/SimenMacRoy/BluM',
      type: 'professional',
      featured: true,
    },
    {
      title: 'CartographeForestier',
      desc: {
        en: 'Machine learning pipeline for forest coverage classification from satellite imagery. Combines computer vision and geospatial data analysis to identify and monitor forest regions.',
        fr: 'Pipeline ML pour la classification de la couverture forestière à partir d\'images satellites. Combine vision par ordinateur et analyse de données géospatiales.',
      },
      tech: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'Satellite Data'],
      categories: ['AI/ML'],
      icon: '🛰️',
      githubLink: 'https://github.com/SimenMacRoy/CartographeForestier',
      type: 'personal',
    },
    {
      title: 'Traffic Control',
      desc: {
        en: 'Real-time flight tracking system with interactive map. Displays aircraft routes, manages flight schedules and routing — inspired by actual aeronautics control systems.',
        fr: 'Système de suivi de vols en temps réel avec carte interactive. Affiche les routes des aéronefs et gère les horaires — inspiré des systèmes réels de contrôle aérien.',
      },
      tech: ['C++', 'C#', 'Real-Time Systems', 'GIS', 'Scheduling'],
      categories: ['Systems'],
      icon: '✈️',
      githubLink: 'https://github.com/SimenMacRoy/TrafficControl',
      type: 'personal',
    },
    {
      title: 'Around the World',
      desc: {
        en: 'Multiplayer board game backend built with Spring Boot. Demonstrates mastery of Observer and Strategy design patterns, session management, and concurrent game state isolation.',
        fr: 'Backend de jeu de plateau multijoueur avec Spring Boot. Démontre la maîtrise des patrons Observer et Strategy, gestion de sessions et isolation d\'état de jeu concurrent.',
      },
      tech: ['Java', 'Spring Boot', 'Design Patterns', 'Maven', 'Git'],
      categories: ['Systems', 'Game'],
      icon: '🌍',
      githubLink: 'https://github.com/SimenMacRoy',
      type: 'personal',
    },
    {
      title: 'Polaris',
      desc: {
        en: 'Intelligent supermarket assistant that helps customers locate products using AI reasoning. Named after the North Star — always guides you where you need to go.',
        fr: 'Assistant intelligent de supermarché qui aide les clients à localiser des produits via raisonnement IA. Nommé d\'après l\'Étoile Polaire — vous guide toujours vers votre destination.',
      },
      tech: ['Python', 'AI', 'Pathfinding', 'NLP'],
      categories: ['AI/ML'],
      icon: '⭐',
      githubLink: 'https://github.com/SimenMacRoy/Polaris',
      type: 'personal',
    },
    {
      title: 'Evolution',
      desc: {
        en: 'Genetic algorithm engine that evolves populations across generations to solve optimization problems. Demonstrates how natural selection principles drive computational problem-solving.',
        fr: 'Moteur d\'algorithmes génétiques faisant évoluer des populations sur des générations pour résoudre des problèmes d\'optimisation.',
      },
      tech: ['Python', 'Genetic Algorithms', 'Optimization', 'NumPy'],
      categories: ['AI/ML'],
      icon: '🧬',
      githubLink: 'https://github.com/SimenMacRoy/Evolution',
      type: 'personal',
    },
    {
      title: 'Game of Life',
      desc: {
        en: "Conway's Game of Life simulation — visualizes emergent complexity from simple cellular automaton rules, a classic of computational science.",
        fr: 'Simulation du Jeu de la Vie de Conway — visualise la complexité émergente à partir de règles d\'automate cellulaire simples, un classique de la science computationnelle.',
      },
      tech: ['Python', 'Simulation', 'Matplotlib'],
      categories: ['AI/ML', 'Game'],
      icon: '🌱',
      githubLink: 'https://github.com/SimenMacRoy/JeuDeLaVie',
      type: 'personal',
    },
  ];

  get filtered(): Project[] {
    const key = this.categoryKeys[this.categories.indexOf(this.selected)] ?? this.selected;
    if (key === 'All' || this.selected === 'Tout') return this.projects;
    return this.projects.filter(p => p.categories.some(c =>
      c === key || c.replace('/', '') === key.replace('/', '')
    ));
  }

  select(cat: string) {
    this.selected = cat;
  }
}
