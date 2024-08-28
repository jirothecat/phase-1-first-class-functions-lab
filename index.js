// Code your solution in this file!
const returnFirstTwoDrivers = function(){
    let drivers =['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(0,2);
}

returnFirstTwoDrivers()

const returnLastTwoDrivers = function(){
    let drivers =['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(2,4);
}

returnLastTwoDrivers()

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number){
    return function(fare){
        return number * fare;
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, driverFunction) {
    return driverFunction(drivers);
  };
