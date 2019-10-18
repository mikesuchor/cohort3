import workingWithCards from './workingwithcards';

describe('dom tests', () => {
    beforeEach(() => {
        // document.body.innerHTML = `<div id="left-panel"></div>`
        const leftPanel = document.createElement("div");
        leftPanel.id = "left-panel";
        document.body.appendChild(leftPanel);
        // Make sure <div id="left-panel"></div> exists
        expect(document.querySelector("#left-panel").id).toBe("left-panel");
        // No card should exist yet
        expect(document.querySelector("#card1")).toBe(null);
        // Adds a card to #left-panel
        workingWithCards.addCard();
    })
    test('adding a card to the DOM', () => {
        // Make sure a card exists under #left-panel: <div id="left-panel"><div id="card1"></div></div>
        expect(document.querySelector("#card1").id).toBe("card1");
    });

    test('adding a card before selected card', () => {
        const card1 = document.querySelector("#card1");
        expect(card1.id).toBe("card1");
        workingWithCards.addBefore(card1);
        const card2 = document.querySelector("#card2");
        expect(card2.id).toBe("card2");
        expect(document.querySelector("#left-panel").children[0].id).toBe("card2");
    });

    // test('adding a card after selected card', () => {
    //     const leftPanel = document.createElement("div");
    //     leftPanel.id = "left-panel";
    //     document.body.appendChild(leftPanel);
    //     workingWithCards.addCard();
    //     const card1 = document.querySelector("#card1");
    //     expect(card1.id).toBe("card1");
    //     workingWithCards.addAfter(card1);
    //     const card2 = document.querySelector("#card2");
    //     expect(card2.id).toBe("card2");
    //     expect(document.querySelector("#left-panel").children[1].id).toBe("card2");
    // });

    // test('deleting selected card', () => {
    //     const leftPanel = document.createElement("div");
    //     leftPanel.id = "left-panel";
    //     document.body.appendChild(leftPanel);
    //     workingWithCards.addCard();
    //     const card1 = document.querySelector("#card1");
    //     expect(card1.id).toBe("card1");
    //     workingWithCards.deleteCard(card1);
    // });
});