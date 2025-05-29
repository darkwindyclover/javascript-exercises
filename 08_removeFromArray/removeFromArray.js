// Not clear what and how many args to pass, but it works if you know. Better to use rest (...args) tho.
const removeFromArray = function(arr) {
    return arr.filter(x => !Array.from(arguments).slice(1).includes(x));
}; 

// Do not edit below this line
module.exports = removeFromArray;
