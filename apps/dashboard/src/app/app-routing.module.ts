import { NgModule } from '@angular/core';
import { LoginComponent, NotFoundComponent, UiModule } from '@showsnsuch/ui';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    UiModule,
    RouterModule.forRoot([
      { path: '404', component: NotFoundComponent },
      { path: 'login', component: LoginComponent },
      { path: '', canActivate: [AuthGuard], component: MainComponent},
      { path: '**', redirectTo: '404', pathMatch: 'full' }
    ], { initialNavigation: 'enabled' })
  ]
})
export class AppRoutingModule {}
