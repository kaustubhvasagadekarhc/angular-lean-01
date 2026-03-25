import { Component, signal } from '@angular/core';
import { Counter } from '../../shared/components/counter/counter';
import { CounterClassic } from '../../shared/components/counter/counter-classic';

@Component({
  selector: 'app-about',
  imports: [Counter, CounterClassic],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  modernCount = signal(0);
  classicCount = signal(0);

  onModernChange(value: number) {
    this.modernCount.set(value);
  }

  onClassicChange(value: number) {
    this.classicCount.set(value);
  }
}
