import Team from "../team.js";


const character_1 = {name: 'Ivan', lastName: 'Kish'};
const character_2 = {name: 'Vova', lastName: 'Serg'};

test('Testing method "add" of Team\'s class: add an existing character.', () => {
  const team = new Team();

  function addExistingCharacter() {
    team.add(character_1);
    team.add(character_1);
  }

  expect(addExistingCharacter).toThrow('персонаж уже в командe');
});

test('Testing "add" and "toArray" methods of Team\'s class: add a non-existing character.', () => {
  const team = new Team();
  team.add(character_1);
  expect(team.toArray()).toEqual([character_1]);
});

test('Testing "addAll" methods of Team\'s class', () => {
  const team = new Team();
  team.addAll(character_1, character_2);
  expect(team.toArray()).toEqual([character_1, character_2]);
});
