import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaryaPramarshDatryComponent } from './karya-pramarsh-datry.component';

describe('KaryaPramarshDatryComponent', () => {
  let component: KaryaPramarshDatryComponent;
  let fixture: ComponentFixture<KaryaPramarshDatryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaryaPramarshDatryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaryaPramarshDatryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
