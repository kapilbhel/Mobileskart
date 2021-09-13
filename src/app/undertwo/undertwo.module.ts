import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppNgForDirective, AppNgIfDirective, HighlightDirective } from './shared/directives/custom.directive';
import { UndertwoService } from './shared/undertwo.service';
import { UndertwoCardComponent } from './undertwo-card/undertwo-card.component';
import { UndertwoDetailComponent } from './undertwo-detail/undertwo-detail.component';
import { UndertwolistingComponent } from './undertwo-listing/undertwo-listing.component';
import { UndertwoComponent } from './undertwo.component';

const routes: Routes = [
  {
    path: 'undertwos',
    component: UndertwoComponent,
    children: [
        {path: '', component: UndertwolistingComponent},
        {path: ':undertwoId', component: UndertwoDetailComponent}
      
    ]
  }
]

@NgModule({
  declarations: [
    UndertwoComponent,
    UndertwolistingComponent,
    UndertwoCardComponent,
    HighlightDirective,
    AppNgIfDirective,
AppNgForDirective,
UndertwoDetailComponent
  ],
  providers: [
    UndertwoService
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ]
})
export class UndertwoModule {}