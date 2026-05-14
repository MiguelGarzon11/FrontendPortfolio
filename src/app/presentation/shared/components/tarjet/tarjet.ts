import { Component, Input } from '@angular/core';
import { Label } from '../label/label';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tarjet',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tarjet.html',
  styleUrl: './tarjet.css'
})
export class Tarjet {
  @Input() title: string = '';
  @Input() icons: string[] = [];
  @Input() description: string = '';
  @Input() iconTarjet: string = '';

  tools: string[] = []
  isPoweredOn: boolean = true; 

  isPoweredToggle () {
    this.isPoweredOn = !this.isPoweredOn
  }
}
