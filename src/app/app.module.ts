import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddNewGratitudeModule } from './add-new-gratitude/add-new-gratitude.component.module';
import { ModalService } from './shared/modal/modal.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AddNewGratitudeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
