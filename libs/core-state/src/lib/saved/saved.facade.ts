import { Injectable } from '@angular/core';
import { Action, select, Store, ActionsSubject } from '@ngrx/store';
import * as fromSaved from './saved.reducer';
import * as savedActions from './saved.actions';
import {
  selectAllSaved,
  selectSaved, selectSavedIds,
  selectSavedLoading
} from './saved.selectors';
import { Saved } from '@showsnsuch/core-data';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SavedFacade {
  allSaved$ = this.store.pipe(select(selectAllSaved));
  allSavedID$ = this.store.pipe(select(selectSavedIds));
  selectedSaved$ = this.store.pipe(select(selectSaved));
  savedLoading$ = this.store.pipe(select(selectSavedLoading));

  constructor(
    private store: Store<fromSaved.SavedPartialState>,
    private actions$: ActionsSubject
  ) {}

  selectSaved(selectedSavedId: any) {
    this.dispatch(savedActions.savedSelected({ selectedSavedId }));
  }

  loadSaved() {
    this.dispatch(savedActions.loadSaved());
  }

  createSaved(saved: Saved) {
    this.dispatch(savedActions.createSaved({ saved }));
  }

  updateSaved(saved: Saved) {
    this.dispatch(savedActions.updateSaved({ saved }));
  }

  deleteSaved(saved: Saved) {
    this.dispatch(savedActions.deleteSaved({ saved }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
