class Account {

    constructor(accountName, initialBalance) {
        this.accountName = accountName;
        this.initialBalance = initialBalance;
    }

    deposit(amount) { return this.initialBalance += amount; }

    withdraw(amount) { return this.initialBalance -= amount; }

    balance() { return this.initialBalance; }
}

class AccountController {
}

const checkingAccount = new Account("Checking Account", 25);

export { Account, AccountController };