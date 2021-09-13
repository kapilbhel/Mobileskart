

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotoCardComponent } from './moto-card/moto-card.component';
import { MotoDetailComponent } from './moto-detail/moto-detail.component';
import { MotoListingComponent } from './moto-listing/moto-listing.component';
import { MotoComponent } from './moto.component';
import { AppNgForDirective, AppNgIfDirective, HighlightDirective } from './shared/directives/custom.directive';
import { MotoService } from './shared/moto.service';



const routes: Routes = [
  {
    path: 'motos',
    component: MotoComponent,
    children: [
      {path: '', component: MotoListingComponent},
      {path: ':motoId', component: MotoDetailComponent}
    ]
  }
]

@NgModule({
  declarations: [
    MotoDetailComponent,
    MotoListingComponent,
    MotoComponent,
    MotoCardComponent,
    HighlightDirective,
    AppNgIfDirective,
    AppNgForDirective
  ],
  providers: [
    MotoService
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ]
})
export class MotoModule {}