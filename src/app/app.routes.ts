import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Skills } from './components/skills/skills';
import { Contactme } from './components/contactme/contactme';
import { Projects } from './components/projects/projects';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'contactme', component: Contactme },
    { path: 'skills', component: Skills },
    { path: "projects", component: Projects },
    { path: '**', redirectTo: '' }, // Redirect any unknown paths to Home
];