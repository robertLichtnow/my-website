import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { TimelineItem } from './timeline-item';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.css']
})
export class TimelineItemComponent implements OnInit {

  @Input()
  items:TimelineItem[] = [];

  constructor() { }

  ngOnInit() {
  }

  parseDate(date: Date):string{
    return `${("0" + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear().toString().substr(2,4)}`;
  }
  
}
