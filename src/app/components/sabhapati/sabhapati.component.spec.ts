import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabhapatiComponent } from './sabhapati.component';

describe('SabhapatiComponent', () => {
  let component: SabhapatiComponent;
  let fixture: ComponentFixture<SabhapatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabhapatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabhapatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
