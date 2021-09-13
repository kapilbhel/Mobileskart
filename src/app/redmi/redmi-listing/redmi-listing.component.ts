import { Component, OnInit } from '@angular/core';
import { Redmi } from '../shared/redmi.model';
import { RedmiService } from '../shared/redmi.service';

@Component({
  selector: 'app-redmi-listing',
  templateUrl: './redmi-listing.component.html',
  styleUrls: ['./redmi-listing.component.scss']
})
export class RedmiListingComponent implements OnInit{
  redmis: Redmi[] = [];

  constructor(private redmiService: RedmiService){}

  ngOnInit() {

    this.redmiService.getRedmis()
      .subscribe((redmis: Redmi[]) => {
        this.redmis = redmis;
    });
   }
}
