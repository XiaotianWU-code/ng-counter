import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouterComponent } from './couter.component';

describe('CouterComponent', () => {
  let component: CouterComponent;
  let fixture: ComponentFixture<CouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CouterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add 1 when click plus button', () => {
    // given
    component.count = 0;
    const pulsBtn = fixture.nativeElement.querySelector(
      '[data-test="plusButton"]'
    );

    // when
    pulsBtn.click();
    fixture.detectChanges();

    // then
    const displayCoutn = fixture.nativeElement.querySelector(
      '[data-test="displayCount"]'
    );
    expect(component.count).toBe(1);
    expect(displayCoutn.textContent).toEqual('number: 1');
  });

  it('should minus 1 when click minus button', () => {
    // given
    component.count = 1;
    const minusBtn = fixture.nativeElement.querySelector(
      '[data-test="minusButton"]'
    );

    // when
    minusBtn.click();
    fixture.detectChanges();

    // then
    const displayCount = fixture.nativeElement.querySelector(
      '[data-test="displayCount"]'
    );
    expect(component.count).toBe(0);
    expect(displayCount.textContent).toEqual('number: 0');
  });

  it('should btn disappear when count less than 0', () => {
    // given
    component.count = -1;

    // when
    fixture.detectChanges();
    const minusBtn = fixture.nativeElement.querySelector(
      '[data-test="minusButton"]'
    );

    // then
    expect(minusBtn).toBeFalsy();
  });

  it('should btn disappear when count larger than 10', () => {
    // given
    component.count = 11;

    // when
    fixture.detectChanges();
    const pulsBtn = fixture.nativeElement.querySelector(
      '[data-test="plusButton"]'
    );

    // then
    expect(pulsBtn).toBeFalsy();
  });

  it('should return false when count number less than 0', () => {
    component.count = -1;
    expect(component.isLargerOrEqualThanZore()).toBeFalsy();
  });

  it('should add green when count number less than 0', () => {
    // given
    component.count = -1;

    // when
    fixture.detectChanges();
    const displayCount = fixture.nativeElement.querySelector('.number-text');

    // then
    expect(displayCount).toBeTruthy();
  });

  it('should add red when count number large than 10', () => {
    // given
    component.count = 11;

    // when
    fixture.detectChanges();
    const displayCount = fixture.nativeElement.querySelector('.number-red');

    // then
    expect(displayCount).toBeTruthy();
  });

  it('should reset count when click reset button', () => {
    // given
    component.count = 11;
    const resetBtn = fixture.nativeElement.querySelector(
      '[data-test="resetButton"]'
    );
    // when
    resetBtn.click();
    fixture.detectChanges();
    const displayCount = fixture.nativeElement.querySelector(
      '[data-test="displayCount"]'
    );

    // then
    expect(displayCount.textContent).toBe('number: 0');
  });
});
