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
import { Hobbies } from './hobbies';
import { Chart } from 'chart.js';

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

  _hobbies:Hobbies[] = [];

  get hobbies():Hobbies[]{
    if(!this._hobbies.length){
      let h = this._hobbies;
      h.push(new Hobbies("Gaming", 10,"#0FA3B1"));
      h.push(new Hobbies("Anime", 15,"#7B4B94"));
      h.push(new Hobbies("Pubs", 4, "#EDDEA4"));
      h.push(new Hobbies("Music",6,"#F71735"));
      h.push(new Hobbies("Procrastinating", 2, "#FF9B42"));
    }
    return this._hobbies;
  }

  hobbiesChart = [];

  get date():Date{
    return new Date();
  }

  constructor() { }

  ngOnInit() {
    wait(0).subscribe(() => {
      this.animationState = AnimationStates.MIDDLE;
    });

    this.loadHobbiesChart();
  }

  private loadHobbiesChart(){
    this.hobbiesChart = new Chart('hobbies-canvas', {
      type: 'doughnut',
      data: {
        labels: this.hobbies.map(v => v.name),
        datasets: [
          {
            label: "Soft Skills",
            data: this.hobbies.map(v => v.value),
            backgroundColor: this.hobbies.map(v => v.color)
          }
        ]
      },
      options:{
        legend:{
          position: 'right',
          labels:{
            fontSize: 14,
            padding: 8,
            fontColor: '#FFF'
          }
        },
        animation: {
          easing: 'easeInOutCubic'
        }
      }
    });
  }

}
