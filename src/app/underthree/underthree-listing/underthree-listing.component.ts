import { Component, OnInit } from '@angular/core';
import { Underthree } from '../shared/underthree.model';
import { UnderthreeService } from '../shared/underthree.service';

@Component({
  selector: 'app-underthree-listing',
  templateUrl: './underthree-listing.component.html',
  styleUrls: ['./underthree-listing.component.scss']
})
export class UnderthreelistingComponent implements OnInit {
    underthrees: Underthree[] = [];

    constructor(private underthreeService: UnderthreeService){}
  
    ngOnInit() {
  
      this.underthreeService.getUnderthrees()
        .subscribe((underthrees: Underthree[]) => {
          this.underthrees = underthrees;
      });
     }
}