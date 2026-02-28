import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the portfolio headline and name', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Software Engineer Designing Research-Driven, Cloud-Native Systems',
    );
    expect(compiled.textContent).toContain('Alhassan Michael Araphat (MSc.)');
  });

  it('should expose stable section anchors', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const main = compiled.querySelector('main') as HTMLElement;
    const ids = Array.from(main.children)
      .filter((element) => element.classList.contains('page-section'))
      .map((section) => section.getAttribute('id'));

    expect(ids).toEqual([
      'home',
      'experience',
      'education',
      'skills',
      'projects',
      'publications',
      'contact',
    ]);
  });

  it('should render the configured profile image', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const profileImage = compiled.querySelector('.site-rail__portrait-image') as HTMLImageElement | null;
    expect(profileImage).not.toBeNull();
    expect(profileImage?.getAttribute('src')).toContain('images/mike.jpeg');
  });

  it('should render the provided GitHub and LinkedIn links', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const githubLink = compiled.querySelector('a[href="https://github.com/Michael070791"]');
    const linkedInLink = compiled.querySelector(
      'a[href="https://www.linkedin.com/in/alhassan-michael-8ab0b8118/"]',
    );

    expect(githubLink).not.toBeNull();
    expect(githubLink?.getAttribute('target')).toBe('_blank');
    expect(linkedInLink).not.toBeNull();
  });

  it('should render the education and publications sections', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain("Master's degree, Computer Engineering");
    expect(compiled.textContent).toContain('Publication details coming soon');
  });

  it('should render skill icons for the technology list', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-skill-icon').length).toBeGreaterThan(10);
  });
});
