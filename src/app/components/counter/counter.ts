import { Component, input, output, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  // Input: receive data from parent
  initialValue = input.required<number>();
  step = input<number>(1); // default step is 1

  // Output: send data to parent
  countChange = output<number>();

  count = 0;

  ngOnInit() {
    this.count = this.initialValue();
  }

  increment() {
    this.count += this.step();
    this.countChange.emit(this.count); // send new count to parent
  }

  decrement() {
    this.count -= this.step();
    this.countChange.emit(this.count); // send new count to parent
  }
}
