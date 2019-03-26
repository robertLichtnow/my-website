import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arrow-slider',
  templateUrl: './arrow-slider.component.html',
  styleUrls: ['./arrow-slider.component.css']
})
export class ArrowSliderComponent implements OnInit {

  @Input()
  leftLink: string;

  @Input()
  rightLink: string;

  constructor() { }

  ngOnInit() {
    
  }

}
