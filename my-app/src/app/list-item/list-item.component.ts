import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Item } from '../item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  collection: Item[];

  constructor(private _AppComponent: AppComponent) { }

  ngOnInit() {
    this.collection = this._AppComponent.collection;
  }

  changeState(item: Item, state: number) {
    item.state = state;
  }

}
