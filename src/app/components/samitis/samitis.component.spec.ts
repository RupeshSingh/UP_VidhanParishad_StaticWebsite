import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamitisComponent } from './samitis.component';

describe('SamitiComponent', () => {
  let component: SamitisComponent;
  let fixture: ComponentFixture<SamitisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamitisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamitisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
