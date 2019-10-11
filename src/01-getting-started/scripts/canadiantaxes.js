const canadianTaxes = {
    calculateTaxes: (income) => {
        let taxesOwing = 0;
        if(income <= 47630) {
            return (income * 0.15);
        } else if(income > 47629) {
            return ((income - 47629) * 0.205) + (47630 * 0.15);
        } else if(income > 52408) {

        }
        else if(income > 62704) {

        }
        else if(income > 210371) {
            return ((income - 210371) * 0.33) + ((income - 62704) * 0.29) + ((income - 52408) * 0.26) + ((income - 47629) * 0.205) + (income * 0.15);
        }
        return 0;
    }
}

export default canadianTaxes;