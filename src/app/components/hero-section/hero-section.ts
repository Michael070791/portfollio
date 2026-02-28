import { Component, input, OnDestroy, OnInit, signal } from '@angular/core';
import { PortfolioProfile } from '../../types/portfolio.types';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  readonly profile = input.required<PortfolioProfile>();
  protected readonly typedHeadline = signal('');

  private typingTimer: number | null = null;

  ngOnInit(): void {
    this.startTypingEffect();
  }

  ngOnDestroy(): void {
    this.clearTypingTimer();
  }

  private startTypingEffect(): void {
    const headline = this.profile().headline;

    if (
      typeof window === 'undefined' ||
      typeof window.matchMedia !== 'function' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      this.typedHeadline.set(headline);
      return;
    }

    let currentLength = 0;

    const step = () => {
      currentLength += 1;
      this.typedHeadline.set(headline.slice(0, currentLength));

      if (currentLength >= headline.length) {
        this.typingTimer = null;
        return;
      }

      this.typingTimer = window.setTimeout(step, 68);
    };

    step();
  }

  private clearTypingTimer(): void {
    if (this.typingTimer !== null && typeof window !== 'undefined') {
      window.clearTimeout(this.typingTimer);
      this.typingTimer = null;
    }
  }
}
