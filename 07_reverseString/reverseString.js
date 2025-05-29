const reverseString = function(str) {
    let nstr = '';
    for (let i = str.length - 1; i > -1; i--) {
        nstr+=str[i];
    }
    return nstr;
}

// Do not edit below this line
module.exports = reverseString;
