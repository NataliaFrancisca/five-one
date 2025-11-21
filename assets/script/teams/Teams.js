export class Teams{
    STORAGE_NAME = "db__teams";
    STORAGE_CURRENT_TEAM = "db__current-team";

    STORAGE_TEAMS = {
        "A": {},
        "B": {},
        "C": {}
    }

    constructor(){
        if(localStorage.getItem(this.STORAGE_CURRENT_TEAM) == null){
            localStorage.setItem(this.STORAGE_CURRENT_TEAM, "A");
        }
    }

    add(team){
        if(localStorage.getItem(this.STORAGE_NAME) == null){
            const obj = new Object(this.STORAGE_TEAMS);
            obj[team.name] = team.players;

            localStorage.setItem(this.STORAGE_NAME, JSON.stringify(obj));
            return;
        }
        
        const teamsStorage = localStorage.getItem(this.STORAGE_NAME);
        const objTeams = JSON.parse(teamsStorage);

        objTeams[team.name] = team.players;

        localStorage.setItem(this.STORAGE_NAME, JSON.stringify(objTeams));
    }

    get(team){
        if(localStorage.getItem(this.STORAGE_NAME) == null){
            alert("nenhum time foi cadastrado.")
        }

        const teamsStorage = localStorage.getItem(this.STORAGE_NAME);
        const objTeams = JSON.parse(teamsStorage);

        if (Object.keys(objTeams[team]).length === 0) {
            alert("o time " + team + ", não tem nenhum jogador cadastrado.")
        }

        return objTeams[team];
    }

    set(team){
        localStorage.setItem(this.STORAGE_CURRENT_TEAM, team);
    }
}