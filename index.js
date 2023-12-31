// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    if (someValue >= 42){
        return someValue - 42
    } else if (someValue < 42) {
        return 42 - someValue
    }

}
// console.log(distanceFromHqInBlocks(50));
// console.log(distanceFromHqInBlocks(43));
// console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet

  }
// console.log(distanceFromHqInFeet(50));


function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (destination > start) {
        return (destination - start) * 264
    } else if (destination < start) {
        return (start - destination) * 264
    }
  }
  //console.log(distanceTravelledInFeet(34,38));
  //console.log(distanceTravelledInFeet(34,28));

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return 0
    } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02
    } else if (distance > 2000 && distance <= 2500) {
        return 25
    } else if (distance > 2500)
        return "cannot travel that far"
    
  }
console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));