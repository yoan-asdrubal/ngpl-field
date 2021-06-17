import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgplFieldTestComponent } from './ngpl-field-test.component';

describe('NgplSelectTestComponent', () => {
  let component: NgplFieldTestComponent;
  let fixture: ComponentFixture<NgplFieldTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgplFieldTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgplFieldTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
