import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy, NgZone, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LangService } from '../services/language.service';

interface Star { x: number; y: number; r: number; alpha: number; tDir: number; tSpeed: number; }
interface Shot  { x: number; y: number; len: number; speed: number; angle: number; alpha: number; active: boolean; }

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('starsCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  langSvc = inject(LangService);
  private ngZone = inject(NgZone);

  private animId = 0;
  private stars: Star[] = [];
  private shots: Shot[] = [];
  private ctx!: CanvasRenderingContext2D;

  typewriterText = '';
  private phraseIdx = 0;
  private charIdx = 0;
  private deleting = false;
  private typeTimeout: ReturnType<typeof setTimeout> | null = null;

  private get phrases(): string[] {
    return this.langSvc.lang() === 'en' ? [
      'Full-Stack Developer',
      'AI Engineer',
      'Science Champion',
      'Systems Architect',
      'Problem Solver',
    ] : [
      'Développeur Full-Stack',
      'Ingénieur IA',
      'Champion Scientifique',
      'Architecte Systèmes',
      'Bâtisseur de Solutions',
    ];
  }

  get ui() {
    const fr = this.langSvc.lang() === 'fr';
    return {
      badge:      fr ? 'Ouvert aux opportunités'  : 'Open to opportunities',
      eyebrow:    fr ? 'INGÉNIEUR LOGICIEL  ·  DÉVELOPPEUR IA  ·  CHAMPION SCIENTIFIQUE'
                     : 'SOFTWARE ENGINEER  ·  AI DEVELOPER  ·  SCIENCE CHAMPION',
      desc:       fr ? 'Développeur passionné à la croisée de l\'Intelligence Artificielle et du Génie Logiciel. Diplômé CS printemps 2026 (UQTR) avec 1+ an d\'expérience professionnelle chez CGI, Octosafes et plus.'
                     : 'Passionate developer at the intersection of Artificial Intelligence and Software Engineering. Spring 2026 CS graduate from UQTR with 1+ year of professional experience at CGI, Octosafes, and more.',
      award1T:    fr ? '1er au Canada' : '1st in Canada',
      award1S:    fr ? 'Compétition Internationale d\'Astrophysique · 2024' : 'International Astrophysics Competition · 2024',
      award2T:    fr ? '2e au Canada'  : '2nd in Canada',
      award2S:    fr ? 'Compétition Internationale de Mathématiques (IYMC) · 2025' : 'International Youth Mathematics Competition (IYMC) · 2025',
      exploreBtn: fr ? 'Explorer les Projets' : 'Explore Projects',
      resumeBtn:  fr ? 'Télécharger le CV'    : 'Download Resume',
    };
  }

  get skills() {
    const fr = this.langSvc.lang() === 'fr';
    return fr ? [
      { icon: '🤖', title: 'IA & Machine Learning',       desc: 'Extraction PDF, pipelines ML, algorithmes génétiques, classification d\'images satellite' },
      { icon: '🚀', title: 'Développement Full-Stack',     desc: 'Django REST, SvelteKit, React, Spring Boot, Node.js, APIs REST' },
      { icon: '📱', title: 'Développement Mobile',         desc: 'Applications React Native / Expo pour iOS et Android' },
      { icon: '☁️', title: 'DevOps & Infonuagique',        desc: 'Docker, Railway, Google Cloud, Firebase, CI/CD, Netlify' },
      { icon: '🗄️', title: 'Architecture & Conception',    desc: 'Microservices, patrons GoF, RESTful, MVC, Agile/Scrum' },
    ] : [
      { icon: '🤖', title: 'AI & Machine Learning',        desc: 'PDF extraction, ML pipelines, genetic algorithms, satellite imagery classification' },
      { icon: '🚀', title: 'Full-Stack Development',        desc: 'Django REST, SvelteKit, React, Spring Boot, Node.js, REST APIs' },
      { icon: '📱', title: 'Mobile Development',            desc: 'React Native / Expo cross-platform applications for iOS & Android' },
      { icon: '☁️', title: 'DevOps & Cloud',               desc: 'Docker, Railway, Google Cloud, Firebase, CI/CD pipelines, Netlify' },
      { icon: '🗄️', title: 'Architecture & Design',        desc: 'Microservices, GoF patterns, RESTful, MVC, Agile/Scrum' },
    ];
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => this.initCanvas());
    this.typeWriter();
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resize(canvas);
    window.addEventListener('resize', () => this.resize(canvas));
    this.shots = Array.from({ length: 4 }, () => ({ x:0, y:0, len:0, speed:0, angle: Math.PI/4, alpha:0, active:false }));
    this.loop(canvas);
  }

  private resize(canvas: HTMLCanvasElement) {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    const count = Math.floor((canvas.width * canvas.height) / 3800);
    this.stars = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.3, alpha: Math.random(),
      tDir: Math.random() > 0.5 ? 1 : -1, tSpeed: Math.random() * 0.009 + 0.003,
    }));
  }

  private loop(canvas: HTMLCanvasElement) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const s of this.stars) {
      s.alpha += s.tDir * s.tSpeed;
      if (s.alpha >= 1) { s.alpha = 1; s.tDir = -1; }
      if (s.alpha <= 0) { s.alpha = 0; s.tDir =  1; }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
      ctx.fill();
    }

    for (const sh of this.shots) {
      if (!sh.active) {
        if (Math.random() < 0.0015) {
          Object.assign(sh, { active:true, x: Math.random()*canvas.width*0.75,
            y: Math.random()*canvas.height*0.3, len: Math.random()*140+60,
            speed: Math.random()*5+3, alpha:1 });
        }
      } else {
        sh.x += sh.speed * Math.cos(sh.angle);
        sh.y += sh.speed * Math.sin(sh.angle);
        sh.alpha -= 0.016;
        if (sh.alpha <= 0) { sh.active = false; continue; }
        const g = ctx.createLinearGradient(sh.x, sh.y,
          sh.x - sh.len*Math.cos(sh.angle), sh.y - sh.len*Math.sin(sh.angle));
        g.addColorStop(0, `rgba(255,255,255,${sh.alpha})`);
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.beginPath(); ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(sh.x-sh.len*Math.cos(sh.angle), sh.y-sh.len*Math.sin(sh.angle));
        ctx.strokeStyle = g; ctx.lineWidth = 1.5; ctx.stroke();
      }
    }
    this.animId = requestAnimationFrame(() => this.loop(canvas));
  }

  private typeWriter() {
    const current = this.phrases[this.phraseIdx % this.phrases.length];
    if (this.deleting) { this.typewriterText = current.substring(0, this.charIdx - 1); this.charIdx--; }
    else               { this.typewriterText = current.substring(0, this.charIdx + 1); this.charIdx++; }

    if (!this.deleting && this.charIdx === current.length) {
      this.typeTimeout = setTimeout(() => { this.deleting = true; this.typeWriter(); }, 2200);
      return;
    }
    if (this.deleting && this.charIdx === 0) {
      this.deleting = false;
      this.phraseIdx = (this.phraseIdx + 1) % this.phrases.length;
    }
    this.typeTimeout = setTimeout(() => this.typeWriter(), this.deleting ? 55 : 95);
  }

  downloadResume() {
    const a = document.createElement('a');
    a.href = 'assets/MacResume.pdf';
    a.setAttribute('download', 'MacRoySimen_Resume.pdf');
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animId);
    if (this.typeTimeout) clearTimeout(this.typeTimeout);
  }
}
