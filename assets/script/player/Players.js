export class Players{
    STORAGE_NAME = "db__players-name";

    add(player){
        if(localStorage.getItem(this.STORAGE_NAME) == null){
            const arr = new Array();
            arr.push(player);

            localStorage.setItem(this.STORAGE_NAME, JSON.stringify(arr));
            return;
        }   

        const playersJSON = localStorage.getItem(this.STORAGE_NAME);
        const players = JSON.parse(playersJSON);

        if (players.includes(player)){
            return;
        }

        players.push(player);
        localStorage.setItem(this.STORAGE_NAME, JSON.stringify(players));
    }

    remove(){

    }

    get(){
        if(localStorage.getItem(this.STORAGE_NAME) == null){
            alert("nenhum jogador foi cadastrado.");
            return;
        }
        
        return JSON.parse(localStorage.getItem(this.STORAGE_NAME));
    }
}