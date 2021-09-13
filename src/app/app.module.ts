import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MobileModule } from './mobile/mobile.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UndertenModule } from './underten/underten.module';
import { CameraModule } from './camera/camera.module';
import { UndertwoModule } from './undertwo/undertwo.module';
import { UnderthreeModule } from './underthree/underthree.module';
import { ContactComponent } from './contact/contact.component';
import { BatModule } from './bat/bat.module';
import { RedmiModule } from './redmi/redmi.module';
import { SamsungModule } from './samsung/samsung.module';

import { MotoModule } from './moto/moto.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  LoginComponent,
  RegisterComponent,
  ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MobileModule,
    UndertenModule,
    UndertwoModule,
    UnderthreeModule,
    CameraModule,
    BatModule,
    RedmiModule,
    MotoModule,
    SamsungModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
