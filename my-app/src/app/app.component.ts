import { Component, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  collection: Item[];

  newItem: Item;

  ngOnInit(): void {
    this.collection = [
      new Item({reference: '1234', name: 'Marina', state: 0}),
      new Item({reference: '3456', name: 'Julie', state: 1}),
      new Item({reference: '6789', name: 'Aurélie', state: 2})
    ];

    this.resetNewItem();
  }

  addItem() {

    this.collection.push(this.newItem);
    this.resetNewItem();

  }

  resetNewItem() {
    this.newItem = new Item({reference: '', name: '', state: 0});
  }



}
