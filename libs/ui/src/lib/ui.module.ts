import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@showsnsuch/material';
import { SavedFormComponent } from './saved-form/saved-form.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [
    LoginComponent,
    NotFoundComponent,
    SavedFormComponent,
  ],
  exports: [
    LoginComponent,
    NotFoundComponent,
  ]
})
export class UiModule {}
