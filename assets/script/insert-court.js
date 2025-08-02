var court = document.querySelector(".main__court");

const rows = 6;
const cols = 7;

function createCourtSquare(r, c){
    const div = document.createElement("div");

    div.id = r + ":" + c;
    div.classList.add("court__square");
    div.classList.add("line__"+r);

    const p = document.createElement("p");
    const span = document.createElement("span");

    div.appendChild(p);
    div.appendChild(span);

    return div;
}

for(let r = 1; r < rows + 1; r++){
    for(let c = 1; c < cols + 1; c++){
        const div = createCourtSquare(r, c);
        court.appendChild(div);
    }
}