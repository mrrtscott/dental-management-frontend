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
    isActive: boolean;
    isNotLocked: boolean;
    role: string;

    constructor(){
        this.firstName = '';
        this.middleName = '';
        this.lastName = '';
        this.username = '';
        this.email = '';
        this.isActive = false
        this.isNotLocked = false;
        this.role = '';
        this.authorities = []
    }




}
