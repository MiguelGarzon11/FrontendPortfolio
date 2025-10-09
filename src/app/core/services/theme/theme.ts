import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Theme {
  private readonly storageKey = 'theme';
  private isDarkMode = false;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    this.initTheme();
  }

  private initTheme(): void {
    if (!this.isBrowser) return; // Evita errores en SSR

    const savedTheme = localStorage.getItem(this.storageKey);

    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    this.applyTheme();
  }

  private applyTheme(): void {
    if (!this.isBrowser) return;

    const htmlElement = document.documentElement;

    if (this.isDarkMode) {
      htmlElement.classList.add('dark');
      localStorage.setItem(this.storageKey, 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem(this.storageKey, 'light');
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  get currentTheme(): 'dark' | 'light' {
    return this.isDarkMode ? 'dark' : 'light';
  }

}
