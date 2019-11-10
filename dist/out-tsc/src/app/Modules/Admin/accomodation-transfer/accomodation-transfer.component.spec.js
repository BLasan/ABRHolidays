import { async, TestBed } from '@angular/core/testing';
import { AccomodationTransferComponent } from './accomodation-transfer.component';
describe('AccomodationTransferComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AccomodationTransferComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AccomodationTransferComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=accomodation-transfer.component.spec.js.map