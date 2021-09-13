import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BatListingComponent } from './bat/bat-listing/bat-listing.component';

import { CameraListingComponent } from './camera/camera-listing/camera-listing.component';
import { ContactComponent } from './contact/contact.component';
import { MotoListingComponent } from './moto/moto-listing/moto-listing.component';
import { RedmiListingComponent } from './redmi/redmi-listing/redmi-listing.component';
import { SamsungListingComponent } from './samsung/samsung-listing/samsung-listing.component';

import { UndertenlistingComponent } from './underten/underten-listing/underten-listing.component';
import { UnderthreelistingComponent } from './underthree/underthree-listing/underthree-listing.component';
import { UndertwolistingComponent } from './undertwo/undertwo-listing/undertwo-listing.component';

const routes: Routes = [
  {path: '', redirectTo: '/mobiles', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'underten',component:UndertenlistingComponent},
  {path:'camera',component:CameraListingComponent},
  {path:'bat',component:BatListingComponent},
  {path:'redmi',component:RedmiListingComponent},
  {path:'moto',component:MotoListingComponent},
  {path:'samsung',component:SamsungListingComponent},
  {path:'undertwo',component:UndertwolistingComponent},
  {path:'underthree',component:UnderthreelistingComponent},
  {path:'contact',component:ContactComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
