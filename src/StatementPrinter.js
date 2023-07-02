class StatementPrinter {
    print(transactions, balance) {
      console.log("date       || credit  || debit  || balance");
      // Reverse the transactions array because I want to print the most recent transaction first.
      transactions.reverse().forEach(transaction => {
        console.log(
            // The toFixed(2) function is used to format the monetary values to 2 decimal places.
          `${transaction.date} || ${transaction.credit.toFixed(2)} || ${transaction.debit.toFixed(2)} || ${balance.toFixed(2)}`
        );
        balance += transaction.debit - transaction.credit;
      });
    }
  }
  
  module.exports = StatementPrinter;
  