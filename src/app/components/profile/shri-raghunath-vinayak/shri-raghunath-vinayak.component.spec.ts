import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShriRaghunathVinayakComponent } from './shri-raghunath-vinayak.component';

describe('ShriRaghunathVinayakComponent', () => {
  let component: ShriRaghunathVinayakComponent;
  let fixture: ComponentFixture<ShriRaghunathVinayakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShriRaghunathVinayakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShriRaghunathVinayakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
