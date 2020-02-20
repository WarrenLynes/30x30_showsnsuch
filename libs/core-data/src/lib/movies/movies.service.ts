import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { delay } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class MoviesService {
  BASE_URL = 'http://www.omdbapi.com/?apiKey=27ca6a40';

  constructor(private httpClient: HttpClient) { }

  search(query: string, page:number=1) {
    return this.httpClient.get(`${this.BASE_URL}&s=${query}&page=${page}`).pipe(delay(1500));
  }

  getById(id): Observable<Movie>{
    return this.httpClient.get<Movie>(this.BASE_URL + '?i=' + id).pipe(delay(1500));
  }
}
