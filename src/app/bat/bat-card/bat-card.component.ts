import { 
    Component, 
    Input} from '@angular/core';
  import { Bat } from 'src/app/bat/shared/bat.model';
  
  @Component({
    selector: 'app-bat-card',
    templateUrl: './bat-card.component.html',
    styleUrls: ['./bat-card.component.scss']
  })
  export class BatCardComponent {
  
    @Input('batItem') set batItem(bat: Bat) {
      this.bat = bat
    };
  
    bat: Bat;
  
  }