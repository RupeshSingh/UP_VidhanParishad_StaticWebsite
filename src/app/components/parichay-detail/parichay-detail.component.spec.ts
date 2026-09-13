import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParichayDetailComponent } from './parichay-detail.component';

describe('ParichayDetailComponent', () => {
  let component: ParichayDetailComponent;
  let fixture: ComponentFixture<ParichayDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParichayDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParichayDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
