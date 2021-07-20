import { LightningElement, api } from 'lwc';

export default class CalculateExpense extends LightningElement {

    @api welcome = 'Welcome the calculator of de Expenses';
    totalCurrency = 10000;
    totalExpense = 0;

    handleTotalExpense( event ) {
        this.totalExpense  = this.totalCurrency - event.detail.value;
    }
}