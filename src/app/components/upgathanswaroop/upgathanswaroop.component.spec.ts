import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgathanswaroopComponent } from './upgathanswaroop.component';

describe('UpgathanswaroopComponent', () => {
  let component: UpgathanswaroopComponent;
  let fixture: ComponentFixture<UpgathanswaroopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgathanswaroopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpgathanswaroopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
