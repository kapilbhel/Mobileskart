import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatCardComponent } from './bat-card/bat-card.component';
import { BatDetailComponent } from './bat-detail/bat-detail.component';
import { BatListingComponent } from './bat-listing/bat-listing.component';
import { BatComponent } from './bat.component';
import { BatService } from './shared/bat.service';
import { AppNgForDirective, AppNgIfDirective, HighlightDirective } from './shared/directives/custom.directive';


const routes: Routes = [
  {
    path: 'bats',
    component: BatComponent,
    children: [
      {path: '', component: BatListingComponent},
      {path: ':batId', component: BatDetailComponent}
    ]
  }
]

@NgModule({
  declarations: [
    BatDetailComponent,
    BatListingComponent,
    BatComponent,
    BatCardComponent,
    HighlightDirective,
    AppNgIfDirective,
    AppNgForDirective
  ],
  providers: [
    BatService
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ]
})
export class BatModule {}