import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundPackagesComponent } from './inbound-packages.component';

describe('InboundPackagesComponent', () => {
  let component: InboundPackagesComponent;
  let fixture: ComponentFixture<InboundPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
