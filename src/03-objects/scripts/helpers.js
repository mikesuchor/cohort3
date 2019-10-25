const helpers = {
    cardCount: 0,

    formatMoney: (amount) => {
        return Math.round(amount * 100) / 100;
    },

    formatName: (name) => {
        return name.toLowerCase()
            .split(' ')
            .map((c) => c.charAt(0).toUpperCase() + c.substring(1))
            .join(' ');
    },

    createCard(target, name, accountBalance) {
        this.cardCount++;
        const accountCardTemplate = document.createElement("div");
            accountCardTemplate.id = this.cardCount;
            accountCardTemplate.classList.add("account");
        const bankIcon = document.createElement("i");
            bankIcon.classList.add("fas", "fa-university", "fa-4x");
            accountCardTemplate.appendChild(bankIcon);
        const accountName = document.createElement("h1");
            accountName.classList.add("account-name");
            accountName.innerText = name;
            accountCardTemplate.appendChild(accountName);
        const balanceHeader = document.createElement("h3");
            balanceHeader.innerText = "Current Balance";
            accountCardTemplate.appendChild(balanceHeader);
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
            depositButton.classList.add("deposit-button", "action-button");
            depositButton.innerText = " Deposit";
            const depositIcon = document.createElement("i");
                depositIcon.classList.add("fas", "fa-sign-in-alt");
                depositButton.prepend(depositIcon);
            accountCardTemplate.appendChild(depositButton);
        const withdrawButton = document.createElement("button");
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
        console.log(name);
        document.querySelector("").remove();
    }
}

export default helpers;