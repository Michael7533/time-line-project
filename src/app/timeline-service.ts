import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Timelines} from "./timelines";
import {Card} from "./cards";

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  baseAPIUrl = 'http://localhost:8080/api/timeline';
  //timelineId = 1;

  constructor(private http: HttpClient) {
  }

  // to get all timelines

  getTimelineList() {
    return this.http.get<Timelines[]>(this.baseAPIUrl)
  }

  // to get all cards for a timeline

  getCardList(timelineId : number){
    return this.http.get<Card[]>(this.baseAPIUrl+ '/' + timelineId + '/card' )
    }

  // to add a new timeline

  PostNewTimeline (newTimeline: Timelines){
      // @ts-ignore
     return this.http.post(this.baseAPIUrl, newTimeline).subscribe()
    }

    // delete a timeline

    deleteTimeline(timelineId: number) {
    
    
    this.http.delete(this.baseAPIUrl+'/'+ timelineId).subscribe()
  }
  
    // @ts-ignore
  
    
}
