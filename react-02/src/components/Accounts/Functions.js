class Account {
    constructor(accountName, accountBalance, accountId) {
        this.accountName = accountName;
        this.accountBalance = accountBalance;
        this.accountId = accountId;
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

    formatMoney(amount) {
        return Math.round(amount * 100) / 100;
    }
}

class AccountController {
    constructor() {
        this.accounts = [];
    }

    addAccount(accountName, accountBalance, accountId) {
        if(!accountName) return;
        this.accounts.push(new Account(accountName, accountBalance, accountId));
    }

    removeAccount(name) {
        this.accounts = this.accounts.filter((account) => {
            return account.accountName !== name;
        });
    }

    totalAllAccounts() {
        return this.accounts.reduce((acc, account) => {
            return acc + account.accountBalance;
        }, 0);
    }

    highestValueAccount() {
        return this.accounts.reduce((acc, account) => {
            return(acc.accountBalance > account.accountBalance) ? acc : account;
        });
    }

    lowestValueAccount() {
        return this.accounts.reduce((lowest, account) => {
            return(lowest.accountBalance < account.accountBalance) ? lowest : account;
        });
    }
}

export { Account, AccountController };