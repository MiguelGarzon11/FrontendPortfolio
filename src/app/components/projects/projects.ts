import { Component } from '@angular/core';
import { Card } from "../../shared/components/card/card";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [Card],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

}
