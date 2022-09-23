import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    StockInventoryModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}
