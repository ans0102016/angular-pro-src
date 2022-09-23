import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { FoodService } from '../food.service';

interface Side {
  name: string,
  price: number
}

export abstract class SideService {
  getSides: () => Observable<Side[]>
}

@Component({
  selector: 'side-viewer',
  providers: [
    FoodService,
    {
      provide: SideService,
      useExisting: FoodService
    }
  ],
  template: `
    <div>
      <div *ngFor="let item of items$ | async">
        {{ item.name }} {{ item.price | currency:'USD':true }}
      </div>
    </div>
  `
})
export class SideViewerComponent implements OnInit {
  items$: Observable<Side[]>;
  constructor(private foodService: SideService) {}
  ngOnInit() {
    this.items$ = this.foodService.getSides();
  }
}
