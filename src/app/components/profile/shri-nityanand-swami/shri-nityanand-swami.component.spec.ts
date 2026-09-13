import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShriNityanandSwamiComponent } from './shri-nityanand-swami.component';

describe('ShriNityanandSwamiComponent', () => {
  let component: ShriNityanandSwamiComponent;
  let fixture: ComponentFixture<ShriNityanandSwamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShriNityanandSwamiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShriNityanandSwamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
