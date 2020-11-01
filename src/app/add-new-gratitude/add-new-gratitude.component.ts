import { Component } from '@angular/core';
import { ModalService } from '../shared/modal/modal.service';

@Component({
  selector: 'app-add-new-gratitude',
  templateUrl: './add-new-gratitude.component.html',
  styleUrls: ['./add-new-gratitude.component.scss']
})
export class AddNewGratitudeComponent {

  constructor(
    private modalService: ModalService
  ) { }

  openModal(): void {
    this.modalService.toggle(true, 'ModalNewGratitude');
  }
}
