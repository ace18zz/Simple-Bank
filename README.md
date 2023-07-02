# Simple Bank
## Overview
The project is a simple banking application implemented in Node.js. The application allows a client to make deposits and withdrawals and print their bank statement that includes transaction date, credit or debit amount, and balance.

## Approach
The application is structured around three main classes:

**Transaction:** Represents a single transaction, with a date, a credit amount, and a debit amount.

**Account:** Represents a user's bank account. It keeps track of the balance and all transactions made.

**Statement:** Responsible for printing the account statement with transaction history.


## Project Structure
- **src/:** This directory contains the source files for the application.
  - **Transaction.js:** Defines the Transaction class that encapsulates a banking transaction.
  - **Account.js:** Defines the Account class that represents a bank account and includes methods for deposit, withdrawal, and printing statements.
  - **StatementPrinter.js:** Defines the StatementPrinter class that handles the formatting and printing of bank statements.
- **spec/:** This directory contains the Jasmine test specifications for the classes.
  - **TransactionSpec.js:** Tests for the Transaction class.
  - **AccountSpec.js:** Tests for the Account class.
  - **StatementPrinterSpec.js:** Tests for the StatementPrinter class.
## Installation


1. Clone the repository
```bash
git clone https://github.com/ace18zz/bank-challenge.git
```

2. Navigate to the repository
```bash
cd bank-challenge
```
3. Install dependencies

```bash
npm install
```

## Running 
1. To run the application, use the following command from within the project directory:
```bash
node main.js
```

2. The project uses Jasmine for testing. To run the tests, use the following command from within the project directory:
```bash
npm test
```
## Bank Challenge - Installing Jasmine
The Bank Challenge project uses Jasmine for testing. Jasmine is a Behavior Driven Development testing framework for JavaScript. Here's how to set up Jasmine for the project:

**1. Prerequisites**  

Before installing Jasmine, make sure you have Node.js and npm installed on your machine. Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. npm is a package manager for Node.js packages.

You can download Node.js from the [official Node website.](https://nodejs.org/) The npm package manager is included in the Node.js distribution.

You can verify that you have Node.js and npm installed by running the following commands in your terminal:
```bash
node -v
```
```bash
npm -v
```
These commands should display the installed versions of Node.js and npm, respectively.

**2. Installing Jasmine**  

Navigate to the project directory in your terminal:
```bash
cd path/to/your/project
```

Next, install Jasmine as a development dependency for your project:
```bash
npm install --save-dev jasmine
```

This command adds Jasmine to the devDependencies section in your package.json file, and also installs the Jasmine package in the node_modules directory of your project.

**3. Configuring Jasmine**  

To initialize Jasmine in your project, run:
```bash
npx jasmine init
```
This command sets up the basic structure for your project and creates a spec directory where your test files should be located.

**4. More Information**  

For more information about Jasmine, check out the [official jasmine documentation.](https://jasmine.github.io/pages/docs_home.html)
For specific details about how to write Jasmine tests, the documentation provides a comprehensive guide on syntax and usage of the Jasmine testing framework.
## Examples of Interactions
To interact with the application, instantiate a new account and call methods on it:

```javascript
let account = new Account();
account.deposit(1000, "10/07/2023");
account.deposit(2000, "13/07/2023");
account.withdraw(500, "14/07/2023");
account.printStatement();
```

This will print the following bank statement to the console:

```yaml
date       || credit  || debit  || balance
14/07/2023 ||    0.00 || 500.00 || 2500.00
13/07/2023 || 2000.00 ||   0.00 || 3000.00
10/07/2023 || 1000.00 ||   0.00 || 1000.00
```