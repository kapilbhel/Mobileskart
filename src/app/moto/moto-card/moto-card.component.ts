import { 
    Component, 
    Input} from '@angular/core';
  import { Moto } from 'src/app/moto/shared/moto.model';

  
  @Component({
    selector: 'app-moto-card',
    templateUrl: './moto-card.component.html',
    styleUrls: ['./moto-card.component.scss']
  })
  export class MotoCardComponent {
  
    @Input('motoItem') set motoItem(moto: Moto) {
      this.moto = moto
    };
  
    moto: Moto;
  
  }