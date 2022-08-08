import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item.type.ts';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  
  @Input() public item = {} as Item ;
  
  constructor() {}

  ngOnInit() {}
}
