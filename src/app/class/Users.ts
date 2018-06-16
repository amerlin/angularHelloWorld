import { UserInterface } from '../interfaces/user';

export class User implements UserInterface {
    id;
    name;
    lastname;
    email;
    fiscalcode;
    province;
    telephone;
    age;
}
