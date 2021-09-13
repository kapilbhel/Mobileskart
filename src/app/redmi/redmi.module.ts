
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedmiCardComponent } from './redmi-card/redmi-card.component';
import { RedmiDetailComponent } from './redmi-detail/redmi-detail.component';
import { RedmiListingComponent } from './redmi-listing/redmi-listing.component';
import { RedmiComponent } from './redmi.component';
import { AppNgForDirective, AppNgIfDirective, HighlightDirective } from './shared/directives/custom.directive';
import { RedmiService } from './shared/redmi.service';


const routes: Routes = [
  {
    path: 'redmis',
    component: RedmiComponent,
    children: [
      {path: '', component: RedmiListingComponent},
      {path: ':redmiId', component: RedmiDetailComponent}
    ]
  }
]

@NgModule({
  declarations: [
    RedmiDetailComponent,
    RedmiListingComponent,
    RedmiComponent,
    RedmiCardComponent,
    HighlightDirective,
    AppNgIfDirective,
    AppNgForDirective
  ],
  providers: [
    RedmiService
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ]
})
export class RedmiModule {}