import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../environments/environment';

import { NGMeta } from 'ngmeta';

import { ArrestService } from './services/arrest.service';
import { ConstitutionService } from './services/constitution.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [],
  providers: [NGMeta, ArrestService, ConstitutionService ]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return { ngModule: CoreModule };
  }
}
