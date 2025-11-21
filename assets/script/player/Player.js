export class Player{
    name;
    position;

    validatePosition(position){
        switch(position){
            case "setter":
                return "SETTER";
            case "libero":
                return "LIBERO";
            case "opposite":
                return "OPPOSITE_HITTER";
            case "mdbi":
                return "MIDDLE_BLOCK_I";
            case "mdbii":
                return "MIDDLE_BLOCK_II";
            case "othi":
                return "OUTSIDE_HITTER_I";
            case "othii":
                return "OUTSIDE_HITTER_II"
        }
    }

    constructor(name, position){
        this.name = name.toUpperCase();
        this.position = this.validatePosition(position);
    }
}