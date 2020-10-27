import { NgModule } from '@angular/core';
import { AddNewGratitudeComponent } from './add-new-gratitude.component';
import { ModalNewGratitudeComponent } from './modal-new-gratitude/modal-new-gratitude.component';

@NgModule({
  declarations: [
    AddNewGratitudeComponent,
    ModalNewGratitudeComponent,
  ],
  exports: [
    AddNewGratitudeComponent
  ]
})
export class AddNewGratitudeModule { }
