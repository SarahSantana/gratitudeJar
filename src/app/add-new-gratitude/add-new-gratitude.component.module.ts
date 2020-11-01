import { NgModule } from '@angular/core';
import { ModalService } from '../shared/modal/modal.service';
import { AddNewGratitudeComponent } from './add-new-gratitude.component';
import { ModalNewGratitudeComponent } from './modal-new-gratitude/modal-new-gratitude.component';

@NgModule({
  imports: [],
  declarations: [
    AddNewGratitudeComponent,
    ModalNewGratitudeComponent,
  ],
  providers: [
    ModalService
  ],
  exports: [
    AddNewGratitudeComponent
  ]
})
export class AddNewGratitudeModule { }
