import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { TapasService } from '../../services/tapas.service';
import { Tapa } from '../../../model/tapas';

@Component({
  selector: 'tap-tapas-editor',
  templateUrl: './tapas-editor.component.html',
  styleUrls: ['./tapas-editor.component.css']
})

export class TapasEditorComponent implements OnInit {

  // we need to initialize since we can't use ?. operator with ngModel
  tapa: Tapa;

  categories = ['Meat', 'Vegetarian', 'Vegan'];

  constructor(private router: Router, private route: ActivatedRoute, private tapasService: TapasService) {}

  ngOnInit() {
    this.tapasService.getTapaByID(+this.route.snapshot.paramMap.get('id'))
                        .subscribe(tapa => this.tapa = tapa);
  }

  cancel(tapa: Tapa) {
    this.goToDetails(tapa);
  }

  save(tapa: Tapa) {
   this.tapasService.updateTapa(tapa)
                       .subscribe(() => this.goToDetails(tapa));
  }

  private goToDetails(tapa: Tapa) {
    this.router.navigate(['/tapa', tapa.id ]);
  }

}
