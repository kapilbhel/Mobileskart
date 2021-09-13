import { Component, OnInit } from '@angular/core';
import { Underten } from '../shared/underten.model';
import { UndertenService } from '../shared/underten.service';

@Component({
  selector: 'app-underten-listing',
  templateUrl: './underten-listing.component.html',
  styleUrls: ['./underten-listing.component.scss']
})
export class UndertenlistingComponent implements OnInit {
    undertens: Underten[] = [];

    constructor(private undertenService: UndertenService){}
  
    ngOnInit() {
  
      this.undertenService.getUndertens()
        .subscribe((undertens: Underten[]) => {
          this.undertens = undertens;
      });
     }
}