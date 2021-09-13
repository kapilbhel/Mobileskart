import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AppNgForDirective, AppNgIfDirective, HighlightDirective } from "./shared/directives/custom.directive";
import { UndertenService } from "./shared/underten.service";
import { UndertenCardComponent } from "./underten-card/underten-card.component";
import { UndertenComponent } from "./underten.component";
import { UndertenlistingComponent } from './underten-listing/underten-listing.component';
import { UndertenDetailComponent } from './underten-detail/underten-detail.component';



const routes: Routes = [
  {
    path: 'undertens',
    component: UndertenComponent,
    children: [
        {path: '', component: UndertenlistingComponent},
        {path: ':undertenId', component: UndertenDetailComponent}
      
    ]
  }
]

@NgModule({
  declarations: [
    UndertenComponent,
    UndertenlistingComponent,
    UndertenCardComponent,
    HighlightDirective,
    AppNgIfDirective,
AppNgForDirective,
UndertenDetailComponent
  ],
  providers: [
    UndertenService
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ]
})
export class UndertenModule {}