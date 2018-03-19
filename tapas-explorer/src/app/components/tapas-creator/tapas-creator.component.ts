import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as L from 'leaflet';

import { Router } from '@angular/router';
import { TapasService } from '../../services/tapas.service';
import { Tapa } from '../../../model/tapas';
import { icon } from 'leaflet';

@Component({
  selector: 'tap-tapas-creator-component',
  templateUrl: './tapas-creator.component.html',
  styleUrls: ['./tapas-creator.component.css']
})
export class TapasCreatorComponent implements OnInit, AfterViewInit {
  accesstoken = 'pk.eyJ1IjoibGVucCIsImEiOiJjamV2NTl2emowYnp0MzFvMTZlbzkwazJ0In0.34OPmJx4phT0bGNFe7f8HA';

  categories = ['Meat', 'Vegetarian', 'Vegan'];
  options: any;
  map: any;

  coordinates: any;

  marker: any;

  tapaIcon = icon({
    iconSize: [50, 50],
    iconAnchor: [13, 41],
    iconUrl: 'assets/img/tapas_64x64.png',
    shadowUrl: 'leaflet/marker-shadow.png'
  });

  constructor(private router: Router, private tapasService: TapasService) {}

  ngOnInit() {
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
  }

  ngAfterViewInit(): void {
    this.map = L.map('pointMap').setView([28.145412, -15.430808], 15);
    this.options.layers[0].addTo(this.map);

    this.map.on('click', e => {
      if (this.marker) {
        this.map.removeLayer(this.marker);
      }
      this.coordinates = [e.latlng.lat, e.latlng.lng];
      this.marker = L.marker(this.coordinates, {
        icon: this.tapaIcon
      });
      this.marker.addTo(this.map);
    });
  }

  save(value: Tapa) {
    this.tapasService
      .saveTapas({...value, location: this.coordinates})
      .subscribe(() => this.router.navigate(['/tapa/list']));
  }
}
