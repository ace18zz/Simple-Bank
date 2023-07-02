class Transaction {
    constructor(date, credit = 0, debit = 0) {
      this.date = date;
      this.credit = credit;
      this.debit = debit;
    }
  }
  
  module.exports = Transaction;
  