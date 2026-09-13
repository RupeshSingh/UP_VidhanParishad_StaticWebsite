import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShriVirendraBahadurSinghComponent } from './shri-virendra-bahadur-singh.component';

describe('ShriVirendraBahadurSinghComponent', () => {
  let component: ShriVirendraBahadurSinghComponent;
  let fixture: ComponentFixture<ShriVirendraBahadurSinghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShriVirendraBahadurSinghComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShriVirendraBahadurSinghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
