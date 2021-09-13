import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileService } from './shared/mobile.service';
import { MobileDetailComponent } from './mobile-detail/mobile-detail.component';
import { MobileistingComponent } from './mobile-listing/mobile-listing.component';
import { MobileComponent } from './mobile.component';
import { CommonModule } from '@angular/common';
import { MobileCardComponent } from '../shared/mobile-card/mobile-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AppNgForDirective, AppNgIfDirective, HighlightDirective } from './shared/directives/custom.directive';

const routes: Routes = [
  {
    path: 'mobiles',
    component: MobileComponent,
    children: [
      {path: '', component: MobileistingComponent},
      {path: ':mobileId', component: MobileDetailComponent}
    ]
  }
]

@NgModule({
  declarations: [
    MobileDetailComponent,
    MobileistingComponent,
    MobileComponent,
    MobileCardComponent,
    HighlightDirective,
    AppNgIfDirective,
    AppNgForDirective
  ],
  providers: [
    MobileService
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ]
})
export class MobileModule {}