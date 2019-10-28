import { AccountController } from './account.js';
import helpers from './helpers.js';

const accountController = new AccountController();
const accounts = document.getElementById("accounts");
const accountFunctions = document.getElementById("account-functions");
const accountFunctionsOutput = document.getElementById("account-functions-output");
const newAccountName = document.querySelector(".account-input");
const newAccountAmount = document.querySelector(".account-amount-input");

document.addEventListener("click", () => {
    if(event.target.className === "add-button action-button") {
        // Refactor this
        let duplicate = false;
        for(var i = 0; i < accountController.accounts.length; i++) {
            if (accountController.accounts[i].accountName === newAccountName.value) {
                duplicate = true;
            }
        }
        if(!duplicate) {
            accountController.addAccount(newAccountName.value, Number(newAccountAmount.value));
            helpers.createCard(newAccountName.value, newAccountAmount.value, accounts);
        }
        helpers.clearInputs(newAccountName, newAccountAmount);
        console.log(accountController.accounts)
        accountController.accounts.length > 1 ? accountFunctions.classList.remove("hidden") : accountFunctions.classList.add("hidden");
    }

    if(event.target.className === "fas fa-times") {
        accountController.removeAccount(event.target.parentNode.id);
        helpers.removeCard(event.target.parentNode);
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
        const inputAmount = event.target.previousSibling;
        console.log(inputAmount.value);
        document.getElementById(`balance${event.target.parentNode.id}`)
            .innerText = accountController.accounts[accountIndex].deposit(Number(inputAmount.value));
        inputAmount.value = "";
    }

    if(event.target.className === "withdraw-button action-button" || event.target.className === "fas fa-sign-out-alt") {
        const accountIndex = accountController.accounts.findIndex(x => x.accountName === event.target.parentNode.id);
        const inputAmount = event.target.previousSibling.previousSibling;
        document.getElementById(`balance${event.target.parentNode.id}`)
            .innerText = accountController.accounts[accountIndex].withdraw(inputAmount.value);
        inputAmount.value = "";
    }
});