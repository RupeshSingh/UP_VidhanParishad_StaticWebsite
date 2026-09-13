import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadsyaComponent } from './sadsya.component';

describe('SadsyaComponent', () => {
  let component: SadsyaComponent;
  let fixture: ComponentFixture<SadsyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SadsyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SadsyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
