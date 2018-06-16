import { Component, OnInit, Output } from '@angular/core';          // default library from core
import { UserService } from '../services/user.service';     // Import service class
import { User } from '../class/Users';
import { EventEmitter } from '@angular/core';

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

    @Output() updateUser = new EventEmitter<User>();

    // called when component is ready
    ngOnInit() {
        this.users = this.service.getUser();
    }

    onDeleteUser(user: User) {
        this.service.deleteUser(user);
    }

    onSelectUser(user: User) {
        // copy object
        // when edit form table not update

        const userCopy  = Object.assign({}, user);
        this.updateUser.emit(userCopy);
    }
}
