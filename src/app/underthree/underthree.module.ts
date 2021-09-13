
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppNgForDirective, AppNgIfDirective, HighlightDirective } from './shared/directives/custom.directive';
import { UnderthreeService } from './shared/underthree.service';
import { UnderthreeCardComponent } from './underthree-card/underthree-card.component';
import { UnderthreeDetailComponent } from './underthree-detail/underthree-detail.component';
import { UnderthreelistingComponent } from './underthree-listing/underthree-listing.component';
import { UnderthreeComponent } from './underthree.component';


const routes: Routes = [
  {
    path: 'underthrees',
    component: UnderthreeComponent,
    children: [
        {path: '', component: UnderthreelistingComponent},
        {path: ':underthreeId', component: UnderthreeDetailComponent}
      
    ]
  }
]

@NgModule({
  declarations: [
    UnderthreeComponent,
    UnderthreelistingComponent,
    UnderthreeCardComponent,
    HighlightDirective,
    AppNgIfDirective,
AppNgForDirective,
UnderthreeDetailComponent
  ],
  providers: [
    UnderthreeService
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ]
})
export class UnderthreeModule {}