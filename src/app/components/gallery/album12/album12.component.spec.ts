import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Album12Component } from './album12.component';

describe('Album12Component', () => {
  let component: Album12Component;
  let fixture: ComponentFixture<Album12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Album12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Album12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
