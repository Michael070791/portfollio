import { Component, computed, input } from '@angular/core';

type SkillIconKey =
  | 'react'
  | 'nextjs'
  | 'codeigniter'
  | 'xamarin'
  | 'dotnet'
  | 'mysql'
  | 'postgresql'
  | 'mongodb'
  | 'firebase'
  | 'redis'
  | 'azure'
  | 'vercel'
  | 'docker'
  | 'kubernetes'
  | 'azuredevops'
  | 'terraform'
  | 'git'
  | 'bitbucket'
  | 'linux'
  | 'craftsmanship'
  | 'adaptability'
  | 'default';

const skillIconMap: Record<string, SkillIconKey> = {
  React: 'react',
  'Next.js': 'nextjs',
  CodeIgniter: 'codeigniter',
  'Xamarin Forms': 'xamarin',
  '.NET MAUI': 'dotnet',
  'C#': 'dotnet',
  '.NET Core': 'dotnet',
  '.NET 8 APIs': 'dotnet',
  MySQL: 'mysql',
  PostgreSQL: 'postgresql',
  MongoDB: 'mongodb',
  Firebase: 'firebase',
  Redis: 'redis',
  'Azure App Services': 'azure',
  'Azure VMs': 'azure',
  'Azure Container Services': 'azure',
  Vercel: 'vercel',
  Docker: 'docker',
  Kubernetes: 'kubernetes',
  'Azure DevOps CI/CD': 'azuredevops',
  'Containerized Delivery': 'docker',
  Terraform: 'terraform',
  Git: 'git',
  Bitbucket: 'bitbucket',
  'Azure DevOps Boards': 'azuredevops',
  'Azure DevOps Repos': 'azuredevops',
  Linux: 'linux',
  Omarchy: 'linux',
  CachyOS: 'linux',
  'Software Craftsmanship': 'craftsmanship',
  'Adaptable to New Technologies': 'adaptability',
};

