import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SansadeeyAvmSamajikSadbhavComponent } from './sansadeey-avm-samajik-sadbhav.component';

describe('SansadeeyAvmSamajikSadbhavComponent', () => {
  let component: SansadeeyAvmSamajikSadbhavComponent;
  let fixture: ComponentFixture<SansadeeyAvmSamajikSadbhavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SansadeeyAvmSamajikSadbhavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SansadeeyAvmSamajikSadbhavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
