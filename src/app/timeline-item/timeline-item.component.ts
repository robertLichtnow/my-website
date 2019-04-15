import { Component, OnInit, Input } from '@angular/core';
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

}
