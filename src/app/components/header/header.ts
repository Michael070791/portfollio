import { Component, computed, input } from '@angular/core';
import { NavigationItem, PortfolioProfile, SectionId } from '../../types/portfolio.types';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  readonly profile = input.required<PortfolioProfile>();
  readonly navItems = input.required<NavigationItem[]>();
  readonly activeSection = input.required<SectionId>();
  readonly isScrolled = input(false);
  protected readonly initials = computed(() =>
    this.profile()
      .displayName.split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 3)
      .toUpperCase(),
  );
}
