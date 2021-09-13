import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobileService } from '../shared/mobile.service';
import { Mobile } from '../shared/mobile.model';

@Component({
  selector: 'app-mobile-detail',
  templateUrl: './mobile-detail.component.html',
  styleUrls: ['./mobile-detail.component.scss']
})
export class MobileDetailComponent {

  mobile: Mobile;
  constructor(
    private mobileService: MobileService,
    private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mobileService
        .getMobileById(params['mobileId'])
        .subscribe(mobile => {
          this.mobile = mobile;
        })
    })
  }
}