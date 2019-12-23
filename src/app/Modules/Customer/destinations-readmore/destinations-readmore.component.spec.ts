import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsReadmoreComponent } from './destinations-readmore.component';

describe('DestinationsReadmoreComponent', () => {
  let component: DestinationsReadmoreComponent;
  let fixture: ComponentFixture<DestinationsReadmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationsReadmoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationsReadmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
