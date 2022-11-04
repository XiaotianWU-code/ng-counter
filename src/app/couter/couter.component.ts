import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-couter',
  templateUrl: './couter.component.html',
  styleUrls: ['./couter.component.scss'],
})
export class CouterComponent implements OnInit {
  count: number = 0;
  constructor() {}

  ngOnInit(): void {}

  increase(): void {
    this.count++;
  }

  decrease(): void{
    this.count--;
  }
}
