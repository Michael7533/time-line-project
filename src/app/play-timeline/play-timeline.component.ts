import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Timelines, timelines} from "../timelines";



@Component({
  selector: 'app-play-timeline',
  templateUrl: './play-timeline.component.html',
  styleUrls: ['./play-timeline.component.css']
})
export class playTimelineComponent implements OnInit {

  timeline : Timelines | undefined  ;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(){
    // First get the timeline id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const timelineIdFromRoute = Number(routeParams.get('timelineId'));

    // Find the timeline that correspond with the id provided in route.
    this.timeline = timelines.find(timeline => timeline.id === timelineIdFromRoute);}



}
