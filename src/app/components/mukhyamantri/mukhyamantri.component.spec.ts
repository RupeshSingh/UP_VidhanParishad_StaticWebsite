import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MukhyamantriComponent } from './mukhyamantri.component';

describe('MukhyamantriComponent', () => {
  let component: MukhyamantriComponent;
  let fixture: ComponentFixture<MukhyamantriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MukhyamantriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MukhyamantriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
