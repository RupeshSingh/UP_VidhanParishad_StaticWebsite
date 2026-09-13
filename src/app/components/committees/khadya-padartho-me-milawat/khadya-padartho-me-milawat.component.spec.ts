import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhadyaPadarthoMeMilawatComponent } from './khadya-padartho-me-milawat.component';

describe('KhadyaPadarthoMeMilawatComponent', () => {
  let component: KhadyaPadarthoMeMilawatComponent;
  let fixture: ComponentFixture<KhadyaPadarthoMeMilawatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhadyaPadarthoMeMilawatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhadyaPadarthoMeMilawatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
