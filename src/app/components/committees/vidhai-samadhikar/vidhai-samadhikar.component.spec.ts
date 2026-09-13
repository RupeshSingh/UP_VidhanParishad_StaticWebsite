import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidhaiSamadhikarComponent } from './vidhai-samadhikar.component';

describe('VidhaiSamadhikarComponent', () => {
  let component: VidhaiSamadhikarComponent;
  let fixture: ComponentFixture<VidhaiSamadhikarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidhaiSamadhikarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VidhaiSamadhikarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
