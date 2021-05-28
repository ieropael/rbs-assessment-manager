import AssessmentWindowProcessView from './AssessmentProcessWindowView.js';
import assessmentModel from './../../../models/assessmentModel.js';
import employeeModel from './../../../models/employeeModel.js';
import candidateModel from './../../../models/candidateModel.js';

// компонент окна для проведения ассессмента
export class CAssessmentProcessWindow {
  constructor() {
    this.view       // объект для быстрого доступа к представлениям
  }

  // метод инициализации компонента
  init() {

  }

  // метод получения webix конфигурации компонента
  config() {
    return AssessmentWindowProcessView();
  }

  // метод инициализации обработчиков событий компонента
  attachEvents() {

  }

  // функция обновления таблиц
  refreshTable() {

  }
}
