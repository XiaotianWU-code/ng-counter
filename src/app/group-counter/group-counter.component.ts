import { Counter } from './../models/Counter';
import { Component, OnInit } from '@angular/core';
import { ConterServiceService } from '../service/conter-service.service';

@Component({
  selector: 'app-group-counter',
  templateUrl: './group-counter.component.html',
  styleUrls: ['./group-counter.component.scss'],
})
export class GroupCounterComponent implements OnInit {
  counters: Counter[] = [];

  constructor(private counterService: ConterServiceService) {
    console.log('counterService: ', counterService);
  }

  ngOnInit(): void {}

  doCreateCounter(): void {
    this.counterService.doCreateCounter(this.counters);
  }

  sumCounters(): number {
    return this.counterService.sumCounters(this.counters);
  }

  addNewCount(count: number, index: number): void {
    this.counterService.addNewCount(count, index, this.counters);
  }
}
