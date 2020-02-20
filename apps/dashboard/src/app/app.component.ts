import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AppFacade, AuthFacade, SavedFacade } from '@showsnsuch/core-state';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'showsnsuch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  authenticated$: Observable<boolean> = this.authFacade.authenticated$;
  destroy$: Subject<boolean> = new Subject();
  loading$: Observable<boolean> = this.appFacade.loading$;
  loading = false;

  links = [
    {path: 'search', title: 'search', icon: 'search'},
    {path: 'saved', title: 'saved', icon: 'movie'},
  ];

  constructor(
    private authFacade: AuthFacade,
    private appFacade: AppFacade,
    private savedFacade: SavedFacade,
    private cdf: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    if (!localStorage.getItem('SAVED_MOVIES')) {
      localStorage.setItem('SAVED_MOVIES', '[]');
    }

    this.appFacade.initialize();
    this.savedFacade.loadSaved();
    this.appFacade.loading$.pipe(tap((loading) => {
      this.loading = loading;
      this.cdf.detectChanges();
    }));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  onLogout() {
    this.authFacade.logout();
  }

}
