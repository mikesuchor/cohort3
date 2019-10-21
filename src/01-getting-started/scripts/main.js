import functions from './functions.js';
import calculator from './calculator.js';
import canadianTaxes from './canadiantaxes.js';
import workingWithArrays from './workingwitharrays.js';
import workingWithDictionaries from './workingwithdictionaries.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

// Calculator Section

const calcInput1 = document.querySelector("#calc-input1");
const calcInput2 = document.querySelector("#calc-input2");
const calcOutput = document.querySelector("#calc-output");
const calcClear = document.querySelector("#calc-clear");
const calcAdd = document.querySelector("#calc-add");
const calcSubtract = document.querySelector("#calc-subtract");
const calcMultiply = document.querySelector("#calc-multiply");
const calcDivide = document.querySelector("#calc-divide");

calcClear.addEventListener("click", () => {
    calcInput1.value = calculator.clear();
    calcInput2.value = calculator.clear();
    calcOutput.innerText = calculator.clear();
});

calcAdd.addEventListener("click", () => {
    calcOutput.innerText = calculator.add(Number(calcInput1.value), Number(calcInput2.value));
});

calcSubtract.addEventListener("click", () => {
    calcOutput.innerText = calculator.subtract(calcInput1.value, calcInput2.value);
});

calcMultiply.addEventListener("click", () => {
    calcOutput.innerText = calculator.multiply(calcInput1.value, calcInput2.value);
});

calcDivide.addEventListener("click", () => {
    calcOutput.innerText = calculator.divide(calcInput1.value, calcInput2.value);
});

// Canadian Taxes Section

const taxesInput = document.querySelector("#canadian-taxes-input");
const taxesButton = document.querySelector("#canadian-taxes-button");
const taxesOutput = document.querySelector("#canadian-taxes-output");

taxesButton.addEventListener("click", () => {
    taxesOutput.innerText = `You owe $${canadianTaxes.calculateTaxes(taxesInput.value)}`;
});

// Working With Arrays Section

const arraysInput = document.querySelector("#arrays-input");
const arraysAdd = document.querySelector("#arrays-add");
const arraysShow = document.querySelector("#arrays-show");
const arraysTotal = document.querySelector("#arrays-total");
const arraysClear = document.querySelector("#arrays-clear");
const arraysMessage = document.querySelector("#arrays-message");

arraysAdd.addEventListener("click", () => {
    if(arraysInput.value) {
        workingWithArrays.addToArray(arraysInput.value);
        arraysMessage.innerText = `Added ${arraysInput.value} to array`;
        arraysInput.value = "";
    }
});

arraysShow.addEventListener("click", () => {
    arraysMessage.innerText = workingWithArrays.showArray();
});

arraysTotal.addEventListener("click", () => {
    arraysMessage.innerText = workingWithArrays.totalArray();
});

arraysClear.addEventListener("click", () => {
    workingWithArrays.clearArray();
    arraysMessage.innerText = "Message Area";
});

// Working With Dictionaries Section

const dictInput = document.querySelector("#dictionaries-input");
const dictLookup = document.querySelector("#dictionaries-lookup");
const dictMessageArea = document.querySelector("#dictionaries-message");

dictLookup.addEventListener("click", () => {
    dictMessageArea.innerText = workingWithDictionaries.lookup(dictInput.value);
});