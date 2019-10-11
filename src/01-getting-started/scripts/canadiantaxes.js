document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector("#canadian-taxes-input");
    const button = document.querySelector("#canadian-taxes-button");
    const output = document.querySelector("#canadian-taxes-output");
    button.addEventListener("click", () => {
        output.innerHTML = `$${canadianTaxes.calculateTaxes(input.value)}`;
    });
});

const canadianTaxes = {
    calculateTaxes: (income) => {
        const incomeInBracket1 = 47630;
        const incomeInBracket2 = 95259;
        const incomeInBracket3 = 147667;
        const incomeInBracket4 = 210371;

        if(income > incomeInBracket4) {
            return Math.round((((income - incomeInBracket4) * 0.33)
            + ((incomeInBracket4 - incomeInBracket3) * 0.29)
            + ((incomeInBracket3 - incomeInBracket2) * 0.26)
            + ((incomeInBracket2 - incomeInBracket1) * 0.205)
            + (incomeInBracket1 * 0.15)) * 100) / 100;
        } else if(income > incomeInBracket3) {
            return Math.round((((income - incomeInBracket3) * 0.29)
            + ((incomeInBracket3 - incomeInBracket2) * 0.26)
            + ((incomeInBracket2 - incomeInBracket1) * 0.205)
            + (incomeInBracket1 * 0.15)) * 100) / 100;
        } else if(income > incomeInBracket2) {
            return Math.round((((income - incomeInBracket2) * 0.26)
            + ((incomeInBracket2 - incomeInBracket1) * 0.205)
            + (incomeInBracket1 * 0.15)) * 100) / 100;
        } else if(income > incomeInBracket1) {
            return Math.round((((income - incomeInBracket1) * 0.205)
            + (incomeInBracket1 * 0.15)) * 100) / 100;
        } else {
            return Math.round((income * 0.15) * 100) / 100;
        }
    }
}

export default canadianTaxes;