import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
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
export class HomeComponent implements OnInit, OnDestroy {

  animationState: AnimationStates = AnimationStates.RIGHT;

  constructor() { }

  ngOnInit() {
    this.wait(100).subscribe(() => {
      this.animationState = AnimationStates.MIDDLE;
    });
  }

  ngOnDestroy(){
    this.animationState = AnimationStates.LEFT;
    this.wait(500).subscribe(() => {
      this.animationState = AnimationStates.RIGHT;
    });
  }

  wait(time: number): Observable<any>{
    return of([]).pipe(delay(time));
  }

}
