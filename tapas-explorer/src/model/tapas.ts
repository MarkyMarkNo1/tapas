export interface Tapas {
  id: number;
  name?: string;
  category?: string;
  pictureUrl?: string;
  price?: string;
  ingredients?: [string];
  rating?: number;
  location?: Location;
}
