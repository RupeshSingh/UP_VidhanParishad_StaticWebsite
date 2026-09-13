import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShriChawdhariSukhramComponent } from './shri-chawdhari-sukhram.component';

describe('ShriChawdhariSukhramComponent', () => {
  let component: ShriChawdhariSukhramComponent;
  let fixture: ComponentFixture<ShriChawdhariSukhramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShriChawdhariSukhramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShriChawdhariSukhramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
