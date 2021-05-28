import { AssessmentTabView } from './AssessmentTabView.js';
import { CAssessmentWindow } from './assessmentWindow/CAssessmentWindow.js';
import { CAssessmentProcessWindow } from './assessmentProcessWindow/CAssessmentProcessWindow.js';
import assessmentModel from '../../models/assessmentModel.js';
import { Assessment } from '../../models/entities/assessment.js';

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

  // метод получения webix-конфигурации компонента
  config() {
    webix.ui(this.window.config());
    return AssessmentTabView();
  }

  // метод инициализации обработчиков событий компонента
  attachEvents() {
    // инициализация используемых представлений
    this.view = {
      datatable: $$('assessmentTabDatatable'),
      btns: {
        createBtn: $$('assessmenttab-add-btn'),
        updateBtn: $$('assessmenttab-edit-btn'),
        deleteBtn: $$('assessmenttab-remove-btn'),
      }
    }

    // создание ассессмента
    this.view.btns.createBtn.attachEvent('onItemClick', () => {
      this.createAssessment();
    })
  }

  // функция обновления таблицы ассессментов
  refreshTable() {

  }

  // функция создания ассессмента
  createAssessment() {
    this.window.show();
  }

  // функция изменения ассессмента
  updateAssessment() {

  }

  // функция удаления ассессмента
  deleteAssessment() {

  }
}
