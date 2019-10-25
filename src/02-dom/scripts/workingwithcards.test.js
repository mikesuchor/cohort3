import workingWithCards from './workingwithcards';

beforeEach(() => {
    workingWithCards.cardNumber = 0;
})

test('adding a card to the DOM', () => {
    const testDiv = document.createElement("div");
    workingWithCards.addCard(testDiv);
    expect(testDiv.children[0].id).toBe("card1");
    workingWithCards.addCard(testDiv);
    expect(testDiv.children[1].id).toBe("card2");
});

test('adding a card before selected card', () => {
    const testDiv = document.createElement("div");
    workingWithCards.addCard(testDiv);
    workingWithCards.addBefore(testDiv, testDiv.children[0]);
    expect(testDiv.children[0].id).toBe("card2");
    workingWithCards.addBefore(testDiv, testDiv.children[0]);
    expect(testDiv.children[0].id).toBe("card3");
    expect(testDiv.children[1].id).toBe("card2");
});

test('adding a card after selected card', () => {
    const testDiv = document.createElement("div");
    workingWithCards.addCard(testDiv);
    workingWithCards.addAfter(testDiv, testDiv.children[0]);
    expect(testDiv.children[1].id).toBe("card2");
    workingWithCards.addAfter(testDiv, testDiv.children[1]);
    expect(testDiv.children[2].id).toBe("card3");
    workingWithCards.addAfter(testDiv, testDiv.children[2]);
    expect(testDiv.children[3].id).toBe("card4");
});

test('deleting selected card', () => {
    const testDiv = document.createElement("div");
    workingWithCards.addCard(testDiv);
    expect(testDiv.children[0].id).toBe("card1");
    workingWithCards.deleteCard(testDiv.children[0]);
    expect(testDiv.children[0]).toBe(undefined);
});