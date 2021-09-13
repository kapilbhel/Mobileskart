import { Component, OnInit } from '@angular/core';
import { Samsung } from '../shared/samsung.model';
import { SamsungService } from '../shared/samsung.service';

@Component({
  selector: 'app-samsung-listing',
  templateUrl: './samsung-listing.component.html',
  styleUrls: ['./samsung-listing.component.scss']
})
export class SamsungListingComponent implements OnInit{
  samsungs: Samsung[] = [];

  constructor(private samsungService: SamsungService){}

  ngOnInit() {

    this.samsungService.getSamsungs()
      .subscribe((samsungs: Samsung[]) => {
        this.samsungs = samsungs;
    });
   }
}
