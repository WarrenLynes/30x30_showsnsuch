import { createAction, props } from '@ngrx/store';

import { Saved } from '@showsnsuch/core-data';

export const savedSelected = createAction(
  '[SAVED][SELECTED]',
  props<{ selectedSavedId: string }>()
);
export const loadSaved = createAction(
  '[SAVED][LOAD]'
);
export const savedLoaded = createAction(
  '[SAVED][LOADED]',
  props<{ saved: Saved[] }>()
);
export const createSaved = createAction(
  '[SAVED][CREATE]',
  props<{ saved: Saved }>()
);
export const savedCreated = createAction(
  '[SAVED][CREATED]',
  props<{ saved: Saved }>()
);
export const updateSaved = createAction(
  '[SAVED][UPDATE]',
  props<{ saved: Saved }>()
);
export const savedUpdated = createAction(
  '[SAVED][UPDATED]',
  props<{ saved: Saved }>()
);
export const deleteSaved = createAction(
  '[SAVED][DELETE]',
  props<{ saved: Saved }>()
);
export const savedDeleted = createAction(
  '[SAVED][DELETED]',
  props<{ saved: Saved }>()
);
