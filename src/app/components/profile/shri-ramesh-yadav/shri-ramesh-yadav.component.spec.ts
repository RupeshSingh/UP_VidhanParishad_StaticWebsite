import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShriRameshYadavComponent } from './shri-ramesh-yadav.component';

describe('ShriRameshYadavComponent', () => {
  let component: ShriRameshYadavComponent;
  let fixture: ComponentFixture<ShriRameshYadavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShriRameshYadavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShriRameshYadavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
