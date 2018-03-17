import { Tapa } from '../model/tapas';

export const TAPAS_DATA: Array<Tapa> = [
  {
    id: 0,
    name: 'Patatas Bravas',
    category: 'Vegan',
    pictureUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Patatas_bravas_madrid.jpg/240px-Patatas_bravas_madrid.jpg',
    price: 2,
    ingredients: ['potatoes'],
    rating: 3,
    location: { x_coordinate: 1, y_coordinate: 1}
  },
  {
    id: 1,
    name: 'Las Palmas Sausage',
    category: 'Meat',
    pictureUrl:
     'https://i0.wp.com/www.recetum.com/wp-content/uploads/2014/01/Pinchos-de-morcilla-y-pimientos.png?resize=671%2C503',
    price: 2.50,
    ingredients: ['sausage' , 'peppers'],
    rating: 4,
    location: { x_coordinate: 1, y_coordinate: 1}
  }
];

