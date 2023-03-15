// returnFirstTwoDrivers()
const arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (arrayOfDrivers){ 
    return arrayOfDrivers.slice(0, 2);

}
//returnLastTwoDrivers()
const returnLastTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(-2);
}

// selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//createFareMultiplier()
function createFareMultiplier(integer){
    return function(fare){
        return (fare * integer);
    }
}

//fareDoubler()
const fareDoubler = function (fare){
    return createFareMultiplier(2)(fare);
}

//fareTripler()
const fareTripler = function (fare){
    return createFareMultiplier(3)(fare);
}

//selectDifferentDrivers(arrayOfDrivers, function)
function selectDifferentDrivers(arrayOfDrivers, funct){
    return funct(arrayOfDrivers);
}