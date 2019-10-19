import workingWithCards from './workingwithcards';

test('adding a card to the DOM', () => {
    // document.body.innerHTML = `<div id="left-panel"></div>`
    const leftPanel = document.createElement("div");
    leftPanel.id = "left-panel";
    document.body.appendChild(leftPanel);
    // Make sure <div id="left-panel"></div> exists
    expect(document.querySelector("#left-panel").id).toBe("left-panel");
    // No card should exist yet
    expect(document.querySelector("#card1")).toBe(null);
    // Add a card appended to #left-panel
    workingWithCards.addCard();
    // Make sure <div id="left-panel"><div id="card1"></div></div> exists
    expect(document.querySelector("#card1").id).toBe("card1");
});

test('adding a card before selected card', () => {
    workingWithCards.addBefore(document.querySelector("#card1"));
    expect(document.querySelector("#left-panel").children[0].id).toBe("card2");
});

test('adding a card after selected card', () => {
    workingWithCards.addAfter(document.querySelector("#card1"));
    expect(document.querySelector("#left-panel").children[2].id).toBe("card3");
});

test('deleting selected card', () => {
    expect(document.querySelector("#card1").id).toBe("card1");
    workingWithCards.deleteCard(document.querySelector("#card1"));
    expect(document.querySelector("#card1")).toBe(null)
});