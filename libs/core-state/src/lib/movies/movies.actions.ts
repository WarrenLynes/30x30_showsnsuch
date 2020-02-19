import { createAction, props } from '@ngrx/store';

import { SimpleMovie, Movie } from '@showsnsuch/core-data';

export const movieSelected = createAction(
  '[MOVIES][SELECTED]',
  props<{ selectedMovieId: string }>()
);
export const loadMovie = createAction(
  '[MOVIES][LOAD]',
  props<{query: string}>()
);
export const movieLoaded = createAction(
  '[MOVIES][LOADED]',
  props<{ data: Movie[] }>()
);
