import { ConstitutionDetailComponent } from './constitution/constitution-detail/constitution-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ConstitutionComponent } from './constitution/constitution.component';

const routes: Routes = [
  {
    path: 'constitution',
    component: ConstitutionComponent
  },
  {
    path: 'constitution/:id',
    component: ConstitutionDetailComponent
  },
  {
    path: '',
    loadChildren: 'app/home/home.module#HomeModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


