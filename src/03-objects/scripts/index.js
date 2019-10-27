import { Account, AccountController } from './account.js';
import helpers from './helpers.js';

const accountController = new AccountController();
const accounts = document.getElementById("accounts");
const newAccountName = document.querySelector(".account-input");
const newAccountAmount = document.querySelector(".account-amount-input");
const amountInput = document.querySelector(".amount-input");
const balanceOutput = document.querySelector(".balance-output");

document.addEventListener("click", () => {
    if(event.target.className === "add-button action-button" || event.target.className === "fas fa-sign-in-alt") {
        accountController.addAccount(newAccountName.value, newAccountAmount.value);
        helpers.createCard(helpers.formatName(newAccountName.value), newAccountAmount.value, accounts);
        helpers.clearInputs(newAccountName, newAccountAmount);
    }

    if(event.target.className === "remove-button action-button" || event.target.className === "fas fa-sign-in-alt") {
        accountController.removeAccount(newAccountName.value);
        helpers.removeCard(newAccountName.value);
        helpers.clearInputs(newAccountName, newAccountAmount);
    }

    if(event.target.className === "deposit-button action-button" || event.target.className === "fas fa-sign-in-alt") {
        console.log(accountController.accounts);
        balanceOutput.innerText = `$${account.deposit(helpers.formatMoney(amountInput.value))}`;
    }
    else if(event.target.className === "withdraw-button action-button" || event.target.className === "fas fa-sign-out-alt") {
        balanceOutput.innerText = `$${checkingAccount.withdraw(helpers.formatMoney(amountInput.value))}`;
    }
});