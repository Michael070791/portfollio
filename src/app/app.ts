import { DOCUMENT } from '@angular/common';
import { afterNextRender, Component, DestroyRef, inject, signal } from '@angular/core';
import { ContactSectionComponent } from './components/contact-section/contact-section';
import { EducationSectionComponent } from './components/education-section/education-section';
import { ExperienceSectionComponent } from './components/experience-section/experience-section';
import { FooterComponent } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { ProjectsSectionComponent } from './components/projects-section/projects-section';
import { PublicationsSectionComponent } from './components/publications-section/publications-section';
import { SkillsSectionComponent } from './components/skills-section/skills-section';
import { portfolioProfile } from './data/portfolio.data';
import { NavigationItem, SectionId } from './types/portfolio.types';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    PublicationsSectionComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly profile = portfolioProfile;
  protected readonly navItems: NavigationItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' },
  ];
  protected readonly activeSection = signal<SectionId>('home');
  protected readonly isHeaderScrolled = signal(false);

  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      this.trackScrollState();
      void this.initAnimations();
    });
  }

  private trackScrollState(): void {
    if (typeof window === 'undefined') {
      return;
    }

    let frameId: number | null = null;

    const updateScrollState = () => {
      this.isHeaderScrolled.set(window.scrollY > 16);
      this.updateActiveSectionFromScroll();
      frameId = null;
    };

    const requestUpdate = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScrollState);
    };

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    });
  }

  private updateActiveSectionFromScroll(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const sections = this.navItems
      .map(({ id }) => this.document.getElementById(id))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (!sections.length) {
      return;
    }

    const anchorOffset = Math.min(Math.max(window.innerHeight * 0.28, 140), 260);
    let currentSection = sections[0];

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= anchorOffset) {
        currentSection = section;
      } else {
        break;
      }
    }

    const lastSection = sections.at(-1);

    if (
      lastSection &&
      window.innerHeight + window.scrollY >= this.document.documentElement.scrollHeight - 2
    ) {
      currentSection = lastSection;
    }

    this.activeSection.set(currentSection.id as SectionId);
  }

  private async initAnimations(): Promise<void> {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const { default: AOS } = await import('aos');

    AOS.init({
      duration: 700,
      offset: 90,
      once: true,
      easing: 'ease-out-cubic',
    });
  }
}
