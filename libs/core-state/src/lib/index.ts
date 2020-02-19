import { ActionReducerMap } from '@ngrx/store';

import { appReducer, IAppState } from './app/app.reducer';
import { authReducer, IAuthState } from './auth/auth.reducer';

export interface AppState {
  app: IAppState;
  auth: IAuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  app: appReducer,
  auth: authReducer,
};

export const defaultState: AppState = {
  app: null,
  auth: null,
};
