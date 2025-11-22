export class Rotation{
    importTeamLastRotation(){
        const TEAM = localStorage.getItem("CURRENT__TEAM__CHOICE");
        
        if(TEAM == "A"){
            var rotation = localStorage.getItem("LAST__ROTATION_A");
    
            if(rotation == null){
                return 1;
            }
            
            return rotation;
        }
    
        if(TEAM == "B"){
            var rotation = localStorage.getItem("LAST__ROTATION_A");
    
            if(rotation == null){
                return 1;
            }
            
            return rotation;
        }
    
        if(TEAM == "C"){
            var rotation = localStorage.getItem("LAST__ROTATION_A");
    
            if(rotation == null){
                return 1;
            }
            
            return rotation;
        }
    }

    setTeamRotation(rotation){
        const TEAM = localStorage.getItem("CURRENT__TEAM__CHOICE");

        if(TEAM == "A"){
            localStorage.setItem("LAST__ROTATION_A", rotation);
        } else if (TEAM == "B"){
            localStorage.setItem("LAST__ROTATION_B", rotation);
        }else if (TEAM == "C"){
            localStorage.setItem("LAST__ROTATION_C", rotation);
        }
        
    }
}