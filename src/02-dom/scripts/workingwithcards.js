const addCardButton = document.querySelector("#add-card-btn");
const leftPanel = document.querySelector("#left-panel");
const rightPanel = document.querySelector("#right-panel");
let cardNumber = 1;

document.addEventListener('DOMContentLoaded', () => {
    addCardButton.addEventListener("click", () => {
        leftPanel.appendChild(workingWithCards.createCard());
    });
});

const workingWithCards = {
    createCard: () => {
        const cardBody = document.createElement("div");
        const h1 = document.createElement("h1")
        const text = document.createTextNode(`Card${cardNumber}`);
        const addBeforeButton = document.createElement("button");
        const addAfterButton = document.createElement("button");
        const addDeleteButton = document.createElement("button");
        cardBody.setAttribute("class", "card");
        cardBody.setAttribute("id", `card${cardNumber}`);
        h1.appendChild(text);
        cardBody.appendChild(h1);
        cardBody.appendChild(addBeforeButton);
        cardBody.appendChild(addAfterButton);
        cardBody.appendChild(addDeleteButton);
        leftPanel.appendChild(cardBody);
        cardNumber++;
        return cardBody;
    },

    addCard: () => {  
    },

    addBefore: () => {

    },

    addAfter: () => {

    },

    delete: () => {
        
    }
}

export default workingWithCards;