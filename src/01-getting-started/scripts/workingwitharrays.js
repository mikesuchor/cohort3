document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector("#arrays-input");
    document.querySelector("#arrays-add").addEventListener("click", () => {
        if(input.value) {
            workingWithArrays.addToArray(input.value);
            document.querySelector("#arrays-message").innerHTML = `Added ${input.value} to array`;
            input.value = "";
        }
    });
    document.querySelector("#arrays-show").addEventListener("click", workingWithArrays.showArray);
    document.querySelector("#arrays-total").addEventListener("click", () => {
        document.querySelector("#arrays-message").innerHTML = workingWithArrays.totalArray();
    });
    document.querySelector("#arrays-clear").addEventListener("click", () => {
        workingWithArrays.clearArray();
        document.querySelector("#arrays-message").innerHTML = "Message Area";
    });
});

const workingWithArrays = {
    arr: [],

    addToArray: (num) => {
        workingWithArrays.arr.push(Number(num));
    },

    showArray: () => {
        if(workingWithArrays.arr.length === 0) { document.querySelector("#arrays-message").innerHTML = "Message Area"; } 
        else { document.querySelector( "#arrays-message").innerHTML = workingWithArrays.arr; }
    },

    totalArray: () => {
        return workingWithArrays.arr.reduce((sum, num) => {
            return sum + num;
        });
    },

    clearArray: () => {
        workingWithArrays.arr = [];
    }
}

export default workingWithArrays;