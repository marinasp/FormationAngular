import { Component, OnInit } from '@angular/core';

import { CollectionService } from '../collection.service';
import { Item } from '../item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  collection: Item[];

  constructor(private _service: CollectionService) { }

  ngOnInit() {
    this.collection = this._service.collection;
  }

  changeState(item: Item, state: number) {
    item.state = state;
  }

}
