import { Component, OnInit, Input } from '@angular/core';
import { TapasService } from '../../services/tapas.service';
import { Tapa } from 'model/tapas';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tap-tapas-detail',
  templateUrl: './tapas-detail.component.html',
  styleUrls: ['./tapas-detail.component.css']
})
export class TapasDetailComponent implements OnInit {
  tapa: Tapa;

  constructor(
    private tapasService: TapasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.tapasService
      .getTapaByID(parseInt(this.route.snapshot.paramMap.get('id'), 10))
      .subscribe(tapa => (this.tapa = tapa));
  }
}
