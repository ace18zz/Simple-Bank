const Account = require('./src/Account');
const StatementPrinter = require('./src/StatementPrinter');

var deNum = 1000, deNum1 = 2000;
var wiNum = 500, wiNum1 = 700;
var deDate = "10/07/2023" , deDate1 = "13/07/2023" ;
var wiDate = "14/07/2023" , wiDate1 = "25/07/2023" ;

let printer = new StatementPrinter();
let account = new Account(printer);
account.deposit(deNum, deDate);
account.deposit(deNum1, deDate1);
account.withdraw(wiNum, wiDate);
account.withdraw(wiNum1, wiDate1);
account.printStatement();
