import { Team } from "./Team.js";

export class Teams{
    STORAGE_NAME = "db__teams";
    STORAGE_CURRENT_TEAM = "db__current-team";

    STORAGE_TEAMS;

    constructor(){
        this.STORAGE_TEAMS = {
            "A": new Team("A"),
            "B": new Team("B"),
            "C": new Team("C")
        };

        if(localStorage.getItem(this.STORAGE_NAME) == null){
            localStorage.setItem(this.STORAGE_NAME, JSON.stringify(this.STORAGE_TEAMS));
        }

        if(localStorage.getItem(this.STORAGE_CURRENT_TEAM) == null){
            localStorage.setItem(this.STORAGE_CURRENT_TEAM, "A");
        }
    }

    add(team){
        const teamsStorage = localStorage.getItem(this.STORAGE_NAME);
        const objTeams = JSON.parse(teamsStorage);

        objTeams[team.name] = team;

        localStorage.setItem(this.STORAGE_NAME, JSON.stringify(objTeams));
    }

    get(team){
        if(localStorage.getItem(this.STORAGE_NAME) == null){
            alert("nenhum time foi cadastrado.")
        }

        const teamsStorage = localStorage.getItem(this.STORAGE_NAME);
        const objTeams = JSON.parse(teamsStorage);

        const objTeam = objTeams[team];
        return objTeam;
    }

    update(team){
        const teamsStorage = localStorage.getItem(this.STORAGE_NAME);
        const objTeams = JSON.parse(teamsStorage);

        objTeams[team.name] = team;

        localStorage.setItem(this.STORAGE_NAME, JSON.stringify(objTeams));
    }
    
    getCurrentTeam(){
        const currentTeam = localStorage.getItem(this.STORAGE_CURRENT_TEAM);
        const objTeam = this.get(currentTeam);
        return objTeam;
    }

    setCurrentTeam(team){
        localStorage.setItem(this.STORAGE_CURRENT_TEAM, team);
    }
}