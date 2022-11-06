import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Counter } from '../models/Counter';

import { GroupCounterComponent } from './group-counter.component';

describe('GroupCounterComponent', () => {
  let component: GroupCounterComponent;
  let fixture: ComponentFixture<GroupCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupCounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create counter', () => {
    // given
    component.counters = [];

    // when
    component.doCreateCounter();

    // then
    expect(component.counters.length).toBe(1);
  });

  it('should return counter group sum when sumCounters', () => {
    // given
    component.counters = [new Counter(1), new Counter(2)];

    // when
    const total = component.sumCounters();

    // then
    expect(total).toBe(3);

  });

});
