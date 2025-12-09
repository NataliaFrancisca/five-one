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
        this.lastPosition = {
            1: "SETTER",
            6: "MIDDLE_BLOCK_I",
            5: "OUTSIDE_HITTER_II",
            4: "OPPOSITE_HITTER",
            3: "MIDDLE_BLOCK_II",
            2: "OUTSIDE_HITTER_I",
            7: "LIBERO"
        }
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