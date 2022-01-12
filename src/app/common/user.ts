export class User {
    id: number; 
    userID: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    profileImageUrl: string;
    lastLoginDate: Date;
    lastLoginDateDisplay: Date;
    joinDate: Date;
    authorities: [];
    active: boolean;
    notLocked: boolean;
    role: string;

    constructor(){
        this.firstName = '';
        this.middleName = '';
        this.lastName = '';
        this.username = '';
        this.email = '';
        this.active = false
        this.notLocked = false;
        this.role = '';
        this.authorities = []
    }




}
