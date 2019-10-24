import { Account, AccountController } from './account.js';
import helpers from './helpers.js';

describe('test Account class', () => {
    test('deposit', () => {
        const checkingAccount = new Account("Checking Account", 25);
        expect(checkingAccount.deposit(10)).toBe(35);
        expect(checkingAccount.deposit(300)).toBe(335);
        expect(checkingAccount.deposit(-100)).toBe(335);
    });

    test('withdraw', () => {
        const checkingAccount = new Account("Checking Account", 25);
        expect(checkingAccount.withdraw(30)).toBe(-5);
        expect(checkingAccount.withdraw(300)).toBe(-305);
        expect(checkingAccount.withdraw(-100)).toBe(-305);
    });

    test('balance', () => {
        const checkingAccount = new Account("Checking Account", 25);
        expect(checkingAccount.balance()).toBe(25);
    });

    test('multiple actions on account', () => {
        const checkingAccount = new Account("Checking Account", 25);
        expect(checkingAccount.balance()).toBe(25);
        expect(checkingAccount.deposit(10)).toBe(35);
        expect(checkingAccount.balance()).toBe(35);
        expect(checkingAccount.withdraw(30)).toBe(5);
        expect(checkingAccount.balance()).toBe(5);
    });
});

describe('test AccountController', () => {
    test('test adding an account', () => {
        const accountController = new AccountController();
        expect(accountController.addAccount("savings account", 50))
            .toEqual([{"accountName": "savings account", "accountBalance": 50}]);
        expect(accountController.addAccount("joint account", 5000))
            .toEqual(
                [
                    {"accountName": "savings account", "accountBalance": 50},
                    {"accountName": "joint account", "accountBalance": 5000}
                ]
            );
    });

    test('test removing an account', () => {
        const accountController = new AccountController();
        accountController.addAccount("savings account", 50);
        accountController.addAccount("joint account", 5000);
        expect(accountController.removeAccount("savings account"))
            .toEqual([{"accountName": "joint account", "accountBalance": 5000}]);
        expect(accountController.removeAccount("joint account")).toEqual([]);
    });

    test.only('total the amount in all accounts', () => {
        const accountController = new AccountController();
        expect(accountController.addAccount("savings account", 50));
        expect(accountController.totalAllAccounts()).toBe(50);
        accountController.addAccount("joint account", 5000);
        expect(accountController.totalAllAccounts()).toBe(5050);
    });

    // test('find the highest value account', () => {
    //     const accountController = new AccountController();
    //     accountController.addAccount("savings account", 50);
    //     accountController.addAccount("joint account", 5000);
    //     accountController.addAccount("stock account", 2500);
    //     expect(accountController.highestValueAccount()).toBe(5000);
    // });

    // test('find the lowest value account', () => {
    //     const accountController = new AccountController();
    //     accountController.addAccount("savings account", 50);
    //     accountController.addAccount("joint account", 5000);
    //     accountController.addAccount("stock account", 2500);
    //     expect(accountController.lowestValueAccount()).toBe(50);
    // });
});

test('format money helper function', () => {
    expect(helpers.formatMoney(100)).toBe(100);
    expect(helpers.formatMoney(11.1133231)).toBe(11.11);
});