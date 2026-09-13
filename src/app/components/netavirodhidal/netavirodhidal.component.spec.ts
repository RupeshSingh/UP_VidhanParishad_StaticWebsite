import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetavirodhidalComponent } from './netavirodhidal.component';

describe('NetavirodhidalComponent', () => {
  let component: NetavirodhidalComponent;
  let fixture: ComponentFixture<NetavirodhidalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetavirodhidalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetavirodhidalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
