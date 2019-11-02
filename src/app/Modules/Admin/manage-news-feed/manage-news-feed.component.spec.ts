import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNewsFeedComponent } from './manage-news-feed.component';

describe('ManageNewsFeedComponent', () => {
  let component: ManageNewsFeedComponent;
  let fixture: ComponentFixture<ManageNewsFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageNewsFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNewsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
