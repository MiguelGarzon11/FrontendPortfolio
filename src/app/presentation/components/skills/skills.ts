import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Tarjet } from '../../shared/components/tarjet/tarjet';
import { TarjetDTO } from '../../../domain/dto/tarjetDTO';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, Tarjet],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {

  description: string = 'Languages, tools, and libraries that are part of my hands-on experience in professional software development.'
  
  icons = [
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
    'astro',
    'kotlin'
  ];
  
  private iconsB: string[] = ['python', 'postgres', 'aws', 'fastapi', 'node'];
  
  private iconsF: string[] = [
    'angular',
    'tailwind',
    'html',
    'css',
    'react',
    'javascript',
    'typescript',
    'astro'
  ];
  
  private iconsT: string[] = ['github', 'git', 'docker', 'linux'];
  
  private iconsA: string[] = ['kotlin', 'androidstudio']

  tarjets: TarjetDTO[] = [
    { title: 'Android', icons: this.iconsA, description: 'Software development for smart terminals (POS) and mobile devices using modern languages.' },
    { title: 'Frontend', icons: this.iconsF, description: 'Creation of modern and dynamic web components, applied to functional and responsive user interfaces.' },
    { title: 'Backend', icons: this.iconsB, description: 'Experience building robust services, APIs, and database management.' },
    { title: 'Tools', icons: this.iconsT, description: 'Experience using essential development tools, version control, and Unix/Linux environments.' }
  ]
}
