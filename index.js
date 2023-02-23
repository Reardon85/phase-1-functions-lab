// Code your solution in this file!

function distanceFromHqInBlocks(someValue){
    //returns the number of blcks givin a value
    //Hq is at 42nd street
    const Hq = 42; 
    return Math.abs( 42 - someValue);

}

function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

    return blocks*264

    // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination){
    //returns the number of feet traveled

    const blocks = Math.abs(start-destination);
    return blocks*264;

}

function calculatesFarePrice(start, destination) {
    //reurns the fare for he customer
    const feet = distanceTravelledInFeet(start, destination);

    if (feet <= 400){
        return 0
    } 
    else if( feet <= 2000){

        return (feet-400)*.02;
    }
    else if (feet <= 2500){
        return 25;
    }
    else {

        return "cannot travel that far";
    }


}