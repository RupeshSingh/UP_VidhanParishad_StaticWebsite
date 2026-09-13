import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShriGaneshShankarComponent } from './shri-ganesh-shankar.component';

describe('ShriGaneshShankarComponent', () => {
  let component: ShriGaneshShankarComponent;
  let fixture: ComponentFixture<ShriGaneshShankarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShriGaneshShankarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShriGaneshShankarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
