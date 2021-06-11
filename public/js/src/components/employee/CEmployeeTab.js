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
    this.window = new CEmployeeWindow();
  }

  // метод получения webix-конфигурации компонента
  config() {
    webix.ui(this.window.config());
    return EmployeeTabView();
  }

  // метод инициализации обработчиков событий компонента
  attachEvents() {
    // инициализация используемых представлений
    this.view = {
      datatable: $$('employees'),
    };
    this.window.attachEvents();
    // создание сотрудника
    this.view.datatable.on_click['wxi-plus-circle'] = () => {
      this.createEmployee();
    };
  }

  // функция обновления таблицы сотрудников
  refreshTable() {

  }

  // функция создания сотрудника
  createEmployee() {
    this.window.show();
  }

  // функция изменения сотрудника
  updateEmployee() {

  }

  // функция удаления сотрудника
  deleteEmployee() {

  }
}
