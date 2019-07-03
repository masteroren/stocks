import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { StockSelectorComponent } from './main/stock-selector/stock-selector.component';
import { MatCardModule, MatSelectModule } from '@angular/material';
import { UpdatedListComponent } from './shared/components/updated-list/updated-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    StockSelectorComponent,
    UpdatedListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
