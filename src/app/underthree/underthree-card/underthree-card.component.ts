import { 
  Component, 
  Input} from '@angular/core';
import { Underthree } from 'src/app/underthree/shared/underthree.model';

@Component({
  selector: 'app-underthree-card',
  templateUrl: './underthree-card.component.html',
  styleUrls: ['./underthree-card.component.scss']
})
export class UnderthreeCardComponent {

  @Input('underthreeItem') set underthreeItem(underthree: Underthree) {
    this.underthree = underthree;
  };

  underthree: Underthree;

}