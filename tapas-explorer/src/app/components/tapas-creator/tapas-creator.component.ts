import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { TapasService } from '../../services/tapas.service';
import { Tapa } from '../../../model/tapas';


@Component({
  selector: 'tap-tapas-creator-component',
  templateUrl: './tapas-creator.component.html',
  styleUrls: ['./tapas-creator.component.css']
})
export class TapasCreatorComponent {

  categories = ['Meat', 'Vegetarian', 'Vegan'];

  constructor(private router: Router, private tapasService: TapasService) {}

  save(value: Tapa) {
    this.tapasService.saveTapas(value)
      .subscribe(() => this.router.navigate(['/tapa/list']));
  }

}
