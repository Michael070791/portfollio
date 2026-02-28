import { Component, input } from '@angular/core';
import { PublicationEntry } from '../../types/portfolio.types';

@Component({
  selector: 'app-publications-section',
  imports: [],
  templateUrl: './publications-section.html',
  styleUrl: './publications-section.scss',
})
export class PublicationsSectionComponent {
  readonly items = input.required<PublicationEntry[]>();
}
