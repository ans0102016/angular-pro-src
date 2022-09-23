import { Component } from '@angular/core';
import { withLatestFrom } from 'rxjs/operator/withLatestFrom';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <songs-playlist></songs-playlist>
      <songs-listened></songs-listened>
      <songs-favourites></songs-favourites>
    </div>
  `
})
export class AppComponent {}
