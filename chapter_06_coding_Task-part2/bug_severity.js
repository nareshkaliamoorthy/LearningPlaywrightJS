let bug_frequency = "rarely";
let release_impact = "majr";
let severity = "";


    if (bug_frequency === "always"){
        if (release_impact ==="blocker"){
            severity = "P0";
        }
        else if (release_impact ==="major"){
            severity = "P1";
        }
        else if (release_impact ==="minor"){
            severity = "P2";
        }
        else{
            severity = "undefined";
        }
    }   
    else if (bug_frequency === "often"){
        if (release_impact ==="blocker"){
            severity = "P1";
        }
        else if (release_impact ==="major"){
            severity = "P2";
        }
        else if (release_impact ==="minor"){
            severity = "P3";
        }
        else{
            severity = "undefined";
        }
    }
    else if (bug_frequency === "rarely"){
        if (release_impact ==="blocker"){
            severity = "P2";
        }
        else if (release_impact ==="major"){
            severity = "P3";
        }
        else if (release_impact ==="minor"){
            severity = "P4";
        }
        else{
            severity = "undefined";
        }
    }

    console.log(`bug_frequency:${bug_frequency} | release_impact: ${release_impact} | SEVERITY: ${severity}`);

    
