import { Injectable, signal } from '@angular/core';

export type Lang = 'en' | 'fr';

export interface BiLang<T = string> {
  en: T;
  fr: T;
}

@Injectable({ providedIn: 'root' })
export class LangService {
  lang = signal<Lang>('en');

  toggle() {
    this.lang.update(l => l === 'en' ? 'fr' : 'en');
  }

  /** Pick the value for the current language */
  t<T>(val: BiLang<T>): T {
    return this.lang() === 'en' ? val.en : val.fr;
  }
}
