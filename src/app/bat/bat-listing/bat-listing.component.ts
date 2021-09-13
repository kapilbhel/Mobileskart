import { Component, OnInit } from '@angular/core';
import { Bat } from '../shared/bat.model';
import { BatService } from '../shared/bat.service';

@Component({
  selector: 'app-bat-listing',
  templateUrl: './bat-listing.component.html',
  styleUrls: ['./bat-listing.component.scss']
})
export class BatListingComponent implements OnInit{
  bats: Bat[] = [];

  constructor(private batService: BatService){}

  ngOnInit() {

    this.batService.getBats()
      .subscribe((bats: Bat[]) => {
        this.bats = bats;
    });
   }
}
