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
  
  events = [];

  todayEvent = {date: '', header:'Today!!!', content: `Get in touch and let's make something together!`};

  constructor() { }

  ngOnInit() {
    wait(0).subscribe(() => {
      this.animationState = AnimationStates.MIDDLE;
    });

    this.events = [
      {date: new Date('2018-08-02'), header: 'First job!',content:'First fullstack webdevelopment job! Yay!'},
      {date: new Date('2018-01-02'), header: 'First solo project!',content:'Game on unity deployed to playstore!', link:'https://play.google.com/store/apps/details?id=com.RobGDev.BumpyRocket'},
      {date: new Date('2016-07-02'), header: 'First front-end only project at internship!',content:`And it's still on production!!`, link:'https://apps.itaipu.gov.br/PAMHO/MenuInicial.jsf'},
      {date: new Date('2016-04-02'), header: 'Internship at a multinational company!',content:'Hooray!! Itaipu Binacional was awesome!'},
      {date: new Date('2015-05-02'), header: 'Voluntary internship at a biotechnology lab',content:'Lots of science and AI here!!'},
      {date: new Date('2015-02-02'), header: 'First day at computer science college',content:'And it was amazing!!'},
    ];
  }

  ngOnDestroy(){
    this.animationState = AnimationStates.LEFT;
    wait(500).subscribe(() => {
      this.animationState = AnimationStates.RIGHT;
    });
  }

  parseDate(date: Date):string{
    return `${("0" + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear().toString().substr(2,4)}`;
  }

}
