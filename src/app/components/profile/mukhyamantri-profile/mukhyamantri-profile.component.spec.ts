import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MukhyamantriProfileComponent } from './mukhyamantri-profile.component';

describe('MukhyamantriProfileComponent', () => {
  let component: MukhyamantriProfileComponent;
  let fixture: ComponentFixture<MukhyamantriProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MukhyamantriProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MukhyamantriProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
