import {Card} from "./cards";

export interface Timelines {
  id: number;
  name: string;
  creationDate: Date;
  updateDate: Date;
  //category: string;
  cardList : Card[];


}


export const timelines = [
  {
    "id": 1,
    "name": "Numérique",
    "creationDate": new Date('2019-12-11'),
    "updateDate": new Date('2019-12-11'),
    "category": "CNF",
    "cardList": [
      {
        "id": 1,
        "name": "Facebook",
        "date": new Date('2019-12-11'),
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Facebook_New_Logo_%282015%29.svg",
        "description": "Invention du plus célèbre réseau social"
      },
      {
        "id": 2,
        "name": "Twitter",
        "date": new Date('2019-12-11'),
        "imageUrl": "https://upload.wikimedia.org/wikipedia/fr/c/c8/Twitter_Bird.svg",
        "description": "Le réseau social préféré de D. Trump"
      },
      {
        "id": 3,
        "name": "Snapchat",
        "date": new Date('2019-12-11'),
        "imageUrl": "https://upload.wikimedia.org/wikipedia/fr/a/ad/Logo-Snapchat.png",
        "description": "Pour ceux qui ont peur que les photos restent ..."
      },
      {
        "id": 4,
        "name": "Windows",
        "date": new Date('2019-12-11'),
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Windows_1.0_screenshot.png",
        "description": "Le premier OS de Microsoft"
      },

    ]
  },
  {
    "id": 2,
    "name": "Geographie",
    "creationDate": new Date('2019-12-11'),
    "updateDate": new Date('2019-12-11'),
    "category": "JSP ",
    "cardList": []
  },
  {
    "id": 3,
    "name": "t'es en local guignol",
    "creationDate": new Date('2019-12-11'),
    "updateDate": new Date('2019-12-11'),
    "category": "JSP ",
    "cardList": []
  }

];
