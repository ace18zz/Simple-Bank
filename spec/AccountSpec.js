const Account = require('../bank-challenge/src/Account');
const StatementPrinter = require('../bank-challenge/src/StatementPrinter');

describe('Account', () => {
    let account;
    var deNum =1000;
    var wiNum =500;

    let deDate = '10/07/2023';
    let wiDate = '11/07/2023';

    beforeEach(() => {
        account = new Account(new StatementPrinter());
    });

    describe('deposit', () => {
        it('should increase the balance by the deposited amount', () => {
            account.deposit(deNum, deDate);
            expect(account.balance).toBe(deNum);
        });
    });

    describe('withdraw', () => {
        it('should decrease the balance by the withdrawn amount', () => {
            account.deposit(deNum, deDate);
            account.withdraw(wiNum, wiDate);
            expect(account.balance).toBe(wiNum);
        });
    });
});
