const palindromes = function (str) {
    let bebr = str.toLowerCase();
    let p1 = 0;
    let p2 = bebr.length-1;
    while (p1 < p2) {
        while (!/[A-Za-z0-9]/.test(bebr[p1])) {
            p1++;
        }
        while (!/[A-Za-z0-9]/.test(bebr[p2])) {
            p2--;
        }
        if (bebr[p1] != bebr[p2]) {
            return false;
        }
        p1++;
        p2--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
