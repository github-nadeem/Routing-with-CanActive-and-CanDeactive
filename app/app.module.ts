import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from '../Home/home.component';
import { Tab1Component } from '../Tab1/tab1.component';
import { Tab2Component } from '../Tab2/tab2.component';
import {AppRoutingModule} from './app.routing.module';
import {AuthGuard} from './auth.guard';
import { Deact } from './deact.guard';
import {MsalGuard} from '@azure/msal-angular';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, Tab1Component, Tab2Component ],
  providers: [AuthGuard,Deact,MsalGuard],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
