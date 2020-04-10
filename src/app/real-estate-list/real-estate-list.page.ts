import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RealEstate} from "./../shared/real-estate";
import {RealEstateService} from "./../shared/real-estate.service";

@Component({
    selector: 'app-real-estate-list',
    templateUrl: './real-estate-list.page.html',
    styleUrls: ['./real-estate-list.page.scss'],
})
export class RealEstateListPage implements OnInit {

    RealEstates: RealEstate[] = [];

    constructor(private activatedRoute: ActivatedRoute, private realEstateService: RealEstateService) {
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.realEstateService.getRealEstateList().subscribe((res) => {
            console.log(res)
            this.RealEstates = this.RealEstates.concat(res);
        })
    }

}
