import { Counter } from './../models/Counter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-counter',
  templateUrl: './group-counter.component.html',
  styleUrls: ['./group-counter.component.scss'],
})
export class GroupCounterComponent implements OnInit {
  counters: Counter[] = [];

  constructor() {}

  ngOnInit(): void {}

  doCreateCounter(): void {
    this.counters.push(new Counter(0));
  }

  sumCounters(): number {
    return this.counters.reduce((pre, cur) => pre + cur.count, 0);
  }

  addNewCount(count: number, index: number): void{
    this.counters[index].count = count;
  }
}
