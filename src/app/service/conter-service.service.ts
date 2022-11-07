import { Injectable } from '@angular/core';
import { Counter } from '../models/Counter';

@Injectable({
  providedIn: 'root',
})
export class ConterServiceService {
  constructor() {}

  doCreateCounter(counters: Counter[]): void {
    counters.push(new Counter(0));
  }

  sumCounters(counters: Counter[]): number {
    return counters.reduce((pre, cur) => pre + cur.count, 0);
  }

  addNewCount(count: number, index: number, counters: Counter[]): void {
    counters[index].count = count;
  }
}
