import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCurrencyComponent } from './select-currency.component';

describe('SelectCurrencyComponent', () => {
  let component: SelectCurrencyComponent;
  let fixture: ComponentFixture<SelectCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
