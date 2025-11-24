export class Players{
    STORAGE_NAME = "db__players-name";

    constructor(){
        if(localStorage.getItem(this.STORAGE_NAME) == null){
            localStorage.setItem(this.STORAGE_NAME, JSON.stringify([]));
        }
    }

    add(player){
        const playersJSON = localStorage.getItem(this.STORAGE_NAME);
        const players = JSON.parse(playersJSON);

        const playerExists = players.find(p => p == player);

        if (playerExists){
            return;
        }

        players.push(player.toUpperCase());
        localStorage.setItem(this.STORAGE_NAME, JSON.stringify(players));
    }

    remove(player){
        const playersJSON = localStorage.getItem(this.STORAGE_NAME);
        const players = JSON.parse(playersJSON);

        const playersUpdated = players.filter((p) => p !== player);

        localStorage.setItem(this.STORAGE_NAME, JSON.stringify(playersUpdated));
    }

    get(){
        return JSON.parse(localStorage.getItem(this.STORAGE_NAME));
    }
}