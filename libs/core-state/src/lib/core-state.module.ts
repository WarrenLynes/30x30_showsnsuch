import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataPersistence } from '@nrwl/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreConfig, StoreModule } from '@ngrx/store';

import { CoreDataModule } from '@showsnsuch/core-data';
import { reducers } from '.';
import { AuthEffects } from './auth/auth.effects';
import { SavedEffects } from './saved/saved.effects';
import { MoviesEffects } from './movies/movies.effects';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([
      AuthEffects,
      SavedEffects,
      MoviesEffects
    ]),
    StoreDevtoolsModule.instrument({ name: 'showsnsuch Store' })
  ],
  providers: [DataPersistence]
})
export class CoreStateModule {}
