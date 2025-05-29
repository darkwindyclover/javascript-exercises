const sumAll = function(a, b) {
    if ((a%1 != 0) || (b%1 != 0)  || (Math.min(a,b) < 0) || (typeof(a) == 'string') || (typeof(b) == 'string')) { return "ERROR"; }
    if (a > b) {
        let t = b;
        b = a; 
        a = t;
    }
    let sum = 0;
    while (a <= b) {
        sum+=a;
        a++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
