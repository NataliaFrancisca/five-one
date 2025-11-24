import { Players } from "../player/Players.js";

const formDeleteTeam = document.getElementById("form__delete-players");
const sectionFieldsCheckbox = document.getElementById("section__fields-checkbox");
let players = new Players();

function createField(player){
    const fieldset = document.createElement('fieldset');
    fieldset.classList.add("field__player", "checkbox");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = "input__checkbox-" + player;
    input.name = player;

    const label = document.createElement("label");
    label.innerHTML = player;
    label.htmlFor = "input__checkbox-" + player;

    fieldset.appendChild(input);
    fieldset.appendChild(label);

    return fieldset;
}

export function removeField(){
    const allPlayersSelected = document.querySelectorAll("#section__fields-checkbox .field__player");

    allPlayersSelected.forEach((p) => {
        p.remove()
    })
}

export function updateField(){
    removeField();
    players.get().forEach((p) => {
        const field = createField(p);
        sectionFieldsCheckbox.appendChild(field);
    });
}

formDeleteTeam.addEventListener("submit", () => {
    const allPlayersSelected = document.querySelectorAll("#section__fields-checkbox input:checked");

    allPlayersSelected.forEach((p) => {
        players.remove(p.name);
    })

    alert("Atletas removidos com sucesso");
    formDeleteTeam.reset();
})