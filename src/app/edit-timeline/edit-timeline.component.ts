import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../cards';
import { TimelineService } from '../timeline-service';
import { timelines } from '../timelines';


@Component({
  selector: 'app-edit-timeline',
  templateUrl: './edit-timeline.component.html',
  styleUrls: ['./edit-timeline.component.css']
})
export class EditTimelineComponent implements OnInit {//timeline : Timelines | undefined  ;

  currentCardId : number | undefined = 1;
  cardsToPlay : Card[] | undefined;
  cardsPlayed : Card[] | undefined =[]
  currentCard : Card | undefined;
  timeline: any | undefined;
  baseAPIUrl = 'http://localhost:8080/api/timeline';
  http: any;
  constructor(
    private timelineService : TimelineService,
    private route: ActivatedRoute,


    //  private http: HttpClient,

  ) { }

  ngOnInit(){

    // First get the timeline id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const timelineIdFromRoute = Number(routeParams.get('timelineId'));

    // Find the timeline that correspond with the id provided in route.
    this.timeline = timelines.find(timeline => timeline.id === timelineIdFromRoute);
    // @ts-ignore
    console.log((this.timeline))

    //this.cardsToPlay = this.timeline?.cardList
    this.timelineService.getCardList(timelineIdFromRoute).subscribe(
      cardList => {this.cardsToPlay=cardList;
        this.currentCard = this.cardsToPlay.find(card => card.id === this.currentCardId)
      }
    )

    // @ts-ignore
    //this.currentCard = this.cardsToPlay.find(card => card.id === this.currentCardId)
    // @ts-ignore
    //this.cardsToPlay.slice(0)

    console.log(this.currentCard?.id)

    // @ts-ignore
    /*this.cardsPlayed = [{
      id: 2,
      name: 'twitter',
      date: new Date('2019-12-12'),
      //timelineId : 1,
      description: 'c est quand que',
    }]*/

    // @ts-ignore

    /*this.cardsPlayed.push(this.currentCard)*/


  }
  // @ts-ignore
  onTrySubmit(userForm:NgForm){
    console.log(userForm.value.try);
    // try = this.currentCard?.date
    // @ts-ignore
    console.log(new Date (this.currentCard?.date).getFullYear())
    // @ts-ignore
    if(userForm.value.try== new Date (this.currentCard?.date).getFullYear())
    { // @ts-ignore
      this.cardsPlayed.push(this.currentCard)
      // @ts-ignore
      this.cardsPlayed.sort(function (c1,c2){
        return (new Date (c1?.date).getFullYear())-(new Date (c2?.date).getFullYear())
      })

      // @ts-ignore

      // @ts-ignore
      this.currentCardId++
      // @ts-ignore
      this.currentCard = this.cardsToPlay.find(card => card.id === this.currentCardId)
      console.log("bravo")


    }


  }
  // @ts-ignore

  deleteCardOnClick(cardId){
      console.log("je supprime que dalle")
      //this.http.delete('http://localhost:8080/api/timeline/1/card/2').subscribe()
  }
}


