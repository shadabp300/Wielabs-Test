// Given a clock time in hh:mm format, determine, to the nearest degree, 
// the angle between the hour and the minute hands.
// Bonus: When, during the course of a day, will the angle be zero?



let degree=(time) => {
    
    let hh=parseInt(time[0]+time[1])
    let mm=parseInt(time[3]+time[4])
    
    let hdegree=(hh + mm/60)*30
    let mdegree=mm*6
    let angle=Math.abs(hdegree-mdegree)

    if (angle>180) {
        return 360-angle
    }
    else {
        return angle
    }
}

console.log(degree("12:59"))