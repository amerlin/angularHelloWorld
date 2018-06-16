import { UserInterface } from '../interfaces/user';

export class User implements UserInterface {
    id: number ;
    name: string;
    lastname: string;
    email: string;
    fiscalcode: string;
    province: string;
    telephone: string;
    age: number;

    // class constructor
    // sampe inizialize
    constructor() {
        this.id = 0;            // default for new users
        this.name = '';
        this.lastname = '';
        this.email = '';
        this.province = '';
        this.fiscalcode = '';
        this.telephone = '';
        this.age = 18;
    }
}
