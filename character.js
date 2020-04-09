class Character {
	constructor(status) {
		this.status = "playing";
	}
	dealDamage = (victim) => {
		//to attack the victime
	};
	takeDamage = (damage) => {
		this.healthPoints = damage;
		console.log(`Player ${this.name} gets ${damage} damage.`);
	};

	show() {
		let { healthPoints, attackPoints, mana, name } = this;
		let message = `Hello from the player ${name}`;
		console.log(message);
	}
}
