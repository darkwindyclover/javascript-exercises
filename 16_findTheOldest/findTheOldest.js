const findTheOldest = function(arr) {
    let biggest = arr.reduce((ac, curVal, curInd) => {
        let endDate;
        if (curVal.yearOfDeath == undefined) {
            endDate = 2025;
        }
        else {
            endDate = curVal.yearOfDeath;
        }
        let curAge = endDate-curVal.yearOfBirth;
        if (curAge > ac.age) {
            return {ind: curInd, age: curAge};
        }
        else return ac;
    }, {ind:0, age:0});
    return arr[biggest.ind];
};

// Do not edit below this line
module.exports = findTheOldest;
