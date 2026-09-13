import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidhanMandalSadasyoKeAwaseeyParivadSambhandiJanchComponent } from './vidhan-mandal-sadasyo-ke-awaseey-parivad-sambhandi-janch.component';

describe('VidhanMandalSadasyoKeAwaseeyParivadSambhandiJanchComponent', () => {
  let component: VidhanMandalSadasyoKeAwaseeyParivadSambhandiJanchComponent;
  let fixture: ComponentFixture<VidhanMandalSadasyoKeAwaseeyParivadSambhandiJanchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidhanMandalSadasyoKeAwaseeyParivadSambhandiJanchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VidhanMandalSadasyoKeAwaseeyParivadSambhandiJanchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
