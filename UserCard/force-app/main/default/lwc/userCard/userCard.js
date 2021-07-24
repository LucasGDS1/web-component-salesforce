import { LightningElement, api } from 'lwc';


const newUsers = [
    {'FirstName':'Lucas01', 'LastName':'souza'},
    {'FirstName':'Lucas02', 'LastName':'souza'},
    {'FirstName':'Lucas03', 'LastName':'souza'} ]

export default class UserCard extends LightningElement {

    @api users = newUsers;

}