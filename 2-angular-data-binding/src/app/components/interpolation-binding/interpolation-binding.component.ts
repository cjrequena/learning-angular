import { Component, Inject, Injectable, OnInit } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.css']
})
export class InterpolationBindingComponent implements OnInit {

  public attr1: string = "A public class attribute 'attr1'";
  private attr2: string = "A private class attribute 'attr2'"
  public _attr3: string = "A private class attribute 'attr3'"
  
  constructor() { }

  ngOnInit(): void {
  }

  getAttr2(){
    return this.attr2;
  }

  get attr3(){
    return this._attr3;
  }



}
