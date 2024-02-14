export class User{
    constructor(
        public email: string,
        public id: number,
        private _token: string,
        private _roles: []
    ){}

    get token(){
        return this._token;
    }

    get roles(){
        return this._roles;
    }
}