import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { AnimationStates } from '../animation-states';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('right-middle-left', [
      state('right', style({
        left: '100vw'
      })),
      state('middle', style({
        left: '0vw'
      })),
      state('left', style({
        left: '-100vw'
      })),
      transition('right <=> middle', [
        animate('0.5s')
      ]),
      transition('middle <=> left', [
        animate('0.5s')
      ]),
      transition('left <=> right', [
        animate('0s')
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {

  animationState: AnimationStates = AnimationStates.RIGHT;

  constructor() { }

  ngOnInit() {
    this.delay(100).subscribe(() => {
      this.animationState = AnimationStates.MIDDLE;
    });
  }

  delay(time: number): Observable<any>{
    return of([]).pipe(delay(time));
  }

  toggle(){
    this.animationState = AnimationStates.LEFT;
    this.delay(100).subscribe(() => {
      this.animationState = AnimationStates.RIGHT;
    });
  }

}
