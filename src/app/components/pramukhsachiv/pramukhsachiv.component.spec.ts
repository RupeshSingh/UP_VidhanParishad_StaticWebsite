import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PramukhsachivComponent } from './pramukhsachiv.component';

describe('PramukhsachivComponent', () => {
  let component: PramukhsachivComponent;
  let fixture: ComponentFixture<PramukhsachivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PramukhsachivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PramukhsachivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
