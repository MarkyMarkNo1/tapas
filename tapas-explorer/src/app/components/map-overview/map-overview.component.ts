import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Observable } from 'rxjs/Observable';
import { Tapa } from 'model/tapas';
import { TapasService } from 'app/services/tapas.service';
import { map, tap } from 'rxjs/operators';
import { Layer } from 'leaflet';
import { icon, latLng, marker, polyline, tileLayer } from 'leaflet';
// import { Dynamic } from 'leaflet.dynamic';

@Component({
  selector: 'tap-map-overview',
  templateUrl: './map-overview.component.html',
  styleUrls: ['./map-overview.component.css']
})
export class MapOverviewComponent implements OnInit {
  options: any;
  layers: Layer[];
  optionsLoaded = false;
  map: any;

  accesstoken = 'pk.eyJ1IjoibGVucCIsImEiOiJjamV2NTl2emowYnp0MzFvMTZlbzkwazJ0In0.34OPmJx4phT0bGNFe7f8HA';

  tapas$: Tapa[];

  tapaIcon = icon({
    iconSize: [50, 50],
    iconAnchor: [13, 41],
    iconUrl: 'assets/img/tapas_64x64.png',
    shadowUrl: 'leaflet/marker-shadow.png'
  });

  constructor(private tapasService: TapasService) {}

  ngOnInit() {
    this.layers = new Array<Layer>();

    this.options = {
      layers: [
        L.tileLayer(
          'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
          {
            attribution:
            // tslint:disable-next-line:max-line-length
              'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: this.accesstoken
          }
        )
      ],
      zoom: 15,
      center: L.latLng([28.145412, -15.430808])
    };
    this.optionsLoaded = true;

    this.tapasService
      .getTapas()
      .pipe(
        tap(console.log)
        // dynamically add it to some layer
      )
      .subscribe(tapas => {
        tapas.forEach(tapa => {
          this.layers.push(
            L.marker(tapa.location, {
              icon: this.tapaIcon
            }).bindPopup(
              `<p> ${tapa.name} </p><p><img src="${tapa.pictureUrl}"
              style="height: auto; width: 90px;"/></p><a mat-button
              [routerLink]=['/tapa', ${tapa.id} ]>Show details</a>`
            )
          );
        });
      });
  }
}
