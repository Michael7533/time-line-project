export interface Card {

  id: number;
  name : string;
  date: Date;
  imageUrl : string;
  //timelineId : number
  description : string;

}
export const cards = [
  {
    id: 1,
    name: 'facebook',
    Date: new Date('2019-12-12'),
    //timelineId : 1,
    description: 'c est quand que',
  },
  {
    id: 2,
    name: 'twitter',
    Date: new Date('2019-12-12'),
    //timelineId : 1,
    description: 'c est quand que',

  },

];

export class card {
}
