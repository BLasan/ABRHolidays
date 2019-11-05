import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageCategoryComponent } from './package-category.component';

describe('PackageCategoryComponent', () => {
  let component: PackageCategoryComponent;
  let fixture: ComponentFixture<PackageCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
