import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShriChandrabhalComponent } from './shri-chandrabhal.component';

describe('ShriChandrabhalComponent', () => {
  let component: ShriChandrabhalComponent;
  let fixture: ComponentFixture<ShriChandrabhalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShriChandrabhalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShriChandrabhalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
