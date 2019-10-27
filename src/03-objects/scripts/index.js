import { AccountController } from './account.js';
import helpers from './helpers.js';

const accountController = new AccountController();
const accounts = document.getElementById("accounts");
const accountFunctions = document.getElementById("account-functions");
const accountFunctionsOutput = document.getElementById("account-functions-output");
const newAccountName = document.querySelector(".account-input");
const newAccountAmount = document.querySelector(".account-amount-input");
const amountInput = document.querySelector(".amount-input");

document.addEventListener("click", () => {

    if(event.target.className === "add-button action-button") {
        accountController.addAccount(newAccountName.value, newAccountAmount.value);
        helpers.createCard(newAccountName.value, newAccountAmount.value, accounts);
        helpers.clearInputs(newAccountName, newAccountAmount);
        console.log(accountController.accounts)
        accountController.accounts.length > 1 ? accountFunctions.classList.remove("hidden") : accountFunctions.classList.add("hidden");
    }

    if(event.target.className === "fas fa-times") {
        accountController.removeAccount(event.target.parentNode.id);
        helpers.removeCard(event.target.parentNode.id);
        console.log(accountController.accounts)
        accountController.accounts.length > 1 ? accountFunctions.classList.remove("hidden") : accountFunctions.classList.add("hidden");
    }

    if(event.target.className === "total-button action-button" || event.target.className === "fas fa-coins") {
        accountFunctionsOutput.innerHTML = `The total amount in your accounts is $${accountController.totalAllAccounts()}.`;
    }

    if(event.target.className === "highest-button action-button" || event.target.className === "fas fa-long-arrow-alt-up") {
        const highestValueAccount = accountController.highestValueAccount();
        accountFunctionsOutput.innerHTML = 
            `The account with the highest value is ${highestValueAccount.accountName} with $${highestValueAccount.accountBalance}.`;
    }

    if(event.target.className === "lowest-button action-button" || event.target.className === "fas fa-long-arrow-alt-down") {
        const lowestValueAccount = accountController.lowestValueAccount();
        accountFunctionsOutput.innerHTML =
            `The account with the lowest value is ${lowestValueAccount.accountName} with $${lowestValueAccount.accountBalance}.`;
    }

    if(event.target.className === "deposit-button action-button" || event.target.className === "fas fa-sign-in-alt") {
        const accountIndex = accountController.accounts.findIndex(x => x.accountName === event.target.parentNode.id);
        console.log(event.target.parentNode.id);
        document.getElementById(`balance${helpers.cardCount}`)
            .innerText = accountController.accounts[accountIndex].deposit(500);
    }

    if(event.target.className === "withdraw-button action-button" || event.target.className === "fas fa-sign-out-alt") {
        console.log(event.target.parentNode.id);
        document.getElementById(`balance${helpers.cardCount}`)
            .innerText = checkingAccount.withdraw(amountInput.value);
    }
});