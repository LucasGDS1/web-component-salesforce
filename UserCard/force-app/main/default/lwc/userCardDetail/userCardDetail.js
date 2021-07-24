import { LightningElement, api, track } from 'lwc';

export default class UserCardDetail extends LightningElement {

    @track users;

    @api
    get user() {
        return this._user;
    }

    set user( value ) {
        this.users = JSON.parse( JSON.stringify( value ) );
    }

}