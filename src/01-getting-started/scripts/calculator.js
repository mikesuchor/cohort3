const input1 = document.querySelector("#calc-input1");
const input2 = document.querySelector("#calc-input2");
const output = document.querySelector("#calc-output");

const calculator = {
    clear: () => {
        input1.value = "";
        input2.value = "";
        output.innerHTML = "__";        
    },
    add: (num1, num2) => {
        console.log(num1 + num2);
        return num1 + num2;
    },
    subtract: (num1, num2) => {
        console.log(num1 - num2);
        return num1 - num2;
    },
    multiply: (num1, num2) => {
        console.log(num1 * num2);
        return num1 * num2;
    },
    divide: (num1, num2) => {
        console.log(num1 / num2);
        return num1 / num2;
    }
}

document.querySelector("#calc-clear").addEventListener("click", calculator.clear);

document.querySelector("#calc-add").addEventListener("click", () => {
    output.innerHTML = calculator.add(Number(input1.value), Number(input2.value));
});

document.querySelector("#calc-subtract").addEventListener("click", () => {
    output.innerHTML = calculator.subtract(Number(input1.value), Number(input2.value));
});

document.querySelector("#calc-multiply").addEventListener("click", () => {
    output.innerHTML = calculator.multiply(Number(input1.value), Number(input2.value));
});

document.querySelector("#calc-divide").addEventListener("click", () => {
    output.innerHTML = calculator.divide(Number(input1.value), Number(input2.value));
});

export default calculator;