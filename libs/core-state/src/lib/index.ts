import { ActionReducerMap } from '@ngrx/store';

import { appReducer, IAppState } from './app/app.reducer';
import { authReducer, IAuthState } from './auth/auth.reducer';
import * as fromSaved from './saved/saved.reducer';
import * as fromMovies from './movies/movies.reducer';

export interface AppState {
  app: IAppState;
  auth: IAuthState;
  saved: fromSaved.SavedState;
  movies: fromMovies.MoviesState;
}

export const reducers: ActionReducerMap<AppState> = {
  app: appReducer,
  auth: authReducer,
  saved: fromSaved.reducer,
  movies: fromMovies.reducer
};

export const defaultState: AppState = {
  app: null,
  auth: null,
  saved: {ids: [] } as fromSaved.SavedState,
  movies: {ids: [] } as fromMovies.MoviesState,
};
