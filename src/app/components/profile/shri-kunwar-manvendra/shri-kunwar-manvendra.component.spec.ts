import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShriKunwarManvendraComponent } from './shri-kunwar-manvendra.component';

describe('ShriKunwarManvendraComponent', () => {
  let component: ShriKunwarManvendraComponent;
  let fixture: ComponentFixture<ShriKunwarManvendraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShriKunwarManvendraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShriKunwarManvendraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
