import authModel from '../../models/authModel.js';
import MainWindowView from './MainWindowView.js';
import { User } from './../../models/entities/user.js';
import { checkAuth } from '../../../helpers/checkAuth.js';

// компонент окна авторизации
export class CMainWindow {
  constructor() {
    this.view       // объект для быстрого доступа к представлениям
  }

  // метод инициализации компонента
  init(onLogin) {
    this.onLogin = onLogin
  }

  // метод получения webix конфигурации компонента
  config() {
    return MainWindowView();
  }

  // метод инициализации обработчиков событий компонента
  attachEvents() {

  }

  // метод переключения состояния окна входа в приложение
  // результат выполнения функции зависит от авторизованности пользователя
  switch() {

  }

  // метод отображения окна
  show() {

  }

  // метод сокрытия окна
  hide() {

  }

  // функция валидации формы
  validate() {

  }
}
