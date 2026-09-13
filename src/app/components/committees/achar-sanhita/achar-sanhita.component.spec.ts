import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcharSanhitaComponent } from './achar-sanhita.component';

describe('AcharSanhitaComponent', () => {
  let component: AcharSanhitaComponent;
  let fixture: ComponentFixture<AcharSanhitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcharSanhitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcharSanhitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
