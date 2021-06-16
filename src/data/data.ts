export const data = [
  {
    id: '0',
    title: 'Разработка лендинга',
    numberTitle: '01',
    name: 'landing-page',
  },
  {
    id: '1',
    title: 'Разработка промосайта',
    numberTitle: '02',
    name: 'promo',
  },
  {
    id: '2',
    title: 'Разработка корпоративного сайта',
    numberTitle: '03',
    name: 'corporate',
  },
  {
    id: '3',
    title: 'Разработка интернет-магазина',
    numberTitle: '04',
    name: 'e-commerce',
  },
  {
    id: '4',
    title: 'Разработка интернет-портала',
    numberTitle: '05',
    name: 'portal',
  },
];

export interface INavItemInterface {
  id: string;
  title: string;
  numberTitle: string;
  name: string;
}
