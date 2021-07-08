import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-timeline',
  templateUrl: './add-timeline.component.html',
  styleUrls: ['./add-timeline.component.css']
})
export class AddTimelineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  // @ts-ignore
  onSaveTimeLine(userForm:ngForm){

    console.log(userForm.value.name);
    console.log(userForm.value.date);
    console.log(userForm)
    

  }
}
