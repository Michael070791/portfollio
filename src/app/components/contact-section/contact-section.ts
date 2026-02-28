import { Component, input } from '@angular/core';
import { PortfolioProfile } from '../../types/portfolio.types';
import { SocialIconComponent } from '../../shared/social-icon/social-icon';
import { getLinkRel, getLinkTarget } from '../../utils/link.utils';

@Component({
  selector: 'app-contact-section',
  imports: [SocialIconComponent],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSectionComponent {
  readonly profile = input.required<PortfolioProfile>();
  protected readonly linkRel = getLinkRel;
  protected readonly linkTarget = getLinkTarget;
}
