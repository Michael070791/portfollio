import { Component, input } from '@angular/core';
import { PublicationEntry } from '../../types/portfolio.types';
import { getLinkRel, getLinkTarget } from '../../utils/link.utils';

@Component({
  selector: 'app-publications-section',
  imports: [],
  templateUrl: './publications-section.html',
  styleUrl: './publications-section.scss',
})
export class PublicationsSectionComponent {
  readonly items = input.required<PublicationEntry[]>();
  readonly researchInterests = input.required<string[]>();
  protected readonly linkRel = getLinkRel;
  protected readonly linkTarget = getLinkTarget;
}
