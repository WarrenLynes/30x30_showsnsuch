import { Injectable } from '@angular/core';
import { Action, select, Store, ActionsSubject } from '@ngrx/store';
import * as fromMovies from './movies.reducer';
import * as moviesActions from './movies.actions';
import {
  selectAllMovies,
  selectMovie,
  selectMoviesLoading
} from './movies.selectors';
import { Movie } from '@showsnsuch/core-data';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MoviesFacade {
  allMovies$ = this.store.pipe(select(selectAllMovies));
  selectedMovie$ = this.store.pipe(select(selectMovie));
  moviesLoading$ = this.store.pipe(select(selectMoviesLoading));

  constructor(
    private store: Store<fromMovies.MoviesPartialState>,
    private actions$: ActionsSubject
  ) {}

  selectMovie(selectedMovieId: any) {
    this.dispatch(moviesActions.movieSelected({ selectedMovieId }));
  }

  loadMovies(query, page) {
    this.dispatch(moviesActions.loadMovie({query, page}));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
