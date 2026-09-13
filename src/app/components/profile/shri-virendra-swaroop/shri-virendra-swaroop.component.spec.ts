import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShriVirendraSwaroopComponent } from './shri-virendra-swaroop.component';

describe('ShriVirendraSwaroopComponent', () => {
  let component: ShriVirendraSwaroopComponent;
  let fixture: ComponentFixture<ShriVirendraSwaroopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShriVirendraSwaroopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShriVirendraSwaroopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
