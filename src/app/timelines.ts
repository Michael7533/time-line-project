export interface Timelines {
  id: number;
  name: string;
  category: string;
  creationDate: string;
  updateDate: string;
  cardNumber: number;



}

export const timelines = [
  {
    id: 1,
    name: 'timeline 1',
    category: 'jsp',
    creationDate: '01:01:2000',
    updateDate: '02:01:2000',
    cardNumber : 22

  },
  {
    id: 2,
    name: 'timeline 2',
    category: 'jsp',
    creationDate: '27:01:2000',
    updateDate: '03:06:2000',
    cardNumber : 2

  },
  {
    id: 3,
    name: 'timeline 3',
    category: 'jsp',
    creationDate: '01:01:2000',
    updateDate: '05:01:2000',
    cardNumber : 222

  }
];
