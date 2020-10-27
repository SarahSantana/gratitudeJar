import { Component } from '@angular/core';

@Component({
  selector: 'app-add-new-gratitude',
  templateUrl: './add-new-gratitude.component.html',
  styleUrls: ['./add-new-gratitude.component.scss']
})
export class AddNewGratitudeComponent {

  isOpenModal = false;

  openModal(): void {
    this.isOpenModal = true;
  }
}
