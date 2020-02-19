import { Component, OnInit } from '@angular/core';
import { SavedFacade } from '@showsnsuch/core-state';
import { Observable } from 'rxjs';
import { Saved } from '@showsnsuch/core-data';

@Component({
  selector: 'showsnsuch-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  saved$: Observable<Saved[]> = this.facade.allSaved$;

  constructor(
    private facade: SavedFacade
  ) { }

  ngOnInit() {
    this.facade.loadSaved();
  }

}
