import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverWorldComponent } from './discover-world.component';

describe('DiscoverWorldComponent', () => {
  let component: DiscoverWorldComponent;
  let fixture: ComponentFixture<DiscoverWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
