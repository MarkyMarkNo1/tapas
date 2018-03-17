import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'tap-tapas-creator-component',
  templateUrl: './tapas-creator.component.html',
  styleUrls: ['./tapas-creator.component.css']
})
export class TapasCreatorComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({});

  }

}
