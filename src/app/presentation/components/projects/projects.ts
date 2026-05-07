import { Component } from '@angular/core';
import { Card } from '../../shared/components/card/card';
import { ProjectDTO } from '@/app/domain/dto/projectDTO';
import { TypePlatform } from '@/app/domain/dto/projectDTO';
import { Label } from '../../shared/components/label/label';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [Card, Label],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  public Platform = TypePlatform;

  projects: ProjectDTO[] = [
    { title: 'Vaultly', description: 'Vaultly te permite registrar tus gastos, planificar tu dinero y visualizar todo con claridad en un solo lugar.', tech: ['astro', 'typescript', 'tailwind', 'aws', 'postgres'], url: 'vaultlyc.vercel.app', type: TypePlatform.Web, github: 'github.com/mgarzondev/Vaultly', tag: 'Personal finances, clear accounts, secure life' }
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
