import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../app.material.module';
import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule
  ],
  declarations: [ HomeComponent]
})
export class HomeModule { }
