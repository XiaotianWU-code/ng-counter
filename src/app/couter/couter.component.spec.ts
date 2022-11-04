import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouterComponent } from './couter.component';

describe('CouterComponent', () => {
  let component: CouterComponent;
  let fixture: ComponentFixture<CouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouterComponent ]
    })
      .compileComponents();

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
    const pulsBtn = fixture.nativeElement.querySelector('[data-test="plusButton"]');

    // when
    pulsBtn.click();
    fixture.detectChanges();

    // then
    const displayCoutn = fixture.nativeElement.querySelector('[data-test="displayCount"]')
    expect(component.count).toBe(1);
    expect(displayCoutn.textContent).toEqual('number: 1');

  });

  it('should minus 1 when click minus button', () => {

    // given
    component.count = 1;
    const minusBtn = fixture.nativeElement.querySelector('[data-test="minusButton"]');

    // when
    minusBtn.click();
    fixture.detectChanges();

    // then
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]')
    expect(component.count).toBe(0);
    expect(displayCount.textContent).toEqual('number: 0');
  });


});
