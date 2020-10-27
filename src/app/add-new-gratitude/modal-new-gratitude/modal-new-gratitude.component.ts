import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-new-gratitude',
  templateUrl: './modal-new-gratitude.component.html',
  styleUrls: ['./modal-new-gratitude.component.scss']
})
export class ModalNewGratitudeComponent {
  @Input()
  open: boolean;

  closeModal(): void {
    this.open = false;
  }
}
