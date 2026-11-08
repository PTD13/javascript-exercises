const removeFromArray = function(arr, ...args) {
    for (let arg of args) {
        while (arr.includes(arg)) {
            const index = arr.indexOf(arg);
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
