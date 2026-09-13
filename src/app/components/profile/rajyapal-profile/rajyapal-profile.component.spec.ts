import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajyapalProfileComponent } from './rajyapal-profile.component';

describe('RajyapalProfileComponent', () => {
  let component: RajyapalProfileComponent;
  let fixture: ComponentFixture<RajyapalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RajyapalProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RajyapalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
