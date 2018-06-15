import { Injectable } from '@angular/core';

// this service can have dependency
@Injectable()

// USER SERVICE
export class UserService {

    // local var
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
