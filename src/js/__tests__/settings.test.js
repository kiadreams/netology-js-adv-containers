import Settings from "../settings.js";


test('Testing "get settings" method of Settings\' class.', () => {
  const settings = new Settings();
  const expected = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy'],]);
  expect(settings.settings).toEqual(expected);
});


test('Testing "set theme" method of Settings\' class: correct theme.', () => {
  const settings = new Settings();
  settings.theme = 'light';
  const expected = new Map([['theme', 'light'], ['music', 'trance'], ['difficulty', 'easy'],]);
  expect(settings.settings).toEqual(expected);
});

test('Testing "set theme" method of Settings\' class: a non-existent theme.', () => {
  const settings = new Settings();
  expect(() => {settings.theme = 'Simple'}).toThrow('Неправильно указана тема');
});


test('Testing "set music" method of Settings\' class: correct music.', () => {
  const settings = new Settings();
  settings.music = 'pop';
  const expected = new Map([['theme', 'dark'], ['music', 'pop'], ['difficulty', 'easy'],]);
  expect(settings.settings).toEqual(expected);
});

test('Testing "set theme" method of Settings\' class: a non-existent music.', () => {
  const settings = new Settings();
  expect(() => {settings.music = 'Simple'}).toThrow('Не правильно указана музыкальная композиция');
});


test('Testing "set music" method of Settings\' class: correct difficulty.', () => {
  const settings = new Settings();
  settings.difficulty = 'normal';
  const expected = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'normal'],]);
  expect(settings.settings).toEqual(expected);
});

test('Testing "set theme" method of Settings\' class: a non-existent difficulty.', () => {
  const settings = new Settings();
  expect(() => {settings.difficulty = 'Simple'}).toThrow('Не правильно указана сложность');
});