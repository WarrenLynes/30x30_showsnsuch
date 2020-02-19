import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'showsnsuch-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  data$: Observable<any>;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.data$ = this.http.get('http://www.omdbapi.com/?apikey=27ca6a40&s=men')
      .pipe(map((result: any) => result.Search));
  }

}
