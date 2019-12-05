import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferContactUsComponent } from './transfer-contact-us.component';

describe('TransferContactUsComponent', () => {
  let component: TransferContactUsComponent;
  let fixture: ComponentFixture<TransferContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
