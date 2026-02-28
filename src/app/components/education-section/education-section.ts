import { Component, input } from '@angular/core';
import { EducationEntry } from '../../types/portfolio.types';

@Component({
  selector: 'app-education-section',
  imports: [],
  templateUrl: './education-section.html',
  styleUrl: './education-section.scss',
})
export class EducationSectionComponent {
  readonly items = input.required<EducationEntry[]>();
}
