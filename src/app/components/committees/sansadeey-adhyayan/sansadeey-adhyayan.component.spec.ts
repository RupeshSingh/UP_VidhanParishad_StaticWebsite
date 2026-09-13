import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SansadeeyAdhyayanComponent } from './sansadeey-adhyayan.component';

describe('SansadeeyAdhyayanComponent', () => {
  let component: SansadeeyAdhyayanComponent;
  let fixture: ComponentFixture<SansadeeyAdhyayanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SansadeeyAdhyayanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SansadeeyAdhyayanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
