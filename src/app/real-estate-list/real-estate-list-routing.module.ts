import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RealEstateListPage} from './real-estate-list.page';

const routes: Routes = [
    {
        path: '',
        component: RealEstateListPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RealEstateListPageRoutingModule {
}
