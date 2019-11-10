import { async, TestBed } from '@angular/core/testing';
import { DiscoverWorldComponent } from './discover-world.component';
describe('DiscoverWorldComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DiscoverWorldComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DiscoverWorldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=discover-world.component.spec.js.map