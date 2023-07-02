const Transaction = require('../bank-challenge/src/Transaction');

var deNum = 1000;
var deDate = "10/07/2023" ;

describe('Transaction', () => {
    it('should construct with correct values', () => {
        const trans = new Transaction(deDate, deNum, 0);
        expect(trans.date).toBe(deDate);
        expect(trans.credit).toBe(deNum);
        expect(trans.debit).toBe(0);
    });
});
