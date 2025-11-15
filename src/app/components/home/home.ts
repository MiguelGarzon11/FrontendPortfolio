import { Component, OnInit } from '@angular/core';
import { Skills } from "../skills/skills";
import { Projects } from '../projects/projects';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Skills, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  text = "Systems Engineering student with experience in UI/UX design, API integration, backend development, and database management. Focused on developing modern, scalable, and user-centric applications, applying clean architecture, best practices, and version control."
}

