import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Underten } from '../shared/underten.model';
import { UndertenService } from '../shared/underten.service';


@Component({
  selector: 'app-underten-detail',
  templateUrl: './underten-detail.component.html',
  styleUrls: ['./underten-detail.component.scss']
})
export class UndertenDetailComponent {

  underten: Underten;
  constructor(
    private undertenService: UndertenService,
    private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.undertenService
        .getUndertenById(params['undertenId'])
        .subscribe(underten => {
          this.underten = underten;
        })
    })
  }
}