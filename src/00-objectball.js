function gameObject(){
    const teams = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players:  {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players:  {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismark Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "Desagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
        }
    }
}
    return teams;
}
function numPointsScored(name){
    const object = gameObject();
    for(key in object){
        const papaer = object[key].players;
        for(skey in papaer){
            if(skey === name){
                return papaer[skey].points
            }
        }
    }
}
function shoeSize(name){
    const object = gameObject();
    for(key in object){
        const papaer = object[key].players;
        for(skey in papaer){
            if(skey === name){
                return papaer[skey].shoe
            }
        }
    }
}
function teamColors(name){
    const object = gameObject();
    return object[name].colors
}
function teamNames(){
    const object = gameObject();
    let arry = new Array;
    for(key in object){
        arry.push(object[key].teamName);
    }
    return arry
}
function playerNumbers(name){
    const object = gameObject();
    let numlist = new Array;
    for(key in object){
        const papaer = object[key]
        if(papaer.teamName === name){
            for(players in papaer.players){
                numlist.push(papaer.players[players].number)
            }
        }
    }
    return numlist
}
function playerStats(name){
    const object = gameObject();
    for(key in object){
        const papaer = object[key].players;
        for(skey in papaer){
            if(skey === name){
                return papaer[skey]
            }
        }
    }
}
function bigShoeRebounds(){
    const object = gameObject();
    let maxshoe;
    let max = 0;
    for(key in object){
        const papaer = object[key].players;
        for(skey in papaer){
            if(papaer[skey].shoe >= max){
                max = papaer[skey].shoe;
                maxshoe = papaer[skey];
            }
        }
    }
    return maxshoe.rebounds
}
function mostPointsScored(){
    const object = gameObject();
    let maxpoints;
    let max = 0;
    for(key in object){
        const papaer = object[key].players;
        for(skey in papaer){
            if(papaer[skey].points >= max){
                max = papaer[skey].points;
                maxpoints = papaer[skey];
            }
        }
    }
    return maxpoints
}
function winningTeam(){
    const object = gameObject();
    let maxpoints;
    let max = 0;
    for(key in object){
        const papaer = object[key].players;
        let currTeamPoints = 0;
        for(skey in papaer){
            currTeamPoints += papaer[skey].points;
        }
        if(currTeamPoints >= max){
            max = currTeamPoints;
            maxpoints = object[key].teamName;
        }
    }
    return maxpoints
}
function playerWithLongestName(){
    const object = gameObject();
    let maxpoints = new Array;
    let max = 0;
    for(key in object){
        const papaer = object[key].players;
        for(skey in papaer){
            if(skey.length > max){
                max = skey.length;
                maxpoints.splice(0, maxpoints.length,skey);
            }
            else if(skey.length === max){
                maxpoints.push(skey);
            }
        }
    }
    return maxpoints
}
function doesLongNameStealATon(){
    const object = gameObject();
    let longnames = playerWithLongestName();
    for(player in longnames){
        let team;
        for(key in object){
            let papaer = object[key].players;
            let cont = true;
            for(skey in papaer){
                if(skey === longnames[player]){
                    cont = false;
                    break
                }
            }
            if(cont === false){
                team = key;
                break
            }
        }
        let currPlayerPnts = object[team].players[longnames[player]].points;
        for(key in object){
            let papaer = object[key].players
            for(skey in papaer){
                if(papaer[skey].points > currPlayerPnts){
                    console.log(typeof(player))
                }
                if(papaer[skey].points > currPlayerPnts && player === (longnames.length - 1).toString()){
                    console.log("this is active")
                    return false;
                }
            }
        }
    }
    return true;
}