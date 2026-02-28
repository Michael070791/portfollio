import { Component, input } from '@angular/core';
import { SocialIconComponent } from '../../shared/social-icon/social-icon';
import { PortfolioProfile } from '../../types/portfolio.types';
import { getLinkRel, getLinkTarget } from '../../utils/link.utils';

@Component({
  selector: 'app-footer',
  imports: [SocialIconComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  readonly profile = input.required<PortfolioProfile>();
  protected readonly linkRel = getLinkRel;
  protected readonly linkTarget = getLinkTarget;
}
