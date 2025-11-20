import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Label } from '../../../../shared/components/label/label';

@Component({
  selector: 'app-info-project',
  standalone: true,
  imports: [Label],
  templateUrl: './info-project.html',
  styleUrl: './info-project.css',
})
export class InfoProject {
  @Input() visible = false;
  @Input() data: any = {};

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
