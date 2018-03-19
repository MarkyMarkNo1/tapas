import { Tapa } from '../model/tapas';

export const TAPAS_DATA: Array<Tapa> = [
  {
    id: 0,
    name: 'Patatas Bravas',
    category: 'Vegan',
    pictureUrl:
      // 'https://www.rebanando.com/uploads/media/patatas-bravas-alioli.jpg?1385571346',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Patatas_bravas_madrid.jpg/240px-Patatas_bravas_madrid.jpg',
    price: 2,
    ingredients: ['potatoes'],
    rating: 3,
    location: [28.143611, -15.432281]
  },
  {
    id: 1,
    name: 'Las Palmas Sausage',
    category: 'Meat',
    pictureUrl:
      'https://i0.wp.com/www.recetum.com/wp-content/uploads/2014/01/Pinchos-de-morcilla-y-pimientos.png?resize=671%2C503',
    price: 2,
    ingredients: ['sausage', 'peppers'],
    rating: 4,
    location: [28.141735, -15.434532]
  },
  {
    id: 2,
    name: 'Chipirones',
    category: 'Vegetarian',
    pictureUrl:
      'https://t2.rg.ltmcdn.com/es/images/2/1/3/img_chipirones_a_la_plancha_tiernos_59312_600.jpg',
    price: 5,
    ingredients: [''],
    rating: 5,
    location: [28.147209179439148, -15.433044433593752]
  }
];
