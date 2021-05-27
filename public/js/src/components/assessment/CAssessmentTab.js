import { AssessmentTabView } from './AssessmentTabView.js';
import { CAssessmentWindow } from './assessmentWindow/CAssessmentWindow.js';
import { CAssessmentProcessWindow } from './assessmentProcessWindow/CAssessmentProcessWindow.js';
import assessmentModel from '../../models/assessmentModel.js';
import { Assessement } from '../../models/entities/assessment.js';

// класс таба "Ассессменты"
export class CAssessmentTab {
  constructor() {
    this.view                   // объект для быстрого доступа к представлениям
    this.window                 // экземпляр окна для работы с ассессментами
    this.processWindow          // экземпляр окна для проведения ассессмента
  }

  // метод инициализации компонента
  init() {

  }

  // метод получения webix конфигурации компонента
  config() {

  }

  // метод инициализации обработчиков событий компонента
  attachEvents() {

  }

  // функция обновления таблицы ассессментов
  refreshTable() {

  }

  // функция создания ассессмента
  createAssessment() {

  }

  // функция изменения ассессмента
  updateAssessment() {

  }

  // функция удаления ассессмента
  deleteAssessment() {

  }
}
