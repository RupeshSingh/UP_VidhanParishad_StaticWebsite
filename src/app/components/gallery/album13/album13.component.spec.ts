import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Album13Component } from './album13.component';

describe('Album13Component', () => {
  let component: Album13Component;
  let fixture: ComponentFixture<Album13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Album13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Album13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
