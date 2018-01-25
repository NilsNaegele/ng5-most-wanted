import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../app.material.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { HomeOverviewComponent } from './home-overview/home-overview.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule
  ],
  declarations: [ HomeComponent, HomeDetailComponent, HomeOverviewComponent]
})
export class HomeModule { }
