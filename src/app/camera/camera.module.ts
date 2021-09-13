import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraCardComponent } from './camera-card/camera-card.component';
import { CameraDetailComponent } from './camera-detail/camera-detail.component';
import { CameraListingComponent } from './camera-listing/camera-listing.component';
import { CameraComponent } from './camera.component';
import { CameraService } from './shared/camera.service';
import { AppNgForDirective, AppNgIfDirective, HighlightDirective } from './shared/directives/custom.directive';

const routes: Routes = [
  {
    path: 'cameras',
    component: CameraComponent,
    children: [
      {path: '', component: CameraListingComponent},
      {path: ':cameraId', component: CameraDetailComponent}
    ]
  }
]

@NgModule({
  declarations: [
    CameraDetailComponent,
    CameraListingComponent,
    CameraComponent,
    CameraCardComponent,
    HighlightDirective,
    AppNgIfDirective,
    AppNgForDirective
  ],
  providers: [
    CameraService
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ]
})
export class CameraModule {}