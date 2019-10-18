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
    // Adds a card to #left-panel
    workingWithCards.addCard();
    // Make sure a card exists under #left-panel: <div id="left-panel"><div id="card1"></div></div>
    expect(document.querySelector("#card1").id).toBe("card1");
});

test('adding a card before selected card', () => {

});

test('adding a card after selected card', () => {

});

test('deleting selected card', () => {

});