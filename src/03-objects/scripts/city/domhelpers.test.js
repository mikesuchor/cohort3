import domhelpers from './domhelpers.js';

describe('helper functions', () => {
    test('clear inputs method', () => {
        const input1 = document.createElement("input");
        input1.value = "clear me";
        const input2 = input1;
        const input3 = input1;
        const input4 = input1;
        domhelpers.clearInputs(input1, input2, input3, input4);
        expect(input1.value).toBe("");
        expect(input2.value).toBe("");
        expect(input3.value).toBe("");
        expect(input4.value).toBe("");
    });

    test('create card', () => {
        const testDiv = document.createElement("div");
        domhelpers.createCard(1, "", 51.0447, 114.0719, 1336000, testDiv);
        expect(testDiv.children[0]).toBe(undefined);
        domhelpers.createCard(1, "Calgary", 51.0447, 114.0719, 1336000, testDiv);
        expect(testDiv.children[0].id).toBe("Calgary");
    });

    test('remove card method', () => {
        const testDiv = document.createElement("div");
        domhelpers.createCard(1, "Calgary", 51.0447, 114.0719, 1336000, testDiv);
        expect(testDiv.children[0].id).toBe("Calgary");
        domhelpers.removeCard(testDiv.children[0]);
        expect(testDiv.children[0]).toBe(undefined);
    });
});