import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RealEstateService} from "./../shared/real-estate.service";
import {RealEstate} from "./../shared/real-estate";

@Component({
    selector: 'app-real-estate',
    templateUrl: './real-estate.page.html',
    styleUrls: ['./real-estate.page.scss'],
})
export class RealEstatePage implements OnInit {

    private id: string;
    model: RealEstate;

    constructor(private activatedRoute: ActivatedRoute, private realEstateService: RealEstateService) {
    }

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }

    ionViewWillEnter() {
        this.realEstateService.getRealEstate(this.id).subscribe((res) => {
            console.log(res)
            this.model = res;
        })
    }

}
