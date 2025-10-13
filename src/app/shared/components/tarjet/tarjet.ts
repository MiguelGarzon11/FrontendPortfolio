import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjet',
  standalone: true,
  imports: [],
  templateUrl: './tarjet.html',
  styleUrl: './tarjet.css'
})
export class Tarjet {
  @Input() title = '';
}
