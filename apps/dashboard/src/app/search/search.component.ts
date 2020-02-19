import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { MoviesFacade, SavedFacade } from '@showsnsuch/core-state';
import { SimpleMovie } from '@showsnsuch/core-data';

@Component({
  selector: 'showsnsuch-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  saved$: Observable<string[] | number[]> = this.savedFacade.allSavedID$;
  searchResults$: Observable<any> = this.moviesFacade.allMovies$;
  searchForm: FormGroup;
  data$: Observable<any>;
  page = 1;

  constructor(
    private http: HttpClient,
    private savedFacade: SavedFacade,
    private moviesFacade: MoviesFacade
  ) {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    });
  }

  search() {
    const search = this.searchForm.get('search').value;

    this.moviesFacade.loadMovies(search);
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
