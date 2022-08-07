// no classes.
// define functions that a object can or may perform
// composition is the process of combining the functionality of two or more objects

function swimmer({ name }) {
    return {
        swim: () => console.log(`${name} swam`)
    }
}

function attackerAndWalker({ name }) {
    return {
        attack: () => console.log(`${name} attacked`),
        walk: () => console.log(`${name} walked`)
    }
}

function flyer({ name }) {
    return {
        fly: () => console.log(`${name} flew`)
    }
}

function swimmingMonsterCreator(name) {
    const monster = { name: name }
    return {
        ...monster,
        ...swimmer(monster),
        ...attackerAndWalker(monster),
    }
}

function flyingSwimmingMonsterCreator(name) {
    const monster = { name: name }
    return {
        ...monster,
        ...swimmer(monster),
        ...attackerAndWalker(monster),
        ...flyer(monster)
    }
}

const goose = flyingSwimmingMonsterCreator('goose')
goose.swim()
goose.fly()
goose.attack()
goose.walk()