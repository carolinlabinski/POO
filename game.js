class Game {
	constructor(players = []) {
		this.players = players;
	}
	begin = () => {
		game = new Game();
		game.generatePlayers();
	};

	generatePlayers = () => {
		let fighter1 = new Fighter();
		let paladin1 = new Paladin();
		let healer3 = new Healer();
		let berzerker4 = new Berzerker();
		let assassin5 = new Assassin();
		this.players.push(fighter1, paladin2, healer3, berzerker4, assassin5);
	};

	showPlayerStats = () => {
		console.log(player.show());
	};
}

// let character = prompt(
// 	"Please choose one of the characters: fighter, paladin, healer, berzerker, assassin"
// );
// let name = prompt("Give your character a name:");
// let hp = prompt("Please choose the number of health points:");
// let mana = prompt("Please choose the number of mana points:");
// let ap = prompt("Please choose the number of attack points:");

// console.log(
// 	"Hey gamer, you created the following character:" +
// 		" " +
// 		character +
// 		" with name: " +
// 		name +
// 		" with" +
// 		" " +
// 		hp +
// 		" health points" +
// 		" " +
// 		mana +
// 		" mana" +
// 		" " +
// 		ap +
// 		" attack points" +
// 		" " +
// 		"!"
// );

// console.log(
// 	"Who do you wanna attack 1: fighter, 2: paladin, 3: healer, 4: berzerker, 5:assassin"
// );
// let enemy = prompt(
// 	"Please choose the number of your enemy: 1: fighter, 2: paladin, 3: healer, 4: berzerker, 5:assassin"
// );
// if (enemy == 1) {
// 	console.log("You are attacking the fighter");
// 	console.log("The fighter lost xx health points.");
// } else if (enemy == 2) {
// 	console.log("You are attacking the paladin");
// } else if (enemy == 3) {
// 	console.log("You are attacking the healer");
// } else if (enemy == 4) {
// 	console.log("You are attacking the berzerker");
// } else if (enemy == 5) {
// 	console.log("You are attacking the assassin");
// }
