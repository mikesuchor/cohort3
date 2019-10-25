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

const newAccount = new Account("checking account", 500);

class AccountController {
    constructor() {
        this.accounts = [];
    }

    addAccount(name, accountBalance) {
        if(!name) {
            return;
        }
        // if(this.accounts.length > 0) {
        //     this.accounts.filter((account) => {
        //         console.log(helpers.formatName(name));
        //         console.log(helpers.formatName(account.accountName));
        //         return helpers.formatName(name) !== helpers.formatName(account.accountName)
        //     })
        //     return;
        // };
        // helpers.createCard(accounts, name, accountBalance);
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
        return this.accounts.reduce((highest, account) => {
            return(highest.accountBalance > account.accountBalance) ? highest : account;
        });
    }

    lowestValueAccount() {
        return this.accounts.reduce((lowest, account) => {
            return(lowest.accountBalance < account.accountBalance) ? lowest : account;
        });
    }
}

export { Account, AccountController };