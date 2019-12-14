import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaHandlingComponent } from './visa-handling.component';

describe('VisaHandlingComponent', () => {
  let component: VisaHandlingComponent;
  let fixture: ComponentFixture<VisaHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaHandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
