import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() title!: string;
  @Input() description!: string;
  @Input() technologies!: string[];

  @Output() openModal = new EventEmitter<any>();

  onCardClick() {
    this.openModal.emit({ title: this.title, description: this.description, technologies: this.technologies });
  }

}
