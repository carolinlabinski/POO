class Assassin extends Character {
	constructor(healthPoints = 6, mana = 20, attackPoints = 6, name = "Carl") {
		super(healthPoints, mana, attackPoints, name, status);
	}
}

let assassin1 = new Assassin(6, 20, 6, "Carl");
console.log(
	"Assassin name: " +
		assassin1.name +
		", mana points: " +
		assassin1.mana +
		", attack points: " +
		assassin1.attackPoints +
		", health points: " +
		assassin1.healthPoints
);
