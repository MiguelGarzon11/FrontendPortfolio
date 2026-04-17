import { Card } from './../../../../shared/components/card/card';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-maincard',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './maincard.html',
  styleUrl: './maincard.css'
})
export class Maincard {

  text1 = "${";
  text2 = "}";

  print() {
    console.log(`${this.text1}`)
  }
}
