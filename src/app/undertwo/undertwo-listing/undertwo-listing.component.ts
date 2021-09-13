import { Component, OnInit } from '@angular/core';
import { Undertwo } from '../shared/undertwo.model';
import { UndertwoService } from '../shared/undertwo.service';

@Component({
  selector: 'app-undertwo-listing',
  templateUrl: './undertwo-listing.component.html',
  styleUrls: ['./undertwo-listing.component.scss']
})
export class UndertwolistingComponent implements OnInit {
    undertwos: Undertwo[] = [];

    constructor(private undertwoService: UndertwoService){}
  
    ngOnInit() {
  
      this.undertwoService.getUndertwos()
        .subscribe((undertwos: Undertwo[]) => {
          this.undertwos = undertwos;
      });
     }
}