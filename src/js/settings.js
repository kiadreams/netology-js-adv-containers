export default class Settings {

  constructor() {
    this._settings = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy'],]);
    Object.freeze(this);
  }

  set theme(theme) {
    const themes = ['light', 'gray', 'dark'];
    if (themes.includes(theme)) {
      this._settings.set('theme', theme);
    } else {
      throw new Error('Неправильно указана тема');
    }
  }

  set music(music) {
    const setOfMusic = ['pop', 'rock', 'chillout', 'off', 'trance'];
    if (setOfMusic.includes(music)) {
      this._settings.set('music', music);
    } else {
      throw new Error('Не правильно указана музыкальная композиция');
    }
  }

  set difficulty(difficulty) {
    const difficulties = ['normal', 'hard', 'nightmare', 'easy'];
    if (difficulties.includes(difficulty)) {
      this._settings.set('difficulty', difficulty);
    } else {
      throw new Error('Не правильно указана музыкальная композиция');
    }
  }

  get settings() {
    return this._settings;
  }
}
