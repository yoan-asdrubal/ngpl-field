import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {currentTimeStringFormatted} from 'ngpl-common';

@Component({
  selector: 'ngpl-field-test',
  templateUrl: './ngpl-field-test.component.html',
  styleUrls: ['./ngpl-field-test.component.scss']
})
export class NgplFieldTestComponent implements OnInit {

  formGroup: FormGroup;
  disableControl = new FormControl();
  readOnlyControl = new FormControl();
  loadingControl = new FormControl();


  constructor(private _formB: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this._formB.group({
      field1: [1995],
      field2: [currentTimeStringFormatted()],
      field3: [2080],
      field4: [2020],
      field5: [2022],
      field6: [null]

    });


  }


}
