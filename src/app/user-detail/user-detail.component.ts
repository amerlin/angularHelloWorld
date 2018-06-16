import { Component, OnInit, Input } from '@angular/core';
import { User } from '../class/Users';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {

  constructor() { }

  @Input() user: User;

  ngOnInit() {
  }

  // save user
  saveUser() {
    console.log('save user');
    alert(this.user.id);
  }

}
