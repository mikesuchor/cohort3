const workingWithArrays = {
    arr: [],

    addToArray: (num) => {
        workingWithArrays.arr.push(Number(num));
        return workingWithArrays.arr;
    },

    showArray: () => {
        if(workingWithArrays.arr.length === 0) {
            return "Message Area";
        }
        else {
            return workingWithArrays.arr;
        }
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