import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onNewUser = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // lanch onNewUserEvent
  newUser() {
    this.onNewUser.emit();
  }

}
