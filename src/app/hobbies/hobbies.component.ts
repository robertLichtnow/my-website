import { Component, OnInit } from '@angular/core';
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
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css'],
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
export class HobbiesComponent implements OnInit {

  animationState: AnimationStates = AnimationStates.RIGHT;

  get date():Date{
    return new Date();
  }

  constructor() { }

  ngOnInit() {
    wait(0).subscribe(() => {
      this.animationState = AnimationStates.MIDDLE;
    });
  }

}
