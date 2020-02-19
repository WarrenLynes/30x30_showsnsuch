import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  MOVIES_FEATURE_KEY,
  moviesAdapter,
  MoviesState
} from './movies.reducer';

export const selectMoviesState =
  createFeatureSelector<MoviesState>(MOVIES_FEATURE_KEY);

const { selectAll, selectEntities } = moviesAdapter.getSelectors();

export const selectMoviesLoading = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.isLoading
);

export const selectAllMovies = createSelector(
  selectMoviesState,
  (state: MoviesState) => selectAll(state)
);

export const selectMoviesEntities = createSelector(
  selectMoviesState,
  (state: MoviesState) => selectEntities(state)
);

export const selectMoviesId = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.selectedMovieId
);

export const selectMovie = createSelector(
  selectMoviesEntities,
  selectMoviesId,
  (entities, selectedId) => {
    return selectedId ? entities[selectedId] : null
  }
);
