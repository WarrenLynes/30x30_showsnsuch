import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';

import { MoviesFacade } from './movies.facade';
import * as moviesActions from './movies.actions';
import { Movie, MoviesService, SnackbarService } from '@showsnsuch/core-data';
import { MoviesPartialState } from './movies.reducer';
import { AppFacade } from '../app/app.facade';
import { of } from 'rxjs';

@Injectable()
export class MoviesEffects {
  loadMovies$ = createEffect(() =>
    this.dataPersistence.fetch(moviesActions.loadMovie, {
      run: (
        action: ReturnType<typeof moviesActions.loadMovie>,
        state: MoviesPartialState
      ) => {
        this.appFacade.addLoad('[MOVIES][LOAD]');
        return this.moviesService.search(action.query, action.page).pipe(
          tap(() => this.notifyService.openSnackBar('Successfully Loaded Saved')),
          map((result: any) => moviesActions.movieLoaded({ data: result.Search.map(x => ({...x, id: x.imdbID})) })),
          tap(() => this.appFacade.removeLoad('[MOVIES][LOAD]'))
        );
      },
      onError: (action: ReturnType<typeof moviesActions.loadMovie>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<MoviesPartialState>,
    private moviesService: MoviesService,
    private moviesFacade: MoviesFacade,
    private notifyService: SnackbarService,
    private appFacade: AppFacade
  ) {}
}
