import { Account, AccountController } from './account.js';
import helpers from './helpers.js';

const checkingAccount = new Account("Checking Account", 25);
const accountName = document.getElementById("account-name");
const input = document.getElementById("amount-input");
const output = document.getElementById("balance-output");
accountName.innerText = checkingAccount.accountName;
output.innerText = `$${helpers.formatMoney(checkingAccount.balance())}`;

document.addEventListener("click", () => {
    if(event.target.id === "deposit-button" || event.target.className === "fas fa-sign-in-alt") {
        output.innerText = `$${checkingAccount.deposit(helpers.formatMoney(input.value))}`;
        input.value = "";
    }
    else if(event.target.id === "withdraw-button" || event.target.className === "fas fa-sign-out-alt") {
        output.innerText = `$${checkingAccount.withdraw(helpers.formatMoney(input.value))}`;
        input.value = "";
    }
});