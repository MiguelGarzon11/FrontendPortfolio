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
}

