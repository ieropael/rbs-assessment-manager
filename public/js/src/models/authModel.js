import Model from '../../helpers/model.js';

// AuthModel - объект для авторизации
class AuthModel extends Model {
  constructor() {
    super()
  }

  // вход в учетную запись
  login(user) {
    return this.post();
  }

  // выход из учетной записи
  logout() {
    return this.get();
  }

  // получение данных текущего пользователя (сотрудника)
  getCurrentEmployee() {
    return this.get();
  }

  // проверка авторизации
  check() {
    return this.post();
  }
}
const authModel = new AuthModel();
export default authModel
