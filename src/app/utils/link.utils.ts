export function isExternalLink(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

export function getLinkTarget(href: string): '_blank' | null {
  return isExternalLink(href) ? '_blank' : null;
}

export function getLinkRel(href: string): 'noreferrer noopener' | null {
  return isExternalLink(href) ? 'noreferrer noopener' : null;
}
