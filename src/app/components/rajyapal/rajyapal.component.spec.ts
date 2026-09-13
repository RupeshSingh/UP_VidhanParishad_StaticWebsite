import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajyapalComponent } from './rajyapal.component';

describe('RajyapalComponent', () => {
  let component: RajyapalComponent;
  let fixture: ComponentFixture<RajyapalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RajyapalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RajyapalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
