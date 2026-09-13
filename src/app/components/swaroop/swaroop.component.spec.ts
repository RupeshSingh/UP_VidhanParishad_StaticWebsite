import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaroopComponent } from './swaroop.component';

describe('SwaroopComponent', () => {
  let component: SwaroopComponent;
  let fixture: ComponentFixture<SwaroopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwaroopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwaroopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
