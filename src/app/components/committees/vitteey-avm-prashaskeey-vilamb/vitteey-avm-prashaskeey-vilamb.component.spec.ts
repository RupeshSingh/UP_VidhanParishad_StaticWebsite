import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitteeyAvmPrashaskeeyVilambComponent } from './vitteey-avm-prashaskeey-vilamb.component';

describe('VitteeyAvmPrashaskeeyVilambComponent', () => {
  let component: VitteeyAvmPrashaskeeyVilambComponent;
  let fixture: ComponentFixture<VitteeyAvmPrashaskeeyVilambComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitteeyAvmPrashaskeeyVilambComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VitteeyAvmPrashaskeeyVilambComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
