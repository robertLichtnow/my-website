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

  _mySoftSkills:Skills;

  softSkillsChart = [];

  get mySoftSkills():Skills{
    if(this._mySoftSkills == null ){
      this._mySoftSkills = new Skills();
      this._mySoftSkills.skills.set("Self-Motivation",6);
      this._mySoftSkills.skills.set("Problem Solving",5);
      this._mySoftSkills.skills.set("Communication",4);    
      this._mySoftSkills.skills.set("Leadership",3);
      this._mySoftSkills.skills.set("Negotiation", 2);
      this._mySoftSkills.skills.set("Work Under Pressure",4);
      this._mySoftSkills.skills.set("Flexibility", 6);
      this._mySoftSkills.skills.set("Team Work", 4);
      this._mySoftSkills.skills.set("Open Mind", 6);
      this._mySoftSkills.skills.set("Responsibility",5);
    }
    return this._mySoftSkills;
  }

  _myHardSkills:Skills;

  hardSkillsChart = [];

  get myHardSkills():Skills{
    if(this._myHardSkills == null ){
      this._myHardSkills = new Skills();
      this._myHardSkills.skills.set("Angular",6);
      this._myHardSkills.skills.set("JS/TS",5);
      this._myHardSkills.skills.set("Java",5);
      this._myHardSkills.skills.set("Git",4);    
      this._myHardSkills.skills.set("Docker", 2);
      this._myHardSkills.skills.set("PHP",3);
      this._myHardSkills.skills.set("Jira/Trello", 5);
      this._myHardSkills.skills.set("Scrum",4);
      this._myHardSkills.skills.set("Bootstrap 4", 5);
      this._myHardSkills.skills.set("CSS", 4);
    }
    return this._myHardSkills;
  }

  

  constructor() { }

  ngOnInit() {
    wait(0).subscribe(() => {
      this.animationState = AnimationStates.MIDDLE;
    });

    this.loadSoftSkillsChart();
    this.loadHardSkillsChart();
    
  }

  ngOnDestroy(){
    this.animationState = AnimationStates.LEFT;
    wait(500).subscribe(() => {
      this.animationState = AnimationStates.RIGHT;
    });
  }

  private loadSoftSkillsChart(){
    this.softSkillsChart = new Chart('soft-skills-canvas',{
      type: 'radar',
      data: {
        labels: Array.from(this.mySoftSkills.skills.keys()),
        datasets: [
          {
            label: "Soft Skills",
            data: Array.from(this.mySoftSkills.skills.values()),
            backgroundColor: '#499F6860'
          }
        ]
      },
      options:{
        scale: {
          ticks: {
            beginAtZero: true
          },
          gridLines:{
            color: ['#BBB','#BBB','#BBB','#BBB','#BBB','#BBB'],
            lineWidth: 1.15
          },
          pointLabels:{
            fontSize: 14
          }
        },
        tooltips:{
          callbacks:{
            label: (tooltipItem, chart) => {
              const value = chart.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
              const label = chart.labels[tooltipItem.index] + ':';
              return label + value;
            },
            title:()=>{}
          }
        }
      }
    });
  }

  private loadHardSkillsChart(){
    this.hardSkillsChart = new Chart('hard-skills-canvas',{
      type: 'radar',
      data: {
        labels: Array.from(this.myHardSkills.skills.keys()),
        datasets: [
          {
            label: "Hard Skills",
            data: Array.from(this.myHardSkills.skills.values()),
            backgroundColor: '#7135A560'
          }
        ]
      },
      options:{
        scale: {
          ticks: {
            beginAtZero: true
          },
          gridLines:{
            color: ['#BBB','#BBB','#BBB','#BBB','#BBB','#BBB'],
            lineWidth: 1.15
          },
          pointLabels:{
            fontSize: 14
          }
        },
        tooltips:{
          callbacks:{
            label: (tooltipItem, chart) => {
              const value = chart.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
              const label = chart.labels[tooltipItem.index] + ':';
              return label + value;
            },
            title:()=>{}
          }
        }
      }
    });
  }

  getRandomColor():string {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    //alpha
    color += '50';
    return color;
  }

}
