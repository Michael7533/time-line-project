import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TimelineListComponent } from './timeline-list/timeline-list.component';
import {RouterModule} from "@angular/router";
import { AddTimelineComponent } from './add-timeline/add-timeline.component';
import { playTimelineComponent } from './play-timeline/play-timeline.component';
import {TimelineService} from "./timeline-service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditTimelineComponent } from './edit-timeline/edit-timeline.component';
import { EditCardComponent } from './edit-card/edit-card.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: TimelineListComponent},
      {path: 'play/:timelineId', component: playTimelineComponent},
      {path: 'edit/:timelineId', component: EditTimelineComponent},
      {path: 'add', component: AddTimelineComponent},
      {path: 'cardEdit/:cardId', component: EditCardComponent},
    ]),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    TimelineListComponent,
    AddTimelineComponent,
    playTimelineComponent,
    EditTimelineComponent,
    EditCardComponent,

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
