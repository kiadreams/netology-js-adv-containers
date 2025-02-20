export default class Team {
  constructor() {
    this.memebers = new Set();
  }

  add(character) {
    if (this.memebers.has(character)) {
      throw new Error('Данный персонаж уже в командe!');
    }
    this.memebers.add(character);
  }

  addAll(...characters) {
    characters.forEach(character => this.add(character));
  }

  toArray() {
    return Array.from(this.memebers);
  }
}
