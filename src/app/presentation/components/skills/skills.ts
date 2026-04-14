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
  ];
  
  private iconsT: string[] = ['github', 'git', 'docker', 'linux', 'androidstudio'];
  
  private iconsA: string[] = ['kotlin']

  tarjets: TarjetDTO[] = [
    { title: 'Android', icons: this.iconsA },
    { title: 'Frontend', icons: this.iconsF },
    { title: 'Backend', icons: this.iconsB },
    { title: 'Tools', icons: this.iconsT}
  ]
}
