import { Component, OnInit } from '@angular/core';

import { SongsService } from '../../services/songs.service';

import { Store } from '../../../store';

import { Observable } from 'rxjs';

@Component({
  selector: 'songs-listened',
  template: `
    <div class="songs">
      <div *ngFor="let item of listened$ | async">
        {{ item.artist }}
        {{ item.track }}
      </div>
    </div>
  `
})
export class SongsListenedComponent implements OnInit {

  listened$: Observable<any[]>;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit(): void {
    this.listened$ = this.store.select('playlist');
  }

}