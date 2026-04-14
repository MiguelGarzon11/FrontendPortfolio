import { Routes } from '@angular/router';
import { Home } from './presentation/components/home/home';
import { Skills } from './presentation/components/skills/skills';
import { Projects } from './presentation/components/projects/projects';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contactme', loadComponent: () => import('./presentation/components/contactme/contactme') },
  { path: 'skills', component: Skills },
  { path: "projects", component: Projects },
  { path: '**', redirectTo: '' }, // Redirect any unknown paths to Home
];
