import { Account } from './account.js';
import helpers from './helpers.js';

test('deposit', () => {
    const checkingAccount = new Account("Checking Account", 25);
    expect(checkingAccount.deposit(10)).toBe(35);
    expect(checkingAccount.deposit(300)).toBe(335);
});

test('withdraw', () => {
    const checkingAccount = new Account("Checking Account", 25);
    expect(checkingAccount.withdraw(30)).toBe(-5);
    expect(checkingAccount.withdraw(300)).toBe(-305);
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

test('format money helper function', () => {
    expect(helpers.formatMoney(100)).toBe(100);
    expect(helpers.formatMoney(11.1133231)).toBe(11.11);
});