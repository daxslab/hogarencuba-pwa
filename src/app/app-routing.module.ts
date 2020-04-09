import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'real-estate',
        pathMatch: 'full'
    },
    {
        path: 'real-estate',
        loadChildren: () => import('./real-estate-list/real-estate-list.module').then(m => m.RealEstateListPageModule)
    },
    {
        path: 'real-estate/:id',
        loadChildren: () => import('./real-estate/real-estate.module').then(m => m.RealEstatePageModule)
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
