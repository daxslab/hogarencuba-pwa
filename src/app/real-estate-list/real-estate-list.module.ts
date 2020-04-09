import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {IonicModule} from '@ionic/angular';

import {RealEstateListPageRoutingModule} from './real-estate-list-routing.module';

import {RealEstateListPage} from './real-estate-list.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RealEstateListPageRoutingModule,
        HttpClientModule
    ],
    declarations: [RealEstateListPage]
})
export class RealEstateListPageModule {
}
