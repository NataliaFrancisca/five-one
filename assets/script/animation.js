function runAnimationWhile(athleteOne, athleteTwo){
    const rect1 = athleteOne.getBoundingClientRect();
    const rect2 = athleteTwo.getBoundingClientRect();
 
    const dx = rect2.left - rect1.left;
    const dy = rect2.top - rect1.top;

    athleteOne.style.transition = "transform 0.6s ease";
    athleteTwo.style.transition = "transform 0.6s ease";

    athleteOne.style.transform = `translate(${dx}px, ${dy}px)`;
    athleteTwo.style.transform = `translate(${-dx}px, ${-dy}px)`;

    setTimeout(() => {
        athleteOne.style.transform = "";
        athleteTwo.style.transform = "";
    }, 1000);
}

export function runAnimationFrontRow(currentRotation){
    const frontRow = document.querySelectorAll(".line__1.inserted");

    switch(currentRotation){
        case 1: 
            runAnimationWhile(frontRow[0], frontRow[2])
            break;
        case 2:
            runAnimationWhile(frontRow[0], frontRow[1])
            break;
        case 3:
            runAnimationWhile(frontRow[0], frontRow[1])
            break;
        case 4:
            runAnimationWhile(frontRow[0], frontRow[2])
            break;
        case 5:
            runAnimationWhile(frontRow[1], frontRow[2])
            break;
        case 6:
            runAnimationWhile(frontRow[0], frontRow[1])
            break;
        default:
            console.log("no effect");
    }
}

export function runAnimationBackRow(currentRotation){
    const backRow = document.querySelectorAll(".line__4.inserted, .line__5.inserted");

    switch(currentRotation){
        case 1: 
            runAnimationWhile(backRow[0], backRow[2])
            break;
        case 4:
            runAnimationWhile(backRow[0], backRow[2])
            break;
        default:
            console.log("no effect");
    }
}