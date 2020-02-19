import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AppFacade, AuthFacade } from '@showsnsuch/core-state';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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

  links = [
    {path: '', title: 'movies', icon: 'movie'},
  ];

  constructor(
    private authFacade: AuthFacade,
    private appFacade: AppFacade,
  ){}

  ngOnInit(): void {
    this.appFacade.initialize();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  onLogout() {
    this.authFacade.logout();
  }

}
