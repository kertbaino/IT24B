class NBAPlayer {
    constructor(name, position, team, careerPoints, allStarAppearances) {
        this.name = name;
        this.position = position;
        this.team = team;
        this.careerPoints = careerPoints;
        this.allStarAppearances = allStarAppearances;
    }

    getDetails() {
        return `Name: ${this.name}\nPosition: ${this.position}\nTeam: ${this.team}\nCareer Points: ${this.careerPoints.toLocaleString()}\nAll-Star Appearances: ${this.allStarAppearances}`;
    }
}


class LeBronJames extends NBAPlayer {
    constructor() {
        super("Leybron Games", "backward", "Los Angeles bakers", 6969, 19);
    }
}


class StephenCurry extends NBAPlayer {
    constructor() {
        super("Chicken Curry", "Guard house", "Golden retriever Warriors", 150, 9);
    }
}


class GiannisAntetokounmpo extends NBAPlayer {
    constructor() {
        super("Giannis Antenimoko", "upwards", "Milwaukee StarBucks", 1, 6);
    }
}


class KevinDurant extends NBAPlayer {
    constructor() {
        super("Deo Durant", "Roller", " Suns SCreen", .5, 13);
    }
}


class LukaDoncic extends NBAPlayer {
    constructor() {
        super("Luka gi noka", "upsidedown", "teambangan", 99999, 4); 
    }
}


class NBAPlayerSelectionSystem {
    constructor() {
        this.players = {
            "1": new LeBronJames(),
            "2": new StephenCurry(),
            "3": new GiannisAntetokounmpo(),
            "4": new KevinDurant(),
            "5": new LukaDoncic()
        };
    }

    displayOptions() {
        console.log("Select an NBA All-Star player:");
        console.log("1: Leybron Games");
        console.log("2: Chicken Curry");
        console.log("3: Giannis Antenimoko");
        console.log("4: Deo Durant");
        console.log("5: Luka gi noka");
    }

    getPlayerDetails(option) {
        const player = this.players[option];
        return player ? player.getDetails() : "Player not found.";
    }
}


const playerSystem = new NBAPlayerSelectionSystem();

function handleUserSelection(option) {
    console.log(playerSystem.getPlayerDetails(option));
}


function startSelectionProcess() {
    playerSystem.displayOptions();
    
  
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Enter the number of the player you want to select: ', (option) => {
        handleUserSelection(option);
        readline.close();
    });
}


startSelectionProcess();