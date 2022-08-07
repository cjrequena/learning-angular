import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent implements OnInit {
  public imagePath: string = 'assets/shopping.jpg';
  public isHidden: boolean = false;
  public isSpecial: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
