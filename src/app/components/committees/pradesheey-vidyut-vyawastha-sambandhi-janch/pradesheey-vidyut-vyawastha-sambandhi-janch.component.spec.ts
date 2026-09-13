import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PradesheeyVidyutVyawasthaSambandhiJanchComponent } from './pradesheey-vidyut-vyawastha-sambandhi-janch.component';

describe('PradesheeyVidyutVyawasthaSambandhiJanchComponent', () => {
  let component: PradesheeyVidyutVyawasthaSambandhiJanchComponent;
  let fixture: ComponentFixture<PradesheeyVidyutVyawasthaSambandhiJanchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PradesheeyVidyutVyawasthaSambandhiJanchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PradesheeyVidyutVyawasthaSambandhiJanchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
