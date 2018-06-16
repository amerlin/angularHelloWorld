import { Component } from '@angular/core';
import { User } from './class/Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  sample = 'sample text';

  showForm = false;
  userSelected: User = new User();

  updateUser(user: User) {
    this.showForm = true;
    this.userSelected = user;
  }

}
