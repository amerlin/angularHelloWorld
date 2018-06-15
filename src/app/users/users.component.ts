import { Component, OnInit } from '@angular/core';          // default library from core
import { UserService } from '../services/user.service';     // Import service class
import { User } from '../interfaces/user';

// component definition
@Component({
    templateUrl: './users.component.html',      // template URL
    selector: 'app-users',                      // selector for this compoent
    styleUrls: ['./users.component.css'],       // component for css
})

// class to export
export class UsersComponent implements OnInit {
    title = 'Users';

    // Users from service
    users: User[] = [];

    // Dependency injection
    // add in app.module.ts UserService in providers section
    // a private service variable is created
    // can access this variable with this keyword
    constructor(private service: UserService) {
    }

    // called when component is ready
    ngOnInit() {
        this.users = this.service.getUser();
    }

    onDeleteUser(user) {
        this.service.deleteUser(user);
    }

}
