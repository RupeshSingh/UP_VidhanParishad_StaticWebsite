import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShriDarbarilalComponent } from './shri-darbarilal.component';

describe('ShriDarbarilalComponent', () => {
  let component: ShriDarbarilalComponent;
  let fixture: ComponentFixture<ShriDarbarilalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShriDarbarilalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShriDarbarilalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
