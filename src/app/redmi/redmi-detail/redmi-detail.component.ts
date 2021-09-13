import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Redmi } from '../shared/redmi.model';
import { RedmiService } from '../shared/redmi.service';

@Component({
  selector: 'app-redmi-detail',
  templateUrl: './redmi-detail.component.html',
  styleUrls: ['./redmi-detail.component.scss']
})
export class RedmiDetailComponent {

  redmi: Redmi;
  constructor(
    private redmiService: RedmiService,
    private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.redmiService
        .getRedmiById(params['redmiId'])
        .subscribe(redmi => {
          this.redmi = redmi;
        })
    })
  }
}