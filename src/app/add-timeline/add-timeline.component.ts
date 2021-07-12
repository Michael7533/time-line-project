import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TimelineService } from '../timeline-service';

@Component({
  selector: 'app-add-timeline',
  templateUrl: './add-timeline.component.html',
  styleUrls: ['./add-timeline.component.css']
})
export class AddTimelineComponent implements OnInit {

  constructor(private timelineService : TimelineService,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {

  }
  // @ts-ignore
  onSaveTimeLine(userForm:ngForm){

    console.log(userForm.value.name);
    console.log(userForm.value.date);
    console.log(userForm);
    const newTimeline = {
      "id": null,
      "name": userForm.value.name,
      "creationDate": userForm.value.date,
      "updateDate": userForm.value.date,
      "category": userForm.value.category,
      "cardList": []
    }
    console.log(newTimeline);
    JSON.stringify(newTimeline);

    // @ts-ignore
    this.timelineService.PostNewTimeline(newTimeline);
    
  }

}

