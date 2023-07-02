const Transaction = require('./Transaction');

class Account {
  constructor(printer) {
    this.balance = 0;
    this.transactions = [];
    this.printer = printer;
  }

  deposit(amount, date) {
    this.balance += amount;
    this.transactions.push(new Transaction(date, amount, 0));
  }

  withdraw(amount, date) {
    this.balance -= amount;
    this.transactions.push(new Transaction(date, 0, amount));
  }

  printStatement() {
    this.printer.print(this.transactions, this.balance);
  }
}

module.exports = Account;
