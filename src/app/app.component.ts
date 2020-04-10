import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Location} from "./shared/location";
import {LocationService} from "./shared/location.service";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    public selectedIndex = 0;
    public appPages = [
        {
            title: 'Comprar',
            url: '/real-estate',
            icon: 'home'
        },
        {
            title: 'Vender',
            url: '/real-estate',
            icon: 'wallet'
        },
        {
            title: 'Contacto',
            url: '/real-estate',
            icon: 'mail-open'
        },
    ];

    public provinces: Location[] = [];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private locationService: LocationService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    ngOnInit() {
        const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
        this.locationService.getLocationList().subscribe((res) => {
            console.log(res)
            this.provinces = res;
        })
    }
}
