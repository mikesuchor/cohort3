const helpers = {
    cardCount: 0,

    clearInputs: (input1, input2) => {
        input1.value = "";
        input2.value = "";
    },

    createCard(name, accountBalance, target) {
        if(!name) {
            return;
        }
        this.cardCount++;
        const accountCardTemplate = document.createElement("div");
            accountCardTemplate.id = name;
            accountCardTemplate.classList.add("account");
        const deleteIcon = document.createElement("i");
            deleteIcon.classList.add("fas", "fa-times");
            accountCardTemplate.appendChild(deleteIcon);
        const bankIcon = document.createElement("i");
            bankIcon.classList.add("fas", "fa-university", "fa-4x");
            accountCardTemplate.appendChild(bankIcon);
        const accountName = document.createElement("h2");
            accountName.classList.add("account-name");
            accountName.innerText = name;
            accountCardTemplate.appendChild(accountName);
        const balanceOutput = document.createElement("h2");
            balanceOutput.id = `balance${this.cardCount}`;
            balanceOutput.classList.add("balance-output");
            balanceOutput.innerText = accountBalance;
            accountCardTemplate.appendChild(balanceOutput);
        const input = document.createElement("input");
            input.id = `input${this.cardCount}`;
            input.classList.add("amount-input");
            input.type = "number";
            input.min = "0";
            input.placeholder = "Amount to Deposit / Withdraw";
            accountCardTemplate.appendChild(input);
        const depositButton = document.createElement("button");
            depositButton.id = `deposit-button${this.cardCount}`;
            depositButton.classList.add("deposit-button", "action-button");
            depositButton.innerText = " Deposit";
            const depositIcon = document.createElement("i");
                depositIcon.classList.add("fas", "fa-sign-in-alt");
                depositButton.prepend(depositIcon);
            accountCardTemplate.appendChild(depositButton);
        const withdrawButton = document.createElement("button");
            withdrawButton.id = `withdraw-button${this.cardCount}`;
            withdrawButton.classList.add("withdraw-button", "action-button");
            withdrawButton.innerText = "Withdraw ";
            const withdrawIcon = document.createElement("i");
                withdrawIcon.classList.add("fas", "fa-sign-out-alt");
                withdrawButton.appendChild(withdrawIcon);
            accountCardTemplate.appendChild(withdrawButton);
        target.appendChild(accountCardTemplate);
        return accountCardTemplate;
    },

    removeCard(name) {
        name.remove();
    }
}

export default helpers;