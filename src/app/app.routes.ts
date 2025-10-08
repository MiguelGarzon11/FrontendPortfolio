import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contactme', loadComponent: () => import('./components/contactme/contactme') },
  { path: 'skills', component: Skills },
  { path: "projects", component: Projects },
  { path: '**', redirectTo: '' }, // Redirect any unknown paths to Home
];
