import { Players } from "../player/Players.js";
import { updateDataFromPlayers } from "./form-set-players.js";

const buttonAddField = document.getElementById("span__add-fields");
const formRegisterPlayers = document.getElementById("form__register-players");

// save all athletes name
formRegisterPlayers.addEventListener("submit", () => {
    const players = new Players();
    const allNames = document.querySelectorAll("#form__register-players input");

    allNames.forEach(i => players.add(i.value));

    alert("atletas adicionado com sucesso.")
    updateDataFromPlayers();
});

function createField(){
    const fieldset = document.createElement('fieldset');
    fieldset.classList.add("field__player");

    const label = document.createElement("label");
    label.innerHTML = "Nome: "

    const input = document.createElement("input");
    input.type = "text";
    input.minLength = "3";
    input.maxLength = "10";
    input.required = true;

    fieldset.appendChild(label);
    fieldset.appendChild(input);

    return fieldset;
}

// adding one more field to register player name
buttonAddField.addEventListener('click', () => {
    const sectionFields = document.getElementById("section__fields");
    const fieldset = createField();
    sectionFields.appendChild(fieldset);
});

