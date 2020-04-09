class Berzerker extends Character {
	constructor(healthPoints = 8, mana = 0, attackPoints = 4, name = "Draven") {
		super(healthPoints, mana, attackPoints, name, status);
	}
}

let berzerker2 = new Berzerker(8, 0, 4, "Draven");
console.log(
	"Berzerker name: " +
		berzerker2.name +
		", mana points: " +
		berzerker2.mana +
		", attack points: " +
		berzerker2.attackPoints +
		", health points: " +
		berzerker2.healthPoints
);
