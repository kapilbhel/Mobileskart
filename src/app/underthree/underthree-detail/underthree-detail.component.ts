import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Underthree } from '../shared/underthree.model';
import { UnderthreeService } from '../shared/underthree.service';



@Component({
  selector: 'app-underthree-detail',
  templateUrl: './underthree-detail.component.html',
  styleUrls: ['./underthree-detail.component.scss']
})
export class UnderthreeDetailComponent {

  underthree: Underthree;
  constructor(
    private underthreeService: UnderthreeService,
    private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.underthreeService
        .getUnderthreeById(params['underthreeId'])
        .subscribe(underthree => {
          this.underthree = underthree;
        })
    })
  }
}