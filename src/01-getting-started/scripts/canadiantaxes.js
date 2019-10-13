document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector("#canadian-taxes-input");
    const button = document.querySelector("#canadian-taxes-button");
    const output = document.querySelector("#canadian-taxes-output");
    button.addEventListener("click", () => {
        output.innerHTML = `You owe $${canadianTaxes.calculateTaxes(input.value)}`;
    });
});

const canadianTaxes = {
    calculateTaxes: (income) => {
        const incomeInBracket1 = 47630;
        const incomeInBracket2 = 95259;
        const incomeInBracket3 = 147667;
        const incomeInBracket4 = 210371;
        const maxBracket1 = () => { return incomeInBracket1 * 0.15 };
        const maxBracket2 = () => { return (incomeInBracket2 - incomeInBracket1) * 0.205 };
        const maxBracket3 = () => { return (incomeInBracket3 - incomeInBracket2) * 0.26 };
        const maxBracket4 = () => { return (incomeInBracket4 - incomeInBracket3) * 0.29 };

        if(income > incomeInBracket4) {
            return Math.round(((income - incomeInBracket4) * 0.33 + maxBracket4() + maxBracket3() + maxBracket2() + maxBracket1()) * 100) / 100;
        } else if(income > incomeInBracket3) {
            return Math.round(((income - incomeInBracket3) * 0.29 + maxBracket3() + maxBracket2() + maxBracket1()) * 100) / 100;
        } else if(income > incomeInBracket2) {
            return Math.round(((income - incomeInBracket2) * 0.26 + maxBracket2() + maxBracket1()) * 100) / 100;
        } else if(income > incomeInBracket1) {
            return Math.round(((income - incomeInBracket1) * 0.205 + maxBracket1()) * 100) / 100;
        } else {
            return Math.round((income * 0.15) * 100) / 100;
        }
    }
}

export default canadianTaxes;