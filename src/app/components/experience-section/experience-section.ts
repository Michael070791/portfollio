import { Component, input } from '@angular/core';
import { ExperienceEntry, HeroStat } from '../../types/portfolio.types';

@Component({
  selector: 'app-experience-section',
  imports: [],
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.scss',
})
export class ExperienceSectionComponent {
  readonly summary = input.required<string>();
  readonly metrics = input.required<HeroStat[]>();
  readonly items = input.required<ExperienceEntry[]>();
}
