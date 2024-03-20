import Character from '../Character';
import Team from '../Team';

test('Проверка Character', () => {
  const char = new Character("Лучник", "Bowman", 20, 1, 17, 33);
  const name = 'Лучник';
  const type = 'Bowman';
  const health = 20;
  const level = 1;
  const attack = 17;
  const defence = 33;

  expect(char.name).toBe(name);
  expect(char.type).toBe(type);
  expect(char.health).toBe(health);
  expect(char.level).toBe(level);
  expect(char.attack).toBe(attack);
  expect(char.defence).toBe(defence);
});

test('Проверка Team', () => {
  const team = new Team();
  expect(team.chars).toStrictEqual([]);
})

test('Проверка итератора Team', () => {
  let a = new Character("Лучник3", "Bowman", 55, 2, 20, 10);
  let b = new Character("Лучник", "Bowman", 20, 1, 17, 33);
  let c = new Character("Мечник", "Swordsman", 70, 3, 44, 30);
  let d = new Character("Зомби", "Zombie", 33, 1, 10, 10);

  const list = [a, b, c, d]

  const team = new Team();
  team.chars = [a, b, c, d];

  let index = 0
  for (let char of team) {
    expect(char).toEqual(list[index]);
    expect(char).toBeInstanceOf(Character);
    index++;
  }


})