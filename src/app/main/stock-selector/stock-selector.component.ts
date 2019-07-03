import { Component, OnInit } from '@angular/core';
import { STOCK_TYPES } from 'src/app/shared/types/stock.types';

@Component({
  selector: 'stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent implements OnInit {

  public stockList = STOCK_TYPES;

  constructor() { }

  ngOnInit() {

  }

}
