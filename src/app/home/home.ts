import { Component, signal } from '@angular/core';
import { EditModal } from '../components/edit-modal/edit-modal';

@Component({
  selector: 'app-home',
  imports: [EditModal],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  displayText = signal('Click me to edit this text!');
  isModalOpen = signal(false);

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
