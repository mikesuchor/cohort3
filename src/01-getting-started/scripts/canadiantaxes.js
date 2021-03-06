const canadianTaxes = {
    calculateTaxes: (income) => {
        const incomeInBracket1 = 47630;
        const incomeInBracket2 = 95259;
        const incomeInBracket3 = 147667;
        const incomeInBracket4 = 210371;
        const bracket1Maxed = incomeInBracket1 * 0.15;
        const bracked2Maxed = (incomeInBracket2 - incomeInBracket1) * 0.205;
        const bracket3Maxed = (incomeInBracket3 - incomeInBracket2) * 0.26;
        const bracket4Maxed = (incomeInBracket4 - incomeInBracket3) * 0.29;

        if(income > incomeInBracket4) {
            return Math.round(((income - incomeInBracket4) * 0.33 + bracket4Maxed + bracket3Maxed + bracked2Maxed + bracket1Maxed) * 100) / 100;
        } else if(income > incomeInBracket3) {
            return Math.round(((income - incomeInBracket3) * 0.29 + bracket3Maxed + bracked2Maxed + bracket1Maxed) * 100) / 100;
        } else if(income > incomeInBracket2) {
            return Math.round(((income - incomeInBracket2) * 0.26 + bracked2Maxed + bracket1Maxed) * 100) / 100;
        } else if(income > incomeInBracket1) {
            return Math.round(((income - incomeInBracket1) * 0.205 + bracket1Maxed) * 100) / 100;
        } else {
            return Math.round((income * 0.15) * 100) / 100;
        }
    }
}

export default canadianTaxes;