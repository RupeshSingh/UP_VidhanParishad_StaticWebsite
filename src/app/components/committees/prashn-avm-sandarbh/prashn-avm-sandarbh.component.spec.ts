import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrashnAvmSandarbhComponent } from './prashn-avm-sandarbh.component';

describe('PrashnAvmSandarbhComponent', () => {
  let component: PrashnAvmSandarbhComponent;
  let fixture: ComponentFixture<PrashnAvmSandarbhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrashnAvmSandarbhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrashnAvmSandarbhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
