import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SavedFacade } from '@showsnsuch/core-state';

@Component({
  selector: 'showsnsuch-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie$: Observable<any>;

  @Input() imdbID: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private savedFacade: SavedFacade
  ) { }

  ngOnInit() {
    const imdbID = this.imdbID || this.route.snapshot.params['id'];
    if(!imdbID) return;
    const url = `http://www.omdbapi.com/?apikey=27ca6a40&i=${imdbID}&plot=full`;
    this.movie$ = this.http.get(url);
  }

  delete(id) {
    this.savedFacade.deleteSaved(id);
  }
}
