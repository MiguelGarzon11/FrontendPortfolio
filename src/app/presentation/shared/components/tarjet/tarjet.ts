import { Component, Input } from '@angular/core';
import { Label } from '../label/label';

@Component({
  selector: 'app-tarjet',
  standalone: true,
  imports: [],
  templateUrl: './tarjet.html',
  styleUrl: './tarjet.css'
})
export class Tarjet {
  @Input() title: string = '';
  @Input() icons: string[] = [];
  @Input() description: string = '';

  tools: string[] = []
}
