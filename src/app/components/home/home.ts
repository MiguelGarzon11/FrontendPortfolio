import { Component, OnInit } from '@angular/core';
import { Skills } from "../skills/skills";
import { Projects } from '../projects/projects';
import { Card } from "../../shared/components/card/card";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Skills, Projects, Card],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
}

