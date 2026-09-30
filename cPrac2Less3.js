function getPlayerPosition(player) {
    let x = player[0];
    let y = player[1];

    if (x > 0 && y > 0){
        return "Top right"
    }else if(x < 0 && y > 0){
        return "Top left"
    }else if(x < 0 && y < 0){
        return "Bottom left"
    }else if ( x > 0 && y < 0){
        return "Bottom right"
    }else{
        return "In the middle"
    }
}

let coordinate = [[5, 5], [-5, 5], [-5, -5], [5, -5], [0, 0]];

coordinate.forEach(dot => {
    console.log(`The player is in the ${getPlayerPosition(dot)} quadrant.`);
});