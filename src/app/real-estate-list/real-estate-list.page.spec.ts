import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {RealEstateListPage} from './real-estate-list.page';

describe('RealEstateListPage', () => {
    let component: RealEstateListPage;
    let fixture: ComponentFixture<RealEstateListPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RealEstateListPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(RealEstateListPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
