import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from 'ngx-gallery';
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

    galleryOptions: NgxGalleryOptions[] = [
        {
            "image": false,
            "thumbnailsRemainingCount": true,
            "width": "100%",
            "height": "500px",
            "thumbnailsColumns": 3,
            "thumbnailsRows": 3,
            "previewCloseOnClick": true,
            "previewCloseOnEsc": true,
            "previewKeyboardNavigation": true,
            "previewArrows": true,
        },
        {
            "breakpoint": 768,
            "thumbnailsColumns": 1,
            "thumbnailsRows": 4,
        },
    ];
    images: NgxGalleryImage[] = [];

    constructor(private activatedRoute: ActivatedRoute, private realEstateService: RealEstateService) {
    }

    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }

    ionViewWillEnter() {


        this.realEstateService.getRealEstate(this.id).subscribe((res) => {
            console.log(res)
            this.model = res;

            let page = this;
            this.model.images.forEach(function (item) {
                page.images.push({
                    // 'altText': 'example',
                    // 'url': item.url,
                    // 'extUrl': item.url,
                    // 'thumbnailUrl': item.url
                    'small': item.url,
                    'medium': item.url,
                    'big': item.url
                });
            });
            console.log(page, page.images);
        })
    }

}
