import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TimelineListComponent } from './timeline-list/timeline-list.component';
import {RouterModule} from "@angular/router";
import { AddTimelineComponent } from './add-timeline/add-timeline.component';
import { playTimelineComponent } from './play-timeline/play-timeline.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: TimelineListComponent },
      { path: 'play/:timelineId', component: playTimelineComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    TimelineListComponent,
    AddTimelineComponent,
    playTimelineComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
