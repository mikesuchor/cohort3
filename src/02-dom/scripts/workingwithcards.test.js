import workingWithCards from './workingwithcards';

beforeEach(() => {
    workingWithCards.cardNumber = 0;
})

test('adding a card to the DOM', () => {
    const leftPanel = document.createElement("div");
    workingWithCards.addCard(leftPanel);
    expect(leftPanel.children[0].id).toBe("card1");
    workingWithCards.addCard(leftPanel);
    expect(leftPanel.children[1].id).toBe("card2");
});

test('adding a card before selected card', () => {
    const leftPanel = document.createElement("div");
    workingWithCards.addCard(leftPanel);
    workingWithCards.addBefore(leftPanel, leftPanel.children[0]);
    expect(leftPanel.children[0].id).toBe("card2");
    workingWithCards.addBefore(leftPanel, leftPanel.children[0]);
    expect(leftPanel.children[0].id).toBe("card3");
    expect(leftPanel.children[1].id).toBe("card2");
});

test('adding a card after selected card', () => {
    const leftPanel = document.createElement("div");
    workingWithCards.addCard(leftPanel);
    workingWithCards.addAfter(leftPanel, leftPanel.children[0]);
    expect(leftPanel.children[1].id).toBe("card2");
    workingWithCards.addAfter(leftPanel, leftPanel.children[1]);
    expect(leftPanel.children[2].id).toBe("card3");
    workingWithCards.addAfter(leftPanel, leftPanel.children[2]);
    expect(leftPanel.children[3].id).toBe("card4");
});

test('deleting selected card', () => {
    const leftPanel = document.createElement("div");
    workingWithCards.addCard(leftPanel);
    expect(leftPanel.children[0].id).toBe("card1");
    workingWithCards.deleteCard(leftPanel.children[0]);
    expect(leftPanel.children[0]).toBe(undefined);
});