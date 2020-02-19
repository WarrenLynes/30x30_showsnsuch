import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  SAVED_FEATURE_KEY,
  savedAdapter,
  SavedState
} from './saved.reducer';
import { emptySaved } from '@showsnsuch/core-data';

export const selectSavedState =
  createFeatureSelector<SavedState>(SAVED_FEATURE_KEY);

const { selectAll, selectEntities, selectIds } = savedAdapter.getSelectors();

export const selectSavedLoading = createSelector(
  selectSavedState,
  (state: SavedState) => state.isLoading
);

export const selectAllSaved = createSelector(
  selectSavedState,
  (state: SavedState) => selectAll(state)
);

export const selectSavedEntities = createSelector(
  selectSavedState,
  (state: SavedState) => selectEntities(state)
);

export const selectSavedIds = createSelector(
  selectSavedState,
  (state: SavedState) => selectIds(state)
);

export const selectSavedId = createSelector(
  selectSavedState,
  (state: SavedState) => state.selectedSavedId
);

export const selectSaved = createSelector(
  selectSavedEntities,
  selectSavedId,
  (entities, selectedId) => {
    return selectedId ? entities[selectedId] : emptySaved
  }
);
