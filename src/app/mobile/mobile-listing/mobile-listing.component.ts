import { Component, OnInit } from '@angular/core';
import { Mobile } from '../shared/mobile.model';
import { MobileService } from '../shared/mobile.service';

@Component({
  selector: 'app-mobile-listing',
  templateUrl: './mobile-listing.component.html',
  styleUrls: ['./mobile-listing.component.scss']
})
export class MobileistingComponent implements OnInit{
  mobiles: Mobile[] = [];

  constructor(private mobileService: MobileService){}

  ngOnInit() {

    this.mobileService.getMobiles()
      .subscribe((mobiles: Mobile[]) => {
        this.mobiles = mobiles;
    });
   }
}