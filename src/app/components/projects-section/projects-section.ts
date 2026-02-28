import { Component, input } from '@angular/core';
import { ProjectCaseStudy } from '../../types/portfolio.types';
import { getLinkRel, getLinkTarget } from '../../utils/link.utils';

@Component({
  selector: 'app-projects-section',
  imports: [],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSectionComponent {
  readonly projects = input.required<ProjectCaseStudy[]>();
  protected readonly linkRel = getLinkRel;
  protected readonly linkTarget = getLinkTarget;
}
