import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationTransferComponent } from './accomodation-transfer.component';

describe('AccomodationTransferComponent', () => {
  let component: AccomodationTransferComponent;
  let fixture: ComponentFixture<AccomodationTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomodationTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
