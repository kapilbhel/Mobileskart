import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moto } from '../shared/moto.model';
import { MotoService } from '../shared/moto.service';


@Component({
  selector: 'app-moto-detail',
  templateUrl: './moto-detail.component.html',
  styleUrls: ['./moto-detail.component.scss']
})
export class MotoDetailComponent {

  moto: Moto;
  constructor(
    private motoService: MotoService,
    private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.motoService
        .getMotoById(params['motoId'])
        .subscribe(moto => {
          this.moto = moto;
        })
    })
  }
}