import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShikshaKaVyavsaikaranComponent } from './shiksha-ka-vyavsaikaran.component';

describe('ShikshaKaVyavsaikaranComponent', () => {
  let component: ShikshaKaVyavsaikaranComponent;
  let fixture: ComponentFixture<ShikshaKaVyavsaikaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShikshaKaVyavsaikaranComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShikshaKaVyavsaikaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
