import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../users/user.service';
import { EventEmitter } from '@angular/core';           // this from core

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
  // accept external variable named input
  // tslint:disable-next-line:no-input-rename
  @Input('user-data') user;

  // output variable
  // tslint:disable-next-line:no-output-rename
  @Output('onDeleteUser') userDeleted = new EventEmitter;


  // constructor
  constructor(private service: UserService) { }

  // init
  ngOnInit() {
    console.log('user component onInit');
  }

  // delete user (user from component)
  deleteUser(user) {
    // this.service.deleteUser(user);    // local event

    // emit event out (to parent)
    this.userDeleted.emit(this.user);

  }

}
