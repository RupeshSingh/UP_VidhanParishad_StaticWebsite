import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaliySthitComponent } from './daliy-sthit.component';

describe('DaliySthitComponent', () => {
  let component: DaliySthitComponent;
  let fixture: ComponentFixture<DaliySthitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaliySthitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaliySthitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
