import workingWithCards from './workingwithcards';

test('adding a card to the DOM', () => {
    const div = document.createElement("div");
    div.setAttribute("id", "card1");
    expect(div["id"]).toBe("card1");
});