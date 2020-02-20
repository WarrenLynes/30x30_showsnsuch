import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as savedActions from './saved.actions';
import { Saved } from '@showsnsuch/core-data';

export const SAVED_FEATURE_KEY = 'saved';

export interface SavedState extends EntityState<Saved> {
  selectedSavedId?: string | number;
  isLoading: boolean;
}

export interface SavedPartialState {
  readonly [SAVED_FEATURE_KEY]: SavedState;
}

export const savedAdapter: EntityAdapter<Saved> = createEntityAdapter<Saved>();

export const initialState: SavedState = savedAdapter.getInitialState({
  selectedSavedId: null,
  isLoading: false
});

const savedReducer = createReducer(
  initialState,
  on(savedActions.savedSelected, (state, { selectedSavedId }) =>
    Object.assign({}, state, { selectedSavedId })
  ),
  on(savedActions.savedLoaded, (state, { saved }) =>
    savedAdapter.addAll(saved, { ...state, isLoading: false })
  ),
  on(savedActions.savedCreated, (state, { saved }) =>
    savedAdapter.addOne(saved, { ...state, isLoading: false })
  ),
  on(savedActions.savedUpdated, (state, { saved }) =>
    savedAdapter.upsertOne(saved, { ...state, isLoading: false })
  ),
  on(savedActions.savedDeleted, (state, { id }) =>
    savedAdapter.removeOne(id, { ...state, isLoading: false })
  ),
  on(
    savedActions.loadSaved,
    savedActions.createSaved,
    savedActions.updateSaved,
    savedActions.deleteSaved,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),
);

export function reducer(state: SavedState | undefined, action: Action) {
  return savedReducer(state, action);
}
