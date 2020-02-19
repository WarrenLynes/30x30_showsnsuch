import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import {Saved, emptySaved} from './saved';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SavedService {
  constructor(private httpClient: HttpClient) { }

  all() {
    const savedMovies = JSON.parse(localStorage.getItem('SAVED_MOVIES'));
    return of(savedMovies).pipe(delay(1000));
  }

  create(model) {
    const savedMovies = JSON.parse(localStorage.getItem('SAVED_MOVIES'));
    savedMovies.push(model);
    localStorage.setItem('SAVED_MOVIES', JSON.stringify(savedMovies));
    return of(model);
  }
}
