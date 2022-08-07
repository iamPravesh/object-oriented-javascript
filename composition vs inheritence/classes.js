class Monster {
    constructor(name) {
        this.name = name
    }

    attack() {
        console.log(`${this.name} attacks`)
    }

    scream() {
        console.log(`${this.name} screams`)
    }
}

class FlyingMonster extends Monster {
    fly() {
        console.log(`${this.name} flies`)
    }
}

class SwimmingMonster extends Monster {
    swim() {
        console.log(`${this.name} swims`)
    }
}

const bear = new Monster('bear')
bear.scream()