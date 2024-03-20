import Character from './Character';
import Team from './Team';

let a = new Character("Лучник3", "Bowman", 55, 2, 20, 10);
let b = new Character("Лучник", "Bowman", 20, 1, 17, 33);
let c = new Character("Мечник", "Swordsman", 70, 3, 44, 30);
let d = new Character("Зомби", "Zombie", 33, 1, 10, 10);

const team = new Team();
team.chars = [a, b, c, d];

for (let char of team) {
  console.log(char);
}