import { 
  Component, 
  Input} from '@angular/core';
import { Undertwo } from 'src/app/undertwo/shared/undertwo.model';

@Component({
  selector: 'app-undertwo-card',
  templateUrl: './undertwo-card.component.html',
  styleUrls: ['./undertwo-card.component.scss']
})
export class UndertwoCardComponent {

  @Input('undertwoItem') set undertwoItem(undertwo: Undertwo) {
    this.undertwo = undertwo;
  };

  undertwo: Undertwo;

}