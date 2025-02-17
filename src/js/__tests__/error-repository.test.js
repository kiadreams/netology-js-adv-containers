import ErrorRepository from "../error-repository.js";


test.each([
  ['add an existing code', 1, 'Основная ошибка приложения'],
  ['add a non-existing code', 5, 'Unknown error'],
])('Testing method "translate" of ErrorRepository\'s class: %s.', (test, code, expected) => {
  const repo = new ErrorRepository();
  expect(repo.translate(code)).toBe(expected);
});