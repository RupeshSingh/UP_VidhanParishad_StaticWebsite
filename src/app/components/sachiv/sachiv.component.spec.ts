import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SachivComponent } from './sachiv.component';

describe('SachivComponent', () => {
  let component: SachivComponent;
  let fixture: ComponentFixture<SachivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SachivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SachivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
