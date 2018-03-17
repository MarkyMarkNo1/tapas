import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, tap } from 'rxjs/operators';

import { TAPAS_DATA } from '../../data/tapas-data';
import { Tapa } from '../../model/tapas';

interface TapasResponse {
  item: Tapa;
}

interface TapasResponse {
  items: Tapa[];
}

@Injectable()
export class TapasService {
  constructor() {}

  getTapas(): Observable<Array<Tapa>> {
    return of(TAPAS_DATA).pipe(
      // tap(v => console.log(v))
    );
  }

  getTapaByID(id: number): Observable<Tapa> {
    return of(TAPAS_DATA[id]);
  }

  // getTapasByFilter(filterObject: any){

  // }

  saveTapas(tapa: Tapa): Observable<Tapa> {
    tapa.id = TAPAS_DATA.length;
    TAPAS_DATA.push(tapa);
    console.log(tapa);
    return of(tapa);
  }

  updateTapa(tapa: Tapa): Observable<Tapa> {
    return of(TAPAS_DATA[tapa.id] = tapa);
  }

}
