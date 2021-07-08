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

  getTimelineList() {
    return this.http.get<Timelines[]>(this.baseAPIUrl)
  }

  getCardList(timelineId : number){
    return this.http.get<Card[]>(this.baseAPIUrl+ '/' + timelineId + '/card' )
    }

    /*deleteTimeline()
  { return this.http.delete(this.baseAPIUrl+'/'+ this.timelineId)}

*/
}
