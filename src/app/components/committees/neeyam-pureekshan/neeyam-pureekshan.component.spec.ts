import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeeyamPureekshanComponent } from './neeyam-pureekshan.component';

describe('NeeyamPureekshanComponent', () => {
  let component: NeeyamPureekshanComponent;
  let fixture: ComponentFixture<NeeyamPureekshanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeeyamPureekshanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeeyamPureekshanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
