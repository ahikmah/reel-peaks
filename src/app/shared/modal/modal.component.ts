import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  constructor(public modal: ModalService) {
    console.log('ModalComponent.constructor()', this.modal.isModalOpen());
  }

  ngOnInit(): void {}
}
