import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from '../Home/home.component';
import { Tab1Component } from '../Tab1/tab1.component';
import { Tab2Component } from '../Tab2/tab2.component';
import { AuthGuard } from './auth.guard';
import { Deact } from './deact.guard';
import {MsalGuard} from '@azure/msal-angular';

const routes : Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', 
  component: HomeComponent
},
  {path:'tab1', 
  component: Tab1Component,
  canActivate: [MsalGuard],
},
  {path:'tab2', 
  component: Tab2Component,
  canDeactivate: [Deact]
},
  {path:'**', component: HomeComponent}
]

@NgModule({
  imports:[
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule {

}