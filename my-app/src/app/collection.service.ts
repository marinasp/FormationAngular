import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable()
export class CollectionService {

  collection: Item[];

  constructor() {
    this.collection = [
      new Item({reference: '1234', name: 'Marina', state: 0}),
      new Item({reference: '3456', name: 'Julie', state: 1}),
      new Item({reference: '6789', name: 'Aurélie', state: 2})
    ];
   }

  addItem(item: Item) {
    this.collection.push(item);
  }

}
