function solve(steps, stepsLength, speed){
    let distance = steps * stepsLength;
    let restMinutes = Math.trunc(distance / 500);
    distance /= 1000;

    let timeToWalk = ((distance / speed) * 60 + restMinutes) * 60;
    let date = new Date(2021, 9, 1, 0, 0, 0);
    date.setSeconds(Math.round(timeToWalk));

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(hours < 10){
        hours = `0${hours}`;
    }
    if(minutes < 10){
        minutes = `0${minutes}`;
    }
    if(seconds < 10){
        seconds = `0${seconds}`;
    }

    return `${hours}:${minutes}:${seconds}`;
}

console.log(solve(4000, 0.60, 5));