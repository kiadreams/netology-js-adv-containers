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
    for (const character of characters) {
      this.memebers.add(character);
    }
  }

  toArray() {
    return Array.from(this.memebers);
  }
}
