class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let playersJoined = [];

        for (let playerData of footballPlayers) {
            let [name, age, playerValue] = playerData.split('/');

            if (!playersJoined.includes(name)) {
                playersJoined.push(name);
            }

            age = Number(age);
            playerValue = Number(playerValue);

            let player = this.invitedPlayers.find(object => object.name === name);

            if (player === undefined) {
                this.invitedPlayers.push({name, age, playerValue})

            } else {
                if (player.playerValue < playerValue) {
                    player.playerValue = playerValue;
                }
            }
        }

        return `You successfully invite ${playersJoined.join(', ')}.`
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');

        playerOffer = Number(playerOffer);

        let player = this.invitedPlayers.find(object => object.name === name);

        if (player === undefined) {
            throw new Error(`${name} is not invited to the selection list!`)

        } else if (playerOffer < player.playerValue) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${player.playerValue - playerOffer} million more are needed to sign the contract!`)
        }

        player.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }

    ageLimit(name, age) {
        let player = this.invitedPlayers.find(object => object.name === name);

        if (player === undefined) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        let ageDifference = age - player.age;

        if (player.age < age) {
            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            }

            if (ageDifference > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        }

        if (player.age >= age) {
            return `${name} is above age limit!`
        }
    }

    transferWindowResult() {
        this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name))

        let result = `Players list:\n`

        this.invitedPlayers.forEach(player => result += `Player ${player.name}-${player.playerValue}\n`);

        return result.trim();
    }
}

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Kylian Mbappé/23/170"]));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
