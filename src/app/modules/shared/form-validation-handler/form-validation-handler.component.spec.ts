import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationHandlerComponent } from './form-validation-handler.component';

describe('FormValidationHandlerComponent', () => {
  let component: FormValidationHandlerComponent;
  let fixture: ComponentFixture<FormValidationHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValidationHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidationHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
