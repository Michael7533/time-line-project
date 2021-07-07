import { Component } from '@angular/core';
import {timelines} from "../timelines";



@Component({
  selector: 'app-timeline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['./timeline-list.component.css']
})
export class TimelineListComponent {
  timelines=timelines

}
