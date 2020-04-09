class Healer extends Character {
	constructor(healthPoints = 8, mana = 200, attackPoints = 2, name = "Moana") {
		super(healthPoints, mana, attackPoints, name, status);
	}
}

let healer2 = new Healer(8, 200, 2, "Moana");
console.log(
	"Healer name: " +
		healer2.name +
		", mana points: " +
		healer2.mana +
		", attack points: " +
		healer2.attackPoints +
		", health points: " +
		healer2.healthPoints
);
