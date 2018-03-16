import { Injectable } from '@angular/core';
import { Tapa } from '../../model/tapas';
import { TAPAS_DATA } from '../../data/tapas-data';

interface TapasResponse {
  item: Tapa;
}

interface TapasResponse {
  items: Tapa[];
}

@Injectable()
export class TapasService {
  constructor() {}

  getTapas() {
    return TAPAS_DATA;
  }

  getTapasByID(id: number) {
    return TAPAS_DATA[id];
  }

  // getTapasByFilter(filterObject: any){

  // }

  saveTapas(tapa: Tapa) {
    TAPAS_DATA.push(tapa);
  }
}