@Component({
  selector: 'app-skill-icon',
  template: `
    @switch (iconKey()) {
      @case ('react') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="2.2" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" fill="none" stroke="currentColor" stroke-width="1.7" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.8"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.8"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            transform="rotate(120 12 12)"
          />
        </svg>
      }
      @case ('nextjs') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7" />
          <path d="M9 8.2v7.6l6-7.6v7.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      }
      @case ('codeigniter') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M14.7 3.5c-3.4.8-6.2 4.1-6.2 7.9 0 1.5.4 2.9 1.2 4.1-2-.2-4-1.4-5.2-3.2.4 5 4.1 8.6 8.7 8.6 4.2 0 7.7-3.1 8.5-7.2-1.7 1.2-4 1.7-6.1 1.3 2.8-1.9 4.3-5.2 3.6-8.5-.7 1.2-2.5 2.4-4.5 2.6.8-1.8.8-3.9 0-5.6Z"
          />
        </svg>
      }
      @case ('xamarin') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M6.2 5h3.1l2.7 4 2.8-4h3l-4.2 6.1L18.2 18H15l-3-4.4L9 18H5.8l4.7-6.9L6.2 5Z"
          />
        </svg>
      }
      @case ('dotnet') {
        <span class="skill-icon__text">.NET</span>
      }
      @case ('mysql') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <ellipse cx="12" cy="6" rx="6.6" ry="2.8" />
          <path d="M5.4 6v4.2c0 1.6 3 2.8 6.6 2.8s6.6-1.2 6.6-2.8V6" fill="none" stroke="currentColor" stroke-width="1.7" />
          <path d="M5.4 10.2v4.2c0 1.6 3 2.8 6.6 2.8s6.6-1.2 6.6-2.8v-4.2" fill="none" stroke="currentColor" stroke-width="1.7" />
          <path d="M5.4 14.4v3.1c0 1.6 3 2.8 6.6 2.8s6.6-1.2 6.6-2.8v-3.1" fill="none" stroke="currentColor" stroke-width="1.7" />
        </svg>
      }
      @case ('postgresql') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 3.8c-3.4 0-6.1 2.7-6.1 6.2v4.6c0 2 1.2 3.1 2.8 3.1.7 0 1.3-.2 1.8-.5v3.2h2.3v-5.5c0-.8-.5-1.5-1.3-1.7l-1.1-.3v-.8c.5.2 1 .4 1.6.4 2.7 0 4.8-2.1 4.8-4.9 0-2.2-1.6-3.8-4.8-3.8Zm-.1 2.1c1.2 0 2 .6 2 1.7 0 1.4-.8 2.6-2 2.6-.6 0-1.2-.2-1.6-.5V7.7c0-1.2.7-1.8 1.6-1.8Z"
          />
        </svg>
      }
      @case ('mongodb') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3.2c2.2 2.6 3.6 5.5 3.6 9.2 0 3.9-1.6 6.7-3.6 8.4-2-1.7-3.6-4.5-3.6-8.4 0-3.7 1.4-6.6 3.6-9.2Z" />
          <path d="M12 5.1v13.7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      }
      @case ('firebase') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 18.8 4.2-13.7c.1-.4.6-.5.8-.1l2.2 4.1-7.2 9.7Z" />
          <path d="m6.7 18.9 9.9-17c.2-.4.8-.2.8.2l-1.3 14.2-9.4 2.6Z" opacity=".75" />
          <path d="m6.8 18.9 14.1-5.6c.4-.2.4-.7 0-.9l-3.6-2.1-10.5 8.6Z" opacity=".55" />
        </svg>
      }
      @case ('redis') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m5.2 7.6 6.8-2.5 6.8 2.5-6.8 2.5-6.8-2.5Z" />
          <path d="m5.2 12 6.8-2.5 6.8 2.5-6.8 2.5L5.2 12Z" opacity=".75" />
          <path d="m5.2 16.4 6.8-2.5 6.8 2.5-6.8 2.5-6.8-2.5Z" opacity=".55" />
        </svg>
      }
      @case ('azure') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.4 3 5.6 16.5h4.8L18.4 3h-5Z" />
          <path d="M13.1 10.7 18.5 21H9.6l3.5-10.3Z" opacity=".8" />
        </svg>
      }
      @case ('vercel') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 4 20 18H4L12 4Z" />
        </svg>
      }
      @case ('docker') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5.2 11.2h2.6v2H5.2zM8.1 11.2h2.6v2H8.1zM11 11.2h2.6v2H11zM8.1 8.8h2.6v2H8.1zM11 8.8h2.6v2H11zM13.9 8.8h2.6v2h-2.6z" />
          <path
            d="M19.3 11.7c-.5-.3-1.2-.4-1.8-.3.1-.8-.1-1.5-.7-2l-.5-.4-.3.6c-.3.6-.3 1.3-.1 2-.2.1-.4.1-.7.1H4.4c0 4.4 2.2 6.4 6.3 6.4 3.2 0 5.4-1.5 6.5-4.3 1.1.1 2.1-.4 2.8-1.4l.4-.6-.7-.1Z"
          />
        </svg>
      }
      @case ('kubernetes') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4.4" fill="none" stroke="currentColor" stroke-width="1.7" />
          <path d="M12 3.8v3M12 17.2v3M3.8 12h3M17.2 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M17.7 6.3l-2.1 2.1M8.4 15.6l-2.1 2.1" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
        </svg>
      }
      @case ('azuredevops') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.3 6.1 4.2 8.6v6.8l4.1 2.5 6.8-2.8V8.9L8.3 6.1Z" opacity=".75" />
          <path d="m10.3 5 8 2.3v9.4l-8 2.3-2.9-3.7V8.7L10.3 5Z" />
        </svg>
      }
      @case ('terraform') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 5.2 10.2 8v6L5 11.2v-6Z" />
          <path d="M10.8 8 16 10.8v6l-5.2-2.8V8Z" opacity=".78" />
          <path d="M10.8 14.8 16 17.6V23l-5.2-2.8v-5.4Z" opacity=".58" />
          <path d="M16.6 10.8 21 13.2v5.4l-4.4-2.4v-5.4Z" opacity=".9" />
        </svg>
      }
      @case ('git') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m12 3.6 8.4 8.4L12 20.4 3.6 12 12 3.6Z" />
          <path d="M9.4 9.3a1.6 1.6 0 1 0 1.5 2.1v2.3a1.6 1.6 0 1 0 1.7 0v-2.3a1.6 1.6 0 1 0-1.7-1.5V8.1" fill="none" stroke="#07131f" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      }
      @case ('bitbucket') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.2 5h15.6l-1.5 10.2a2.3 2.3 0 0 1-2.2 1.9H8a2.3 2.3 0 0 1-2.2-1.9L4.2 5Z" />
          <path d="M8.5 10.1h7.1l-.8 4.2H9.3l-.8-4.2Z" opacity=".55" />
        </svg>
      }
      @case ('linux') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 4.2c2 0 3.5 1.8 3.5 4.1 0 1.3-.4 2.3-1.2 3.2.9.7 1.8 1.9 1.8 3.7 0 2.5-1.8 4.6-4.1 4.6-2.3 0-4.1-2.1-4.1-4.6 0-1.8.9-3 1.8-3.7-.8-.9-1.2-1.9-1.2-3.2 0-2.3 1.5-4.1 3.5-4.1Z" />
          <circle cx="10.5" cy="8.3" r=".8" fill="#07131f" />
          <circle cx="13.5" cy="8.3" r=".8" fill="#07131f" />
        </svg>
      }
      @case ('craftsmanship') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m12 3.8 2 4.1 4.5.6-3.2 3.2.8 4.5-4.1-2.2-4.1 2.2.8-4.5-3.2-3.2 4.5-.6 2-4.1Z" />
        </svg>
      }
      @case ('adaptability') {
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 4.3a7.7 7.7 0 1 1-7.7 7.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
          <path d="M4.8 5.5v4.3h4.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      }
      @default {
        <span class="skill-icon__text">{{ fallbackText() }}</span>
      }
    }
  `,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: 1.2rem;
      block-size: 1.2rem;
      color: #d8deea;
      flex: none;
    }

    :host([data-icon='react']) { color: #61dafb; }
    :host([data-icon='nextjs']) { color: #f5f7fb; }
    :host([data-icon='codeigniter']) { color: #ef6b3d; }
    :host([data-icon='xamarin']) { color: #3a7dff; }
    :host([data-icon='dotnet']) { color: #8a73ff; }
    :host([data-icon='mysql']) { color: #3c8bbd; }
    :host([data-icon='postgresql']) { color: #6ea7d7; }
    :host([data-icon='mongodb']) { color: #6cc36b; }
    :host([data-icon='firebase']) { color: #ffbf47; }
    :host([data-icon='redis']) { color: #ff6a6a; }
    :host([data-icon='azure']) { color: #54a6ff; }
    :host([data-icon='vercel']) { color: #f5f7fb; }
    :host([data-icon='docker']) { color: #4fa6ff; }
    :host([data-icon='kubernetes']) { color: #5f8cff; }
    :host([data-icon='azuredevops']) { color: #4f8cff; }
    :host([data-icon='terraform']) { color: #9d7bff; }
    :host([data-icon='git']) { color: #ff8757; }
    :host([data-icon='bitbucket']) { color: #4f88ff; }
    :host([data-icon='linux']) { color: #d9dde5; }
    :host([data-icon='craftsmanship']) { color: #f0b25c; }
    :host([data-icon='adaptability']) { color: #53c36f; }

    svg {
      inline-size: 100%;
      block-size: 100%;
      fill: currentColor;
    }

    .skill-icon__text {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-inline-size: 1.2rem;
      font-size: 0.5rem;
      font-weight: 800;
      letter-spacing: 0.02em;
      line-height: 1;
      white-space: nowrap;
    }
  `,
  host: {
    '[attr.data-icon]': 'iconKey()',
  },
})
export class SkillIconComponent {
  readonly label = input.required<string>();

  protected readonly iconKey = computed(() => skillIconMap[this.label()] ?? 'default');
  protected readonly fallbackText = computed(() => {
    const explicitText: Record<string, string> = {
      Omarchy: 'OM',
      CachyOS: 'CA',
      'Software Craftsmanship': 'SC',
      'Adaptable to New Technologies': 'AD',
    };

    return (
      explicitText[this.label()] ??
      this.label()
        .replace(/[^A-Za-z0-9.+#]/g, ' ')
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part[0])
        .join('')
        .toUpperCase()
    );
  });
}
