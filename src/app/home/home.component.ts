import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        left: '0vw'
      })),
      state('closed', style({
        left: '-100vw'
      })),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {

  isOpen = true;

  toggle():void{
    this.isOpen = !this.isOpen; 
  }

  constructor() { }

  ngOnInit() {
  }

}
