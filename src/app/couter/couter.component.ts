import { outputAst } from '@angular/compiler';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Counter } from '../models/Counter';

@Component({
  selector: 'app-couter',
  templateUrl: './couter.component.html',
  styleUrls: ['./couter.component.scss'],
})
export class CouterComponent implements OnInit, OnChanges {
  count: number = 0;
  // _count: number = 0;
  // get count(): number{
  //   return this._count;
  // }
  // @Input()
  // set count(val: Counter) {
  //   this._count = val.count;
  // }

  @Input() counter: Counter = new Counter(0);

  @Output() newCount = new EventEmitter<number>();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['counter']) {
      this.count = this.counter.count;
    }
  }

  ngOnInit(): void {}

  increase(): void {
    this.count++;
    this.newCount.emit(this.count);
  }

  decrease(): void {
    this.count--;
    this.newCount.emit(this.count);
  }

  isLargerOrEqualThanZore(): boolean {
    return this.count >= 0;
  }

  isLessThanTen(): boolean {
    return this.count <= 10;
  }

  reset(): void {
    this.count = 0;
  }
}
