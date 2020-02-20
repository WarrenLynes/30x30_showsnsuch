import { Component, OnInit } from '@angular/core';
import { SavedFacade } from '@showsnsuch/core-state';
import { Observable, of } from 'rxjs';
import { Movie, Saved } from '@showsnsuch/core-data';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'showsnsuch-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent{

  saved$: Observable<Saved[]> = this.facade.allSaved$;

  constructor(
    private facade: SavedFacade
  ) { }
}
