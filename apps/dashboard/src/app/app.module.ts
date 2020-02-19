import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@showsnsuch/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { CoreStateModule } from '@showsnsuch/core-state';
import { CoreDataModule } from '@showsnsuch/core-data';
import { UiModule } from '@showsnsuch/ui';

@NgModule({
  declarations: [AppComponent, MainComponent],
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
