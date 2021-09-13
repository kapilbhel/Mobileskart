import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SamsungCardComponent } from './samsung-card/samsung-card.component';
import { SamsungDetailComponent } from './samsung-detail/samsung-detail.component';
import { SamsungListingComponent } from './samsung-listing/samsung-listing.component';
import { SamsungComponent } from './samsung.component';
import { AppNgForDirective, AppNgIfDirective, HighlightDirective } from './shared/directives/custom.directive';
import { SamsungService } from './shared/samsung.service';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'samsungs',
    component: SamsungComponent,
    children: [
      {path: '', component: SamsungListingComponent},
      {path: ':samsungId', component: SamsungDetailComponent}
    ]
  }
]

@NgModule({
  declarations: [
    SamsungDetailComponent,
    SamsungListingComponent,
    SamsungComponent,
    SamsungCardComponent,
    HighlightDirective,
    AppNgIfDirective,
    AppNgForDirective
  ],
  providers: [
    SamsungService
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ]
})
export class SamsungModule {}