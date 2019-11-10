import { async, TestBed } from '@angular/core/testing';
import { ManageNewsFeedComponent } from './manage-news-feed.component';
describe('ManageNewsFeedComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ManageNewsFeedComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ManageNewsFeedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=manage-news-feed.component.spec.js.map