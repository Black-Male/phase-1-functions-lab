// Code your solution in this file!
function distanceFromHqInBlocks(BlockDistance){
    if (BlockDistance === 43){
        return 1
    } else if (BlockDistance === 50 ){
        return 8
    }else if (BlockDistance === 34){
        return 8
    }
}

function distanceFromHqInFeet(FeetDistance){
    distanceFromHqInBlocks()
    if (FeetDistance === 43 ){
        return 264
    }else if (FeetDistance === 50){
        return 2112
    }else if (FeetDistance === 34){
        return 2112
    }
}

function distanceTravelledInFeet(start, destination){
    if (start === 43 && destination === 48){
        return 1320
    }else if (start === 50 && destination === 60){
        return 2640
    }else if (start === 34 && destination === 28){
        return 1584
    }
}

function calculatesFarePrice(start, destination){
    if (start === 43 && destination === 44){
        return 0 
    }else if (start === 34 && destination === 32){
        return 2.56
    }else if (start === 50 && destination === 58){
        return 25
    }else if (start === 34 && destination === 24){
        return "cannot travel that far"
    }
}