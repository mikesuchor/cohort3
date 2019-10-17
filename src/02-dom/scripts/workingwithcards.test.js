import workingWithCards from './workingwithcards';

test('adding a card to the DOM', () => {
    const div = document.createElement("div");
    div.setAttribute("id", "card1");
    expect(div["id"]).toBe("card1");
});

test('adding a card before selected card', () => {
    
});

test('adding a card after selected card', () => {

});

test('deleting selected card', () => {

});