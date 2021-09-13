import { 
    Component, 
    Input} from '@angular/core';
  import { Redmi } from 'src/app/redmi/shared/redmi.model';

  
  @Component({
    selector: 'app-redmi-card',
    templateUrl: './redmi-card.component.html',
    styleUrls: ['./redmi-card.component.scss']
  })
  export class RedmiCardComponent {
  
    @Input('redmiItem') set redmiItem(redmi: Redmi) {
      this.redmi = redmi
    };
  
    redmi: Redmi;
  
  }