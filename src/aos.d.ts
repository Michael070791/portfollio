declare module 'aos' {
  interface AosOptions {
    duration?: number;
    easing?: string;
    offset?: number;
    once?: boolean;
  }

  interface AosStatic {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const AOS: AosStatic;
  export default AOS;
}
