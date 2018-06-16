import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user';

// this service can have dependency
@Injectable()

// USER SERVICE
export class UserService {

    // local var
    private _users: Array<UserInterface> = [
        {
            id:  1,
            name: 'Name001',
            lastname: 'LastName001',
            email: 'email001',
            fiscalcode: 'fiscalcode001',
            province: 'province001',
            telephone: '1231',
            age: '12'
        },
        {
            id: 2,
            name: 'Name002',
            lastname: 'LastName002',
            email: 'email002',
            fiscalcode: 'fiscalcode002',
            province: 'province002',
            telephone: '1231',
            age: '12'
        },
        {
            id: 3,
            name: 'Name003',
            lastname: 'LastName003',
            email: 'email003',
            fiscalcode: 'fiscalcode003',
            province: 'province003',
            telephone: '1231',
            age: '12'
        },
        {
            id: 4,
            name: 'Name004',
            lastname: 'LastName004',
            email: 'email004',
            fiscalcode: 'fiscalcode004',
            province: 'province004',
            telephone: '1231',
            age: '12'
        }
    ];

    // GET USERS
    getUser() {
        return this._users;
    }

    // DELETE USERS
    deleteUser(user) {
        const index = this._users.indexOf(user);
        if (index >= 0) {
            this._users.splice(index, 1);
        }
    }
}
