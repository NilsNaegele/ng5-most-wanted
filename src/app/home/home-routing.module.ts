import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { HomeOverviewComponent } from './home-overview/home-overview.component';

const routes: Routes = [
  {
    path: 'most-wanted',
    component: HomeOverviewComponent,
    pathMatch: 'full'
  },
  {
    path: 'criminals',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'most-wanted',
    pathMatch: 'full'
  },
  {
    path: 'criminal/:id',
    component: HomeDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]

})
export class HomeRoutingModule { }
