import { Component, OnInit } from '@angular/core';
import { Tapa } from 'model/tapas';
import { TapasService } from '../../services/tapas.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tap-tapas-list',
  templateUrl: './tapas-list.component.html',
  styleUrls: ['./tapas-list.component.css']
})
export class TapasListComponent implements OnInit {

  tapas$: Observable<Array<Tapa>>;

  constructor(private tapasService: TapasService) { }

  ngOnInit() {
    this.tapas$ = this.tapasService.getTapas();
  }

}
