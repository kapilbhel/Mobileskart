import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bat } from '../shared/bat.model';
import { BatService } from '../shared/bat.service';

@Component({
  selector: 'app-bat-detail',
  templateUrl: './bat-detail.component.html',
  styleUrls: ['./bat-detail.component.scss']
})
export class BatDetailComponent {

  bat: Bat;
  constructor(
    private batService: BatService,
    private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.batService
        .getBatById(params['batId'])
        .subscribe(bat => {
          this.bat = bat;
        })
    })
  }
}