import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViniyamanSamikshaComponent } from './viniyaman-samiksha.component';

describe('ViniyamanSamikshaComponent', () => {
  let component: ViniyamanSamikshaComponent;
  let fixture: ComponentFixture<ViniyamanSamikshaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViniyamanSamikshaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViniyamanSamikshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
