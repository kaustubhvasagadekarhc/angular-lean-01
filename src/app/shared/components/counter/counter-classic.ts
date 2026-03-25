import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-classic',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class CounterClassic implements OnInit {
  // @Input: receive data from parent
  @Input({ required: true }) initialValue!: number;
  @Input() step: number = 1; // default step is 1

  // @Output: send data to parent via EventEmitter
  @Output() countChange = new EventEmitter<number>();

  count = 0;

  ngOnInit() {
    this.count = this.initialValue;
  }

  increment() {
    this.count += this.step;
    this.countChange.emit(this.count);
  }

  decrement() {
    this.count -= this.step;
    this.countChange.emit(this.count);
  }
}
