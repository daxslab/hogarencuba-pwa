import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealEstatePage } from './real-estate.page';

describe('RealEstatePage', () => {
  let component: RealEstatePage;
  let fixture: ComponentFixture<RealEstatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealEstatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealEstatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
