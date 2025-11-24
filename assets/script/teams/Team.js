export class Team{
    name;
    players;
    lastAction;
    lastPosition;

    constructor(name){
        this.players = {
            "SETTER": 'LEVANTADOR',
            "LIBERO": 'LÍBERO',
            "OPPOSITE_HITTER": 'OPOSTO',
            "MIDDLE_BLOCK_I": 'CENTRAL I',
            "MIDDLE_BLOCK_II": 'CENTRAL II',
            "OUTSIDE_HITTER_I": 'PONTEIRO I',
            "OUTSIDE_HITTER_II": 'PONTEIRO II'
        }

        this.name = name;
        this.lastAction = "original";
        this.lastPosition = 1;
    }

    setName(name){
        this.name = name;
    }

    setPlayer(player) {
        const position = player.position;  
        const name = player.name;          

        this.players[position] = name;
    }

    setPlayers(players){
        this.players = players;
    }
}