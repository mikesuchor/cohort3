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

    lookup(code) {
        for(let province in this.provinces) {
            if(province === code) {
                return this.provinces[code];
            }
        }
        return "Please enter a valid province code";
    }
}

export default workingWithDictionaries;