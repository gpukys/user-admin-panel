import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'dateOfBirth', 'gender'];
  dataSource = [{name: 'Germant', surname: 'Sur', dateOfBirth: '1997-11-14', gender: 'male'}];
  editMode = false;
  selectedRow;

  constructor() { }

  ngOnInit() {
  }

  aha(event, el) {
    this.selectedRow = el;
    this.editMode = true;
  }

}
