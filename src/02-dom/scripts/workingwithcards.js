const workingWithCards = {
    cardNumber: 0,
    
    addCard(target) {
        this.cardNumber++;
        const cardTemplate = document.createElement("div");
            cardTemplate.id = `card${this.cardNumber}`;
            cardTemplate.classList.add("card");
        const h1 = document.createElement("h1");
            h1.innerText = `Card${this.cardNumber}`;
            cardTemplate.appendChild(h1);
        const addBeforeButton = document.createElement("button");
            addBeforeButton.id = `add-before-button${this.cardNumber}`;
            addBeforeButton.innerText = "Add Before";
            cardTemplate.appendChild(addBeforeButton);
        const addAfterButton = document.createElement("button");
            addAfterButton.id = `add-after-button${this.cardNumber}`;
            addAfterButton.innerText = "Add After";
            cardTemplate.appendChild(addAfterButton);
        const addDeleteButton = document.createElement("button");
            addDeleteButton.id = `delete-button${this.cardNumber}`;
            addDeleteButton.innerText = "Delete";
            cardTemplate.appendChild(addDeleteButton);
        target.appendChild(cardTemplate);
        return cardTemplate;
    },

    addBefore(target, card) {
        target.insertBefore(this.addCard(target), card);
    },

    addAfter(target, card) {
        target.insertBefore(this.addCard(target), card.nextSibling);
    },

    deleteCard(card) {
        card.remove();
    }
}

export default workingWithCards;