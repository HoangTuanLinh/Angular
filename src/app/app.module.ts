import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {RegisterComponent} from "./Register/register.component";
import {ForgotPasswordComponent} from "./forgotpassword/forgotpassword.component";
import {RouterModule, Routes} from "@angular/router";
import {CurrentWeatherComponent} from "./currentweather/currentweather.component";
import {FormsModule} from "@angular/forms";
import {ForecastComponent} from "./forecast/forecast.component";

const appRoutes:Routes = [
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"forgot-password",component:ForgotPasswordComponent},
  {path:"current-weather",component:CurrentWeatherComponent},
  {path:"forecast",component:ForecastComponent}
]
@NgModule({
  declarations: [
    AppComponent,FooterComponent,HeaderComponent,LoginComponent,RegisterComponent,ForgotPasswordComponent,CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
