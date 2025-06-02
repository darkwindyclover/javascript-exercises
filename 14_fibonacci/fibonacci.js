const fibonacci = function(pos) {
    const fib = [1,1];
    if (fib.length < pos) {
        for (let i = fib.length; i < pos; i++) {
            fib.push(fib[i-1]+fib[i-2]);
        }
    }
    if (pos == 0)
        return 0;
    else if (pos < 0)
        return 'OOPS';
    else
        return fib[pos-1];
};

// Do not edit below this line
module.exports = fibonacci;
