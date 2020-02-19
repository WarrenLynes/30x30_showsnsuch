import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@showsnsuch/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { CoreStateModule } from '@showsnsuch/core-state';
import { CoreDataModule } from '@showsnsuch/core-data';
import { UiModule } from '@showsnsuch/ui';
import { LibraryComponent } from './library/library.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, LibraryComponent, MovieDetailComponent],
  imports: [
    CoreDataModule,
    CoreStateModule,
    UiModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
