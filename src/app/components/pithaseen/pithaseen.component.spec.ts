import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PithaseenComponent } from './pithaseen.component';

describe('PithaseenComponent', () => {
  let component: PithaseenComponent;
  let fixture: ComponentFixture<PithaseenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PithaseenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PithaseenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
