import { EmployeeTabView } from './EmployeeTabView.js'
import { CEmployeeWindow } from './employeeWindow/CEmployeeWindow.js'
import employeeModel from '../../models/employeeModel.js';
import { Employee } from '../../models/entities/employee.js';

// класс таба "Сотрудники"
export class CEmployeeTab {
  constructor() {
    this.view                   // объект для быстрого доступа к представлениям
    this.window                 // экземпляр окна для работы с сотрудниками
  }

  // метод инициализации компонента
  init() {

  }

  // метод получения webix-конфигурации компонента
  config() {
    return EmployeeTabView();
  }

  // метод инициализации обработчиков событий компонента
  attachEvents() {

  }

  // функция обновления таблицы сотрудников
  refreshTable() {

  }

  // функция создания сотрудника
  createCandidate() {

  }

  // функция изменения сотрудника
  updateCandidate() {

  }

  // функция удаления сотрудника
  deleteEmployee() {

  }
}
