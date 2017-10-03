import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  collection: any;

  ngOnInit(): void {
    this.collection = [
      {reference: '1234', name: 'Marina', state: 0},
      {reference: '3456', name: 'Julie', state: 1},
      {reference: '6789', name: 'Aurélie', state: 2},
    ];
  }



}
