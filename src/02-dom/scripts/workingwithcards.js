let cardNumber = 1;
const leftPanel = document.querySelector("#left-panel");

document.addEventListener('DOMContentLoaded', () => {
    const addCardButton = document.querySelector("#add-card-btn");
    addCardButton.addEventListener("click", () => {
        workingWithCards.addCard();
    });
});

const workingWithCards = {
    addCard: () => {
        const leftPanel = document.querySelector("#left-panel");
        const cardTemplate = document.createElement("div");
            cardTemplate.id = `card${cardNumber}`;
            cardTemplate.classList.add("card");
        const h1 = document.createElement("h1");
            h1.appendChild(document.createTextNode(`Card${cardNumber}`));
            cardTemplate.appendChild(h1);
        const addBeforeButton = document.createElement("button");
            addBeforeButton.id = `add-before-button${cardNumber}`;
            addBeforeButton.appendChild(document.createTextNode("Add Before"));
            cardTemplate.appendChild(addBeforeButton);
        const addAfterButton = document.createElement("button");
            addAfterButton.id = `add-after-button${cardNumber}`;
            addAfterButton.appendChild(document.createTextNode("Add After"));
            cardTemplate.appendChild(addAfterButton);
        const addDeleteButton = document.createElement("button");
            addDeleteButton.id = `delete-button${cardNumber}`;
            addDeleteButton.appendChild(document.createTextNode("Delete"));
            cardTemplate.appendChild(addDeleteButton);
        leftPanel.appendChild(cardTemplate);
        document.querySelector(`#add-before-button${cardNumber}`).addEventListener("click", () => {
            workingWithCards.addBefore(event.target.parentElement);
        });
        document.querySelector(`#add-after-button${cardNumber}`).addEventListener("click", () => {
            workingWithCards.addAfter(event.target.parentElement);
        });
        document.querySelector(`#delete-button${cardNumber}`).addEventListener("click", () => {
            workingWithCards.deleteCard(event.target.parentElement);
        });
        cardNumber++;
        return cardTemplate;
    },

    addBefore: (card) => {
        const leftPanel = document.querySelector("#left-panel");
        leftPanel.insertBefore(workingWithCards.addCard(), card);
    },

    addAfter: (card) => {
        const leftPanel = document.querySelector("#left-panel");
        leftPanel.insertBefore(workingWithCards.addCard(), card.nextSibling);
    },

    deleteCard: (card) => {
        card.remove();
    }
}

export default workingWithCards;
