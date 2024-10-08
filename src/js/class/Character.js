const MIN_LENGTH = 2;
const MAX_LENGTH = 10;
const TYPES = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

class Character {
  constructor(name, type) {
      this.name = name;
      this.type = type;
      this.level = 1;
      this.health = 100; // Устанавливаем начальное здоровье
      this.attack = 25; // Устанавливаем начальную атаку
      this.defence = 25; // Устанавливаем начальную защиту
  }

  levelUp() {
      if (this.health <= 0) {
          throw new Error("нельзя повысить левел умершего");
      }
      
      this.level += 1;
      this.attack *= 1.2; // Увеличиваем атаку на 20%
      this.defence *= 1.2; // Увеличиваем защиту на 20%
      this.health = 100; // Восстанавливаем здоровье
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
        this.health = 0; // Здоровье не должно быть меньше 0
    }
}

}

export default Character;
