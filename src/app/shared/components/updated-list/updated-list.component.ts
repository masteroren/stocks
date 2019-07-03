import { Component, OnInit, Input } from '@angular/core';

export interface SelectOption {
  text: string;
  value: string;
}

@Component({
  selector: 'updated-list',
  templateUrl: './updated-list.component.html',
  styleUrls: ['./updated-list.component.scss']
})
export class UpdatedListComponent implements OnInit {

  @Input() options: SelectOption[];

  constructor() { }

  ngOnInit() {
  }

}
