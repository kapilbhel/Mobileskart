import { 
  Component, 
  Input} from '@angular/core';
import { Mobile } from 'src/app/mobile/shared/mobile.model';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.scss']
})
export class MobileCardComponent {

  @Input('mobileItem') set mobileItem(mobile: Mobile) {
    this.mobile = mobile;
  };

  mobile: Mobile;

}