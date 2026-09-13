import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteenamelistComponent } from './committeenamelist.component';

describe('CommitteenamelistComponent', () => {
  let component: CommitteenamelistComponent;
  let fixture: ComponentFixture<CommitteenamelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteenamelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitteenamelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
