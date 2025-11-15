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
  text = "Systems Engineering student with experience in full-stack development, UI/UX design, API integration and database management. Focused on building modern, scalable and user-centered applications using clean architecture, best practices and version control."
}

