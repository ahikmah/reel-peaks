import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() {}

  register(id: string): void {
    this.modals.push({ id, visible: false });
  }

  unRegister(id: string): void {
    this.modals = this.modals.filter((el) => el.id !== id);
  }

  isModalOpen(id: string): boolean {
    return Boolean(this.modals.find((el) => el.id === id)?.visible);
  }

  toggleModal(id: string): void {
    const modal = this.modals.find((el) => el.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
