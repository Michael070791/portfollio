import { Component, input } from '@angular/core';
import { SkillIconComponent } from '../../shared/skill-icon/skill-icon';
import { SkillGroup } from '../../types/portfolio.types';

@Component({
  selector: 'app-skills-section',
  imports: [SkillIconComponent],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSectionComponent {
  readonly skillGroups = input.required<SkillGroup[]>();
}
