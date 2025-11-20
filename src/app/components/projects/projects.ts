import { Component } from '@angular/core';
import { Card } from '../../shared/components/card/card';
import { InfoProject } from '../skills/components/info-project/info-project';
import { title } from 'process';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [Card, InfoProject],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  projects = [
    {id: 1, title: 'Vaultly', description: 'Vaultly te permite registrar tus gastos, planificar tu dinero y visualizar todo con claridad en un solo lugar.', technologies: ['astro', 'typeScript', 'tailwind', 'aws', 'postgres' ]},
  ]

  modalVisible: boolean = false;
  modalData: any = {};

  openProjectModal(project: any) {
    this.modalData = project;
    this.modalVisible = true;
  }

  closeModal() {
      this.modalVisible = false;
      this.modalData = null;
    }

}
