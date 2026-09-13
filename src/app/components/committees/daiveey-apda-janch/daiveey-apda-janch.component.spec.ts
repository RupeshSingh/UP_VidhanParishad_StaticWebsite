import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaiveeyApdaJanchComponent } from './daiveey-apda-janch.component';

describe('DaiveeyApdaJanchComponent', () => {
  let component: DaiveeyApdaJanchComponent;
  let fixture: ComponentFixture<DaiveeyApdaJanchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaiveeyApdaJanchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaiveeyApdaJanchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
