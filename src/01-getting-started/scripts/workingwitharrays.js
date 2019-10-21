const workingWithArrays = {
    arr: [],

    addToArray(num) {
        this.arr.push(Number(num));
        return this.arr;
    },

    showArray() {
        if(this.arr.length === 0) {
            return "Message Area";
        }
        else {
            return this.arr;
        }
    },

    totalArray() {
        return this.arr.reduce((sum, num) => {
            return sum + num;
        });
    },

    clearArray() {
        this.arr = [];
    }
}

export default workingWithArrays;