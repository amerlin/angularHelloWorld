import { Component, OnInit, Input } from '@angular/core';
import { User } from '../class/Users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {

  constructor(private userService: UserService) { }

  // input element
  @Input() user: User;

  ngOnInit() {
  }

  // save user
  saveUser() {
    if (this.user.id > 0) {                       // Edit user
      this.userService.updateUser(this.user);
    }
    if (this.user.id === 0) {
      this.userService.createUser(this.user);     // New user
    }

  }

}
