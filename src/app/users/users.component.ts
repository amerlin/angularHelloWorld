import { Component, OnInit } from '@angular/core';          // default library from core
import { UserService } from './user.service';       // Import service class

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
    usersFromService = [];

    // local export to export
    private _users = [
        {
            name: 'Name001',
            lastname: 'LastName001',
            email: 'email001',
            fiscalcode: 'fiscalcode001',
            province: 'province001',
            telephone: 'telephone001'
        },
        {
            name: 'Name002',
            lastname: 'LastName002',
            email: 'email002',
            fiscalcode: 'fiscalcode002',
            province: 'province002',
            telephone: 'telephone002'
        },
        {
            name: 'Name003',
            lastname: 'LastName003',
            email: 'email003',
            fiscalcode: 'fiscalcode003',
            province: 'province003',
            telephone: 'telephone003'
        },
        {
            name: 'Name004',
            lastname: 'LastName004',
            email: 'email004',
            fiscalcode: 'fiscalcode004',
            province: 'province004',
            telephone: 'telephone004'
        }
    ];
    public get users() {
        return this._users;
    }
    public set users(value) {
        this._users = value;
    }

    // Dependency injection
    // add in app.module.ts UserService in providers section
    // a private service variable is created
    // can access this variable with this keyword
    constructor(private service: UserService) {
    }

    // called when component is ready
    ngOnInit() {
        this.usersFromService = this.service.getUser();
    }


}
