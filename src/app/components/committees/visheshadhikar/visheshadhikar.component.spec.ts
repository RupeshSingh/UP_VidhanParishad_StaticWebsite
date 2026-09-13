import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisheshadhikarComponent } from './visheshadhikar.component';

describe('VisheshadhikarComponent', () => {
  let component: VisheshadhikarComponent;
  let fixture: ComponentFixture<VisheshadhikarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisheshadhikarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisheshadhikarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
