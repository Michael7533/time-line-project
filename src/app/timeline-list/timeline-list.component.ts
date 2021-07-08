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
  //timelines=timelines;
  timelines=this.timelineService.getTimelineList();
  baseAPIUrl = 'http://localhost:8080/api/timeline';
  private timeline: any;
  //cardsNb = this.timeline.cardList.length

  constructor(private timelineService : TimelineService,
              private http: HttpClient) {
 }
 /* deleteTimeline(timeline:any){
  console.log("timeline supprimée")
  }*/
  deleteTimeline(timelineId: number) {

    this.http.delete(this.baseAPIUrl+'/'+ timelineId).subscribe()
  }
}
