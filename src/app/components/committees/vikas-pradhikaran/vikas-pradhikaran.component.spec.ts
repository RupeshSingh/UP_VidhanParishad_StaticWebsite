import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VikasPradhikaranComponent } from './vikas-pradhikaran.component';

describe('VikasPradhikaranComponent', () => {
  let component: VikasPradhikaranComponent;
  let fixture: ComponentFixture<VikasPradhikaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VikasPradhikaranComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VikasPradhikaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
