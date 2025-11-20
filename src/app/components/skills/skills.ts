import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Tarjet } from '../../shared/components/tarjet/tarjet';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, Tarjet],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
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
    'postgres',
    'fastapi',
    'linux',
    'node',
  ];

  iconsB: string[] = ['python', 'postgres', 'aws', 'fastapi', 'node'];

  iconsF: string[] = [
    'angular',
    'tailwind',
    'html',
    'css',
    'react',
    'javascript',
    'typescript',
  ];

  iconsT: string[] = ['github', 'git', 'docker', 'linux'];
}
