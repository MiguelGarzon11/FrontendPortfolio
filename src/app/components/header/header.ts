import { Component, Inject, PLATFORM_ID} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isDark = false; 

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { 
    if (isPlatformBrowser(this.platformId)) {
      const theme = localStorage.getItem('hs_theme');
      this.isDark = theme === 'dark';
      this.applyTheme();
    }
  }

  onThemeToggle() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDark = !this.isDark;
      localStorage.setItem('hs_theme', this.isDark ? 'dark' : 'light');
      this.applyTheme();
    }
  }

  private applyTheme() {
  if (isPlatformBrowser(this.platformId)) {
      const html = document.documentElement;
      if (this.isDark) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    }
  }
}
