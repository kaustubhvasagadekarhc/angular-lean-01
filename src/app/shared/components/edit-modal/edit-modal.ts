import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.html',
  styleUrl: './edit-modal.css',
})
export class EditModal {
  @Input({ required: true }) text!: string;
  @Output() textChange = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  onInput(value: string) {
    this.textChange.emit(value);
  }

  onSave() {
    this.close.emit();
  }
}
