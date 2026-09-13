import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YachikaComponent } from './yachika.component';

describe('YachikaComponent', () => {
  let component: YachikaComponent;
  let fixture: ComponentFixture<YachikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YachikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YachikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
