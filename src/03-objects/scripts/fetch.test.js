import functions from './fetch.js';

const data = [
    {
        name: "Phoebe",
        surname: "Young",
        gender: "female",
        region: "England"
    },
    {
        name: "Isabel",
        surname: "Ibarra",
        gender: "female",
        region: "Mexico"
    },
    {
        name: "Eusebiu",
        surname: "Pleșan",
        gender: "male",
        region: "Romania"
    },
    {
        name: "Iustina",
        surname: "Eșanu",
        gender: "female",
        region: "Romania"
    },
    {
        name: "龚",
        surname: "行",
        gender: "male",
        region: "China"
    },
    {
        name: "László",
        surname: "Hetény",
        gender: "male",
        region: "Hungary"
    },
    {
        name: "何",
        surname: "新",
        gender: "male",
        region: "China"
    },
    {
        name: "Makra",
        surname: "Pongrác",
        gender: "male",
        region: "Hungary"
    },
    {
        name: "Tudorița",
        surname: "Bratu",
        gender: "female",
        region: "Romania"
    },
    {
        name: "Magdaléna",
        surname: "Stodola",
        gender: "female",
        region: "Slovakia"
    }
];

test('return first person\'s name', () => {
    expect(functions.getFirstName(data)).toBe('Phoebe');
});

test('return an array of all first names', () => {
    expect(functions.getAllFirstNames(data))
        .toEqual(['Phoebe', 'Isabel', 'Eusebiu', 'Iustina', '龚', 'László', '何', 'Makra', 'Tudorița', 'Magdaléna']);
});

test('show delay problem method', () => {

});

test('show delay solution method', () => {
    
});

test('get users method', () => {
    
});

test('work with data method', () => {

});