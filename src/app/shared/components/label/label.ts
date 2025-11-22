import { TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './label.html',
  styleUrl: './label.css'
})
export class Label {

  @Input() icono!: string;

}
