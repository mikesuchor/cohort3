const input = document.querySelector("#arrays-input");
const messageArea = document.querySelector("#arrays-message");

const workingWithArrays = {
    arr: [],

    addToArray: (num) => {
        workingWithArrays.arr.push(Number(num));
        input.value = ""
    },

    showArray: () => {
        console.log(workingWithArrays.arr);
        messageArea.innerHTML = workingWithArrays.arr;
        input.value = "";
    },

    totalArray: () => {
        messageArea.innerHTML = workingWithArrays.arr.reduce((sum, num) => {
            return sum + num;
        });
        input.value = "";
    },

    clearArray: () => {
        workingWithArrays.arr = [];
        messageArea.innerHTML = "Message Area";
        input.value = "";
    }
}

document.querySelector("#arrays-add").addEventListener("click", () => {
    workingWithArrays.addToArray(input.value);
});

document.querySelector("#arrays-show").addEventListener("click", workingWithArrays.showArray);

document.querySelector("#arrays-total").addEventListener("click", workingWithArrays.totalArray);

document.querySelector("#arrays-clear").addEventListener("click", workingWithArrays.clearArray);

export default workingWithArrays;