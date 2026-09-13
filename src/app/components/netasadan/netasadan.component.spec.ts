import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetasadanComponent } from './netasadan.component';

describe('NetasadanComponent', () => {
  let component: NetasadanComponent;
  let fixture: ComponentFixture<NetasadanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetasadanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetasadanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
