import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Undertwo } from '../shared/undertwo.model';
import { UndertwoService } from '../shared/undertwo.service';


@Component({
  selector: 'app-undertwo-detail',
  templateUrl: './undertwo-detail.component.html',
  styleUrls: ['./undertwo-detail.component.scss']
})
export class UndertwoDetailComponent {

  undertwo: Undertwo;
  constructor(
    private undertwoService: UndertwoService,
    private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.undertwoService
        .getUndertwoById(params['undertwoId'])
        .subscribe(undertwo => {
          this.undertwo = undertwo;
        })
    })
  }
}