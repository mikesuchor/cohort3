const addCardButton = document.querySelector("#add-card-btn");
const leftPanel = document.querySelector("#left-panel");
const rightPanel = document.querySelector("#right-panel");
let cardNumber = 1;

document.addEventListener('DOMContentLoaded', () => {
    addCardButton.addEventListener("click", () => {
        leftPanel.appendChild(workingWithCards.addCard());
    });
});

const workingWithCards = {
    addCard: () => {
        const cardBody = document.createElement("div");
        cardBody.setAttribute("id", `card${cardNumber}`);
        cardBody.setAttribute("class", "card");
        const h1 = document.createElement("h1");
        h1.appendChild(document.createTextNode(`Card${cardNumber}`));
        cardBody.appendChild(h1);
        const addBeforeButton = document.createElement("button");
        addBeforeButton.setAttribute("id", `add-before-button${cardNumber}`);
        addBeforeButton.appendChild(document.createTextNode("Add Before"));
        cardBody.appendChild(addBeforeButton);
        const addAfterButton = document.createElement("button");
        addAfterButton.setAttribute("id", `add-after-button${cardNumber}`);
        addAfterButton.appendChild(document.createTextNode("Add After"));
        cardBody.appendChild(addAfterButton);
        const addDeleteButton = document.createElement("button");
        addDeleteButton.setAttribute("id", `delete-button${cardNumber}`);
        addDeleteButton.appendChild(document.createTextNode("Delete"));
        cardBody.appendChild(addDeleteButton);
        leftPanel.appendChild(cardBody);
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
        return cardBody;
    },

    addBefore: (event) => {
        const card = event.target.parentElement;
        leftPanel.insertBefore(workingWithCards.addCard(), card);
    },

    addAfter: (event) => {
        const card = event.target.parentElement;
        card.parentElement.insertBefore(workingWithCards.addCard(), card.nextSibling);
    },

    deleteCard: (event) => {
        const card = event.target.parentElement;
        card.remove();
    }
}

export default workingWithCards;