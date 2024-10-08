/* eslint-disable no-unused-vars */
// TODO: write your code here
console.clear();

const MIN_LENGTH = 2;
const MAX_LENGTH = 10;
const TYPES = [
  "Bowerman",
  "Zombie",
  "Daemon",
  "Magician",
  "Swordsman",
  "Undead",
];

class Character {
  constructor(name, type) {
    if (name.length < MIN_LENGTH || name.length > MAX_LENGTH) {
      throw new Error(
        `Имя персонажа должно быть не менее ${MIN_LENGTH} и не более ${MAX_LENGTH}`
      );
    }

    if (!TYPES.includes(type)) {
      throw new Error(
        `Неверно введен тип персонажа, выберите одно из значений: ${TYPES.join(", ")}`
      );
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}

class Bowerman extends Character {
  constructor(name) {
    super(name, "Bowerman");
    this.attack = 25;
    this.defence = 25;
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie");
    this.attack = 40;
    this.defence = 10;
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
    this.attack = 10;
    this.defence = 40;
  }
}

class Magician extends Character {
  constructor(name) {
    super(name, "Magician");
    this.attack = 10;
    this.defence = 40;
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, "Swordsman");
    this.attack = 40;
    this.defence = 10;
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, "Undead");
    this.attack = 25;
    this.defence = 25;
  }
}
