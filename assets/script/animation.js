import { rotations } from '../db/rotation.js';

const currentGameAction = document.getElementById("p__current-action");

function runAnimationWhile(goal, origin){
    const rect1 = goal.getBoundingClientRect();
    const rect2 = origin.getBoundingClientRect();

    const dx = rect2.left - rect1.left;
    const dy = rect2.top - rect1.top;

    goal.style.transition = "transform 0.6s ease";
    origin.style.transition = "transform 0.6s ease";

    goal.style.transform = `translate(${dx}px, ${dy}px)`;
    origin.style.transform = `translate(${-dx}px, ${-dy}px)`;

    setTimeout(() => {
        goal.style.transform = "";
        origin.style.transform = "";
    }, 2000);

    setTimeout(() => {
        origin.classList.add()
        goal.classList.remove("set__temporarie-bg-blue");
        goal.classList.remove("set__temporarie-bg-orange");

        origin.classList.remove("set__temporarie-bg-blue");
        origin.classList.remove("set__temporarie-bg-orange");
    }, 2000);
}

export function runAnimation(currentRotation){
    const isAnAttackAction = currentGameAction.innerText.includes("realizando ataque");

    switch(currentRotation){
        case 1 & isAnAttackAction:

            for (let i = 1; i < 7; i++){
                const attack = rotations[currentRotation]["attack"][i];
                const attackgoal = rotations[currentRotation]["attack-goal"][i];

                const origin = document.getElementById(`${attack[0]}-${attack[1]}`)
                const goal = document.getElementById(`${attackgoal[0]}-${attackgoal[1]}`)

                const bgOrigin = window.getComputedStyle(origin).backgroundColor;
                const bgGoal = window.getComputedStyle(goal).backgroundColor;

                if(bgOrigin == "rgb(255, 165, 0)" && bgGoal == "rgb(61, 106, 255)"){
                    goal.classList.add("set__temporarie-bg-orange");
                }

                if(bgOrigin == "rgb(34, 255, 34)" && bgGoal == "rgb(255, 165, 0)"){
                    goal.classList.add("set__temporarie-bg-blue");
                }

                if(bgOrigin == "rgb(61, 106, 255)" && bgGoal == "rgb(255, 165, 0)"){
                    goal.classList.add("set__temporarie-bg-blue");
                    origin.classList.add("set__temporarie-bg-orange");
                }

                runAnimationWhile(goal, origin)
            }
           
            break;
    }
}