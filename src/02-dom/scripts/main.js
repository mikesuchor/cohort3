import workingWithCards from './workingwithcards.js';

const leftPanel = document.getElementById("left-panel");

leftPanel.addEventListener("click", () => {
    switch(event.target.innerText) {
        case 'Add Card':
            workingWithCards.addCard(leftPanel);
            break;
        case 'Add Before':
            workingWithCards.addBefore(leftPanel, event.target.parentElement);
            break;
        case 'Add After':
            workingWithCards.addAfter(leftPanel, event.target.parentElement);
            break;
        case 'Delete':
            workingWithCards.deleteCard(event.target.parentElement);
            break;
    }
});
