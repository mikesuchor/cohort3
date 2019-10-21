const workingWithCards = {
    cardNumber: 1,
    
    addCard() {
        const cardTemplate = document.createElement("div");
            cardTemplate.id = `card${this.cardNumber}`;
            cardTemplate.classList.add("card");
        const h1 = document.createElement("h1");
            h1.appendChild(document.createTextNode(`Card${this.cardNumber}`));
            cardTemplate.appendChild(h1);
        const addBeforeButton = document.createElement("button");
            addBeforeButton.id = `add-before-button${this.cardNumber}`;
            addBeforeButton.appendChild(document.createTextNode("Add Before"));
            cardTemplate.appendChild(addBeforeButton);
        const addAfterButton = document.createElement("button");
            addAfterButton.id = `add-after-button${this.cardNumber}`;
            addAfterButton.appendChild(document.createTextNode("Add After"));
            cardTemplate.appendChild(addAfterButton);
        const addDeleteButton = document.createElement("button");
            addDeleteButton.id = `delete-button${this.cardNumber}`;
            addDeleteButton.appendChild(document.createTextNode("Delete"));
            cardTemplate.appendChild(addDeleteButton);
        leftPanel.appendChild(cardTemplate);
        this.cardNumber++;
        return cardTemplate;
    },

    addBefore(card) {
        leftPanel.insertBefore(this.addCard(), card);
    },

    addAfter(card) {
        leftPanel.insertBefore(this.addCard(), card.nextSibling);
    },

    deleteCard(card) {
        card.remove();
    }
}

export default workingWithCards;