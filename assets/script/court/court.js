const volleyballCourt = document.querySelector(".main__vb-court");

const rows = 6;
const cols = 7;

function createSquare(r,c){
    const div = document.createElement("div");

    div.id = r + "-" + c;
    div.classList.add("court__square");
    div.classList.add("line__"+r);

    const p = document.createElement("p");
    const span = document.createElement("span");

    div.appendChild(span);
    div.appendChild(p);
   
    return div;
}

for (let r = 1; r < rows + 1; r++){
    for (let c = 1; c < cols + 1; c++){
        volleyballCourt.append(createSquare(r, c));
    }
}