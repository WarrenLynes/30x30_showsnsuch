import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, takeUntil, tap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { MoviesFacade, SavedFacade } from '@showsnsuch/core-state';
import { SimpleMovie } from '@showsnsuch/core-data';

@Component({
  selector: 'showsnsuch-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject();
  saved$: Observable<string[] | number[]> = this.savedFacade.allSavedID$;
  searchResults$: Observable<any> = this.moviesFacade.allMovies$;
  searchForm: FormGroup;
  page = 1;
  show = false;

  constructor(
    private http: HttpClient,
    private savedFacade: SavedFacade,
    private moviesFacade: MoviesFacade
  ) {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void {
    this.searchResults$.pipe(takeUntil(this.destroy$),tap((results) => {
      if(results.length) {
        this.show = true;
      } else {
        this.show = false;
      }
    })).subscribe();
  }

  search() {
    this.show = false;

    const search = this.searchForm.get('search').value;
    this.moviesFacade.loadMovies(search, this.page);
  }

  onSearch() {
    this.search();
  }

  saveMovie(data: string) {
    this.savedFacade.createSaved({id: data, categoryID: null})
  }

  paginate() {
    this.page++;
    this.search();
  }



}
