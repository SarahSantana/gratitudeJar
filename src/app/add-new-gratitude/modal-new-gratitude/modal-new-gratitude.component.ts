import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Component({
  selector: 'app-modal-new-gratitude',
  templateUrl: './modal-new-gratitude.component.html',
  styleUrls: ['./modal-new-gratitude.component.scss']
})
export class ModalNewGratitudeComponent implements OnInit {

  modalName = 'ModalNewGratitude';
  isOpen = false;

  subscriptions = new Subscription();

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.initEventListener();
  }

  private initEventListener(): void {
    this.subscriptions.add(
      this.modalService.toggleModal$
        .subscribe((modal: {open: boolean, modalName: string}) => {
          if (modal.modalName === this.modalName) {
            this.isOpen = modal.open;
          }
        })
    );
  }

  closeModal(): void {
    this.modalService.toggle(false, this.modalName);
  }
}
