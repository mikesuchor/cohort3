document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector("#dictionaries-input");
    const lookupButton = document.querySelector("#dictionaries-lookup");
    const messageArea = document.querySelector("#dictionaries-message");
    lookupButton.addEventListener("click", () => {
        messageArea.innerHTML = workingWithDictionaries.lookup(input.value);
    });
});

const workingWithDictionaries = {
    provinces: {
        ab: "Alberta",
        bc: "British Columbia",
        mb: "Manitoba",
        nb: "New Brunswick",
        nl: "Newfoundland and Labrador",
        ns: "Nova Scotia",
        on: "Ontario",
        pe: "Prince Edward Island",
        qc: "Quebec",
        sk: "Saskatchewan"
    },

    lookup: (code) => {
        for(let province in workingWithDictionaries.provinces) {
            if(province === code) {
                return workingWithDictionaries.provinces[code];
            }
        }
        return "Please enter a valid province code";
    }
}

export default workingWithDictionaries;