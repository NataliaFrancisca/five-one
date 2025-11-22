export class Team{
    name;
    players;

    constructor(){
        this.players = {
            "SETTER": '',
            "LIBERO": '',
            "OPPOSITE_HITTER": '',
            "MIDDLE_BLOCK_I": '',
            "MIDDLE_BLOCK_II": '',
            "OUTSIDE_HITTER_I": '',
            "OUTSIDE_HITTER_II": ''
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
}