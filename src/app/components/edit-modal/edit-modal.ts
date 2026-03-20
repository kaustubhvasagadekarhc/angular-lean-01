import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.html',
  styleUrl: './edit-modal.css',
})
export class EditModal {
  text = input.required<string>();
  textChange = output<string>();
  close = output<void>();

  onInput(value: string) {
    this.textChange.emit(value);
  }

  onSave() {
    this.close.emit();
  }
}
