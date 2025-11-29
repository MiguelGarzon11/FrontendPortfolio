import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Theme } from '../../../core/services/theme/theme';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isOpen = false;

  constructor(private theme: Theme, private router: Router) { }

  onOpen() {
    this.isOpen = !this.isOpen;
  }

  toggleTheme() {
    this.theme.toggleTheme();
  }

  currentTheme(): 'dark' | 'light' {
    return this.theme.currentTheme;
  }

  scrollTo(section: string) {
    this.router.navigate(['/'], { fragment: section });
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  goHome() {
    this.router.navigate(['/']);
  }


}
