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

  accesstoken = 'pk.eyJ1IjoibGVucCIsImEiOiJjamV2NTl2emowYnp0MzFvMTZlbzkwazJ0In0.34OPmJx4phT0bGNFe7f8HA';

  tapas$: Tapa[];

  // // Marker for the top of Mt. Ranier
  // summit = marker([28.145611, -15.432281], {
  //   icon: icon({
  //     iconSize: [40, 40],
  //     iconAnchor: [13, 41],
  //     iconUrl: 'assets/img/tapas_64x64.png',
  //     shadowUrl: 'leaflet/marker-shadow.png'
  //   })
  // });
  tapaIcon = icon({
    iconSize: [40, 40],
    iconAnchor: [13, 41],
    iconUrl: 'assets/img/tapas_64x64.png',
    shadowUrl: 'leaflet/marker-shadow.png'
  });

  // tapaIcon = L.icon({
  //   iconUrl: 'src\assets\img\tapas.1.png',
  //   iconSize:     [38, 95], // size of the icon
  //   shadowSize:   [50, 64], // size of the shadow
  //   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  //   shadowAnchor: [4, 62],  // the same for the shadow
  //   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  // });

  constructor(private tapasService: TapasService) {}

  ngOnInit() {
    this.layers = new Array<Layer>();

    this.options = {
      layers: [
        L.tileLayer(
          'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
          {
            // tslint:disable-next-line:max-line-length
            attribution:
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

    // this.layers.push(
    //   L.marker([28.145412, -15.430808], { icon: this.tapaIcon })
    // );

    this.tapasService
      .getTapas()
      .pipe(
        tap(console.log)
        // dynamically add it to some layer
      )
      .subscribe(tapas => {
        tapas.forEach(element => {
          this.layers.push(L.marker(element.location, { icon: this.tapaIcon }));
        });
      }); // this.layers.push(L.marker(tapas.location, { icon: this.tapaIcon })));
  }
}
