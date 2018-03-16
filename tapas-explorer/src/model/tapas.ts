export interface Tapa {
  id: number;
  name?: string;
  category?: string;
  pictureUrl?: string;
  price?: number;
  ingredients?: string[];
  rating?: number;
  location?: Location;
}

export interface Location {
  x_coordinate: number;
  y_coordinate: number;
}
