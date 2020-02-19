import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { delay, map, tap } from 'rxjs/operators';

import { SavedFacade } from './saved.facade';
import * as savedActions from './saved.actions';
import { Saved, SavedService, SnackbarService } from '@showsnsuch/core-data';
import { SavedPartialState } from './saved.reducer';
import { AppFacade } from '../app/app.facade';

@Injectable()
export class SavedEffects {
  loadSaved$ = createEffect(() =>
    this.dataPersistence.fetch(savedActions.loadSaved, {
      run: (
        action: ReturnType<typeof savedActions.loadSaved>,
        state: SavedPartialState
      ) => {
        this.appFacade.addLoad('[SAVED][LOAD]');
        return this.savedService.all().pipe(
          tap(() => this.notifyService.openSnackBar('Successfully Loaded Saved')),
          map((saved: Saved[]) => savedActions.savedLoaded({ saved })),
          tap(() => this.appFacade.removeLoad('[SAVED][LOAD]'))
        );
      },
      onError: (action: ReturnType<typeof savedActions.loadSaved>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  addSaved$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(savedActions.createSaved, {
      run: (
        action: ReturnType<typeof savedActions.createSaved>,
        state: SavedPartialState
      ) => {
        this.appFacade.addLoad('[SAVED][CREATE]');

        return this.savedService.create(action.saved).pipe(
          map((saved: Saved) => savedActions.savedCreated({ saved })),
          tap(() => this.notifyService.openSnackBar('Successfully Added a Saved')),
          tap(() => this.appFacade.removeLoad('[SAVED][CREATE]'))
        );
      },
      onError: (action: ReturnType<typeof savedActions.createSaved>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  /*updateSaved$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(savedActions.updateSaved, {
      run: (
        action: ReturnType<typeof savedActions.updateSaved>,
        state: SavedPartialState
      ) => {
        this.appFacade.addLoad('[SAVED][UPDATE]');

        return this.savedService.update(action.saved).pipe(
          map((saved: Saved) => savedActions.savedUpdated({ saved })),
          tap(() => this.notifyService.openSnackBar('Successfully Updated a Saved')),
          tap(() => this.appFacade.removeLoad('[SAVED][UPDATE]'))
        );
      },
      onError: (action: ReturnType<typeof savedActions.updateSaved>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  deleteSaved$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(savedActions.deleteSaved, {
      run: (
        action: ReturnType<typeof savedActions.deleteSaved>,
        state: SavedPartialState
      ) => {
        this.appFacade.addLoad('[SAVED][DELETE]');
        return this.savedService.delete(action.saved.id).pipe(
          map((saved: Saved) => savedActions.savedDeleted({ saved })),
          tap(() => this.notifyService.openSnackBar('Successfully Deleted a Saved')),
          tap(() => this.savedFacade.loadSaved()),
          tap(() => this.appFacade.removeLoad('[SAVED][DELETE]'))
        );
      },
      onError: (action: ReturnType<typeof savedActions.deleteSaved>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );*/

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<SavedPartialState>,
    private savedService: SavedService,
    private savedFacade: SavedFacade,
    private notifyService: SnackbarService,
    private appFacade: AppFacade
  ) {}
}
