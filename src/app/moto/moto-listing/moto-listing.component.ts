import { Component, OnInit } from '@angular/core';
import { Moto } from '../shared/moto.model';
import { MotoService } from '../shared/moto.service';


@Component({
  selector: 'app-moto-listing',
  templateUrl: './moto-listing.component.html',
  styleUrls: ['./moto-listing.component.scss']
})
export class MotoListingComponent implements OnInit{
  motos: Moto[] = [];

  constructor(private motoService: MotoService){}

  ngOnInit() {

    this.motoService.getMotos()
      .subscribe((motos: Moto[]) => {
        this.motos = motos;
    });
   }
}
