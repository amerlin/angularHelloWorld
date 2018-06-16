import { Injectable } from '@angular/core';
import { User } from '../class/Users';

// this service can have dependency
@Injectable()

// USER SERVICE
export class UserService {

    // LOCAL
    private _users: Array<User> = [
        {
            id:  1,
            name: 'Name001',
            lastname: 'LastName001',
            email: 'email001',
            fiscalcode: 'fiscalcode001',
            province: 'province001',
            telephone: '1231',
            age: 20
        },
        {
            id: 2,
            name: 'Name002',
            lastname: 'LastName002',
            email: 'email002',
            fiscalcode: 'fiscalcode002',
            province: 'province002',
            telephone: '1231',
            age: 20
        },
        {
            id: 3,
            name: 'Name003',
            lastname: 'LastName003',
            email: 'email003',
            fiscalcode: 'fiscalcode003',
            province: 'province003',
            telephone: '1231',
            age: 20
        },
        {
            id: 4,
            name: 'Name004',
            lastname: 'LastName004',
            email: 'email004',
            fiscalcode: 'fiscalcode004',
            province: 'province004',
            telephone: '1231',
            age: 20
        }
    ];

    // GET USERS
    getUser() {
        return this._users;
    }

    // DELETE USERS
    deleteUser(user: User) {
        const index = this._users.indexOf(user);
        if (index >= 0) {
            this._users.splice(index, 1);
        }
    }

    // FIND AND UPDATE USER
    updateUser(user: User) {
        const index = this._users.findIndex((v) => v.id === user.id);
        if ( index > -1 ) {
            this._users[index] = user;
        }
    }

}
