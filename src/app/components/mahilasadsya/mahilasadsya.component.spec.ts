import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahilasadsyaComponent } from './mahilasadsya.component';

describe('MahilasadsyaComponent', () => {
  let component: MahilasadsyaComponent;
  let fixture: ComponentFixture<MahilasadsyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahilasadsyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MahilasadsyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
