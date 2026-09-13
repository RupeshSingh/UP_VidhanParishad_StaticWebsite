import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShriShivPrasadComponent } from './shri-shiv-prasad.component';

describe('ShriShivPrasadComponent', () => {
  let component: ShriShivPrasadComponent;
  let fixture: ComponentFixture<ShriShivPrasadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShriShivPrasadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShriShivPrasadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
