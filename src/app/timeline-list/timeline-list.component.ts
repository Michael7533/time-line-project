import { Component } from '@angular/core';
import {timelines} from "../timelines";
import {TimelineService} from "../timeline-service";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-timeline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['./timeline-list.component.css']
})
export class TimelineListComponent {

  timelines=this.timelineService.getTimelineList();
  baseAPIUrl = 'http://localhost:8080/api/timeline';
  private timeline: any;


  constructor(private timelineService : TimelineService,
              private http: HttpClient) {
 }

  deleteTimeline(timelineId: number) {
    // @ts-ignore
    this.timeline = timelines.find(timeline => timeline.id === timelineId)
    
    //then, delete timeline whith empty cardlist

    this.http.delete(this.baseAPIUrl+'/'+ timelineId).subscribe()
  }
}
