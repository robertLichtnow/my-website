import { Component, OnInit, OnDestroy } from '@angular/core';
import { Skills } from './skills';
import { Chart } from 'chart.js';
import { first } from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { wait } from '../utils/utils';
import { AnimationStates } from '../animation-states';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
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
export class SkillsComponent implements OnInit, OnDestroy {

  animationState: AnimationStates = AnimationStates.RIGHT;

  _mySkills:Skills;

  chart = [];

  get mySkills():Skills{
    if(this._mySkills == null ){
      this._mySkills = new Skills();
      this._mySkills.skills.set("TS/JS",5);
      this._mySkills.skills.set("Java",4);
      this._mySkills.skills.set("Angular",5);
      this._mySkills.skills.set("Fast Learning",6);
      this._mySkills.skills.set("Team Work", 4);
      this._mySkills.skills.set("Design Thinking", 5);
    }
    return this._mySkills;
  }
  

  constructor() { }

  ngOnInit() {
    wait(0).subscribe(() => {
      this.animationState = AnimationStates.MIDDLE;
    });

    let colors:string[] = [];
    for(let i=6;i--;){
      colors.push(this.getRandomColor());
    }

    this.chart = new Chart('skills-canvas',{
      type: 'radar',
      data: {
        labels: Array.from(this.mySkills.skills.keys()),
        datasets: [
          {
            label: "My Skills",
            data: Array.from(this.mySkills.skills.values()),
            backgroundColor: this.getRandomColor()
          }
        ]
      },
      options:{
        scale: {
          ticks: {
            beginAtZero: true
          }
        },
      }
    });
  }

  ngOnDestroy(){
    this.animationState = AnimationStates.LEFT;
    wait(500).subscribe(() => {
      this.animationState = AnimationStates.RIGHT;
    });
  }

  getRandomColor():string {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    //alpha
    color += '20';
    return color;
  }

}
