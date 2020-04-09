class Fighter extends Character {
	constructor(name, healthPoints, mana, attackPoints) {
		super(status);
		this.healthPoints = healthPoints;
		this.attackPoints = attackPoints;
		this.mana = mana;
		this.name = name;
	}
}

let fighter2 = new Fighter(12, 40, 4, "Grace");

console.log(
	"Fighter name: " +
		fighter2.name +
		", mana points: " +
		fighter2.mana +
		", attack points: " +
		fighter2.attackPoints +
		", health points: " +
		fighter2.healthPoints
);
