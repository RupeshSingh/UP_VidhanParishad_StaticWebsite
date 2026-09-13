import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadanjankariComponent } from './sadanjankari.component';

describe('SadanjankariComponent', () => {
  let component: SadanjankariComponent;
  let fixture: ComponentFixture<SadanjankariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SadanjankariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SadanjankariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
