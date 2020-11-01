import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ModalService {

  private toggleModalSubject = new Subject<{open: boolean, modalName: string}>();
  toggleModal$: Observable<{open: boolean, modalName: string}> = this.toggleModalSubject.asObservable();

  toggle(isOpen: boolean, modalName: string): void {
    this.toggleModalSubject.next({ open: isOpen, modalName });
  }

}
