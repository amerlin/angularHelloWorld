import { Component, OnInit, Input } from '@angular/core';

// component definition
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

// class UserComponent
export class UserComponent implements OnInit {

  // with alias
  // tslint:disable-next-line:no-input-rename
  @Input('user-data') user;    // accept external variable named input

  // constructor
  constructor() { }

  // init
  ngOnInit() {
    console.log('user component onInit');
  }

}
