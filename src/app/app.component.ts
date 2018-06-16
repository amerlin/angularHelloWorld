import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UserInterface } from './interfaces/user';
import { User } from './class/Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  sample = 'sample text';

  userSelected: User;

  updateUser(user: User) {
    this.userSelected = user;
  }

}
