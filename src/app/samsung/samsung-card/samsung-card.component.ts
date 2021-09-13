import { 
  Component, 
  Input} from '@angular/core';
import {Samsung } from 'src/app/samsung/shared/samsung.model';


@Component({
  selector: 'app-samsung-card',
  templateUrl: './samsung-card.component.html',
  styleUrls: ['./samsung-card.component.scss']
})
export class SamsungCardComponent {

  @Input('samsungItem') set samsungItem(samsung: Samsung) {
    this.samsung = samsung
  };

  samsung: Samsung;

}