import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  icons: string[] = [
    'angular',
    'tailwind',
    'html',
    'css',
    'python',
    'git',
    'react',
    'docker',
    'javascript',
    'typescript',
    'sql'
  ];
}
