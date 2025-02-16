export default class ErrorRepository {
  constructor() {
    this.errRepo = new Map([
      [1, 'Основная ошибка приложения'],
      [2, 'Вторая ошибка приложения'],
      [3, 'Третья ошибка приложения'],
    ]);
  }

  translate(code) {
    const errorText = this.errRepo.get(code);
    return errorText === undefined ? 'Unknown error' : errorText;
  }
}
