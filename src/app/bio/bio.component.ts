import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { AnimationStates } from '../animation-states';
import { wait } from '../utils/utils';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css'],
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
export class BioComponent implements OnInit, OnDestroy {

  animationState: AnimationStates = AnimationStates.RIGHT;

  constructor() { }

  ngOnInit() {
    wait(100).subscribe(() => {
      this.animationState = AnimationStates.MIDDLE;
    });
  }

  ngOnDestroy(){
    this.animationState = AnimationStates.LEFT;
    wait(500).subscribe(() => {
      this.animationState = AnimationStates.RIGHT;
    });
  }

 

}
