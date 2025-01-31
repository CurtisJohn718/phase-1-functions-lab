// Code your solution in this file!

function calculateBlockDistance(start, end) {
    return Math.abs(start - end)
}
function calculateBlocksToFeet(blocks) {
    return blocks * 264
}

// distanceFromHqInBlocks: 
// Returns the number of blocks from Scuber's headquarters to the pickup location.
function distanceFromHqInBlocks(pickupLocation) {
    // return Math.abs(42 -pickupLocation)
    return calculateBlockDistance(pickupLocation, 42)
}

// distanceFromHqInFeet: 
// Returns the number of feet from Scuber's headquarters to the pickup location.
// function distanceFromHqInFeet(pickupLocation) {
    // return Math.abs((42-pickupLocation) * 264)
// }
function distanceFromHqInFeet(pickupLocation) {
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation)
    // return distanceInBlocks * 264
    return calculateBlocksToFeet(distanceInBlocks)
}

console.log(distanceFromHqInFeet)

// distanceTravelledInFeet: 
// define a function called distanceTravelled in feet
// define two parameters (start, end)
// calculate distance in blocks (start - end) make it positive
// calculate distance in feet by multiplying blocks by 264
// return distance in feet
function distanceTravelledInFeet(start, end) {
    const blocks = calculateBlockDistance(start, end)
    return calculateBlocksToFeet(blocks)
}
 
// calculatesFarePrice: Given the same starting and ending block as the previous test (hint hint), return the fare for the customer. The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). Then Scuber charges a flat fare of $25 for a distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' if a ride over 2500 feet is requested.

// define a function called calculateFarePrice
// define two parameters (start, end)
// calculate distance in feet (distanceTravelledInFeet)
// if distance in feet is 400 or less return 0
// if distance in feet is greater than 400 and less than or equal to 2000 return distance in feet * .02 (2 cents per foot)
// if distance in feet is greater than 2000 and less than 2500 return 25
// if distance in feet is greater than 2500 return "cannot travel that far"

 function calculatesFarePrice(start, end) {
    const distance = distanceTravelledInFeet(start, end)
    if (distance <= 400) {
        return 0
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02
    } else if (distance > 2000 && distance <= 2500) {
        return 25
    } else {
        return "cannot travel that far"    
 }

 }
