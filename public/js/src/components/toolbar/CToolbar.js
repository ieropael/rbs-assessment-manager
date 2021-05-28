import ToolbarView from './ToolbarView.js'
import authModel from '../../models/authModel.js'

// класс компонента информации о пользователе
export class CToolbar {
  constructor() {
    this.view                           // быстрый доступ к представлениям компонента
    this.currentEmployee = undefined    // сотрудник, соответствующий текущему пользователю
    this.onLogout                       // callback функция при логауте пользователя
  }

  // метод инициализации компонента
  init() {

  }

  // метод получения webix конфигурации компонента
  config() {

  }

  // функция обновления информации о текущем пользователе
  refreshEmployeeLabel() {

  }

  // метод инициализации обработчиков событий компонента
  attachEvents() {

  }
}
