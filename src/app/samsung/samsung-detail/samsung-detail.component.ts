import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Samsung } from '../shared/samsung.model';
import { SamsungService } from '../shared/samsung.service';

@Component({
  selector: 'app-samsung-detail',
  templateUrl: './samsung-detail.component.html',
  styleUrls: ['./samsung-detail.component.scss']
})
export class SamsungDetailComponent {

  samsung: Samsung;
  constructor(
    private samsungService: SamsungService,
    private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.samsungService
        .getSamsungById(params['samsungId'])
        .subscribe(samsung => {
          this.samsung = samsung;
        })
    })
  }
}