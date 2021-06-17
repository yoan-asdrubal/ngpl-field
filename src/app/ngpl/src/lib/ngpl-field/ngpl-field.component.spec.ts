import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgplFieldComponent } from './ngpl-field.component';

describe('WidgetFieldComponent', () => {
  let component: NgplFieldComponent;
  let fixture: ComponentFixture<NgplFieldComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgplFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgplFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
