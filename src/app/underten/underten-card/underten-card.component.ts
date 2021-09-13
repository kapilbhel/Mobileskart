import { 
    Component, 
    Input} from '@angular/core';
  import { Underten } from 'src/app/underten/shared/underten.model';
  
  @Component({
    selector: 'app-underten-card',
    templateUrl: './underten-card.component.html',
    styleUrls: ['./underten-card.component.scss']
  })
  export class UndertenCardComponent {
  
    @Input('undertenItem') set undertenItem(underten: Underten) {
      this.underten = underten;
    };
  
    underten: Underten;
  
  }