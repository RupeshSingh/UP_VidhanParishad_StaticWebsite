import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshwashanComponent } from './ashwashan.component';

describe('AshwashanComponent', () => {
  let component: AshwashanComponent;
  let fixture: ComponentFixture<AshwashanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshwashanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AshwashanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
