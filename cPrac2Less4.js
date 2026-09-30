let playHours = [2, 2, 3, 3, 1, 4, 5];
let totalHours = 0;
let beyondLimit = 0;

for (i = 0; i < playHours.length; i++){
    totalHours += playHours[i];
    if(playHours[i] > 2 ){
        beyondLimit++
    }
}

console.log ("Total Hours: " + totalHours);
console.log("Beyond The Limit: " + beyondLimit);