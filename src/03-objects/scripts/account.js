class Account {
    constructor(accountName, accountBalance) {
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }

    deposit(amount) {
        if(amount < 0) return this.accountBalance;
        return this.accountBalance += amount;
    }

    withdraw(amount) {
        if(amount < 0) return this.accountBalance;
        return this.accountBalance -= amount;
    }

    balance() { return this.accountBalance; }
}

class AccountController {
    constructor() {
        this.accounts = [];
    }

    addAccount(name, accountBalance) {
        this.accounts.push(new Account(name, accountBalance));
        return this.accounts;
    }

    removeAccount(name) {
        this.accounts = this.accounts.filter((account) => {
            return account.accountName != name;
        });
        return this.accounts;
    }

    totalAllAccounts() {
        return this.accounts.reduce((acc, account) => {
            return acc + account.accountBalance;
        }, 0);
    }

    highestValueAccount() {
        return 0;
    }

    lowestValueAccount() {
        return 0;
    }
}

const checkingAccount = new Account("Checking Account", 25);

export { Account, AccountController };