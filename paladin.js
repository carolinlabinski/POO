class Paladin extends Character {
	constructor(healthPoints = 16, mana = 160, attackPoints = 3, name = "Ulder") {
		super(healthPoints, mana, attackPoints, name, status);
	}
}

let paladin2 = new Paladin(16, 160, 3, "Ulder");
console.log(
	"Stats: Paladin name: " +
		paladin2.name +
		", mana points: " +
		paladin2.mana +
		", attack points: " +
		paladin2.attackPoints +
		", health points: " +
		paladin2.healthPoints
);
