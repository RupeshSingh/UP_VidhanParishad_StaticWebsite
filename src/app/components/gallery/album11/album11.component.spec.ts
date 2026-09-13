import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Album11Component } from './album11.component';

describe('Album11Component', () => {
  let component: Album11Component;
  let fixture: ComponentFixture<Album11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Album11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Album11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
