import EmployeeWindowView from './EmployeeWindowView.js'
import employeeModel from './../../../models/employeeModel.js'

// компонент окна для работы с сущностью сотрудника
export class CEmployeeWindow {
  constructor() {
    this.view;       // объект для быстрого доступа к представлениям
  }

  // метод инициализации компонента
  init() {

  }

  // метод получения webix-конфигурации компонента
  config() {
    return EmployeeWindowView();
  }

  // метод инициализации обработчиков событий компонента
  attachEvents() {
    this.view = {
      window: $$('employeeWindow'),
    }
  }

  // метод вызова модального окна
  switch() {

  }

  // метод отображения окна
  show() {
    this.view.window.show();
  }

  // метод сокрытия окна
  hide() {

  }

  // метод получения сущности из формы окна
  fetch() {

  }

  // метод размещения сущности в форме окна
  parse() {

  }

  // функция валидации формы
  validate() {

  }
}
