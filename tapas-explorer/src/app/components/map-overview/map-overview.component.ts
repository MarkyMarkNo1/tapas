import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'tap-map-overview',
  templateUrl: './map-overview.component.html',
  styleUrls: ['./map-overview.component.css']
})
export class MapOverviewComponent implements OnInit {
  options: any;
  optionsLoaded = false;

  accesstoken = 'pk.eyJ1IjoibGVucCIsImEiOiJjamV2NTl2emowYnp0MzFvMTZlbzkwazJ0In0.34OPmJx4phT0bGNFe7f8HA';

  constructor() {}

  ngOnInit() {

    // create map first then the options object
    this.options = {
      layers: [
        // L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //   maxZoom: 18,
        //   attribution: '...'
        // })
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
          // tslint:disable-next-line:max-line-length
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox.streets',
          accessToken: this.accesstoken
      })

      ],
      zoom: 15,
      center: L.latLng([28.145412, -15.430808])
    };

    this.optionsLoaded = true;
  }
}
