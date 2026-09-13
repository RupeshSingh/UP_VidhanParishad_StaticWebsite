import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadsyaaddressComponent } from './sadsyaaddress.component';

describe('SadsyaaddressComponent', () => {
  let component: SadsyaaddressComponent;
  let fixture: ComponentFixture<SadsyaaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SadsyaaddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SadsyaaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
