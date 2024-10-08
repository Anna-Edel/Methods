import Character from '../class/Character'; // Убедитесь, что путь к файлу правильный

test("levelUp increases level and restores health", () => {
    const character = new Character('Hero', 'Bowerman');
    character.health = 100; // Устанавливаем начальное здоровье
    character.attack = 25; // Начальная атака
    character.defence = 25; // Начальная защита
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.health).toBe(100);
    expect(character.attack).toBe(30); // 25 + 20%
    expect(character.defence).toBe(30); // 25 + 20%
});

test("levelUp throws error if health is 0", () => {
    const character = new Character('Hero', 'Bowerman');
    character.health = 0; // Устанавливаем здоровье в 0
    expect(() => character.levelUp()).toThrow('нельзя повысить левел умершего');
});

test("damage reduces health correctly", () => {
    const character = new Character('Hero', 'Bowerman');
    character.health = 100; // Устанавливаем здоровье в 100
    character.attack = 25; // Начальная атака
    character.defence = 25; // Начальная защита
    character.damage(10); // Урон
    expect(character.health).toBe(92.5); // Измените это значение
});


test("damage does not reduce health below 0", () => {
    const character = new Character('Hero', 'Bowerman');
    character.health = 5; // Устанавливаем здоровье в 5
    character.damage(10); // Урон
    expect(character.health).toBe(0); // Здоровье не должно быть меньше 0
});
