import { NgModule } from '@angular/core';
import { LoginComponent, NotFoundComponent, UiModule } from '@showsnsuch/ui';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { SearchComponent } from './search/search.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { LibraryComponent } from './library/library.component';

@NgModule({
  imports: [
    UiModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: '404', component: NotFoundComponent },
      { path: 'login', component: LoginComponent },
      { path: 'search', canActivate: [AuthGuard], children: [
          { path: '', component: SearchComponent },
          { path: ':id', component: MovieDetailComponent }
        ]},
      { path: 'saved', canActivate: [AuthGuard], children: [
          { path: '', component: LibraryComponent },
          { path: ':id', component: MovieDetailComponent }
        ]},
      { path: '**', redirectTo: '404', pathMatch: 'full' }
    ], { initialNavigation: 'enabled' })
  ]
})
export class AppRoutingModule {}
