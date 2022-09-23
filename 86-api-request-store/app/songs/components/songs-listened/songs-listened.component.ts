import { Component, OnInit } from '@angular/core';

import { SongsService } from '../../services/songs.service';

import { Store } from '../../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'songs-listened',
  template: `
    <div class="songs">
      <songs-list
        [list]="listened$ | async"
        (toggle)="onToggle($event)">
        Played
      </songs-list>
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
    this.listened$ = this.store.select('playlist')
    .filter(Boolean)
    .map(playlist => playlist.filter(track => track.listened));
  }

  onToggle(event) {
    this.songsService.toggle(event)
  }
}