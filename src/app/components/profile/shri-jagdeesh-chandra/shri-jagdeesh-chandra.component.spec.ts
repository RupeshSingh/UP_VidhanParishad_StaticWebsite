import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShriJagdeeshChandraComponent } from './shri-jagdeesh-chandra.component';

describe('ShriJagdeeshChandraComponent', () => {
  let component: ShriJagdeeshChandraComponent;
  let fixture: ComponentFixture<ShriJagdeeshChandraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShriJagdeeshChandraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShriJagdeeshChandraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
