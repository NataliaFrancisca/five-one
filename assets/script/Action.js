import { importTeamPlayers, importTeamLastRotation } from "./form.js";
import { Rotation } from "./Rotation.js";

class Action{
    players;
    currentRotation;

    constructor(){
        const rotation = new Rotation();

        this.players = importTeamPlayers();
        this.currentRotation = rotation.importTeamLastRotation();
    }

    clean(){
        
    }
}