import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrSirSeetaRamComponent } from './dr-sir-seeta-ram.component';

describe('DrSirSeetaRamComponent', () => {
  let component: DrSirSeetaRamComponent;
  let fixture: ComponentFixture<DrSirSeetaRamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrSirSeetaRamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrSirSeetaRamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
