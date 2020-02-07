import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-field-edit',
  templateUrl: './field-edit.component.html',
  styleUrls: ['./field-edit.component.scss']
})
export class FieldEditComponent implements OnInit {

  editMode = false;

  @HostListener("click") onClick() {
    this.editMode = !this.editMode;
  }

  @Input() value;

  constructor() { }

  ngOnInit() {
  }

}
