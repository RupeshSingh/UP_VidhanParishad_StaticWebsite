import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsabhapatiComponent } from './upsabhapati.component';

describe('UpsabhapatiComponent', () => {
  let component: UpsabhapatiComponent;
  let fixture: ComponentFixture<UpsabhapatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsabhapatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpsabhapatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
