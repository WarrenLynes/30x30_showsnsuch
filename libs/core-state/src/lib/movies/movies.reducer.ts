import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as moviesActions from './movies.actions';
import { Movie } from '@showsnsuch/core-data';

export const MOVIES_FEATURE_KEY = 'movies';

export interface MoviesState extends EntityState<Movie> {
  selectedMovieId?: string | number;
  isLoading: boolean;
}

export interface MoviesPartialState {
  readonly [MOVIES_FEATURE_KEY]: MoviesState;
}

export const moviesAdapter: EntityAdapter<Movie> = createEntityAdapter<Movie>();

export const initialState: MoviesState = moviesAdapter.getInitialState({
  selectedMovieId: null,
  isLoading: false
});

const moviesReducer = createReducer(
  initialState,
  on(moviesActions.movieSelected, (state, { selectedMovieId }) =>
    Object.assign({}, state, { selectedMovieId })
  ),
  on(moviesActions.movieLoaded, (state, { data }) =>
    moviesAdapter.addAll(data, { ...state, isLoading: false })
  ),
  on(
    moviesActions.loadMovie,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),
);

export function reducer(state: MoviesState | undefined, action: Action) {
  return moviesReducer(state, action);
}
