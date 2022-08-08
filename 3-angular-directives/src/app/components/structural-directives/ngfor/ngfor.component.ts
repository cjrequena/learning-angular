import { Component, OnInit } from '@angular/core';
import { Item } from './item.type.ts';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css'],
})
export class NgforComponent implements OnInit {


  public items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' }
  ];
  
  constructor() {}



  ngOnInit(): void {}

  trackByItems(index: number, item: Item): number { return item.id; }

}
