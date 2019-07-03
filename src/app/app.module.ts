import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    StockSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
