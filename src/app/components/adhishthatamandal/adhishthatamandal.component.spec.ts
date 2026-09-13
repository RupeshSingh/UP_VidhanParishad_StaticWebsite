import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhishthatamandalComponent } from './adhishthatamandal.component';

describe('AdhishthatamandalComponent', () => {
  let component: AdhishthatamandalComponent;
  let fixture: ComponentFixture<AdhishthatamandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdhishthatamandalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdhishthatamandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
