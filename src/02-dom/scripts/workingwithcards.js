let cardNumber = 1;
const leftPanel = document.querySelector("#left-panel");

document.addEventListener('DOMContentLoaded', () => {
    const leftPanel = document.querySelector("#left-panel");
    const addCardButton = document.querySelector("#add-card-btn");
    addCardButton.addEventListener("click", () => {
        leftPanel.appendChild(workingWithCards.addCard());
    });
});

const workingWithCards = {
    createCard: () => {
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
            workingWithCards.addBefore(event);
        });
        document.querySelector(`#add-after-button${cardNumber}`).addEventListener("click", () => {
            workingWithCards.addAfter(event);
        });
        document.querySelector(`#delete-button${cardNumber}`).addEventListener("click", () => {
            workingWithCards.deleteCard(event);
        });
        cardNumber++;
        return cardTemplate;
    },

    addCard: () => {
        return workingWithCards.createCard();
    },

    addBefore: (event) => {
        const card = event.target.parentElement;
        leftPanel.insertBefore(workingWithCards.addCard(), card);
    },

    addAfter: (event) => {
        const card = event.target.parentElement;
        leftPanel.insertBefore(workingWithCards.addCard(), card.nextSibling);
    },

    deleteCard: (event) => {
        const card = event.target.parentElement;
        card.remove();
    }
}

export default workingWithCards;