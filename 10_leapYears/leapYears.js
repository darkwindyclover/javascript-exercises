//div by 4, or 400, but not 100
const leapYears = function(y) {
    return (y%400==0) || ((y%4==0) && (y%100!=0));
};

// Do not edit below this line
module.exports = leapYears;
