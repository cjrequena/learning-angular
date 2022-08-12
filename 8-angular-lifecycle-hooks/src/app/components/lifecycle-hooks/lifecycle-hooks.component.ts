import { 
  Component, 
  Input, 
  OnInit, 
  SimpleChanges 
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit {

  @Input() value: string = 'Lifecycles Hooks'

  constructor(){
    console.log('Constructor called!');
  }

  ngOnChanges(change: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(change);
  }

  ngOnInit(){
    console.log('ngOnInit called!');
  }

  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!');
  }
}
